


import CustomBox from "components/Atomics/CustomBox";
import CustomTypography from "components/Atomics/CustomTypography";
import CustomAvatar from "components/Atomics/CustomAvatar";

// Declaring props types for ContentCell
interface Props {
  image: string;
  name: string;
}

function ContentCell({ image, name }: Props): JSX.Element {
  return (
    <CustomBox display="flex" alignItems="center" pr={2}>
      <CustomBox mr={2}>
        <CustomAvatar src={image} alt={name} />
      </CustomBox>
      <CustomTypography variant="button" fontWeight="medium">
        {name}
      </CustomTypography>
    </CustomBox>
  );
}

export default ContentCell;
