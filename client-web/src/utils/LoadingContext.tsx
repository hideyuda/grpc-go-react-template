import { createContext, useState } from "react";

type Props = {
  isShow?: boolean;
  setIsShow: (type?: boolean) => void;
};

export const LoadingContext = createContext<Props>({
  setIsShow: () => {},
});

export const useLoadingContext = (): Props => {
  const [isShow, setIsShow] = useState<boolean | undefined>(undefined);

  return {
    isShow,
    setIsShow,
  };
};
