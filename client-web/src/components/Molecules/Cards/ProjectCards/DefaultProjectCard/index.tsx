
// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Tooltip from "@mui/material/Tooltip";

// MUI components
import CustomBox from "components/Atomics/CustomBox";
import CustomTypography from "components/Atomics/CustomTypography";
import CustomButton from "components/Atomics/CustomButton";
import CustomAvatar from "components/Atomics/CustomAvatar";

// Declaring props types for DefaultProjectCard
interface Props {
  image: string;
  label: string;
  title: string;
  description: string;
  action: {
    type: "external" | "internal";
    route: string;
    color:
      | "primary"
      | "secondary"
      | "info"
      | "success"
      | "warning"
      | "error"
      | "light"
      | "dark"
      | "white";
    label: string;
  };
  authors?: {
    image: string;
    name: string;
  }[];
  [key: string]: any;
}

function DefaultProjectCard({
  image,
  label,
  title,
  description,
  action,
  authors,
}: Props): JSX.Element {
  const renderAuthors = authors.map(({ image: media, name }) => (
    <Tooltip key={name} title={name} placement="bottom">
      <CustomAvatar
        src={media}
        alt={name}
        size="xs"
        sx={({ borders: { borderWidth }, palette: { white } }) => ({
          border: `${borderWidth[2]} solid ${white.main}`,
          cursor: "pointer",
          position: "relative",
          ml: -1.25,

          "&:hover, &:focus": {
            zIndex: "10",
          },
        })}
      />
    </Tooltip>
  ));

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "transparent",
        boxShadow: "none",
        overflow: "visible",
      }}
    >
      <CustomBox position="relative" width="100.25%" shadow="xl" borderRadius="xl">
        <CardMedia
          src={image}
          component="img"
          title={title}
          sx={{
            maxWidth: "100%",
            margin: 0,
            boxShadow: ({ boxShadows: { md } }) => md,
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </CustomBox>
      <CustomBox mt={1} mx={0.5}>
        <CustomTypography variant="button" fontWeight="regular" color="text" textTransform="capitalize">
          {label}
        </CustomTypography>
        <CustomBox mb={1}>
          {action.type === "internal" ? (
            <CustomTypography
              component={Link}
              to={action.route}
              variant="h5"
              textTransform="capitalize"
            >
              {title}
            </CustomTypography>
          ) : (
            <CustomTypography
              component="a"
              href={action.route}
              target="_blank"
              rel="noreferrer"
              variant="h5"
              textTransform="capitalize"
            >
              {title}
            </CustomTypography>
          )}
        </CustomBox>
        <CustomBox mb={3} lineHeight={0}>
          <CustomTypography variant="button" fontWeight="light" color="text">
            {description}
          </CustomTypography>
        </CustomBox>
        <CustomBox display="flex" justifyContent="space-between" alignItems="center">
          {action.type === "internal" ? (
            <CustomButton
              component={Link}
              to={action.route}
              variant="outlined"
              size="small"
              color={action.color}
            >
              {action.label}
            </CustomButton>
          ) : (
            <CustomButton
              component="a"
              href={action.route}
              target="_blank"
              rel="noreferrer"
              variant="outlined"
              size="small"
              color={action.color}
            >
              {action.label}
            </CustomButton>
          )}
          <CustomBox display="flex">{renderAuthors}</CustomBox>
        </CustomBox>
      </CustomBox>
    </Card>
  );
}

// Declaring default props for DefaultProjectCard
DefaultProjectCard.defaultProps = {
  authors: [],
};

export default DefaultProjectCard;
