// @mui material components
import Icon from "@mui/material/Icon";

import CustomBox from "components/Atomics/CustomBox";
import CustomTypography from "components/Atomics/CustomTypography";

// Declaring props types for Invoice
interface Props {
  date: string;
  id: string;
  price: string;
  noGutter?: boolean;
}

function Invoice({ date, id, price, noGutter }: Props): JSX.Element {
  return (
    <CustomBox
      component="li"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      py={1}
      pr={1}
      mb={noGutter ? 0 : 1}
    >
      <CustomBox lineHeight={1.125}>
        <CustomTypography display="block" variant="button" fontWeight="medium">
          {date}
        </CustomTypography>
        <CustomTypography variant="caption" fontWeight="regular" color="text">
          {id}
        </CustomTypography>
      </CustomBox>
      <CustomBox display="flex" alignItems="center">
        <CustomTypography variant="button" fontWeight="regular" color="text">
          {price}
        </CustomTypography>
        <CustomBox display="flex" alignItems="center" lineHeight={1} ml={3} sx={{ cursor: "pointer" }}>
          <Icon fontSize="small">picture_as_pdf</Icon>
          <CustomTypography variant="button" fontWeight="bold">
            &nbsp;PDF
          </CustomTypography>
        </CustomBox>
      </CustomBox>
    </CustomBox>
  );
}

// Declaring default props for Invoice
Invoice.defaultProps = {
  noGutter: false,
};

export default Invoice;
