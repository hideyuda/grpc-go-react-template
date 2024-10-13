

import { forwardRef, FC, ReactNode } from "react";

// @mui material components
import Icon from "@mui/material/Icon";

// MUI components
import CustomBox from "components/Atomics/CustomBox";
import CustomTypography from "components/Atomics/CustomTypography";

// custom styles for the DefaultItem
import defaultItemIconBox from "components/Molecules/Items/DefaultItem/styles";

// Declaring props types for DefaultItem
interface Props {
  color?: "primary" | "secondary" | "info" | "success" | "warning" | "error" | "dark";
  icon: ReactNode;
  title: string;
  description: string;
  [key: string]: any;
}

const DefaultItem: FC<Props> = forwardRef(({ color, icon, title, description, ...rest }, ref) => (
  <CustomBox {...rest} ref={ref} display="flex" alignItems="center">
    <CustomBox sx={(theme) => defaultItemIconBox(theme, { color })}>
      <Icon>{icon}</Icon>
    </CustomBox>
    <CustomBox ml={2} mt={0.5} lineHeight={1.4}>
      <CustomTypography display="block" variant="button" fontWeight="medium">
        {title}
      </CustomTypography>
      <CustomTypography variant="button" fontWeight="regular" color="text">
        {description}
      </CustomTypography>
    </CustomBox>
  </CustomBox>
));

// Declaring default props for DefaultItem
DefaultItem.defaultProps = {
  color: "info",
};

export default DefaultItem;
