
import { useState, ReactNode } from "react";

// @mui material components
import Fade from "@mui/material/Fade";


import CustomBox from "components/Atomics/CustomBox";

// Custom styles for the CustomAlert
import CustomAlertRoot from "components/Atomics/CustomAlert/CustomAlertRoot";
import CustomAlertCloseIcon from "components/Atomics/CustomAlert/CustomAlertCloseIcon";

// Declaring props types for CustomAlert
interface Props {
  color?: "primary" | "secondary" | "info" | "success" | "warning" | "error" | "light" | "dark";
  dismissible?: boolean;
  children: ReactNode;
  [key: string]: any;
}

function CustomAlert({ color, dismissible, children, ...rest }: Props): JSX.Element | null {
  const [alertStatus, setAlertStatus] = useState("mount");

  const handleAlertStatus = () => setAlertStatus("fadeOut");

  // The base template for the alert
  const alertTemplate: any = (mount: boolean = true) => (
    <Fade in={mount} timeout={300}>
      <CustomAlertRoot ownerState={{ color }} {...rest}>
        <CustomBox display="flex" alignItems="center" color="white">
          {children}
        </CustomBox>
        {dismissible ? (
          <CustomAlertCloseIcon onClick={mount ? handleAlertStatus : undefined}>
            &times;
          </CustomAlertCloseIcon>
        ) : null}
      </CustomAlertRoot>
    </Fade>
  );

  switch (true) {
    case alertStatus === "mount":
      return alertTemplate();
    case alertStatus === "fadeOut":
      setTimeout(() => setAlertStatus("unmount"), 400);
      return alertTemplate(false);
    default:
      alertTemplate();
      break;
  }

  return null;
}

// Declaring default props for CustomAlert
CustomAlert.defaultProps = {
  color: "info",
  dismissible: false,
};

export default CustomAlert;
