
// @mui material components
import Grid from "@mui/material/Grid";


import CustomBox from "components/Atomics/CustomBox";

// Settings page components
import BaseLayout from "components/Templates/account/components/BaseLayout";
import Sidenav from "components/Templates/account/settings/components/Sidenav";
import Header from "components/Templates/account/settings/components/Header";
import BasicInfo from "components/Templates/account/settings/components/BasicInfo";
import ChangePassword from "components/Templates/account/settings/components/ChangePassword";
import Authentication from "components/Templates/account/settings/components/Authentication";
import Accounts from "components/Templates/account/settings/components/Accounts";
import Notifications from "components/Templates/account/settings/components/Notifications";
import Sessions from "components/Templates/account/settings/components/Sessions";
import DeleteAccount from "components/Templates/account/settings/components/DeleteAccount";

function Settings(): JSX.Element {
  return (
    <BaseLayout>
      <CustomBox mt={4}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={3}>
            <Sidenav />
          </Grid>
          <Grid item xs={12} lg={9}>
            <CustomBox mb={3}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Header />
                </Grid>
                <Grid item xs={12}>
                  <BasicInfo />
                </Grid>
                <Grid item xs={12}>
                  <ChangePassword />
                </Grid>
                <Grid item xs={12}>
                  <Authentication />
                </Grid>
                <Grid item xs={12}>
                  <Accounts />
                </Grid>
                <Grid item xs={12}>
                  <Notifications />
                </Grid>
                <Grid item xs={12}>
                  <Sessions />
                </Grid>
                <Grid item xs={12}>
                  <DeleteAccount />
                </Grid>
              </Grid>
            </CustomBox>
          </Grid>
        </Grid>
      </CustomBox>
    </BaseLayout>
  );
}

export default Settings;
