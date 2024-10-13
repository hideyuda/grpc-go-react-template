
import { FC, ReactNode, forwardRef } from "react";

// @mui material components
import { BadgeProps } from "@mui/material";

// Custom styles for the CustomBadge
import CustomBadgeRoot from "components/Atomics/CustomBadge/CustomBadgeRoot";

// declaring props types for CustomBadge
interface Props extends Omit<BadgeProps, "color" | "variant"> {
  color?: "primary" | "secondary" | "info" | "success" | "warning" | "error" | "light" | "dark";
  variant?: "gradient" | "contained";
  size?: "xs" | "sm" | "md" | "lg";
  circular?: boolean;
  indicator?: boolean;
  border?: boolean;
  children?: ReactNode;
  container?: boolean;
  [key: string]: any;
}

const CustomBadge: FC<Props | any> = forwardRef(
  ({ color, variant, size, circular, indicator, border, container, children, ...rest }, ref) => (
    <CustomBadgeRoot
      {...rest}
      ownerState={{ color, variant, size, circular, indicator, border, container, children }}
      ref={ref}
      color="default"
    >
      {children}
    </CustomBadgeRoot>
  )
);

// declaring default props for CustomBadge
CustomBadge.defaultProps = {
  color: "info",
  variant: "gradient",
  size: "sm",
  circular: false,
  indicator: false,
  border: false,
  container: false,
  children: false,
};

export default CustomBadge;
