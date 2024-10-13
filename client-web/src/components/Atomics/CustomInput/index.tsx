
import { FC, forwardRef } from "react";

// @mui material components
import { OutlinedTextFieldProps, StandardTextFieldProps } from "@mui/material";

// Custom styles for CustomInput
import CustomInputRoot from "components/Atomics/CustomInput/CustomInputRoot";

// Declaring props types for CustomInput
interface Props extends Omit<OutlinedTextFieldProps | StandardTextFieldProps, "variant"> {
  variant?: "standard" | "outlined";
  error?: boolean;
  success?: boolean;
  disabled?: boolean;
}

const CustomInput: FC<Props | any> = forwardRef(({ error, success, disabled, ...rest }, ref) => (
  <CustomInputRoot {...rest} ref={ref} ownerState={{ error, success, disabled }} />
));

// Declaring default props for CustomInput
CustomInput.defaultProps = {
  error: false,
  success: false,
  disabled: false,
};

export default CustomInput;
