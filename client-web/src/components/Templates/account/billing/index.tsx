
// @mui material components
import Grid from "@mui/material/Grid";


import CustomBox from "components/Atomics/CustomBox";


import MasterCard from "components/Molecules/Cards/MasterCard";
import DefaultInfoCard from "components/Molecules/Cards/InfoCards/DefaultInfoCard";

// Billing page components
import BaseLayout from "components/Templates/account/components/BaseLayout";
import PaymentMethod from "components/Templates/account/billing/components/PaymentMethod";
import Invoices from "components/Templates/account/billing/components/Invoices";
import BillingInformation from "components/Templates/account/billing/components/BillingInformation";
import Transactions from "components/Templates/account/billing/components/Transactions";

function Billing(): JSX.Element {
  return (
    <BaseLayout stickyNavbar>
      <CustomBox mt={4}>
        <CustomBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={8}>
              <Grid container spacing={3}>
                <Grid item xs={12} xl={6}>
                  <MasterCard number={4562112245947852} holder="jack peterson" expires="11/22" />
                </Grid>
                <Grid item xs={12} md={6} xl={3}>
                  <DefaultInfoCard
                    icon="account_balance"
                    title="salary"
                    description="Belong Interactive"
                    value="+$2000"
                  />
                </Grid>
                <Grid item xs={12} md={6} xl={3}>
                  <DefaultInfoCard
                    icon="paypal"
                    title="paypal"
                    description="Freelance Payment"
                    value="$455.00"
                  />
                </Grid>
                <Grid item xs={12}>
                  <PaymentMethod />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Invoices />
            </Grid>
          </Grid>
        </CustomBox>
        <CustomBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={7}>
              <BillingInformation />
            </Grid>
            <Grid item xs={12} md={5}>
              <Transactions />
            </Grid>
          </Grid>
        </CustomBox>
      </CustomBox>
    </BaseLayout>
  );
}

export default Billing;
