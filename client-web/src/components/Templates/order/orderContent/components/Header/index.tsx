

import CustomBox from "components/Atomics/CustomBox";
import CustomTypography from "components/Atomics/CustomTypography";
import CustomButton from "components/Atomics/CustomButton";

function Header(): JSX.Element {
  return (
    <CustomBox display="flex" justifyContent="space-between" alignItems="center">
      <CustomBox>
        <CustomBox mb={1}>
          <CustomTypography variant="h6" fontWeight="medium">
            Order Details
          </CustomTypography>
        </CustomBox>
        {/* <CustomTypography component="p" variant="button" color="text">
          Order no. <b>241342</b> from
          <b>23.02.2021</b>
        </CustomTypography>
        <CustomTypography component="p" variant="button" fontWeight="regular" color="text">
          Code: <b>KF332</b>
        </CustomTypography> */}
      </CustomBox>
      {/* <CustomButton variant="gradient" color="dark">
        invoice
      </CustomButton> */}
    </CustomBox>
  );
}

export default Header;
