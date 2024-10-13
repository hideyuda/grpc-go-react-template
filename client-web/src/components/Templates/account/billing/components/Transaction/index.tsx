
import { ReactNode } from "react";

// @mui material components
import Icon from "@mui/material/Icon";


import CustomBox from "components/Atomics/CustomBox";
import CustomTypography from "components/Atomics/CustomTypography";
import CustomButton from "components/Atomics/CustomButton";

// Declaring props types for Transaction
interface Props {
  color: "primary" | "secondary" | "info" | "success" | "warning" | "error" | "light" | "dark";
  icon: ReactNode;
  name: string;
  description: string;
  value: string;
}

function Transaction({ color, icon, name, description, value }: Props): JSX.Element {
  return (
    <CustomBox key={name} component="li" py={1} pr={2} mb={1}>
      <CustomBox display="flex" justifyContent="space-between" alignItems="center">
        <CustomBox display="flex" alignItems="center">
          <CustomBox mr={2}>
            <CustomButton variant="outlined" color={color} iconOnly circular>
              <Icon sx={{ fontWeight: "bold" }}>{icon}</Icon>
            </CustomButton>
          </CustomBox>
          <CustomBox display="flex" flexDirection="column">
            <CustomTypography variant="button" fontWeight="medium" gutterBottom>
              {name}
            </CustomTypography>
            <CustomTypography variant="caption" color="text" fontWeight="regular">
              {description}
            </CustomTypography>
          </CustomBox>
        </CustomBox>
        <CustomTypography variant="button" color={color} fontWeight="medium" textGradient>
          {value}
        </CustomTypography>
      </CustomBox>
    </CustomBox>
  );
}

export default Transaction;
