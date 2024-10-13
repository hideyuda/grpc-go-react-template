
import { ReactNode, FC, forwardRef, createContext, useContext, useMemo } from "react";


import CustomBox from "components/Atomics/CustomBox";
import CustomPaginationItemRoot from "./CustomPaginationItemRoot";

// The Pagination main context
const Context = createContext<any>(null);

// Declare props types for CustomPagination
interface Props {
  item?: boolean;
  variant?: "gradient" | "contained";
  color?:
    | "white"
    | "primary"
    | "secondary"
    | "info"
    | "success"
    | "warning"
    | "error"
    | "light"
    | "dark";
  size?: "small" | "medium" | "large";
  active?: boolean;
  children: ReactNode;
  [key: string]: any;
}

const CustomPagination: FC<Props | any> = forwardRef(
  ({ item, variant, color, size, active, children, ...rest }, ref) => {
    const context: any = useContext(Context);
    const paginationSize = context ? context.size : undefined;

    const providerValue = useMemo(
      () => ({
        variant,
        color,
        size,
      }),
      [variant, color, size]
    );

    return (
      <Context.Provider value={providerValue}>
        {item ? (
          <CustomPaginationItemRoot
            {...rest}
            ref={ref}
            variant={active ? context.variant : "outlined"}
            color={active ? context.color : "secondary"}
            iconOnly
            circular
            ownerState={{ variant, active, paginationSize }}
          >
            {children}
          </CustomPaginationItemRoot>
        ) : (
          <CustomBox
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            sx={{ listStyle: "none" }}
          >
            {children}
          </CustomBox>
        )}
      </Context.Provider>
    );
  }
);

// Declaring default props for CustomPagination
CustomPagination.defaultProps = {
  item: false,
  variant: "gradient",
  color: "info",
  size: "medium",
  active: false,
};

export default CustomPagination;
