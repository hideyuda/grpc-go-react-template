
import { FC, forwardRef } from "react";


import CustomBox from "components/Atomics/CustomBox";
import CustomTypography from "components/Atomics/CustomTypography";

// declaring props types for CustomBadgeDot
interface Props {
  variant?: "gradient" | "contained";
  color?: "primary" | "secondary" | "info" | "success" | "warning" | "error" | "light" | "dark";
  size?: "xs" | "sm" | "md" | "lg";
  badgeContent: string;
  font?:
    | {
        color: string;
        weight: string;
      }
    | any;
  [key: string]: any;
}

const CustomBadgeDot: FC<Props> = forwardRef(
  ({ variant, color, size, badgeContent, font = {}, ...rest }, ref) => {
    let finalSize;
    let fontSize: any;
    let padding;

    if (size === "sm") {
      finalSize = "0.5rem";
      fontSize = "caption";
      padding = "0.45em 0.775em";
    } else if (size === "lg") {
      finalSize = "0.625rem";
      fontSize = "body2";
      padding = "0.85em 1.375em";
    } else if (size === "md") {
      finalSize = "0.5rem";
      fontSize = "button";
      padding = "0.65em 1em";
    } else {
      finalSize = "0.375rem";
      fontSize = "caption";
      padding = "0.45em 0.775em";
    }

    const validColors = [
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "light",
      "dark",
    ];

    const validColorIndex = validColors.findIndex((el) => el === color);

    return (
      <CustomBox ref={ref} display="flex" alignItems="center" p={padding} {...rest}>
        <CustomBox
          component="i"
          display="inline-block"
          width={finalSize}
          height={finalSize}
          borderRadius="50%"
          bgColor={validColors[validColorIndex]}
          variant={variant}
          mr={1}
        />
        <CustomTypography
          variant={fontSize}
          fontWeight={font.weight ? font.weight : "regular"}
          color={font.color ? font.color : "dark"}
          sx={{ lineHeight: 0 }}
        >
          {badgeContent}
        </CustomTypography>
      </CustomBox>
    );
  }
);

// Declaring default props for CustomBadgeDot
CustomBadgeDot.defaultProps = {
  variant: "contained",
  color: "info",
  size: "xs",
  font: {},
};

export default CustomBadgeDot;
