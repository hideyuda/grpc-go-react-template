
// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import { Theme } from "@mui/material/styles";


import CustomBox from "components/Atomics/CustomBox";
import CustomTypography from "components/Atomics/CustomTypography";
import CustomButton from "components/Atomics/CustomButton";

// Invoice page components
import BaseLayout from "components/Templates/account/components/BaseLayout";

// Images
import logoCT from "assets/images/logo-ct.png";
import logoCTDark from "assets/images/logo-ct-dark.png";

// MUI context
import { useMaterialUIController } from "context";

function Invoice(): JSX.Element {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  const borderBottom = {
    borderBottom: ({ borders: { borderWidth }, palette: { light } }: Theme) =>
      `${borderWidth[1]} solid ${light.main}`,
  };

  return (
    <BaseLayout stickyNavbar>
      <CustomBox mt={{ xs: 4, md: 10 }} mb={{ xs: 4, md: 8 }}>
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={10} md={8}>
            <Card>
              {/* Invoice header */}
              <CustomBox p={3}>
                <Grid container justifyContent="space-between">
                  <Grid item xs={12} md={4}>
                    <CustomBox
                      component="img"
                      src={darkMode ? logoCT : logoCTDark}
                      width="25%"
                      p={1}
                      mb={1}
                    />
                    <CustomTypography variant="h6" fontWeight="medium">
                      St. Independence Embankment, 050105 Bucharest, Romania
                    </CustomTypography>
                    <CustomBox mt={1} mb={2}>
                      <CustomTypography
                        display="block"
                        variant="body2"
                        color={darkMode ? "text" : "secondary"}
                      >
                        tel: +4 (074) 1090873
                      </CustomTypography>
                    </CustomBox>
                  </Grid>
                  <Grid item xs={12} md={7} lg={3}>
                    <CustomBox width="100%" textAlign={{ xs: "left", md: "right" }} mt={6}>
                      <CustomBox mt={1}>
                        <CustomTypography variant="h6" fontWeight="medium">
                          Billed to: John Doe
                        </CustomTypography>
                      </CustomBox>
                      <CustomBox mb={1}>
                        <CustomTypography variant="body2" color={darkMode ? "text" : "secondary"}>
                          4006 Locust View Drive
                          <br />
                          San Francisco CA
                          <br />
                          California
                        </CustomTypography>
                      </CustomBox>
                    </CustomBox>
                  </Grid>
                </Grid>
                <CustomBox mt={{ xs: 5, md: 10 }}>
                  <Grid container justifyContent="space-between">
                    <Grid item xs={12} md={4}>
                      <CustomTypography
                        variant="h6"
                        color={darkMode ? "text" : "secondary"}
                        fontWeight="regular"
                      >
                        Invoice no
                      </CustomTypography>
                      <CustomTypography variant="h5" fontWeight="medium">
                        #0453119
                      </CustomTypography>
                    </Grid>
                    <Grid item xs={12} md={7} lg={5}>
                      <CustomBox
                        width="100%"
                        display="flex"
                        flexDirection={{ xs: "column", md: "row" }}
                        alignItems={{ xs: "flex-start", md: "center" }}
                        textAlign={{ xs: "left", md: "right" }}
                        mt={{ xs: 3, md: 0 }}
                      >
                        <CustomBox width="50%">
                          <CustomTypography
                            variant="h6"
                            color={darkMode ? "text" : "secondary"}
                            fontWeight="regular"
                          >
                            Invoice date:
                          </CustomTypography>
                        </CustomBox>
                        <CustomBox width="50%">
                          <CustomTypography variant="h6" fontWeight="medium">
                            06/03/2019
                          </CustomTypography>
                        </CustomBox>
                      </CustomBox>
                      <CustomBox
                        width="100%"
                        display="flex"
                        flexDirection={{ xs: "column", md: "row" }}
                        alignItems={{ xs: "flex-start", md: "center" }}
                        textAlign={{ xs: "left", md: "right" }}
                      >
                        <CustomBox width="50%">
                          <CustomTypography
                            variant="h6"
                            color={darkMode ? "text" : "secondary"}
                            fontWeight="regular"
                          >
                            Due date:
                          </CustomTypography>
                        </CustomBox>
                        <CustomBox width="50%">
                          <CustomTypography variant="h6" fontWeight="medium">
                            11/03/2019
                          </CustomTypography>
                        </CustomBox>
                      </CustomBox>
                    </Grid>
                  </Grid>
                </CustomBox>
              </CustomBox>

              {/* Invoice table */}
              <CustomBox p={3}>
                <CustomBox width="100%" overflow="auto">
                  <Table sx={{ minWidth: "32rem" }}>
                    <CustomBox component="thead">
                      <TableRow>
                        <CustomBox
                          component="th"
                          width={{ xs: "45%", md: "50%" }}
                          py={1.5}
                          px={1}
                          textAlign="left"
                          sx={borderBottom}
                        >
                          <CustomTypography variant="h6" color="text" fontWeight="medium">
                            Item
                          </CustomTypography>
                        </CustomBox>
                        <CustomBox
                          component="th"
                          py={1.5}
                          pl={3}
                          pr={1}
                          textAlign="left"
                          sx={borderBottom}
                        >
                          <CustomTypography variant="h6" color="text" fontWeight="medium">
                            Qty
                          </CustomTypography>
                        </CustomBox>
                        <CustomBox
                          component="th"
                          py={1.5}
                          pl={3}
                          pr={1}
                          textAlign="left"
                          sx={borderBottom}
                        >
                          <CustomTypography variant="h6" color="text" fontWeight="medium">
                            Rate
                          </CustomTypography>
                        </CustomBox>
                        <CustomBox
                          component="th"
                          py={1.5}
                          pl={3}
                          pr={1}
                          textAlign="left"
                          sx={borderBottom}
                        >
                          <CustomTypography variant="h6" color="text" fontWeight="medium">
                            Amount
                          </CustomTypography>
                        </CustomBox>
                      </TableRow>
                    </CustomBox>
                    <TableBody>
                      <TableRow>
                        <CustomBox component="td" textAlign="left" p={1} sx={borderBottom}>
                          <CustomTypography variant="body2" color="text" fontWeight="regular">
                            Premium Support
                          </CustomTypography>
                        </CustomBox>
                        <CustomBox
                          component="td"
                          textAlign="left"
                          py={1}
                          pr={1}
                          pl={3}
                          sx={borderBottom}
                        >
                          <CustomTypography variant="body2" color="text" fontWeight="regular">
                            1
                          </CustomTypography>
                        </CustomBox>
                        <CustomBox
                          component="td"
                          textAlign="left"
                          py={1}
                          pr={1}
                          pl={3}
                          sx={borderBottom}
                        >
                          <CustomTypography variant="body2" color="text" fontWeight="regular">
                            $ 9.00
                          </CustomTypography>
                        </CustomBox>
                        <CustomBox
                          component="td"
                          textAlign="left"
                          py={1}
                          pr={1}
                          pl={3}
                          sx={borderBottom}
                        >
                          <CustomTypography variant="body2" color="text" fontWeight="regular">
                            $ 9.00
                          </CustomTypography>
                        </CustomBox>
                      </TableRow>
                      <TableRow>
                        <CustomBox component="td" textAlign="left" p={1} sx={borderBottom}>
                          <CustomTypography variant="body2" color="text" fontWeight="regular">
                            MUI 2 PRO
                          </CustomTypography>
                        </CustomBox>
                        <CustomBox
                          component="td"
                          textAlign="left"
                          py={1}
                          pr={1}
                          pl={3}
                          sx={borderBottom}
                        >
                          <CustomTypography variant="body2" color="text" fontWeight="regular">
                            3
                          </CustomTypography>
                        </CustomBox>
                        <CustomBox
                          component="td"
                          textAlign="left"
                          py={1}
                          pr={1}
                          pl={3}
                          sx={borderBottom}
                        >
                          <CustomTypography variant="body2" color="text" fontWeight="regular">
                            $ 100.00
                          </CustomTypography>
                        </CustomBox>
                        <CustomBox
                          component="td"
                          textAlign="left"
                          py={1}
                          pr={1}
                          pl={3}
                          sx={borderBottom}
                        >
                          <CustomTypography variant="body2" color="text" fontWeight="regular">
                            $ 300.00
                          </CustomTypography>
                        </CustomBox>
                      </TableRow>
                      <TableRow>
                        <CustomBox component="td" textAlign="left" p={1}>
                          <CustomTypography variant="body2" color="text" fontWeight="regular">
                            Parts for service
                          </CustomTypography>
                        </CustomBox>
                        <CustomBox component="td" textAlign="left" py={1} pr={1} pl={3}>
                          <CustomTypography variant="body2" color="text" fontWeight="regular">
                            1
                          </CustomTypography>
                        </CustomBox>
                        <CustomBox component="td" textAlign="left" py={1} pr={1} pl={3}>
                          <CustomTypography variant="body2" color="text" fontWeight="regular">
                            $ 89.00
                          </CustomTypography>
                        </CustomBox>
                        <CustomBox component="td" textAlign="left" py={1} pr={1} pl={3}>
                          <CustomTypography variant="body2" color="text" fontWeight="regular">
                            $ 89.00
                          </CustomTypography>
                        </CustomBox>
                      </TableRow>
                      <TableRow>
                        <CustomBox component="td" textAlign="left" p={1} sx={borderBottom} />
                        <CustomBox
                          component="td"
                          textAlign="left"
                          py={1}
                          pr={1}
                          pl={3}
                          sx={borderBottom}
                        />
                        <CustomBox
                          component="td"
                          textAlign="left"
                          py={1}
                          pr={1}
                          pl={3}
                          sx={borderBottom}
                        >
                          <CustomTypography variant="h5">Total</CustomTypography>
                        </CustomBox>
                        <CustomBox
                          component="td"
                          textAlign="left"
                          py={1}
                          pr={1}
                          pl={3}
                          sx={borderBottom}
                        >
                          <CustomTypography variant="h5">$ 698</CustomTypography>
                        </CustomBox>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CustomBox>
              </CustomBox>

              {/* Invoice footer */}
              <CustomBox p={3} mt={7}>
                <Grid container>
                  <Grid item xs={12} lg={5}>
                    <CustomTypography variant="h5" fontWeight="medium">
                      Thank you!
                    </CustomTypography>
                    <CustomBox mt={1} mb={2} lineHeight={0}>
                      <CustomTypography variant="button" color={darkMode ? "text" : "secondary"}>
                        If you encounter any issues related to the invoice you can contact us at:
                      </CustomTypography>
                    </CustomBox>
                    <CustomTypography
                      component="span"
                      variant="h6"
                      fontWeight="regular"
                      color={darkMode ? "text" : "secondary"}
                    >
                      email:{" "}
                      <CustomTypography component="span" variant="h6" fontWeight="regular">
                        support@spaceai.jp
                      </CustomTypography>
                    </CustomTypography>
                  </Grid>
                  <Grid item xs={12} lg={7}>
                    <CustomBox
                      width="100%"
                      height={{ xs: "auto", md: "100%" }}
                      display="flex"
                      justifyContent={{ xs: "flex-start", md: "flex-end" }}
                      alignItems="flex-end"
                      mt={{ xs: 2, md: 0 }}
                    >
                      <CustomButton variant="gradient" color="info" onClick={() => window.print()}>
                        print
                      </CustomButton>
                    </CustomBox>
                  </Grid>
                </Grid>
              </CustomBox>
            </Card>
          </Grid>
        </Grid>
      </CustomBox>
    </BaseLayout>
  );
}

export default Invoice;
