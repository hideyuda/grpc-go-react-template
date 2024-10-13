
import { ReactNode } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";

// MUI components
import CustomBox from "components/Atomics/CustomBox";
import CustomTypography from "components/Atomics/CustomTypography";

// Declaring props types for DefaultInfoCard
interface Props {
  color?: "primary" | "secondary" | "info" | "success" | "warning" | "error" | "dark";
  icon: ReactNode;
  title: string;
  description?: string;
  value?: string | number;
  [key: string]: any;
}

function DefaultInfoCard({ color, icon, title, description, value }: Props): JSX.Element {
  return (
    <Card>
      <CustomBox p={2} mx={3} display="flex" justifyContent="center">
        <CustomBox
          display="grid"
          justifyContent="center"
          alignItems="center"
          bgColor={color}
          color="white"
          width="4rem"
          height="4rem"
          shadow="md"
          borderRadius="lg"
          variant="gradient"
        >
          <Icon>{icon}</Icon>
        </CustomBox>
      </CustomBox>
      <CustomBox pb={2} px={2} textAlign="center" lineHeight={1.25}>
        <CustomTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          {title}
        </CustomTypography>
        {description && (
          <CustomTypography variant="caption" color="text" fontWeight="regular">
            {description}
          </CustomTypography>
        )}
        {description && !value ? null : <Divider />}
        {value && (
          <CustomTypography variant="h5" fontWeight="medium">
            {value}
          </CustomTypography>
        )}
      </CustomBox>
    </Card>
  );
}

// Declaring default props for DefaultInfoCard
DefaultInfoCard.defaultProps = {
  color: "info",
  value: "",
  description: "",
};

export default DefaultInfoCard;
