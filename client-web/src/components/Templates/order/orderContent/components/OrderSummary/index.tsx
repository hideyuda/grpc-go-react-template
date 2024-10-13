

import CustomBox from "components/Atomics/CustomBox";
import CustomTypography from "components/Atomics/CustomTypography";

function OrderSummary(): JSX.Element {
  return (
    <>
      <CustomBox mb={2}>
        <CustomTypography variant="h6" fontWeight="medium">
          Order Summary
        </CustomTypography>
      </CustomBox>
      <CustomBox display="flex" justifyContent="space-between" mb={0.5}>
        <CustomTypography variant="button" fontWeight="regular" color="text">
          Product Price:
        </CustomTypography>
        <CustomBox ml={1}>
          <CustomTypography variant="body2" fontWeight="medium">
            $90
          </CustomTypography>
        </CustomBox>
      </CustomBox>
      <CustomBox display="flex" justifyContent="space-between" mb={0.5}>
        <CustomTypography variant="button" fontWeight="regular" color="text">
          Delivery:
        </CustomTypography>
        <CustomBox ml={1}>
          <CustomTypography variant="body2" fontWeight="medium">
            $14
          </CustomTypography>
        </CustomBox>
      </CustomBox>
      <CustomBox display="flex" justifyContent="space-between" mb={0.5}>
        <CustomTypography variant="button" fontWeight="regular" color="text">
          Taxes:
        </CustomTypography>
        <CustomBox ml={1}>
          <CustomTypography variant="body2" fontWeight="medium">
            $1.95
          </CustomTypography>
        </CustomBox>
      </CustomBox>
      <CustomBox display="flex" justifyContent="space-between" mt={3}>
        <CustomTypography variant="body1" fontWeight="light" color="text">
          Total:
        </CustomTypography>
        <CustomBox ml={1}>
          <CustomTypography variant="body1" fontWeight="medium">
            $1.95
          </CustomTypography>
        </CustomBox>
      </CustomBox>
    </>
  );
}

export default OrderSummary;
