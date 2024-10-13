
// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import { Theme } from "@mui/material/styles";


import CustomBox from "components/Atomics/CustomBox";
import CustomTypography from "components/Atomics/CustomTypography";

// MUI context
import { useMaterialUIController } from "context";

function Sidenav(): JSX.Element {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  const sidenavItems = [
    { icon: "person", label: "profile", href: "profile" },
    { icon: "receipt_long", label: "basic info", href: "basic-info" },
    { icon: "lock", label: "change password", href: "change-password" },
    { icon: "security", label: "2FA", href: "2fa" },
    { icon: "badge", label: "accounts", href: "accounts" },
    { icon: "campaign", label: "notifications", href: "notifications" },
    { icon: "settings_applications", label: "sessions", href: "sessions" },
    { icon: "delete", label: "delete account", href: "delete-account" },
  ];

  const renderSidenavItems = sidenavItems.map(({ icon, label, href }, key) => {
    const itemKey = `item-${key}`;

    return (
      <CustomBox key={itemKey} component="li" pt={key === 0 ? 0 : 1}>
        <CustomTypography
          component="a"
          href={`#${href}`}
          variant="button"
          fontWeight="regular"
          textTransform="capitalize"
          sx={({
            borders: { borderRadius },
            functions: { pxToRem },
            palette: { light },
            transitions,
          }: Theme) => ({
            display: "flex",
            alignItems: "center",
            borderRadius: borderRadius.md,
            padding: `${pxToRem(10)} ${pxToRem(16)}`,
            transition: transitions.create("background-color", {
              easing: transitions.easing.easeInOut,
              duration: transitions.duration.shorter,
            }),

            "&:hover": {
              backgroundColor: light.main,
            },
          })}
        >
          <CustomBox mr={1.5} lineHeight={1} color={darkMode ? "white" : "dark"}>
            <Icon fontSize="small">{icon}</Icon>
          </CustomBox>
          {label}
        </CustomTypography>
      </CustomBox>
    );
  });

  return (
    <Card
      sx={{
        borderRadius: ({ borders: { borderRadius } }) => borderRadius.lg,
        position: "sticky",
        top: "1%",
      }}
    >
      <CustomBox
        component="ul"
        display="flex"
        flexDirection="column"
        p={2}
        m={0}
        sx={{ listStyle: "none" }}
      >
        {renderSidenavItems}
      </CustomBox>
    </Card>
  );
}

export default Sidenav;
