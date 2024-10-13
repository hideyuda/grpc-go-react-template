
import { ReactNode } from "react";

// @mui material components
import Card from "@mui/material/Card";

// MUI components
import CustomBox from "components/Atomics/CustomBox";
import CustomTypography from "components/Atomics/CustomTypography";

// MUI components
import { useMaterialUIController } from "context";

// Timeline context
import { TimelineProvider } from "components/Molecules/Timeline/context";

// Declaring props types for TimelineList
interface Props {
  title: string;
  dark?: boolean;
  children: ReactNode;
}

function TimelineList({ title, dark, children }: Props): JSX.Element {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  return (
    <TimelineProvider value={dark}>
      <Card>
        <CustomBox
          bgColor={dark ? "dark" : "white"}
          variant="gradient"
          borderRadius="xl"
          sx={{ background: ({ palette: { background } }: any) => darkMode && background.card }}
        >
          <CustomBox pt={3} px={3}>
            <CustomTypography variant="h6" fontWeight="medium" color={dark ? "white" : "dark"}>
              {title}
            </CustomTypography>
          </CustomBox>
          <CustomBox p={2}>{children}</CustomBox>
        </CustomBox>
      </Card>
    </TimelineProvider>
  );
}

// Declaring default props for TimelineList
TimelineList.defaultProps = {
  dark: false,
};

export default TimelineList;
