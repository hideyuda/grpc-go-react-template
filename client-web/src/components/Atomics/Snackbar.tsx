import { SnackbarContext } from "utils/SnackbarContext";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Alert from "@mui/material/Alert";

export const Snackbar: React.FC = () => {
  const context = useContext(SnackbarContext);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(context.snackbarMessage != undefined);
  }, [context]);

  if (isVisible) {
    setTimeout(() => {
      setVisible(false);
      context.setSnackbarMessage(undefined);
      context.setType(undefined);
    }, 5000);
  }

  return (
    <AlertContainer
      severity={context.type}
      isVisible={isVisible}
      type={context.type}
      onTransitionEnd={() => {
        if (!isVisible) {
          context.setSnackbarMessage(undefined);
        }
      }}
    >
      {context.snackbarMessage}
    </AlertContainer>
  );
};

const AlertContainer = styled(
  ({
    severity,
    isVisible,
    type,
    children,
    onTransitionEnd,
    ...props
  }: {
    severity: "error" | "warning" | "info" | "success" | undefined;
    onTransitionEnd: () => void;
    isVisible: boolean;
    type: "error" | "warning" | "info" | "success" | undefined;
    children: React.ReactNode;
  }) => (
    <Alert severity={severity} onTransitionEnd={onTransitionEnd} {...props}>
      {children}
    </Alert>
  )
)`
  z-index: 9999;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  transition: all 300ms ease-in;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  margin-bottom: 1rem;
  border: 1px solid
    ${(props) =>
      props.type == "error"
        ? "#F37C7B"
        : props.type == "warning"
        ? "#FFB64A"
        : props.type == "info"
        ? "#1AB1F5"
        : props.type == "success"
        ? "#5CB660"
        : ""};
`;
