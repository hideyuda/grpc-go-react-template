
import { useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";


import CustomBox from "components/Atomics/CustomBox";
import CustomTypography from "components/Atomics/CustomTypography";
import CustomAlert from "components/Atomics/CustomAlert";
import CustomButton from "components/Atomics/CustomButton";
import CustomSnackbar from "components/Atomics/CustomSnackbar";

// MUI examples components
import DashboardLayout from "components/Molecules/LayoutContainers/DashboardLayout";
import DashboardNavbar from "components/Molecules/Navbars/DashboardNavbar";
import Footer from "components/Molecules/Footer";

function Notifications(): JSX.Element {
  const [successSB, setSuccessSB] = useState<boolean>(false);
  const [infoSB, setInfoSB] = useState<boolean>(false);
  const [warningSB, setWarningSB] = useState<boolean>(false);
  const [errorSB, setErrorSB] = useState<boolean>(false);

  const openSuccessSB = () => setSuccessSB(true);
  const closeSuccessSB = () => setSuccessSB(false);
  const openInfoSB = () => setInfoSB(true);
  const closeInfoSB = () => setInfoSB(false);
  const openWarningSB = () => setWarningSB(true);
  const closeWarningSB = () => setWarningSB(false);
  const openErrorSB = () => setErrorSB(true);
  const closeErrorSB = () => setErrorSB(false);

  const alertContent = (name: string) => (
    <CustomTypography variant="body2" color="white">
      A simple {name} alert with{" "}
      <CustomTypography component="a" href="#" variant="body2" fontWeight="medium" color="white">
        an example link
      </CustomTypography>
      . Give it a click if you like.
    </CustomTypography>
  );

  const renderSuccessSB = (
    <CustomSnackbar
      color="success"
      icon="check"
      title="MUI"
      content="Hello, world! This is a notification message"
      dateTime="11 mins ago"
      open={successSB}
      onClose={closeSuccessSB}
      close={closeSuccessSB}
      bgWhite
    />
  );

  const renderInfoSB = (
    <CustomSnackbar
      icon="notifications"
      title="MUI"
      content="Hello, world! This is a notification message"
      dateTime="11 mins ago"
      open={infoSB}
      onClose={closeInfoSB}
      close={closeInfoSB}
    />
  );

  const renderWarningSB = (
    <CustomSnackbar
      color="warning"
      icon="star"
      title="MUI"
      content="Hello, world! This is a notification message"
      dateTime="11 mins ago"
      open={warningSB}
      onClose={closeWarningSB}
      close={closeWarningSB}
      bgWhite
    />
  );

  const renderErrorSB = (
    <CustomSnackbar
      color="error"
      icon="warning"
      title="MUI"
      content="Hello, world! This is a notification message"
      dateTime="11 mins ago"
      open={errorSB}
      onClose={closeErrorSB}
      close={closeErrorSB}
      bgWhite
    />
  );

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <CustomBox mt={6} mb={3}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} lg={8}>
            <Card>
              <CustomBox p={2}>
                <CustomTypography variant="h5">Alerts</CustomTypography>
              </CustomBox>
              <CustomBox pt={2} px={2}>
                <CustomAlert color="primary" dismissible>
                  {alertContent("primary")}
                </CustomAlert>
                <CustomAlert color="secondary" dismissible>
                  {alertContent("secondary")}
                </CustomAlert>
                <CustomAlert color="success" dismissible>
                  {alertContent("success")}
                </CustomAlert>
                <CustomAlert color="error" dismissible>
                  {alertContent("error")}
                </CustomAlert>
                <CustomAlert color="warning" dismissible>
                  {alertContent("warning")}
                </CustomAlert>
                <CustomAlert color="info" dismissible>
                  {alertContent("info")}
                </CustomAlert>
                <CustomAlert color="light" dismissible>
                  {alertContent("light")}
                </CustomAlert>
                <CustomAlert color="dark" dismissible>
                  {alertContent("dark")}
                </CustomAlert>
              </CustomBox>
            </Card>
          </Grid>

          <Grid item xs={12} lg={8}>
            <Card>
              <CustomBox p={2} lineHeight={0}>
                <CustomTypography variant="h5">Notifications</CustomTypography>
                <CustomTypography variant="button" color="text" fontWeight="regular">
                  Notifications on this page use Toasts from Bootstrap. Read more details here.
                </CustomTypography>
              </CustomBox>
              <CustomBox p={2}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6} lg={3}>
                    <CustomButton variant="gradient" color="success" onClick={openSuccessSB} fullWidth>
                      success notification
                    </CustomButton>
                    {renderSuccessSB}
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3}>
                    <CustomButton variant="gradient" color="info" onClick={openInfoSB} fullWidth>
                      info notification
                    </CustomButton>
                    {renderInfoSB}
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3}>
                    <CustomButton variant="gradient" color="warning" onClick={openWarningSB} fullWidth>
                      warning notification
                    </CustomButton>
                    {renderWarningSB}
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3}>
                    <CustomButton variant="gradient" color="error" onClick={openErrorSB} fullWidth>
                      error notification
                    </CustomButton>
                    {renderErrorSB}
                  </Grid>
                </Grid>
              </CustomBox>
            </Card>
          </Grid>
        </Grid>
      </CustomBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Notifications;
