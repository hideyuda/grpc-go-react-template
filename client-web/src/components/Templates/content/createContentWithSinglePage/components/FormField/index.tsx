

import CustomInput from "components/Atomics/CustomInput";

// Declaring props types for FormField
interface Props {
  label: string;
  [key: string]: any;
}

function FormField({ label, ...rest }: Props): JSX.Element {
  return <CustomInput {...rest} label={label} variant="standard" fullWidth />;
}

export default FormField;
