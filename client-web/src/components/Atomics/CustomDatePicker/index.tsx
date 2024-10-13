
// react-flatpickr components
import Flatpickr from "react-flatpickr";

// react-flatpickr styles
import "flatpickr/dist/flatpickr.css";


import CustomInput from "components/Atomics/CustomInput";

// types
interface Props {
  input?: {
    [key: string]: any;
  };
  [key: string]: any;
}

function CustomDatePicker({ input, ...rest }: Props): JSX.Element {
  return (
    <Flatpickr
      {...rest}
      render={({ defaultValue }: any, ref: any) => (
        <CustomInput {...input} defaultValue={defaultValue} inputRef={ref} />
      )}
    />
  );
}

CustomDatePicker.defaultProps = {
  input: {},
};

export default CustomDatePicker;
