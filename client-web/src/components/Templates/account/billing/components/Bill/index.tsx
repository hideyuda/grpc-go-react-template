
// @mui material components
import Icon from "@mui/material/Icon";


import CustomBox from "components/Atomics/CustomBox";
import CustomTypography from "components/Atomics/CustomTypography";
import CustomButton from "components/Atomics/CustomButton";

// MUI context
import { useMaterialUIController } from "context";

// Declaring props types for Bill
interface Props {
  name: string;
  company: string;
  email: string;
  vat: string;
  noGutter?: boolean;
}

function Bill({ name, company, email, vat, noGutter }: Props): JSX.Element {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  return (
    <CustomBox
      component="li"
      display="flex"
      justifyContent="space-between"
      alignItems="flex-start"
      bgColor={darkMode ? "transparent" : "grey-100"}
      borderRadius="lg"
      p={3}
      mb={noGutter ? 0 : 1}
      mt={2}
    >
      <CustomBox width="100%" display="flex" flexDirection="column">
        <CustomBox
          display="flex"
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          flexDirection={{ xs: "column", sm: "row" }}
          mb={2}
        >
          <CustomTypography variant="button" fontWeight="medium" textTransform="capitalize">
            {name}
          </CustomTypography>

          <CustomBox display="flex" alignItems="center" mt={{ xs: 2, sm: 0 }} ml={{ xs: -1.5, sm: 0 }}>
            <CustomBox mr={1}>
              <CustomButton variant="text" color="error">
                <Icon>delete</Icon>&nbsp;delete
              </CustomButton>
            </CustomBox>
            <CustomButton variant="text" color={darkMode ? "white" : "dark"}>
              <Icon>edit</Icon>&nbsp;edit
            </CustomButton>
          </CustomBox>
        </CustomBox>
        <CustomBox mb={1} lineHeight={0}>
          <CustomTypography variant="caption" color="text">
            Company Name:&nbsp;&nbsp;&nbsp;
            <CustomTypography variant="caption" fontWeight="medium" textTransform="capitalize">
              {company}
            </CustomTypography>
          </CustomTypography>
        </CustomBox>
        <CustomBox mb={1} lineHeight={0}>
          <CustomTypography variant="caption" color="text">
            Email Address:&nbsp;&nbsp;&nbsp;
            <CustomTypography variant="caption" fontWeight="medium">
              {email}
            </CustomTypography>
          </CustomTypography>
        </CustomBox>
        <CustomTypography variant="caption" color="text">
          VAT Number:&nbsp;&nbsp;&nbsp;
          <CustomTypography variant="caption" fontWeight="medium">
            {vat}
          </CustomTypography>
        </CustomTypography>
      </CustomBox>
    </CustomBox>
  );
}

// Declaring default props for Bill
Bill.defaultProps = {
  noGutter: false,
};

export default Bill;
