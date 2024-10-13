import { createContext, useState } from "react";

type Props = {
  progress?: number;
  setProgress: (type?: number) => void;
};

export const FileUploadProgressContext = createContext<Props>({
  setProgress: () => {},
});

export const useFileUploadProgressContext = (): Props => {
  const [progress, setProgress] = useState<number | undefined>(undefined);

  return {
    progress,
    setProgress,
  };
};
