
// @mui material components
import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";


import CustomBox from "components/Atomics/CustomBox";
import CustomTypography from "components/Atomics/CustomTypography";
import CustomButton from "components/Atomics/CustomButton";

// MUI Base Styles
import borders from "assets/theme/base/borders";

// Images
import masterCardLogo from "assets/images/logos/mastercard.png";

function PaymentDetails(): JSX.Element {
  const { borderWidth, borderColor } = borders;

  return (
    <>
      <CustomTypography variant="h6" fontWeight="medium">
        Payment details
      </CustomTypography>
      <CustomBox
        border={`${borderWidth[1]} solid ${borderColor}`}
        borderRadius="lg"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        p={3}
        mt={2}
      >
        <CustomBox component="img" src={masterCardLogo} alt="master card" width="10%" mr={2} />
        <CustomTypography variant="h6" fontWeight="medium">
          ****&nbsp;&nbsp;****&nbsp;&nbsp;****&nbsp;&nbsp;7852
        </CustomTypography>
        <CustomBox ml="auto" lineHeight={0}>
          <Tooltip title="We do not store card details" placement="bottom">
            <CustomButton variant="outlined" color="secondary" size="small" iconOnly circular>
              <Icon sx={{ cursor: "pointer" }}>priority_high</Icon>
            </CustomButton>
          </Tooltip>
        </CustomBox>
      </CustomBox>
    </>
  );
}

export default PaymentDetails;
