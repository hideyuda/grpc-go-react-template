
// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";


import CustomBox from "components/Atomics/CustomBox";
import CustomTypography from "components/Atomics/CustomTypography";
import CustomButton from "components/Atomics/CustomButton";

// Images
import masterCardLogo from "assets/images/logos/mastercard.png";
import visaLogo from "assets/images/logos/visa.png";

// MUI context
import { useMaterialUIController } from "context";

function PaymentMethod(): JSX.Element {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  return (
    <Card id="delete-account">
      <CustomBox pt={2} px={2} display="flex" justifyContent="space-between" alignItems="center">
        <CustomTypography variant="h6" fontWeight="medium">
          Payment Method
        </CustomTypography>
        <CustomButton variant="gradient" color="dark">
          <Icon sx={{ fontWeight: "bold" }}>add</Icon>
          &nbsp;add new card
        </CustomButton>
      </CustomBox>
      <CustomBox p={2}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <CustomBox
              borderRadius="lg"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              p={3}
              sx={{
                border: ({ borders: { borderWidth, borderColor } }) =>
                  `${borderWidth[1]} solid ${borderColor}`,
              }}
            >
              <CustomBox component="img" src={masterCardLogo} alt="master card" width="10%" mr={2} />
              <CustomTypography variant="h6" fontWeight="medium">
                ****&nbsp;&nbsp;****&nbsp;&nbsp;****&nbsp;&nbsp;7852
              </CustomTypography>
              <CustomBox ml="auto" lineHeight={0} color={darkMode ? "white" : "dark"}>
                <Tooltip title="Edit Card" placement="top">
                  <Icon sx={{ cursor: "pointer" }} fontSize="small">
                    edit
                  </Icon>
                </Tooltip>
              </CustomBox>
            </CustomBox>
          </Grid>
          <Grid item xs={12} md={6}>
            <CustomBox
              borderRadius="lg"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              p={3}
              sx={{
                border: ({ borders: { borderWidth, borderColor } }) =>
                  `${borderWidth[1]} solid ${borderColor}`,
              }}
            >
              <CustomBox component="img" src={visaLogo} alt="master card" width="10%" mr={2} />
              <CustomTypography variant="h6" fontWeight="medium">
                ****&nbsp;&nbsp;****&nbsp;&nbsp;****&nbsp;&nbsp;5248
              </CustomTypography>
              <CustomBox ml="auto" lineHeight={0} color={darkMode ? "white" : "dark"}>
                <Tooltip title="Edit Card" placement="top">
                  <Icon sx={{ cursor: "pointer" }} fontSize="small">
                    edit
                  </Icon>
                </Tooltip>
              </CustomBox>
            </CustomBox>
          </Grid>
        </Grid>
      </CustomBox>
    </Card>
  );
}

export default PaymentMethod;
