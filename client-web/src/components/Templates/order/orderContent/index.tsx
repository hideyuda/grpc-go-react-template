
// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";


import CustomBox from "components/Atomics/CustomBox";

// MUI examples components
import DashboardLayout from "components/Molecules/LayoutContainers/DashboardLayout";
import DashboardNavbar from "components/Molecules/Navbars/DashboardNavbar";
import Footer from "components/Molecules/Footer";
import Header from "components/Templates/order/orderContent/components/Header";
import OrderInfo from "components/Templates/order/orderContent/components/OrderInfo";
import CustomButton from "components/Atomics/CustomButton";
import CustomTypography from "components/Atomics/CustomTypography";
import { Content, ContentIdRequest, ContentUuidRequest } from "pb/content_pb";
import { ContentServiceClient } from "pb/ContentServiceClientPb";
import { SetStateAction, useEffect, useState } from "react";
import CustomInput from "components/Atomics/CustomInput";

// stripe
import Stripe from 'stripe';
import { useNavigate } from "react-router-dom";
import { OrderServiceClient } from "pb/OrderServiceClientPb";
import { Order } from "pb/order_pb";
import { useRecoilValue } from "recoil";
import { authrizedUserAtom } from "context/userAtom";

// pb

// OrderContent page components

function OrderContent(): JSX.Element {
  // navigation
  const navigate = useNavigate();

  // user 
  const user = useRecoilValue(authrizedUserAtom)

  // content
  const [content, setContent] = useState<Content.AsObject | null>(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const contentUuid = urlParams.get("uuid");
    const client = new ContentServiceClient(process.env.REACT_APP_ENVOY_URL);
    const req = new ContentUuidRequest();
    req.setUuid(contentUuid);
    client.getByUuid(req, {}, (err, res) => {
      if (err) {
        console.log(err);
      } else {
        setContent(res.toObject());
      }
    });
  }, []);

  // stripe
  const [cardNumber, setCardNumber] = useState<string>('');
  const [cardExpiryMonth, setCardExpiryMonth] = useState<number>();
  const [cardExpiryYear, setCardExpiryYear] = useState<number>();
  const [cardCvc, setCardCvc] = useState<string>('');

  const stripe = new Stripe(
    process.env.REACT_APP_STRIPE_SECRET_KEY,
    {
      apiVersion: '2022-11-15',
    }
  );

  const handleCheckout = async () => {
    const customers = await stripe.customers.list({
      email: 'customer@example.com',
    });
    if (customers.data.length === 0) {
      customers.data.push(await stripe.customers.create({
        email: 'customer@example.com',
      }));
    }
    const customer = customers.data[0];
    console.log('customers', customers);
    console.log('customer', customer);

    const paymentMethods = await stripe.paymentMethods.list({
      customer: customer.id,
      type: 'card',
    });
    console.log('paymentMethods', paymentMethods);

    if (paymentMethods.data.length === 0) {
      paymentMethods.data.push(await stripe.paymentMethods.create({
        type: 'card',
        card: {
          number: cardNumber,
          exp_month: cardExpiryMonth,
          exp_year: cardExpiryYear,
          cvc: cardCvc,
        },
      }));
    }
    const paymentMethod = paymentMethods.data[0];
    console.log('paymentMethod', paymentMethod);

    const paymentIntent = await stripe.paymentIntents.create({
      amount: 1000,
      currency: 'usd',
      customer: customer.id,
      payment_method: paymentMethod.id,
      off_session: true,
      confirm: true,
    });
    console.log(paymentIntent);

    // create order in db
    const orderClient = new OrderServiceClient(process.env.REACT_APP_ENVOY_URL);
    const orderReq = new Order();
    orderReq.setContentId(content?.id || 0);
    orderReq.setOrderUserId(user?.id || 0);
    orderReq.setService(1); // credit card
    orderReq.setPrice(content?.price || 0);
    orderReq.setAspRate(content?.aspRate || 0);

    const urlParams = new URLSearchParams(window.location.search);
    const asp = urlParams.get("invite");
    if (asp) {
      orderReq.setViaAsp(true);
    }
    orderReq.setUsedPoint(0);
    orderClient.create(orderReq, {}, (err, res) => {
      if (err) {
        console.log(err);
      } else {
        console.log(res.toObject());
      }
    });

    // navigate to success page
    navigate('/order/details?uuid=123');
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <CustomBox my={6}>
        <Grid container spacing={5} justifyContent="center">
          <Grid item xs={12} lg={8}>
            <Card>
              <CustomBox pt={2} px={2}>
                <Header />
              </CustomBox>
              <Divider />
              <CustomBox pt={1} pb={3} px={2}>
                <CustomBox mb={3}>
                  <OrderInfo content={content} />
                </CustomBox>
                <Divider />
                <CustomBox mt={3}>
                  <Grid container spacing={3}>
                    {/* <Grid item xs={12} md={6} lg={3}>
                      <TrackOrder />
                    </Grid> */}
                    <Grid item xs={12} md={6} lg={5}>
                      {/* <PaymentDetails content={content} /> */}
                      <CustomTypography variant="h6" fontWeight="medium">
                        Payment details&nbsp;&nbsp;
                        <span
                          style={{ fontSize: "12px", color: "rgba(0, 0, 0, 0.54)", fontWeight: "normal" }}
                        >
                          We do not store card details
                        </span>
                      </CustomTypography>
                      <CustomBox display="flex" alignItems="center" mt={2}>
                        <CustomInput
                          placeholder="****&nbsp;&nbsp;****&nbsp;&nbsp;****&nbsp;&nbsp;7852"
                          inputProps={{ "aria-label": "number" }}
                          fullWidth
                          onChange={(e: { target: { value: SetStateAction<string>; }; }) => setCardNumber(e.target.value)}
                        />
                      </CustomBox>
                      <CustomBox display="flex" alignItems="center" mt={2}>
                        <CustomInput
                          placeholder="MM"
                          inputProps={{ "aria-label": "mm" }}
                          sx={{ width: "200%", maxWidth: "200px" }}
                          onChange={(e: { target: { value: SetStateAction<number>; }; }) => setCardExpiryMonth(e.target.value)}
                        />
                        <CustomInput
                          placeholder="YY"
                          inputProps={{ "aria-label": "yy" }}
                          sx={{ width: "200%", maxWidth: "200px" }}
                          onChange={(e: { target: { value: SetStateAction<number>; }; }) => setCardExpiryYear(e.target.value)}
                        />
                        <CustomInput
                          placeholder="CVC"
                          inputProps={{ "aria-label": "cvc" }}
                          sx={{ width: "200%", maxWidth: "200px" }}
                          onChange={(e: { target: { value: SetStateAction<string>; }; }) => setCardCvc(e.target.value)}
                          fullWidth
                        />
                      </CustomBox>
                      {/* <CustomBox mt={3}>
                        <BillingInformation />
                      </CustomBox> */}
                    </Grid>
                    <Grid item xs={12} md={6} lg={5}>
                      {/* <Grid item xs={12} lg={3} sx={{ ml: "auto" }}> */}
                      <CustomBox mb={2}>
                        <CustomTypography variant="h6" fontWeight="medium">
                          Order Summary
                        </CustomTypography>
                      </CustomBox>
                      <CustomBox display="flex" justifyContent="space-between" mb={0.5}>
                        <CustomTypography variant="button" fontWeight="regular" color="text">
                          Product Price:
                        </CustomTypography>
                        <CustomBox ml={1}>
                          <CustomTypography variant="body2" fontWeight="medium">
                            {content?.price}
                          </CustomTypography>
                        </CustomBox>
                      </CustomBox>
                      {/* <CustomBox display="flex" justifyContent="space-between" mb={0.5}>
                        <CustomTypography variant="button" fontWeight="regular" color="text">
                          Delivery:
                        </CustomTypography>
                        <CustomBox ml={1}>
                          <CustomTypography variant="body2" fontWeight="medium">
                            $14
                          </CustomTypography>
                        </CustomBox>
                      </CustomBox>
                      <CustomBox display="flex" justifyContent="space-between" mb={0.5}>
                        <CustomTypography variant="button" fontWeight="regular" color="text">
                          Taxes:
                        </CustomTypography>
                        <CustomBox ml={1}>
                          <CustomTypography variant="body2" fontWeight="medium">
                            0
                          </CustomTypography>
                        </CustomBox>
                      </CustomBox> */}
                      <CustomBox display="flex" justifyContent="space-between" mt={3}>
                        <CustomTypography variant="body1" fontWeight="light" color="text">
                          Total:
                        </CustomTypography>
                        <CustomBox ml={1}>
                          <CustomTypography variant="body1" fontWeight="medium">
                            {content?.price}
                          </CustomTypography>
                        </CustomBox>
                      </CustomBox>
                      <CustomBox mt={3}>
                        <CustomButton
                          variant="gradient"
                          color="dark"
                          fullWidth
                          onClick={() => {
                            handleCheckout();
                          }}
                        >
                          buy
                        </CustomButton>
                      </CustomBox>
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

export default OrderContent;
