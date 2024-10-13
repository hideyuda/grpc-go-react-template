/* eslint-disable react/default-props-match-prop-types */

import { ReactNode } from "react";

// @mui material components
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import Icon from "@mui/material/Icon";
import Divider from "@mui/material/Divider";
import Fade from "@mui/material/Fade";
import { SnackbarProps } from "@mui/material";


import CustomBox from "components/Atomics/CustomBox";
import CustomTypography from "components/Atomics/CustomTypography";

// Custom styles for the CustomSnackbar
import CustomSnackbarIconRoot from "components/Atomics/CustomSnackbar/CustomSnackbarIconRoot";

// MUI context
import { useMaterialUIController } from "context";

// Declaring props types for CustomSnackbar
interface Props extends SnackbarProps {
  color?: "primary" | "secondary" | "info" | "success" | "warning" | "error" | "dark" | "light";
  icon: ReactNode;
  title: string;
  dateTime: string;
  content: string;
  close: () => void;
  bgWhite?: boolean;
  [key: string]: any;
}

function CustomSnackbar({
  color,
  icon,
  title,
  dateTime,
  content,
  close,
  bgWhite,
  ...rest
}: Props): JSX.Element {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  let titleColor: any;
  let dateTimeColor: any;
  let dividerColor: any;

  if (bgWhite) {
    titleColor = color;
    dateTimeColor = "dark";
    dividerColor = false;
  } else if (color === "light") {
    titleColor = darkMode ? "inherit" : "dark";
    dateTimeColor = darkMode ? "inherit" : "text";
    dividerColor = false;
  } else {
    titleColor = "white";
    dateTimeColor = "white";
    dividerColor = true;
  }

  return (
    <Snackbar
      TransitionComponent={Fade}
      autoHideDuration={5000}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      {...rest}
      action={
        <IconButton size="small" aria-label="close" color="inherit" onClick={close}>
          <Icon fontSize="small">close</Icon>
        </IconButton>
      }
    >
      <CustomBox
        variant={bgWhite ? "contained" : "gradient"}
        bgColor={bgWhite ? "white" : color}
        minWidth="21.875rem"
        maxWidth="100%"
        shadow="md"
        borderRadius="md"
        p={1}
        sx={{
          backgroundColor: ({ palette }: { palette: any }) =>
            darkMode ? palette.background.card : palette[color] || palette.white.main,
        }}
      >
        <CustomBox
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          color="dark"
          p={1.5}
        >
          <CustomBox display="flex" alignItems="center" lineHeight={0}>
            <CustomSnackbarIconRoot fontSize="small" ownerState={{ color, bgWhite }}>
              {icon}
            </CustomSnackbarIconRoot>
            <CustomTypography
              variant="button"
              fontWeight="medium"
              color={titleColor}
              textGradient={bgWhite}
            >
              {title}
            </CustomTypography>
          </CustomBox>
          <CustomBox display="flex" alignItems="center" lineHeight={0}>
            <CustomTypography variant="caption" color={dateTimeColor}>
              {dateTime}
            </CustomTypography>
            <Icon
              sx={{
                color: ({ palette: { dark, white } }) =>
                  (bgWhite && !darkMode) || color === "light" ? dark.main : white.main,
                fontWeight: ({ typography: { fontWeightBold } }) => fontWeightBold,
                cursor: "pointer",
                marginLeft: 2,
                transform: "translateY(-1px)",
              }}
              onClick={close}
            >
              close
            </Icon>
          </CustomBox>
        </CustomBox>
        <Divider sx={{ margin: 0 }} light={dividerColor} />
        <CustomBox
          p={1.5}
          sx={{
            fontSize: ({ typography: { size } }) => size.sm,
            color: ({ palette }: { palette: any }) => {
              let colorValue =
                bgWhite || color === "light" ? palette.text.main : palette.white.main;

              if (darkMode) {
                colorValue = color === "light" ? "inherit" : palette.white.main;
              }

              return colorValue;
            },
          }}
        >
          {content}
        </CustomBox>
      </CustomBox>
    </Snackbar>
  );
}

// Setting default values for the props of CustomSnackbar
CustomSnackbar.defaultProps = {
  bgWhite: false,
  color: "info",
};

export default CustomSnackbar;
