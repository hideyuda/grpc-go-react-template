/**
=========================================================
* MUI - v1.0.1
=========================================================

* Product Page: https://www.ai-st.art/
* Copyright 2022 Creative Tim (https://www.spaceai.jp)

Coded by www.spaceai.jp

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Link from "@mui/material/Link";
import Icon from "@mui/material/Icon";

// MUI components
import CustomBox from "components/Atomics/CustomBox";
import CustomTypography from "components/Atomics/CustomTypography";

// MUI Base Styles
import typography from "assets/theme/base/typography";

// Declaring props types for Footer
interface Props {
  company?: {
    href: string;
    name: string;
  };
  links?: {
    href: string;
    name: string;
  }[];
  [key: string]: any;
}

function Footer({ company, links }: Props): JSX.Element {
  const { href, name } = company;
  const { size } = typography;

  const renderLinks = () =>
    links.map((link) => (
      <CustomBox key={link.name} component="li" px={2} lineHeight={1}>
        <Link href={link.href} target="_blank">
          <CustomTypography variant="button" fontWeight="regular" color="text">
            {link.name}
          </CustomTypography>
        </Link>
      </CustomBox>
    ));

  return (
    <CustomBox
      width="100%"
      display="flex"
      flexDirection={{ xs: "column", lg: "row" }}
      justifyContent="space-between"
      alignItems="center"
      px={1.5}
    >
      <CustomBox
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        color="text"
        fontSize={size.sm}
        px={1.5}
      >
        &copy; {new Date().getFullYear()}, {name} All rights reserved.
        {/* <CustomBox fontSize={size.md} color="text" mb={-0.5} mx={0.25}>
          <Icon color="inherit" fontSize="inherit">
            favorite
          </Icon>
        </CustomBox>
        by
        <Link href={href} target="_blank">
          <CustomTypography variant="button" fontWeight="medium">
            &nbsp;{name}&nbsp;
          </CustomTypography>
        </Link>
        for a better web. */}
      </CustomBox> 
      <CustomBox
        component="ul"
        sx={({ breakpoints }) => ({
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          listStyle: "none",
          mt: 3,
          mb: 0,
          p: 0,

          [breakpoints.up("lg")]: {
            mt: 0,
          },
        })}
      >
        {renderLinks()}
      </CustomBox>
    </CustomBox>
  );
}

// Declaring default props for Footer
Footer.defaultProps = {
  company: { href: "https://ai-st.art/", name: "AI Start" },
  links: [
    { href: "https:/ai-st.art/", name: "AI Start" },
    // {href: "https://ai-st.art/", name: "About Us" },
    // {href: "https://ai-st.art/blog", name: "Blog" },
    // { href: "https://ai-st.art/license", name: "License" },
  ],
};

export default Footer;
