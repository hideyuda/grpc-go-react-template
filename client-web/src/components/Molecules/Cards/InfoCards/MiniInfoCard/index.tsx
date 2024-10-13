
import { ReactNode } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// MUI components
import CustomBox from "components/Atomics/CustomBox";
import CustomTypography from "components/Atomics/CustomTypography";

interface Props {
  color?: "primary" | "secondary" | "info" | "success" | "warning" | "error" | "dark";
  icon: ReactNode;
  title: ReactNode;
  description: string;
  [key: string]: any;
}

function MiniInfoCard({ color, icon, title, description }: Props): JSX.Element {
  return (
    <Card>
      <CustomBox p={3}>
        <CustomBox
          display="grid"
          justifyContent="center"
          alignItems="center"
          bgColor={color}
          color="white"
          width="3rem"
          height="3rem"
          shadow="md"
          borderRadius="lg"
          variant="gradient"
        >
          <Icon>{icon}</Icon>
        </CustomBox>
        <CustomBox mt={2.625}>
          <CustomTypography variant="h5" fontWeight="medium" textTransform="capitalize">
            {title}
          </CustomTypography>
          <CustomTypography variant="body2" color="text" fontWeight="regular">
            {description}
          </CustomTypography>
        </CustomBox>
      </CustomBox>
    </Card>
  );
}

// Declaring default props for MiniInfoCard
MiniInfoCard.defaultProps = {
  color: "info",
};

export default MiniInfoCard;
