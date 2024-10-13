

import { forwardRef, FC, ReactNode } from "react";

// @mui material components
import MenuItem from "@mui/material/MenuItem";
import Link from "@mui/material/Link";
import { MenuItemProps } from "@mui/material";

// MUI components
import CustomBox from "components/Atomics/CustomBox";
import CustomTypography from "components/Atomics/CustomTypography";

// custom styles for the NotificationItem
import menuItem from "components/Molecules/Items/NotificationItem/styles";

// Declaring props types for NotificationItem
interface Props extends MenuItemProps {
  icon: ReactNode;
  title: string;
  [key: string]: any;
}

const NotificationItem: FC<Props> = forwardRef(({ icon, title, ...rest }, ref) => (
  <MenuItem {...rest} ref={ref} sx={(theme) => menuItem(theme)}>
    <CustomBox component={Link} py={0.5} display="flex" alignItems="center" lineHeight={1}>
      <CustomTypography variant="body1" color="secondary" lineHeight={0.75}>
        {icon}
      </CustomTypography>
      <CustomTypography variant="button" fontWeight="regular" sx={{ ml: 1 }}>
        {title}
      </CustomTypography>
    </CustomBox>
  </MenuItem>
));

export default NotificationItem;
