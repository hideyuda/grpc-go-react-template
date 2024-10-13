
import { FC, forwardRef } from "react";

// @mui material components
import { AvatarProps } from "@mui/material";

// Custom styles for CustomAvatar
import CustomAvatarRoot from "components/Atomics/CustomAvatar/CustomAvatarRoot";

// declare props types for CustomAvatar
interface Props extends AvatarProps {
  bgColor?:
    | "transparent"
    | "primary"
    | "secondary"
    | "info"
    | "success"
    | "warning"
    | "error"
    | "light"
    | "dark";
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
  shadow?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "inset";
  [key: string]: any;
}

const CustomAvatar: FC<Props> = forwardRef(({ bgColor, size, shadow, ...rest }, ref) => (
  <CustomAvatarRoot ref={ref} ownerState={{ shadow, bgColor, size }} {...rest} />
));

// Declaring default props for CustomAvatar
CustomAvatar.defaultProps = {
  bgColor: "transparent",
  size: "md",
  shadow: "none",
};

export default CustomAvatar;
