
// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";


import CustomBox from "components/Atomics/CustomBox";

// MUI examples components
import DashboardLayout from "components/Molecules/LayoutContainers/DashboardLayout";
import DashboardNavbar from "components/Molecules/Navbars/DashboardNavbar";
import Footer from "components/Molecules/Footer";

// OrderDetails page components
import Header from "components/Templates/order/orderDetails/components/Header";
import OrderInfo from "components/Templates/order/orderDetails/components/OrderInfo";
import TrackOrder from "components/Templates/order/orderDetails/components/TrackOrder";
import PaymentDetails from "components/Templates/order/orderDetails/components/PaymentDetails";
import BillingInformation from "components/Templates/order/orderDetails/components/BillingInformation";
import OrderSummary from "components/Templates/order/orderDetails/components/OrderSummary";

function OrderDetails(): JSX.Element {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <CustomBox my={6}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} lg={8}>
            <Card>
              <CustomBox pt={2} px={2}>
                <Header />
              </CustomBox>
              <Divider />
              <CustomBox pt={1} pb={3} px={2}>
                <CustomBox mb={3}>
                  <OrderInfo />
                </CustomBox>
                <Divider />
                <CustomBox mt={3}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6} lg={3}>
                      <TrackOrder />
                    </Grid>
                    <Grid item xs={12} md={6} lg={5}>
                      <PaymentDetails />
                      <CustomBox mt={3}>
                        <BillingInformation />
                      </CustomBox>
                    </Grid>
                    <Grid item xs={12} lg={3} sx={{ ml: "auto" }}>
                      <OrderSummary />
                    </Grid>
                  </Grid>
                </CustomBox>
              </CustomBox>
            </Card>
          </Grid>
        </Grid>
      </CustomBox>
      <Footer />
    </DashboardLayout>
  );
}

export default OrderDetails;
