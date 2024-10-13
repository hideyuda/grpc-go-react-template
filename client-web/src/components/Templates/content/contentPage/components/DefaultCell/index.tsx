

import { ReactNode } from "react";


import CustomTypography from "components/Atomics/CustomTypography";

function DefaultCell({ children }: { children: ReactNode }): JSX.Element {
  return (
    <CustomTypography variant="button" color="secondary">
      {children}
    </CustomTypography>
  );
}

export default DefaultCell;
