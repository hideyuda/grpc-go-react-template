

import CustomInput from "components/Atomics/CustomInput";
import CustomBox from "components/Atomics/CustomBox";

// Declaring props types for FormField
interface Props {
  label: string;
  [key: string]: any;
}

function FormField({ label, ...rest }: Props): JSX.Element {
  return (
    <CustomBox mb={2}>
      <CustomInput {...rest} variant="standard" label={label} fullWidth />
    </CustomBox>
  );
}

export default FormField;
