
import { FC, forwardRef } from "react";


import CustomTypography from "components/Atomics/CustomTypography";

// Custom styles for CustomProgress
import CustomProgressRoot from "components/Atomics/CustomProgress/CustomProgressRoot";

// Delcare props types for CustomProgress
interface Props {
  variant?: "contained" | "gradient";
  color?: "primary" | "secondary" | "info" | "success" | "warning" | "error" | "light" | "dark";
  value: number;
  label?: boolean;
  [key: string]: any;
}

const CustomProgress: FC<Props> = forwardRef(({ variant, color, value, label, ...rest }, ref) => (
  <>
    {label && (
      <CustomTypography variant="button" fontWeight="medium" color="text">
        {value}%
      </CustomTypography>
    )}
    <CustomProgressRoot
      {...rest}
      ref={ref}
      variant="determinate"
      value={value}
      ownerState={{ color, value, variant }}
    />
  </>
));

// Declaring default props for CustomProgress
CustomProgress.defaultProps = {
  variant: "contained",
  color: "info",
  value: 0,
  label: false,
};

export default CustomProgress;
