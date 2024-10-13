
import { useState, useEffect } from "react";

// react-router components
import { useLocation, Link } from "react-router-dom";

// @material-ui core components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Icon from "@mui/material/Icon";

// MUI components
import CustomBox from "components/Atomics/CustomBox";
import CustomBadge from "components/Atomics/CustomBadge";

// MUI examples components
import Breadcrumbs from "components/Molecules/Breadcrumbs";

// Custom styles for DashboardNavbar
import {
  navbar,
  navbarContainer,
  navbarRow,
  navbarIconButton,
  navbarDesktopMenu,
  navbarMobileMenu,
} from "components/Molecules/Navbars/DashboardNavbar/styles";

// MUI context
import {
  useMaterialUIController,
  setTransparentNavbar,
  setMiniSidenav,
  setOpenConfigurator,
} from "context";
import { useRecoilValue } from "recoil";
import { Theme } from "@mui/material";
import { authrizedUserAtom } from "context/userAtom";
import CustomAvatar from "components/Atomics/CustomAvatar";
import NotificationItem from "components/Molecules/Items/NotificationItem";

// Declaring prop types for DashboardNavbar
interface Props {
  absolute?: boolean;
  light?: boolean;
  isMini?: boolean;
}

function DashboardNavbar({ absolute, light, isMini }: Props): JSX.Element {
  const [navbarType, setNavbarType] = useState<
    "fixed" | "absolute" | "relative" | "static" | "sticky"
  >();
  const [controller, dispatch] = useMaterialUIController();
  const { miniSidenav, transparentNavbar, fixedNavbar, openConfigurator, darkMode } = controller;
  const [openMenu, setOpenMenu] = useState<any>(false);
  const route = useLocation().pathname.split("/").slice(1);

  // Getting the user from the recoil state
  const user = useRecoilValue(authrizedUserAtom)

  useEffect(() => {
    // Setting the navbar type
    if (fixedNavbar) {
      setNavbarType("sticky");
    } else {
      setNavbarType("static");
    }

    // A function that sets the transparent state of the navbar.
    function handleTransparentNavbar() {
      setTransparentNavbar(dispatch, (fixedNavbar && window.scrollY === 0) || !fixedNavbar);
    }

    /** 
     The event listener that's calling the handleTransparentNavbar function when 
     scrolling the window.
    */
    window.addEventListener("scroll", handleTransparentNavbar);

    // Call the handleTransparentNavbar function to set the state with the initial value.
    handleTransparentNavbar();

    // Remove event listener on cleanup
    return () => window.removeEventListener("scroll", handleTransparentNavbar);
  }, [dispatch, fixedNavbar]);

  const handleMiniSidenav = () => setMiniSidenav(dispatch, !miniSidenav);
  const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);
  const handleOpenMenu = (event: any) => setOpenMenu(event.currentTarget);
  const handleCloseMenu = () => setOpenMenu(false);

  // Render the notifications menu
  const renderMenu = () => (
    <Menu
      anchorEl={openMenu}
      anchorReference={null}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      open={Boolean(openMenu)}
      onClose={handleCloseMenu}
      sx={{ mt: 2 }}
    >
      <NotificationItem icon={<Icon>email</Icon>} title="Check new messages" />
      {/* <NotificationItem icon={<Icon>podcasts</Icon>} title="Manage Podcast sessions" /> */}
      <NotificationItem icon={<Icon>shopping_cart</Icon>} title="Payment successfully completed" />
    </Menu>
  );

  // Styles for the navbar icons
  const iconsStyle = ({
    palette: { dark, white, text },
    functions: { rgba },
  }: {
    palette: any;
    functions: any;
  }) => ({
    color: () => {
      let colorValue = light || darkMode ? white.main : dark.main;

      if (transparentNavbar && !light) {
        colorValue = darkMode ? rgba(text.main, 0.6) : text.main;
      }

      return colorValue;
    },
  });

  const avatarStyles: { [key: string]: any } = {
    border: ({ borders: { borderWidth }, palette: { white } }: Theme) =>
      `${borderWidth[2]} solid ${white.main}`,
    cursor: "pointer",
    position: "relative",
    ml: -1.5,

    "&:hover, &:focus": {
      zIndex: "10",
    },
  };

  return (
    <AppBar
      position={absolute ? "absolute" : navbarType}
      color="inherit"
      sx={(theme) => navbar(theme, { transparentNavbar, absolute, light, darkMode })}
    >
      <Toolbar sx={navbarContainer}>
        <CustomBox color="inherit" mb={{ xs: 1, md: 0 }} sx={(theme) => navbarRow(theme, { isMini })}>
          <Breadcrumbs icon="home" title={route[route.length - 1]} route={route} light={light} />
          <IconButton sx={navbarDesktopMenu} onClick={handleMiniSidenav} size="small" disableRipple>
            <Icon fontSize="medium" sx={iconsStyle}>
              {miniSidenav ? "menu_open" : "menu"}
            </Icon>
          </IconButton>
        </CustomBox>
        {isMini ? null : (
          <CustomBox sx={(theme) => navbarRow(theme, { isMini })} display="flex" alignItems="center">
            <CustomBox color={light ? "white" : "inherit"}>
              <IconButton
                size="small"
                disableRipple
                color="inherit"
                sx={navbarMobileMenu}
                onClick={handleMiniSidenav}
              >
                <Icon sx={iconsStyle} fontSize="medium">
                  {miniSidenav ? "menu_open" : "menu"}
                </Icon>
              </IconButton>
              <Link to={`/profile?uuid=${user?.uuid}`}>
                {user?.photoUrl ? (
                  <IconButton sx={navbarIconButton} size="small" disableRipple>
                    <CustomAvatar
                      src={user?.photoUrl}
                      sx={avatarStyles}
                      size="xs" />
                  </IconButton>
                ) : (
                  <IconButton sx={navbarIconButton} size="small" disableRipple>
                    <Icon sx={iconsStyle}>account_circle</Icon>
                  </IconButton>
                )}
              </Link>
              <Link to="/settings">
                <IconButton
                  size="small"
                  disableRipple
                  color="inherit"
                  sx={navbarIconButton}
                >
                  <Icon sx={iconsStyle}>settings</Icon>
                </IconButton>
              </Link>
              <IconButton
                size="small"
                color="inherit"
                sx={navbarIconButton}
                onClick={handleOpenMenu}
              >
                <CustomBadge badgeContent={9} color="error" size="xs" circular>
                  <Icon sx={iconsStyle}>notifications</Icon>
                </CustomBadge>
              </IconButton>
            </CustomBox>
            {renderMenu()}
          </CustomBox>
        )
        }
      </Toolbar >
    </AppBar >
  );
}

// Declaring default props for DashboardNavbar
DashboardNavbar.defaultProps = {
  absolute: false,
  light: false,
  isMini: false,
};

export default DashboardNavbar;

// export const Select = ({ data }) => {

//   if (!data) {
//     return null;
//   }

//   return (
//     {
//       data?
//         <select 
//         defaultValue = {data.currentValue
//     } >
//     data.list.map((option, key) => (
//       <option value={option.value} key={key}>{option.name}</option>
//     ))
//       </select > : null
//     }
//   );
// }