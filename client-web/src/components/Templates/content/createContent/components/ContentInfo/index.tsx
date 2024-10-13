

import { ChangeEvent, useEffect, useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Autocomplete from "@mui/material/Autocomplete";


import CustomBox from "components/Atomics/CustomBox";
import CustomTypography from "components/Atomics/CustomTypography";
import CustomInput from "components/Atomics/CustomInput";

// NewContent page components
import FormField from "../FormField";
import { TextField } from "@mui/material";
import { ContentCategory, ContentTool } from "pb/content_pb";

function ContentInfo(
  props: {
    title: string;
    setTitle: (title: string) => void;
    description: string;
    setDescription: (description: string) => void,
    toolList: number[],
    setToolList: (toolList: number[]) => void,
    categoryList: number[],
    setCategoryList: (categoryList: number[]) => void;
    // subCategoryList: number[],
    // setSubCategoryList: (subCategoryList: string[]) => void;
    price: number;
    setPrice: (price: number) => void;
    // currency: number;
    // setCurrency: (currency: number) => void;
    aspRate: number;
    setAspRate: (aspRate: number) => void;
  },
): JSX.Element {
  // const [editorValue, setEditorValue] = useState<string>(
  //   "<p>Some initial <strong>bold</strong> text</p><br><br><br><br>"
  // );

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

  return (
    <CustomBox>
      <CustomTypography variant="h5">Content Information</CustomTypography>
      <CustomBox mt={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField
              type="text"
              label={props.title ? "Title" : "Title*"}
              defaultValue={props.title}
              fullWidth
              onChange={(event: { preventDefault: () => void; target: { value: string; }; }) => {
                event.preventDefault();
                props.setTitle(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              type="text"
              label={"Price*"}
              defaultValue={props.price.toString()}
              fullWidth
              onChange={(e: { preventDefault: () => void; target: { value: string; }; }) => {
                e.preventDefault();
                e.target.value = e.target.value.replace(/[^0-9.]/g, "");
                props.setPrice(parseFloat(e.target.value));
              }}
            />
          </Grid>
        </Grid>
      </CustomBox>
      <CustomBox mt={2}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <CustomBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
              <CustomTypography component="label" variant="button" fontWeight="regular" color="text">
                Description&nbsp;&nbsp;
                <CustomTypography variant="caption" color="text">
                  (optional)
                </CustomTypography>
              </CustomTypography>
            </CustomBox>
            <TextField
              defaultValue={props.description}
              fullWidth
              multiline
              rows={12}
              variant="outlined"
              onChange={(event: { preventDefault: () => void; target: { value: string; }; }) => {
                event.preventDefault();
                props.setDescription(event.target.value);
              }}
            >
            </TextField>
            {/* <CustomEditor value={editorValue} onChange={setEditorValue} /> */}
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomBox mb={3}>
              <CustomBox mb={3}>
                <CustomBox mb={2} display="inline-block">
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
                    props.setToolList(value.map((tool) => typeof tool === "string" ? parseInt(tool) : parseInt(tool.value)));
                  }}
                />
              </CustomBox>
              <CustomBox mb={3}>
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
                    props.setCategoryList(value.map((category) => typeof category === "string" ? parseInt(category) : parseInt(category.value)));
                  }}
                />
              </CustomBox>
              <CustomBox mb={2} display="inline-block">
                <CustomTypography
                  component="label"
                  variant="button"
                  fontWeight="regular"
                  color="text"
                  textTransform="capitalize"
                >
                  affiliate commission(%)
                </CustomTypography>
              </CustomBox>
              <Autocomplete
                defaultValue="50"
                options={["0", "10", "20", "30", "40", "50", "60", "70", "80", "90", "100"]}
                renderInput={(params) => <CustomInput {...params} variant="standard" />}
                onChange={(e, value) => {
                  e.preventDefault()
                  props.setAspRate(parseFloat(value))
                }
                }
              />
            </CustomBox>
            {/* <CustomBox mb={2} display="inline-block">
              <CustomTypography
                component="label"
                variant="button"
                fontWeight="regular"
                color="text"
                textTransform="capitalize"
              >
                SubCategory
              </CustomTypography>
            </CustomBox>
            <Autocomplete
              multiple
              // defaultValue={["Clothing"]}
              options={subCategoryOptions.map((option) => option.label)}
              renderInput={(params) => <CustomInput {...params} variant="standard" />}
            // onChange={handleSubCategoryChange}
            /> */}
          </Grid>
        </Grid>
      </CustomBox>
    </CustomBox >
  );
}

export default ContentInfo;
