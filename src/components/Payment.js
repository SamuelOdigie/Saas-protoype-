import { useState } from "react";
import {
  CardElement,
  useElements,
  useStripe,
  Elements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Button, Card, Form } from "react-bootstrap";

const stripePromise = loadStripe(
  "pk_test_51MoTcqAAXu4ENNBEwj45rYG4toH4DQmIzvGuExpYxoZmUCwI0KZIj9xoHCrUMYP9055oLSHuKSiv1Jhh0Wz13uLx00uv3ffZiG"
);

const CheckoutForm = () => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setLoading(true);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
      billing_details: {
        name: "Jenny Rosen",
      },
    });

    setLoading(false);

    if (error) {
      setErrorMessage(error.message);
    } else {
      try {
        const response = await fetch("/charge", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            amount: 10,
            id: paymentMethod.id,
          }),
        });

        if (response.ok) {
          console.log("Payment successful!");
        }
      } catch (error) {
        console.log("Error", error);
      }
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Card className="p-4">
        <h2 className="mb-4">Payment Details</h2>
        <CardElement />
        <Button
          type="submit"
          disabled={!stripe || loading}
          className="w-100 mt-4"
        >
          {loading ? "Loading..." : "Pay £10"}
        </Button>
        {errorMessage && <div className="text-danger mt-4">{errorMessage}</div>}
      </Card>
    </Form>
  );
};

const Payment = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="w-50">
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
