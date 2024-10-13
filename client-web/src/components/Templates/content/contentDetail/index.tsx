
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

import ContentImages from "components/Templates/content/contentDetail/components/ContentImages";
import ContentInfo from "components/Templates/content/contentDetail/components/ContentInfo";
import ContentCell from "components/Templates/content/contentDetail/components/ContentCell";
import DefaultCell from "components/Templates/content/contentDetail/components/DefaultCell";
import ReviewCell from "components/Templates/content/contentDetail/components/ReviewCell";
import { useEffect, useState } from "react";
import { Content, ContentIdRequest, ContentUuidRequest } from "pb/content_pb";
import { ContentServiceClient } from "pb/ContentServiceClientPb";

import CustomProgress from "components/Atomics/CustomProgress";


// Images
import blackChair from "assets/images/black-chair.jpeg";
import { Link } from "react-router-dom";

function ContentDetail(): JSX.Element {
  const [content, setContent] = useState<Content.AsObject | null>(null)
  const [asp, setAsp] = useState<string>("")

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const contentUuid = urlParams.get("uuid");

    const client = new ContentServiceClient(process.env.REACT_APP_ENVOY_URL);
    const req = new ContentUuidRequest();
    req.setUuid(contentUuid);
    client.getByUuid(req, {}, (err, res) => {
      if (err) {
        console.log(err);
      } else {
        setContent(res.toObject());
      }
    });
  }, [content]);

  // other product
  // const user = useRecoilValue(authrizedUserAtom)
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
          rows: res?.toObject().contentList.map((content: Content.AsObject) => {
            return {
              // product: <ContentCell image={blackChair} name={content?.title} />,
              // price: <DefaultCell>${content?.price}</DefaultCell>,
              // review: <ReviewCell rating={content?.starRate / 10} />,
              // like: <DefaultCell>{content?.likeCount}</DefaultCell>,
              // link: <Icon>arrow_forward_ios</Icon>,
              product:
                <Link to={`/content?uuid=${content?.uuid}`}>
                  <ContentCell
                    image={blackChair}
                    name={content?.title}
                  />
                </Link>,
              price: <Link to={`/content?uuid=${content?.uuid}`}><DefaultCell>${content?.price}</DefaultCell></Link>,
              review: <Link to={`/content?uuid=${content?.uuid}`}><ReviewCell rating={content?.starRate / 10} /></Link>,
              like: <Link to={`/content?uuid=${content?.uuid}`}><DefaultCell>{content?.likeCount}</DefaultCell></Link>,
            }
          }
          )
        };
        setOtherContents(otehrContent);
      }
    });
  }, [content]);

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
                <ContentInfo content={content} asp={asp} />
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

export default ContentDetail;
