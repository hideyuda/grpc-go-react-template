
import CustomBox from "components/Atomics/CustomBox";
import CustomTypography from "components/Atomics/CustomTypography";

// MUI Base Styles
import borders from "assets/theme/base/borders";

// Images
import CustomInput from "components/Atomics/CustomInput";

// react
import { SetStateAction, useState } from 'react';

// stripe
import Stripe from 'stripe';

// pb
import { Content } from 'pb/content_pb';

const PaymentDetails = (
  props: {
    content: Content
  }
) => {
  // const [sessionId, setSessionId] = useState(null);
  // // // user
  // const user = useRecoilValue(authrizedUserAtom)

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
    //   const session = await stripe.checkout.sessions.create({
    //     payment_method_types: ['card'],
    //     // payment_method_options: {
    //     //   wechat_pay: {
    //     //     client: 'web',
    //     //   },
    //     // },
    //     mode: 'payment',
    //     line_items: [
    //       {
    //         quantity: 1,
    //         price_data: {
    //           currency: 'jpy',
    //           product_data: {
    //             name: 'T-shirt',
    //             description: 'Comfortable cotton t-shirt',
    //           },
    //           unit_amount: 100,
    //         },
    //       },
    //     ],
    //     success_url: process.env.REACT_APP_BASE_URL + '/payment/success',
    //     cancel_url: process.env.REACT_APP_BASE_URL + '/payment/cancel',
    //   });
    //   // Set the sessionId prop on the StripeCheckout component
    //   // to initiate the payment process
    //   setSessionId(session.id);
    //   console.log('session is', session.id);

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
  }
  const { borderWidth, borderColor } = borders;

  return (
    <>
      <CustomTypography variant="h6" fontWeight="medium">
        Payment details&nbsp;&nbsp;
        <span
          style={{ fontSize: "12px", color: "rgba(0, 0, 0, 0.54)", fontWeight: "normal" }}
        >
          We do not store card details
        </span>
      </CustomTypography>
      {/* <CustomBox
        border={`${borderWidth[1]} solid ${borderColor}`}
        borderRadius="lg"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        p={3}
        mt={2}
      > */}
      {/* <CustomBox component="img" src={masterCardLogo} alt="master card" width="10%" mr={2} /> */}
      <CustomBox display="flex" alignItems="center" mt={2}>
        <CustomInput
          placeholder="****&nbsp;&nbsp;****&nbsp;&nbsp;****&nbsp;&nbsp;7852"
          inputProps={{ "aria-label": "mm" }}
          // sx={{ width: "00%", maxWidth: "100px" }}
          onChange={(e: { target: { value: SetStateAction<string>; }; }) => setCardNumber(e.target.value)}
        />
      </CustomBox>
      {/* <Tooltip title="We do not store card details" placement="bottom">
          <CustomButton variant="outlined" color="secondary" size="small" iconOnly circular>
            <Icon sx={{ cursor: "pointer" }}>priority_high</Icon>
          </CustomButton>
        </Tooltip> */}
      {/* </CustomBox> */}
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
        />
      </CustomBox>
      {/* <CustomBox mt={2}>
        <CustomInput
          placeholder="Name on card"
          inputProps={{ "aria-label": "name on card" }}
          sx={{ width: "100%", maxWidth: "200px" }}
        />
      </CustomBox> */}
    </>
  );
}

export default PaymentDetails;
