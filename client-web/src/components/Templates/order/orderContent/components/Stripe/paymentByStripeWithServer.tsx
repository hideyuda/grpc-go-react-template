import React, { useState } from "react"
import { CardElement, Elements, useElements, useStripe } from "@stripe/react-stripe-js"
import { Form } from "formik"
import { loadStripe } from "@stripe/stripe-js"

function PaymentByStripeWithServer() {

  const stripe = useStripe()
  const elements = useElements()
  const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY || "");

  const [clientSecret, setClientSecret] = useState("")
  const [errorMsg, setErrorMsg] = useState("")
  const [processing, setProcessing] = useState(false)
  const [success, setSuccess] = useState(false)

  // useEffect(() => {
  // async function getClientSecret(total) {
  //   try {
  //     const { data } = await axios.post("/api/payment/create", { total: hogehoge })
  //     setClientSecret(data.clientSecret)
  //   } catch (error) {
  //     setErrorMsg(error.message)
  //   }
  // }
  // getClientSecret(total)
  // }, [total])

  async function paymentHandler(e: { preventDefault: () => void }) {
    e.preventDefault()
    if (!stripe || !elements) {
      return
    }
    setProcessing(true)
    const cardElement = elements.getElement(CardElement);
    if (!cardElement) { return }
    await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement,
      }
    })
      .then(({ }) => {
        // console.log(paymentIntent)
        setErrorMsg("")
        setProcessing(false)
        setSuccess(true)
      })
      .catch((error: { message: React.SetStateAction<string> }) => {
        setErrorMsg(error.message)
        setProcessing(false)
        setSuccess(false)
      })
  }

  return (
    <Elements stripe={stripePromise}>
      <div>
        <Form onSubmit={paymentHandler}>
          <CardElement />
          {errorMsg && <div className="errorMsg">{errorMsg}</div>}
          <button disabled={!stripe || !elements}>Pay Now</button>
        </Form>
      </div>
    </Elements>
  )
}

export default PaymentByStripeWithServer;