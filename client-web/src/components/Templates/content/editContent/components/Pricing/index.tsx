
// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Autocomplete from "@mui/material/Autocomplete";


import CustomBox from "components/Atomics/CustomBox";
import CustomTypography from "components/Atomics/CustomTypography";
import CustomInput from "components/Atomics/CustomInput";

// NewProduct page components
import FormField from "components/Templates/content/editContent/components/FormField";

function Pricing(): JSX.Element {
  return (
    <Card sx={{ overflow: "visible" }}>
      <CustomBox p={3}>
        <CustomTypography variant="h5" fontWeight="bold">
          Pricing
        </CustomTypography>
        <CustomBox mt={1}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={3}>
              <FormField type="number" label="Price" defaultValue="99.00" />
            </Grid>
            <Grid item xs={12} sm={4} sx={{ mt: 2 }}>
              <Autocomplete
                defaultValue="USD"
                options={["BTC", "CNY", "EUR", "GBP", "INR", "USD"]}
                renderInput={(params) => <CustomInput {...params} variant="standard" />}
              />
            </Grid>
            <Grid item xs={12} sm={5}>
              <FormField type="text" label="SKU" defaultValue="71283476591" />
            </Grid>
          </Grid>
        </CustomBox>
        <CustomBox mt={1}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <CustomBox my={2} display="inline-block">
                <CustomTypography component="label" variant="button" fontWeight="regular" color="text">
                  Tags
                </CustomTypography>
              </CustomBox>
              <Autocomplete
                multiple
                defaultValue={["In Stock", "Out of Stock"]}
                options={["Black Friday", "Expired", "Out of Stock", "In Stock", "Sale"]}
                renderInput={(params) => <CustomInput {...params} variant="standard" />}
              />
            </Grid>
          </Grid>
        </CustomBox>
      </CustomBox>
    </Card>
  );
}

export default Pricing;
