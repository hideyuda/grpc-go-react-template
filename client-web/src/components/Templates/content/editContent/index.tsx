
// @mui material components
import Grid from "@mui/material/Grid";


import CustomBox from "components/Atomics/CustomBox";
import CustomTypography from "components/Atomics/CustomTypography";
import CustomButton from "components/Atomics/CustomButton";

// MUI examples components
import DashboardLayout from "components/Molecules/LayoutContainers/DashboardLayout";
import DashboardNavbar from "components/Molecules/Navbars/DashboardNavbar";
import Footer from "components/Molecules/Footer";

// EditContent page components
import Socials from "./components/Socials";
import Pricing from "./components/Pricing";
import ContentImage from "./components/ContentImage";
import ContentInfo from "./components/ContentInfo";

function EditContent(): JSX.Element {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <CustomBox my={3}>
        <CustomBox mb={6}>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} lg={6}>
              <CustomTypography variant="h4" fontWeight="medium">
                Make the changes below
              </CustomTypography>
              <CustomBox mt={1} mb={2}>
                <CustomTypography variant="body2" color="text">
                  We’re constantly trying to express ourselves and actualize our dreams. If you have
                  the opportunity to play.
                </CustomTypography>
              </CustomBox>
            </Grid>
            <Grid item xs={12} lg={6}>
              <CustomBox display="flex" justifyContent="flex-end">
                <CustomButton variant="gradient" color="info">
                  save
                </CustomButton>
              </CustomBox>
            </Grid>
          </Grid>
        </CustomBox>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={4}>
            <ContentImage />
          </Grid>
          <Grid item xs={12} lg={8}>
            <ContentInfo />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Socials />
          </Grid>
          <Grid item xs={12} lg={8}>
            <Pricing />
          </Grid>
        </Grid>
      </CustomBox>
      <Footer />
    </DashboardLayout>
  );
}

export default EditContent;
