

import CustomBox from "components/Atomics/CustomBox";
import CustomTypography from "components/Atomics/CustomTypography";

// MUI context
import { useMaterialUIController } from "context";

function BillingInformation(): JSX.Element {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  return (
    <>
      <CustomTypography variant="h6" fontWeight="medium">
        Billing Information
      </CustomTypography>
      <CustomBox
        component="li"
        display="flex"
        justifyContent="space-between"
        alignItems="flex-start"
        bgColor={darkMode ? "transparent" : "grey-100"}
        borderRadius="lg"
        p={3}
        mt={2}
      >
        <CustomBox width="100%" display="flex" flexDirection="column" lineHeight={1}>
          <CustomBox mb={2}>
            <CustomTypography variant="button" fontWeight="medium" textTransform="capitalize">
              Oliver Liam
            </CustomTypography>
          </CustomBox>
          <CustomBox mb={1} lineHeight={0}>
            <CustomTypography variant="caption" fontWeight="regular" color="text">
              Company Name:&nbsp;&nbsp;&nbsp;
              <CustomTypography variant="caption" fontWeight="medium" textTransform="capitalize">
                Viking Burrito
              </CustomTypography>
            </CustomTypography>
          </CustomBox>
          <CustomBox mb={1} lineHeight={0}>
            <CustomTypography variant="caption" fontWeight="regular" color="text">
              Email Address:&nbsp;&nbsp;&nbsp;
              <CustomTypography variant="caption" fontWeight="medium">
                oliver@burrito.com
              </CustomTypography>
            </CustomTypography>
          </CustomBox>
          <CustomTypography variant="caption" fontWeight="regular" color="text">
            VAT Number:&nbsp;&nbsp;&nbsp;
            <CustomTypography variant="caption" fontWeight="medium">
              FRB1235476
            </CustomTypography>
          </CustomTypography>
        </CustomBox>
      </CustomBox>
    </>
  );
}

export default BillingInformation;
