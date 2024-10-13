
// @mui material components
import Grid from "@mui/material/Grid";


import CustomBox from "components/Atomics/CustomBox";
import CustomTypography from "components/Atomics/CustomTypography";
import CustomButton from "components/Atomics/CustomButton";
import CustomAvatar from "components/Atomics/CustomAvatar";
import CustomBadge from "components/Atomics/CustomBadge";

// Images
import orderImage from "assets/images/product-12.jpg";

function OrderInfo(): JSX.Element {
  return (
    <Grid container spacing={3} alignItems="center">
      <Grid item xs={12} md={6}>
        <CustomBox display="flex" alignItems="center">
          <CustomBox mr={2}>
            <CustomAvatar size="xxl" src={orderImage} alt="Gold Glasses" />
          </CustomBox>
          <CustomBox lineHeight={1}>
            <CustomTypography variant="h6" fontWeight="medium">
              Gold Glasses
            </CustomTypography>
            <CustomBox mb={2}>
              <CustomTypography variant="button" color="text">
                Order was delivered 2 days ago.
              </CustomTypography>
            </CustomBox>
            <CustomBadge
              variant="gradient"
              color="success"
              size="xs"
              badgeContent="delivered"
              container
            />
          </CustomBox>
        </CustomBox>
      </Grid>
      <Grid item xs={12} md={6} sx={{ textAlign: "right" }}>
        <CustomButton variant="gradient" color="dark" size="small">
          contact us
        </CustomButton>
        <CustomBox mt={0.5}>
          <CustomTypography variant="button" color="text">
            Do you like the product? Leave us a review{" "}
            <CustomTypography component="a" href="#" variant="button" color="text" fontWeight="regular">
              here
            </CustomTypography>
            .
          </CustomTypography>
        </CustomBox>
      </Grid>
    </Grid>
  );
}

export default OrderInfo;
