
import { useEffect, useState } from "react";
import { Theme } from "@mui/material/styles";


import CustomBox from "components/Atomics/CustomBox";
import CustomButton from "components/Atomics/CustomButton";
import CustomTypography from "components/Atomics/CustomTypography";
import CustomInput from "components/Atomics/CustomInput";

// MUI examples components
import DashboardLayout from "components/Molecules/LayoutContainers/DashboardLayout";
import DashboardNavbar from "components/Molecules/Navbars/DashboardNavbar";
import Footer from "components/Molecules/Footer";

// MUI context
import { useMaterialUIController } from "context";
import Card from "./components/Card";

import meeting from "assets/images/meeting.jpg";
import { ContentServiceClient } from "pb/ContentServiceClientPb";
import { Content, ContentCategory, ContentSearchRequest, ContentTool, ContentUserIdRequest } from "pb/content_pb";
import { useRecoilValue } from "recoil";
import { authrizedUserAtom } from "context/userAtom";
import { Link } from "react-router-dom";
import Autocomplete from "@mui/material/Autocomplete";

function PurchasedList(): JSX.Element {
  const user = useRecoilValue(authrizedUserAtom)

  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  // get content
  const [contentList, setContentList] = useState<Content.AsObject[]>([]);

  useEffect(() => {
    const getContentList = async () => {
      const client = new ContentServiceClient(process.env.REACT_APP_ENVOY_URL);
      const req = new ContentSearchRequest();
      req.setSortBy(ContentSearchRequest.SortBy.NEWEST);
      client.getLikedListByUser(req, {}, (err, res) => {
        if (err) {
          console.log(err);
        } else {
          setContentList(res.toObject().contentList);
        }
      });
    };
    getContentList();

  }, []);

  // search
  const [keyword, setKeyword] = useState<string>("");
  // const [sort, setSort] = useState<string>("");
  const [toolList, setToolList] = useState<number[]>([]);
  const [categoryList, setCategoryList] = useState<number[]>([]);
  // const [subCategoryList, setSubCategoryList] = useState<number[]>([]);
  // const [price, setPrice] = useState<number[]>([]);

  const [toolOptions, setToolOptions] = useState<{ label: string, value: string }[]>([]);
  const [categoryOptions, setCategoryOptions] = useState<{ label: string, value: string }[]>([]);
  // const [subCategoryOptions, setSubCategoryOptions] = useState<{ label: string, value: string }[]>([]);

  useEffect(() => {
    Object.entries(ContentTool.Tool).map((option) =>
      toolOptions.push({ label: option[0].toString(), value: option[1].toString() })
    );

    Object.entries(ContentCategory.Category).map((option) =>
      categoryOptions.push({ label: option[0].toString(), value: option[1].toString() })
    );

  }, []);

  const handleSearch = () => {
    const client = new ContentServiceClient(process.env.REACT_APP_ENVOY_URL);
    const req = new ContentSearchRequest();
    req.setKeyword(keyword);
    req.setToolList(toolList);
    req.setCategoryList(categoryList);
    // req.setSubCategoryList(subCategoryList);
    req.setSortBy(ContentSearchRequest.SortBy.NEWEST);

    client.getPurchasedListByUser(req, {}, (err, res) => {
      if (err) {
        console.log(err);
      } else {
        setContentList(res.toObject().contentList);
      }
    });
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <CustomBox >
        <CustomBox m={2}>
          <CustomBox display="flex" justifyContent="left" m={2}>
            {/* <Header setKeyword={setKeyword} setToolList={setToolList} setCategoryList={setCategoryList} /> */}
            <CustomInput
              placeholder="Search Content"
              inputProps={{
                "aria-label": "search",
              }}
              fullWidth={true}
              onChange={(event: { preventDefault: () => void; target: { value: string; }; }) => {
                event.preventDefault();
                setKeyword(event.target.value);
              }}
            />
            <CustomBox mb={2} ml={2} display="inline-block" >
              <CustomButton
                variant="contained"
                onClick={handleSearch}
              >
                Search
              </CustomButton>
            </CustomBox>
          </CustomBox>
          {/* <CustomBox mb={3} m={2}>
            <CustomBox mb={2} display="inline-block">
              <CustomTypography
                multiple
                component="label"
                variant="button"
                fontWeight="regular"
                color="text"
                textTransform="capitalize"
              >
                Sort By
              </CustomTypography>
            </CustomBox>
            <Autocomplete
              disableClearable={true}
              defaultValue={"Hottest"}
              options={["Hottest", "Top", "Newest"]}
              renderInput={(params) => <CustomInput{...params} variant="standard" />}
              onChange={(event, value) => {
                event.preventDefault();
                setSort(value);
              }}
            />
          </CustomBox> */}
          <CustomBox mb={3} m={2}>
            <CustomBox display="inline-block">
              <CustomTypography
                component="label"
                variant="button"
                fontWeight="regular"
                color="text"
                textTransform="capitalize"
              >
                Tool
              </CustomTypography>
            </CustomBox>
            <Autocomplete
              multiple
              disableClearable={true}
              defaultValue={[]}
              options={toolOptions}
              renderInput={(params) => <CustomInput {...params} variant="standard" />}
              onChange={(event, value) => {
                event.preventDefault();
                setToolList(value.map((tool) => typeof tool === "string" ? parseInt(tool) : parseInt(tool.value)));
              }}
            />
          </CustomBox>
          <CustomBox mb={3} m={2}>
            <CustomBox mb={2} display="inline-block">
              <CustomTypography
                multiple
                component="label"
                variant="button"
                fontWeight="regular"
                color="text"
                textTransform="capitalize"
              >
                Category
              </CustomTypography>
            </CustomBox>
            <Autocomplete
              multiple
              disableClearable={true}
              defaultValue={[]}
              options={categoryOptions}
              renderInput={(params) => <CustomInput{...params} variant="standard" />}
              onChange={(event, value) => {
                event.preventDefault();
                setCategoryList(value.map((category) => typeof category === "string" ? parseInt(category) : parseInt(category.value)));
              }}
            />
          </CustomBox>
        </CustomBox>
        <CustomBox
          position="relative"
          my={4}
          sx={({
            palette: { light, background },
            functions: { pxToRem },
            borders: { borderRadius },
          }: Theme | any) => ({
            "& .react-kanban-column": {
              backgroundColor: darkMode ? background.card : light.main,
              width: pxToRem(450),
              margin: `0 ${pxToRem(10)}`,
              padding: pxToRem(20),
              borderRadius: borderRadius.lg,
            },
          })}
        >
          <CustomBox pb={3}>
            {contentList.map((content) => (
              <Link to={`/content?uuid=${content.uuid}`}>
                <Card
                  image={meeting}
                  // image={content.getThumbnail()}
                  catgories={content.categoriesList}
                  tools={content.toolsList}
                  title={content.title}
                  price={content.price}
                  like={content.likeCount}
                  star={content.starRate}
                // review={content.getReviewList()}
                />
              </Link>
            ))}
          </CustomBox>
        </CustomBox>
      </CustomBox>
      < Footer />
    </DashboardLayout>
  );
}

export default PurchasedList;
