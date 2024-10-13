
import { useState, useEffect, useMemo, JSXElementConstructor, Key, ReactElement } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation} from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Icon from "@mui/material/Icon";


import CustomBox from "components/Atomics/CustomBox";

// MUI exampless
import Sidenav from "components/Molecules/Sidenav";
import Configurator from "components/Molecules/Configurator";

// MUI themes
import theme from "assets/theme";
import themeRTL from "assets/theme/theme-rtl";

// MUI Dark Mode themes
import themeDark from "assets/theme-dark";
import themeDarkRTL from "assets/theme-dark/theme-rtl";

// RTL plugins
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

// MUI routes
import routes from "routes";

// MUI contexts
import { useMaterialUIController, setMiniSidenav, setOpenConfigurator } from "context";

// Images
import brandWhite from "assets/images/logo-ct.png";
import brandDark from "assets/images/logo-ct-dark.png";
import { useRecoilState } from "recoil";
import { authrizedUserAtom } from "context/userAtom";
import { onAuthStateChanged } from "firebase/auth";
import Firebase from "infra/Firebase";
import { UserServiceClient } from "pb/UserServiceClientPb";
import { User } from "pb/user_pb";
import SignInWithGoogle from "components/Templates/authentication/signIn/google";
import { FileUploadProgressContext, useFileUploadProgressContext } from "utils/FileUploadProgressContext";
import { LoadingContext, useLoadingContext } from "utils/LoadingContext";
import { SnackbarContext, useSnackbarContext } from "utils/SnackbarContext";
import { ErrorPageContext, useErrorPageContext } from "utils/ErrorPageContext";


export default function App() {
  // RTL cache
  // const provider = new GoogleAuthProvider();
  const instance = Firebase.instance
  const auth = instance.auth;

  useEffect(() => {
    const checkLogin = async () => {
      onAuthStateChanged(auth, (googleUser) => {
        if (googleUser) {
          const client = new UserServiceClient(process.env.REACT_APP_ENVOY_URL);
          const req = new User();
          req.setName(googleUser.displayName);
          req.setEmail(googleUser.email);
          req.setPhoneNumber(googleUser.phoneNumber);
          req.setPhotoUrl(googleUser.photoURL);
          req.setFirebaseId(googleUser.uid);

          client.signInWithGoogle(req, {}, (err, res) => {
            if (err) {
              console.error(err);
              return;
            }
            setUser(res.toObject());
            // console.log("signed in");
          });

        } else {
          console.log("signed out");
        }
      });
    }
    checkLogin();
  }, []);

  // user state
  const [user, setUser] = useRecoilState(authrizedUserAtom);

  // const user = useRecoilValue(authrizedUserAtom);
  // console.log('current user is ', user)


  // MUI controller
  const [controller, dispatch] = useMaterialUIController();
  const {
    miniSidenav,
    direction,
    layout,
    openConfigurator,
    sidenavColor,
    transparentSidenav,
    whiteSidenav,
    darkMode,
  } = controller;
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const [rtlCache, setRtlCache] = useState(null);
  const { pathname } = useLocation();

  // Cache for the rtl
  useMemo(() => {
    const pluginRtl: any = rtlPlugin;
    const cacheRtl = createCache({
      key: "rtl",
      stylisPlugins: [pluginRtl],
    });

    setRtlCache(cacheRtl);
  }, []);

  // Open sidenav when mouse enter on mini sidenav
  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  // Close sidenav when mouse leave mini sidenav
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  // Change the openConfigurator state
  const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);

  // Setting the dir attribute for the body element
  useEffect(() => {
    document.body.setAttribute("dir", direction);
  }, [direction]);

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes: any[]): any =>
    allRoutes.map(
      (route: {
        collapse: any;
        route: string;
        component: ReactElement<any, string | JSXElementConstructor<any>>;
        key: Key;
        auth: string;
      }) => {
        if (route.collapse) {
          return getRoutes(route.collapse);
        }
        if (route.auth === 'authOnly' && !user) {
          return <Route path={route.route} element={<SignInWithGoogle />} key={route.key} />;
        }

        if (route.route) {
          return <Route path={route.route} element={route.component} key={route.key} />;
        }

        return null;
      }
    );

  const configsButton = (
    <CustomBox
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="3.25rem"
      height="3.25rem"
      bgColor="white"
      shadow="sm"
      borderRadius="50%"
      position="fixed"
      right="2rem"
      bottom="2rem"
      zIndex={99}
      color="dark"
      sx={{ cursor: "pointer" }}
      onClick={handleConfiguratorOpen}
    >
      <Icon fontSize="small" color="inherit">
        settings
      </Icon>
    </CustomBox>
  );

  return direction === "rtl" ? (
    <CacheProvider value={rtlCache}>
      <ThemeProvider theme={darkMode ? themeDarkRTL : themeRTL}>
        <CssBaseline />
        <ErrorPageContext.Provider value={useErrorPageContext()}>
          <LoadingContext.Provider value={useLoadingContext()}>
            <FileUploadProgressContext.Provider
              value={useFileUploadProgressContext()}
            >
              <SnackbarContext.Provider value={useSnackbarContext()}>
        {layout === "dashboard" && (
          <>
            <Sidenav
              color={sidenavColor}
              brand={(transparentSidenav && !darkMode) || whiteSidenav ? brandDark : brandWhite}
              brandName="AI Market"
              routes={routes}
              onMouseEnter={handleOnMouseEnter}
              onMouseLeave={handleOnMouseLeave}
            />
            <Configurator />
            {configsButton}
          </>
        )}
        {layout === "vr" && <Configurator />}
        <Routes>
          {getRoutes(routes)}
          <Route path="*" element={<Navigate to="/" />} />
                </Routes>
              </SnackbarContext.Provider>
            </FileUploadProgressContext.Provider>
          </LoadingContext.Provider>
        </ErrorPageContext.Provider>
      </ThemeProvider>
    </CacheProvider>
  ) : (
    <ThemeProvider theme={darkMode ? themeDark : theme}>
      <CssBaseline />
      {layout === "dashboard" && (
        <>
          <Sidenav
            color={sidenavColor}
              brand={(transparentSidenav && !darkMode) || whiteSidenav ? brandDark : brandWhite}
              brandName="AI Market"
            routes={routes}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
          />
          <Configurator />
          {configsButton}
        </>
      )}
      {layout === "vr" && <Configurator />}
        {layout === "search" &&
          <>
            <Sidenav
              color={sidenavColor}
              brand={(transparentSidenav && !darkMode) || whiteSidenav ? brandDark : brandWhite}
              brandName="AI Market"
              routes={routes}
              onMouseEnter={handleOnMouseEnter}
              onMouseLeave={handleOnMouseLeave}
            /><Configurator />
          </>
        }
        <Routes>
          {getRoutes(routes)}
      </Routes>
    </ThemeProvider>
  );
}
