
// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";


import CustomBox from "components/Atomics/CustomBox";
import CustomTypography from "components/Atomics/CustomTypography";

// EditContent page components
import FormField from "components/Templates/content/editContent/components/FormField";

function Socials(): JSX.Element {
  return (
    <Card>
      <CustomBox p={3}>
        <CustomTypography variant="h5" fontWeight="bold">
          Socials
        </CustomTypography>
        <CustomBox mt={1}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormField type="text" label="Shoppify Handle" defaultValue="@soft" />
            </Grid>
            <Grid item xs={12}>
              <FormField type="text" label="Facebook Account" defaultValue="https://..." />
            </Grid>
            <Grid item xs={12}>
              <FormField type="text" label="Instagram Account" defaultValue="https://..." />
            </Grid>
          </Grid>
        </CustomBox>
      </CustomBox>
    </Card>
  );
}

export default Socials;
