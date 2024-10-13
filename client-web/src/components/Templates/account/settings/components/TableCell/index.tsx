
import { ReactNode } from "react";


import CustomBox from "components/Atomics/CustomBox";
import CustomTypography from "components/Atomics/CustomTypography";

// Declaring props types for TableCell
interface Props {
  width?: string;
  children: ReactNode;
  align?: string | any;
  padding?: number[];
  noBorder?: boolean;
}

function TableCell({ width, align, padding, noBorder, children }: Props): JSX.Element {
  return (
    <CustomBox
      component="th"
      width={width}
      pt={padding[0]}
      pr={padding[1]}
      pb={padding[2]}
      pl={padding[3]}
      textAlign={align}
      sx={{
        border: ({ borders: { borderWidth }, palette: { light } }) =>
          noBorder ? 0 : `${borderWidth[1]} solid ${light.main}`,
      }}
    >
      <CustomTypography component="div" variant="body2" color="text">
        {children}
      </CustomTypography>
    </CustomBox>
  );
}

// Declaring default props for TableCell
TableCell.defaultProps = {
  width: "auto",
  align: "left",
  padding: [],
  noBorder: false,
};

export default TableCell;
