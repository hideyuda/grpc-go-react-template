
// @mui material components
import Grid from "@mui/material/Grid";
import Autocomplete from "@mui/material/Autocomplete";


import CustomBox from "components/Atomics/CustomBox";
import CustomTypography from "components/Atomics/CustomTypography";
import CustomInput from "components/Atomics/CustomInput";

// NewProduct page components
import FormField from "components/Templates/content/createContent/components/FormField";

function Pricing(
  props: {
    setPrice: (price: number) => void;
    setCurrency: (currency: number) => void;
    setAspRate: (aspRate: number) => void;
  }
): JSX.Element {
  return (
    <CustomBox>
      <CustomTypography variant="h5">Pricing</CustomTypography>
      <CustomBox mt={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={8}>
            <FormField
              type="text"
              label="Price"
              placeholder="99.00"
              onChange={(e: { PreventDefault: () => void; target: { value: string; }; }) => {
                // e.PreventDefault();
                e.target.value = e.target.value.replace(/[^0-9.]/g, "");
                props.setPrice(parseFloat(e.target.value));
              }
              }
            />
          </Grid>
          <Grid item xs={12} sm={4} sx={{ mt: 2 }}>
            <Autocomplete
              defaultValue="USD"
              options={["BTC", "CNY", "EUR", "GBP", "INR", "USD"]}
              renderInput={(params) => <CustomInput {...params} variant="standard" />}
            />
          </Grid>
        </Grid>
      </CustomBox>
      <CustomBox mt={1}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
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
              defaultValue="10"
              options={["0", "10", "20", "30", "40", "50", "60", "70", "80", "90", "100"]}
              renderInput={(params) => <CustomInput {...params} variant="standard" />}
              onChange={(e, value) => {
                // e.preventDefault()
                props.setAspRate(parseFloat(value))
              }
              }
            />
            {/* <CustomBox my={2} display="inline-block">
              <CustomTypography component="label" variant="button" fontWeight="regular" color="text">
                Tags
              </CustomTypography>
            </CustomBox>
            <Autocomplete
              multiple
              defaultValue={["In Stock", "Out of Stock"]}
              options={["Black Friday", "Expired", "Out of Stock", "In Stock", "Sale"]}
              renderInput={(params) => <CustomInput {...params} variant="standard" />}
            /> */}
          </Grid>
        </Grid>
      </CustomBox>
    </CustomBox>
  );
}

export default Pricing;
