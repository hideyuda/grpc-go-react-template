/* eslint-disable no-unused-vars */

import { ReactNode } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";

// MUI components
import CustomBox from "components/Atomics/CustomBox";
import CustomTypography from "components/Atomics/CustomTypography";
import CustomAvatar from "components/Atomics/CustomAvatar";

// Declaring prop types for the ComplexProjectCard
interface Props {
  color?: "primary" | "secondary" | "info" | "success" | "warning" | "error" | "dark" | "light";
  image: string;
  title: string;
  dateTime?: string;
  description: ReactNode;
  members?: string[];
  dropdown?: {
    action?: (...arg: any) => void;
    menu?: ReactNode;
  };
  [key: string]: any;
}

// Custom styles for ComplexProjectCard
function ComplexProjectCard({
  color,
  image,
  title,
  dateTime,
  description,
  members,
  dropdown,
}: Props): JSX.Element {
  const renderMembers = members.map((member, key) => {
    const memberKey = `member-${key}`;

    return (
      <CustomAvatar
        key={memberKey}
        src={member}
        alt="member profile"
        size="xs"
        sx={({ borders: { borderWidth }, palette: { white } }) => ({
          border: `${borderWidth[2]} solid ${white.main}`,
          cursor: "pointer",
          position: "relative",

          "&:not(:first-of-type)": {
            ml: -1.25,
          },

          "&:hover, &:focus": {
            zIndex: "10",
          },
        })}
      />
    );
  });

  return (
    <Card>
      <CustomBox p={2}>
        <CustomBox display="flex" alignItems="center">
          <CustomAvatar
            src={image}
            alt={title}
            size="xl"
            variant="rounded"
            bgColor={color}
            sx={{ p: 1, mt: -6, borderRadius: ({ borders: { borderRadius } }) => borderRadius.xl }}
          />
          <CustomBox ml={2} mt={-2} lineHeight={0}>
            <CustomTypography variant="h6" textTransform="capitalize" fontWeight="medium">
              {title}
            </CustomTypography>
            {members.length > -1 ? <CustomBox display="flex">{renderMembers}</CustomBox> : null}
          </CustomBox>
          {dropdown && (
            <CustomTypography
              color="secondary"
              onClick={dropdown.action}
              sx={{
                ml: "auto",
                mt: -1,
                alignSelf: "flex-start",
                py: 1.25,
              }}
            >
              <Icon sx={{ cursor: "pointer", fontWeight: "bold" }}>more_vert</Icon>
            </CustomTypography>
          )}
          {dropdown.menu}
        </CustomBox>
        <CustomBox my={2} lineHeight={1}>
          <CustomTypography variant="button" fontWeight="light" color="text">
            {description}
          </CustomTypography>
        </CustomBox>
        <Divider />
        <CustomBox display="flex" justifyContent="space-between" alignItems="center">
          {members.length > -1 ? (
            <CustomBox display="flex" flexDirection="column" lineHeight={0}>
              <CustomTypography variant="button" fontWeight="medium">
                {members.length}
              </CustomTypography>
              <CustomTypography variant="button" fontWeight="regular" color="secondary">
                Participants
              </CustomTypography>
            </CustomBox>
          ) : null}
          {dateTime ? (
            <CustomBox display="flex" flexDirection="column" lineHeight={0}>
              <CustomTypography variant="button" fontWeight="medium">
                {dateTime}
              </CustomTypography>
              <CustomTypography variant="button" fontWeight="regular" color="secondary">
                Due date
              </CustomTypography>
            </CustomBox>
          ) : null}
        </CustomBox>
      </CustomBox>
    </Card>
  );
}

// Declaring default props for ComplexProjectCard
ComplexProjectCard.defaultProps = {
  color: "dark",
  dateTime: "",
  members: [],
  dropdown: false,
};

export default ComplexProjectCard;
