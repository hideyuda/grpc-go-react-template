
import { FC, ReactNode, forwardRef } from "react";

// @mui material components
import { ButtonProps } from "@mui/material";

// Custom styles for CustomSocialButton
import CustomSocialButtonRoot from "components/Atomics/CustomSocialButton/CustomSocialButtonRoot";

// Declaring props types for CustomButton
interface Props extends Omit<ButtonProps, "color" | "variant"> {
  color?:
    | "facebook"
    | "twitter"
    | "instagram"
    | "linkedin"
    | "pinterest"
    | "youtube"
    | "github"
    | "vimeo"
    | "slack"
    | "dribbble"
    | "reddit"
    | "tumblr";
  size?: "small" | "medium" | "large";
  circular?: boolean;
  iconOnly?: boolean;
  children?: ReactNode;
  [key: string]: any;
}

const CustomSocialButton: FC<Props> = forwardRef(
  ({ color, size, iconOnly, circular, children, ...rest }, ref) => (
    <CustomSocialButtonRoot
      {...rest}
      ref={ref}
      variant="contained"
      color="primary"
      size={size}
      ownerState={{ color, size, iconOnly, circular }}
    >
      {children}
    </CustomSocialButtonRoot>
  )
);

// Setting default values for the props of CustomSocialButton
CustomSocialButton.defaultProps = {
  size: "medium",
  color: "facebook",
  iconOnly: false,
  circular: false,
};

export default CustomSocialButton;
