import { createContext, useState } from "react";

type Props = {
  snackbarMessage?: string;
  type?: "error" | "warning" | "info" | "success";
  setSnackbarMessage: (message?: string) => void;
  setType: (type?: "error" | "warning" | "info" | "success") => void;
};

export const SnackbarContext = createContext<Props>({
  setSnackbarMessage: () => {},
  setType: () => {},
});

export const useSnackbarContext = (): Props => {
  const [snackbarMessage, setSnackbarMessage] = useState<string | undefined>(undefined);
  const [type, setType] = useState<("error" | "warning" | "info" | "success") | undefined>(
    undefined
  );

  return {
    snackbarMessage,
    type,
    setSnackbarMessage,
    setType,
  };
};
