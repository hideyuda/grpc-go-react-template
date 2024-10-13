// @mui material components
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { Theme } from "@mui/material/styles";


import CustomBox from "components/Atomics/CustomBox";
import CustomTypography from "components/Atomics/CustomTypography";

// MUI Base Styles
import typography from "assets/theme/base/typography";

function Footer({ light }: { light?: boolean }): JSX.Element {
  const { size } = typography;

  return (
    <CustomBox position="absolute" width="100%" bottom={0} py={4}>
      <Container>
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
            color={light ? "white" : "text"}
            fontSize={size.sm}
          >
            &copy; {new Date().getFullYear()}
            <Link href="https://ai-st.art" target="_blank">
              <CustomTypography variant="button" fontWeight="medium" color={light ? "white" : "dark"}>
                &nbsp;AI Start&nbsp;
              </CustomTypography>
            </Link>
            All rights reserved.
          </CustomBox>
          <CustomBox
            component="ul"
            sx={({ breakpoints }: Theme) => ({
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
            <CustomBox component="li" pr={2} lineHeight={1}>
              <Link href="https://ai-st.art/" target="_blank">
                <CustomTypography
                  variant="button"
                  fontWeight="regular"
                  color={light ? "white" : "dark"}
                >
                  AI Start
                </CustomTypography>
              </Link>
            </CustomBox>
            <CustomBox component="li" px={2} lineHeight={1}>
              <Link href="https://ai-st.art/presentation" target="_blank">
                <CustomTypography
                  variant="button"
                  fontWeight="regular"
                  color={light ? "white" : "dark"}
                >
                  About Us
                </CustomTypography>
              </Link>
            </CustomBox>
            <CustomBox component="li" px={2} lineHeight={1}>
              <Link href="https://ai-st.art/blog" target="_blank">
                <CustomTypography
                  variant="button"
                  fontWeight="regular"
                  color={light ? "white" : "dark"}
                >
                  Blog
                </CustomTypography>
              </Link>
            </CustomBox>
            <CustomBox component="li" pl={2} lineHeight={1}>
              <Link href="https://ai-st.art/license" target="_blank">
                <CustomTypography
                  variant="button"
                  fontWeight="regular"
                  color={light ? "white" : "dark"}
                >
                  License
                </CustomTypography>
              </Link>
            </CustomBox>
          </CustomBox>
        </CustomBox>
      </Container>
    </CustomBox>
  );
}

// Declaring default props for Footer
Footer.defaultProps = {
  light: false,
};

export default Footer;
