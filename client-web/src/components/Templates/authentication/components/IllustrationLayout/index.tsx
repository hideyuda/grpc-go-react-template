
import { ReactNode } from "react";

// @mui material components
import Grid from "@mui/material/Grid";


import CustomBox from "components/Atomics/CustomBox";
import CustomTypography from "components/Atomics/CustomTypography";

// MUI examples components
import DefaultNavbar from "components/Molecules/Navbars/DefaultNavbar";
import PageLayout from "components/Molecules/LayoutContainers/PageLayout";

// MUI page layout routes
import pageRoutes from "page.routes";

// MUI context
import { useMaterialUIController } from "context";

// Declaring props types for IllustrationLayout
interface Props {
  header?: ReactNode;
  title?: string;
  description?: string;
  children: ReactNode;
  illustration?: string;
}

function IllustrationLayout({
  header,
  title,
  description,
  illustration,
  children,
}: Props): JSX.Element {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  return (
    <PageLayout background="white">
      <DefaultNavbar
        routes={pageRoutes}
        action={{
          type: "external",
          route: "https://spaceai.jp/",
          label: "buy now",
          color: "info",
        }}
      />
      <Grid
        container
        sx={{
          backgroundColor: ({ palette: { background, white } }) =>
            darkMode ? background.default : white.main,
        }}
      >
        <Grid item xs={12} lg={6}>
          <CustomBox
            display={{ xs: "none", lg: "flex" }}
            width="calc(100% - 2rem)"
            height="calc(100vh - 2rem)"
            borderRadius="lg"
            ml={2}
            mt={2}
            sx={{ backgroundImage: `url(${illustration})` }}
          />
        </Grid>
        <Grid item xs={11} sm={8} md={6} lg={4} xl={3} sx={{ mx: "auto" }}>
          <CustomBox display="flex" flexDirection="column" justifyContent="center" height="100vh">
            <CustomBox py={3} px={3} textAlign="center">
              {!header ? (
                <>
                  <CustomBox mb={1} textAlign="center">
                    <CustomTypography variant="h4" fontWeight="bold">
                      {title}
                    </CustomTypography>
                  </CustomBox>
                  <CustomTypography variant="body2" color="text">
                    {description}
                  </CustomTypography>
                </>
              ) : (
                header
              )}
            </CustomBox>
            <CustomBox p={3}>{children}</CustomBox>
          </CustomBox>
        </Grid>
      </Grid>
    </PageLayout>
  );
}

// Declaring default props for IllustrationLayout
IllustrationLayout.defaultProps = {
  header: "",
  title: "",
  description: "",
  illustration: "",
};

export default IllustrationLayout;
