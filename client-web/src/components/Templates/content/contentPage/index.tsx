
// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";


import CustomBox from "components/Atomics/CustomBox";
import CustomTypography from "components/Atomics/CustomTypography";

// MUI examples components
import DashboardLayout from "components/Molecules/LayoutContainers/DashboardLayout";
import DashboardNavbar from "components/Molecules/Navbars/DashboardNavbar";
import Footer from "components/Molecules/Footer";
import DataTable from "components/Molecules/Tables/DataTable";

// ContentPage page components

// Data
import ContentImages from "components/Templates/content/contentPage/components/ContentImages";
// import ContentInfo from "layouts/contentPage/components/ContentInfo";
import { useEffect, useState } from "react";
import { Content, ContentIdAndUserIdRequest, ContentIdRequest, ContentList, ContentUuidAndUserIdRequest, ContentUuidRequest } from "pb/content_pb";
import { ContentServiceClient } from "pb/ContentServiceClientPb";

import CustomProgress from "components/Atomics/CustomProgress";

// ContentPage page components
import ContentCell from "./components/ContentCell";
import ReviewCell from "./components/ReviewCell";
import DefaultCell from "./components/DefaultCell";

// Images
import blackChair from "assets/images/black-chair.jpeg";
import { Icon, IconButton } from "@mui/material";
import { useRecoilValue } from "recoil";
import { authrizedUserAtom } from "context/userAtom";
import { Link } from "react-router-dom";
import CustomBadge from "components/Atomics/CustomBadge";
import CustomButton from "components/Atomics/CustomButton";

function ContentPage(): JSX.Element {
  const user = useRecoilValue(authrizedUserAtom)
  const [content, setContent] = useState<Content.AsObject | null>(null)
  const [asp, setAsp] = useState<string>("")
  const [uuid, setUuid] = useState<string>("")

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const asp = urlParams.get("invite");
    setAsp(asp || "")

    const contentUuid = urlParams.get("uuid");
    setUuid(contentUuid || "")
    const client = new ContentServiceClient(process.env.REACT_APP_ENVOY_URL);
    const req = new ContentUuidAndUserIdRequest();
    req.setUuid(contentUuid);
    req.setUserId(user?.id);
    client.getByUuidAndUser(req, {}, (err, res) => {
      if (err) {
        console.log(err);
      } else {
        setContent(res.toObject());

        if (res.toObject().isLiked) {
          setIsLiked(true);
        }
      }
    });
  }, [user]);

  // other product
  const [otehrContents, setOtherContents] = useState<any>(null);

  useEffect(() => {
    const client = new ContentServiceClient(process.env.REACT_APP_ENVOY_URL);
    const reqForOtherContent = new ContentIdRequest();
    reqForOtherContent.setId(content?.id);
    client.getRecommendedListByContent(reqForOtherContent, {}, (err, res) => {
      if (err) {
        console.log(err);
      } else {
        const otehrContent = {
          columns: [
            { Header: "product", accessor: "product", width: "40%" },
            { Header: "price", accessor: "price", width: "10%" },
            { Header: "review", accessor: "review", align: "center" },
            { Header: "like", accessor: "like", align: "center" },
          ],
          rows: res?.toObject().contentList.map((otherContent: Content.AsObject) => {
            return {
              // product: <ContentCell image={blackChair} name={content?.title} />,
              // price: <DefaultCell>${content?.price}</DefaultCell>,
              // review: <ReviewCell rating={content?.starRate / 10} />,
              // like: <DefaultCell>{content?.likeCount}</DefaultCell>,
              // link: <Icon>arrow_forward_ios</Icon>,
              product:
                <CustomButton onClick={() => { window.location.href = `/content?uuid=${otherContent?.uuid}` }}>
                  <ContentCell
                    image={blackChair}
                    name={otherContent?.title}
                  />
                </CustomButton>,
              price: <CustomButton onClick={() => { window.location.href = `/content?uuid=${otherContent?.uuid}` }}><DefaultCell>${otherContent?.price}</DefaultCell></CustomButton>,
              review: <CustomButton onClick={() => { window.location.href = `/content?uuid=${otherContent?.uuid}` }}><ReviewCell rating={otherContent?.starRate / 10} /></CustomButton>,
              like: <CustomButton onClick={() => { window.location.href = `/content?uuid=${otherContent?.uuid}` }}><DefaultCell>{otherContent?.likeCount}</DefaultCell></CustomButton>,
            }
          }
          )
        };
        setOtherContents(otehrContent);
      }
    });
  }, [content]);

  const [isLiked, setIsLiked] = useState<boolean>(false);

  const handleLike = () => {
    const client = new ContentServiceClient(process.env.REACT_APP_ENVOY_URL);
    const req = new ContentIdAndUserIdRequest
    req.setId(content?.id);
    req.setUserId(user?.id);
    client.createLike(req, {}, (err, res) => {
      if (err) {
        console.log(err);
      } else {
        // setIsLiked(true);
        setContent({ ...content, likeCount: content?.likeCount + 1 })
      }
    });
  };

  const handleNotLike = () => {
    const client = new ContentServiceClient(process.env.REACT_APP_ENVOY_URL);
    const req = new ContentIdAndUserIdRequest();
    req.setId(content?.id);
    req.setUserId(user?.id);

    client.deleteLike(req, {}, (err, res) => {
      if (err) {
        console.log(err);
      } else {
        // setIsLiked(false);
        setContent({ ...content, likeCount: content?.likeCount - 1 })
      }
    });
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <CustomBox py={3}>
        <Card sx={{ overflow: "visible" }}>
          <CustomBox p={3}>
            <CustomBox mb={3}>
              <CustomTypography variant="h5" fontWeight="medium">
                Content Details
              </CustomTypography>
            </CustomBox>

            <Grid container spacing={3}>
              <Grid item xs={12} lg={6} xl={5}>
                <ContentImages content={content} />
              </Grid>
              <Grid item xs={12} lg={5} sx={{ mx: "auto" }}>
                <CustomBox>
                  <CustomBox mb={1}>
                    <CustomTypography variant="h3" fontWeight="bold">
                      {content?.title}
                    </CustomTypography>
                  </CustomBox>
                  <ReviewCell rating={content?.starRate / 10} />
                  <CustomBox mt={1}>
                    <CustomTypography variant="h6" fontWeight="medium">
                      Price
                    </CustomTypography>
                  </CustomBox>
                  <CustomBox mb={1}>
                    <CustomTypography variant="h5" fontWeight="medium">
                      ${content?.price}
                    </CustomTypography>
                  </CustomBox>
                  <CustomBadge variant="contained" color="success" badgeContent="in stock" container />
                  <CustomBox mt={3} mb={1} ml={0.5}>
                    <CustomTypography variant="button" fontWeight="regular" color="text">
                      Description
                    </CustomTypography>
                  </CustomBox>
                  <CustomBox m={0} pl={4} mb={2} fontSize="1.25rem" lineHeight={1}>
                    <CustomTypography variant="button" color="text" fontWeight="regular" verticalAlign="middle">
                      {content?.description}
                    </CustomTypography>
                  </CustomBox>
                  <CustomBox mt={3}>
                    <Grid item xs={12} lg={5} container>
                      <Link to={`/content/order?uuid=${content?.uuid}&invite=${asp}`}>
                        <CustomButton
                          variant="gradient"
                          color="info"
                          fullWidth
                        >
                          Buy Now
                        </CustomButton>
                      </Link>
                      {/* <IconButton>
            <Icon>shopping_cart</Icon>
          </IconButton> */}
                      <IconButton>
                        {isLiked ? (
                          <Icon
                            color="error"
                            // fontSize="large"
                            sx={{
                              "&:hover": {
                                color: "primary.main",
                              },
                            }}
                            onClick={() => {
                              setIsLiked(false);
                              handleNotLike()
                            }}
                          >
                            favorite
                          </Icon>
                        ) : (
                          <Icon
                            color="error"
                            // fontSize="large"
                            sx={{
                              "&:hover": {
                                color: "primary.main",
                              },
                            }}
                              onClick={() => {
                                setIsLiked(true);
                                handleLike()
                            }}
                          >
                            favorite_border
                          </Icon>
                        )}
                      </IconButton>
                    </Grid>
                  </CustomBox>
                </CustomBox >
              </Grid>
            </Grid>
            <CustomBox mt={8} mb={2}>
              <CustomBox mb={1} ml={2}>
                <CustomTypography variant="h5" fontWeight="medium">
                  Other Contents
                </CustomTypography>
              </CustomBox>
              {otehrContents ?
                <DataTable
                  table={otehrContents}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  isSorted={false}
                />
                : <CustomProgress value={0} />}
            </CustomBox>
          </CustomBox>
        </Card>
      </CustomBox>
      <Footer />
    </DashboardLayout>
  );
}

export default ContentPage;
