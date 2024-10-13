// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Autocomplete from "@mui/material/Autocomplete";


import CustomBox from "components/Atomics/CustomBox";
import CustomTypography from "components/Atomics/CustomTypography";
import CustomInput from "components/Atomics/CustomInput";

// NewContent page components
import FormField from "components/Templates/content/editContent/components/FormField";

function ContentInfo(): JSX.Element {
  return (
    <Card>
      <CustomBox p={3}>
        <CustomTypography variant="h5">Content Information</CustomTypography>
        <CustomBox mt={1}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <FormField type="text" label="Name" defaultValue="Minimal Bar Stool" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormField type="number" label="Weight" defaultValue={2} />
            </Grid>
          </Grid>
        </CustomBox>
        <CustomBox mt={1}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={3}>
              <FormField type="text" label="Collection" defaultValue="Summer" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <FormField type="text" label="Price" defaultValue="$90" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <FormField type="number" label="Quantity" defaultValue={50} />
            </Grid>
          </Grid>
        </CustomBox>
        <CustomBox mt={1}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <CustomBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                <CustomTypography component="label" variant="button" fontWeight="regular" color="text">
                  Description&nbsp;&nbsp;
                  <CustomTypography variant="caption" fontWeight="regular" color="text">
                    (optional)
                  </CustomTypography>
                </CustomTypography>
              </CustomBox>
              {/* <CustomEditor value={editorValue} onChange={setEditorValue} /> */}
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomBox mb={3}>
                <CustomBox mb={1.625} display="inline-block">
                  <CustomTypography
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
                  defaultValue="Clothing"
                  options={["Clothing", "Electronics", "Furniture", "Others", "Real Estate"]}
                  renderInput={(params) => <CustomInput {...params} variant="standard" />}
                />
              </CustomBox>
              <CustomBox mb={1.625} display="inline-block">
                <CustomTypography
                  component="label"
                  variant="button"
                  fontWeight="regular"
                  color="text"
                  textTransform="capitalize"
                >
                  Color
                </CustomTypography>
              </CustomBox>
              <Autocomplete
                defaultValue="Black"
                options={["Black", "Blue", "Green", "Orange", "White"]}
                renderInput={(params) => <CustomInput {...params} variant="standard" />}
              />
            </Grid>
          </Grid>
        </CustomBox>
      </CustomBox>
    </Card>
  );
}

export default ContentInfo;
