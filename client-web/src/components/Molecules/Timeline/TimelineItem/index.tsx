
import { ReactNode } from "react";

// @mui material components
import Icon from "@mui/material/Icon";

// MUI components
import CustomBox from "components/Atomics/CustomBox";
import CustomTypography from "components/Atomics/CustomTypography";

// Timeline context
import { useTimeline } from "components/Molecules/Timeline/context";

// Custom styles for the TimelineItem
import timelineItem from "components/Molecules/Timeline/TimelineItem/styles";

// Declaring prop types for TimelineItem
interface Props {
  color?: "primary" | "secondary" | "info" | "success" | "warning" | "error" | "dark" | "light";
  icon: ReactNode;
  title: string;
  dateTime: string;
  description?: string;
  lastItem?: boolean;
  [key: string]: any;
}

function TimelineItem({ color, icon, title, dateTime, description, lastItem }: Props): JSX.Element {
  const isDark = useTimeline();

  return (
    <CustomBox
      position="relative"
      mb={3}
      sx={(theme: any) => timelineItem(theme, { lastItem, isDark })}
    >
      <CustomBox
        display="flex"
        justifyContent="center"
        alignItems="center"
        bgColor={color}
        color="white"
        width="2rem"
        height="2rem"
        borderRadius="50%"
        position="absolute"
        top="8%"
        left="2px"
        zIndex={2}
        sx={{ fontSize: ({ typography: { size } }: any) => size.sm }}
      >
        <Icon fontSize="inherit">{icon}</Icon>
      </CustomBox>
      <CustomBox ml={5.75} pt={description ? 0.7 : 0.5} lineHeight={0} maxWidth="30rem">
        <CustomTypography variant="button" fontWeight="medium" color={isDark ? "white" : "dark"}>
          {title}
        </CustomTypography>
        <CustomBox mt={0.5}>
          <CustomTypography variant="caption" color={isDark ? "secondary" : "text"}>
            {dateTime}
          </CustomTypography>
        </CustomBox>
        <CustomBox mt={2} mb={1.5}>
          {description ? (
            <CustomTypography variant="button" color={isDark ? "white" : "dark"}>
              {description}
            </CustomTypography>
          ) : null}
        </CustomBox>
      </CustomBox>
    </CustomBox>
  );
}

// Declaring default props for TimelineItem
TimelineItem.defaultProps = {
  color: "info",
  lastItem: false,
  description: "",
};

export default TimelineItem;
