
// react-routers components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";
import Icon from "@mui/material/Icon";

// MUI components
import CustomBox from "components/Atomics/CustomBox";
import CustomTypography from "components/Atomics/CustomTypography";

// MUI Base Styles
import colors from "assets/theme/base/colors";
import typography from "assets/theme/base/typography";
import { User } from "pb/user_pb";

// Declaring props types for ProfileInfoCard
interface Props {
  title: string;
  description: string;
  info: {
    [key: string]: string;
  };
  social: {
    [key: string]: any;
  }[];
  // action: {
  //   route: string;
  //   tooltip: string;
  // };
  shadow?: boolean;
  [key: string]: any;
  user?: User.AsObject;
}

function ProfileInfoCard({ title, description, info, social, shadow, user }: Props): JSX.Element {
  const labels: string[] = [];
  const values: string[] = [];
  const { socialMediaColors } = colors;
  const { size } = typography;

  // Convert this form `objectKey` of the object key in to this `object key`
  Object.keys(info).forEach((el) => {
    if (el.match(/[A-Z\s]+/)) {
      const uppercaseLetter = Array.from(el).find((i) => i.match(/[A-Z]+/));
      const newElement = el.replace(uppercaseLetter, ` ${uppercaseLetter.toLowerCase()}`);

      labels.push(newElement);
    } else {
      labels.push(el);
    }
  });

  // Push the object values into the values array
  Object.values(info).forEach((el) => values.push(el));

  // Render the card info items
  const renderItems = labels.map((label, key) => (
    <CustomBox key={label} display="flex" py={1} pr={2}>
      <CustomTypography variant="button" fontWeight="bold" textTransform="capitalize">
        {label}: &nbsp;
      </CustomTypography>
      <CustomTypography variant="button" fontWeight="regular" color="text">
        &nbsp;{values[key]}
      </CustomTypography>
    </CustomBox>
  ));

  // Render the card social media icons
  const renderSocial = social.map(({ link, icon, color }) => (
    <CustomBox
      key={color}
      component="a"
      href={link}
      target="_blank"
      rel="noreferrer"
      fontSize={size.lg}
      color={socialMediaColors[color].main}
      pr={1}
      pl={0.5}
      lineHeight={1}
    >
      {icon}
    </CustomBox>
  ));

  return (
    <Card sx={{ height: "100%", boxShadow: !shadow && "none" }}>
      <CustomBox display="flex" justifyContent="space-between" alignItems="center" pt={2} px={2}>
        <CustomTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          {title}
        </CustomTypography>
        {/* <CustomTypography component={Link} to={action.route} variant="body2" color="secondary">
          {user?.uuid === user?.uuid && <Tooltip title={action.tooltip} placement="top"><Icon>edit</Icon></Tooltip>}
        </CustomTypography> */}
      </CustomBox>
      <CustomBox p={2}>
        <CustomBox mb={2} lineHeight={1}>
          <CustomTypography variant="button" color="text" fontWeight="light">
            {description}
          </CustomTypography>
        </CustomBox>
        <CustomBox opacity={0.3}>
          <Divider />
        </CustomBox>
        {user?.uuid === user?.uuid &&
          <CustomBox>
            {renderItems}
          </CustomBox>
        }
        <CustomBox display="flex" py={1} pr={2}>
          <CustomTypography variant="button" fontWeight="bold" textTransform="capitalize">
            social: &nbsp;
          </CustomTypography>
          {renderSocial}
        </CustomBox>
      </CustomBox>
    </Card>
  );
}

// Declaring default props for ProfileInfoCard
ProfileInfoCard.defaultProps = {
  shadow: true,
};

export default ProfileInfoCard;
