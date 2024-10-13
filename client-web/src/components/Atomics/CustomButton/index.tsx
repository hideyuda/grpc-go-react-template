import { FC, ReactNode, forwardRef } from "react";

// @mui material components
import { ButtonProps } from "@mui/material";

// Custom styles for CustomButton
import CustomButtonRoot from "components/Atomics/CustomButton/CustomButtonRoot";

// MUI contexts
import { useMaterialUIController } from "context";

// Declaring props types for CustomButton
interface Props extends Omit<ButtonProps, "color" | "variant"> {
  color?:
    | "white"
    | "primary"
    | "secondary"
    | "info"
    | "success"
    | "warning"
    | "error"
    | "light"
    | "dark"
    | "default";
  variant?: "text" | "contained" | "outlined" | "gradient";
  size?: "small" | "medium" | "large";
  circular?: boolean;
  iconOnly?: boolean;
  children?: ReactNode;
  [key: string]: any;
}

const CustomButton: FC<Props> = forwardRef(
  ({ color, variant, size, circular, iconOnly, children, ...rest }, ref) => {
    const [controller] = useMaterialUIController();
    const { darkMode } = controller;

    return (
      <CustomButtonRoot
        {...rest}
        ref={ref}
        ownerState={{ color, variant, size, circular, iconOnly, darkMode }}
      >
        {children}
      </CustomButtonRoot>
    );
  }
);

// Declaring default props for CustomButton
CustomButton.defaultProps = {
  color: "white",
  variant: "contained",
  size: "medium",
  circular: false,
  iconOnly: false,
};

export default CustomButton;
