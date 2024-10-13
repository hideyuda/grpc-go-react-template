
import { forwardRef, FC } from "react";

// @mui material components
import { BoxProps } from "@mui/material";

// Custom styles for CustomBox
import CustomBoxRoot from "components/Atomics/CustomBox/CustomBoxRoot";

// declaring props types for CustomBox
interface Props extends BoxProps {
  variant?: "contained" | "gradient";
  bgColor?: string;
  color?: string;
  opacity?: number;
  borderRadius?: string;
  shadow?: string;
  coloredShadow?: string;
  [key: string]: any;
}

const CustomBox: FC<Props> = forwardRef(
  ({ variant, bgColor, color, opacity, borderRadius, shadow, coloredShadow, ...rest }, ref) => (
    <CustomBoxRoot
      {...rest}
      ref={ref}
      ownerState={{ variant, bgColor, color, opacity, borderRadius, shadow, coloredShadow }}
    />
  )
);

// Declaring default props for CustomBox
CustomBox.defaultProps = {
  variant: "contained",
  bgColor: "transparent",
  color: "dark",
  opacity: 1,
  borderRadius: "none",
  shadow: "none",
  coloredShadow: "none",
};

export default CustomBox;
