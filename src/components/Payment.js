import React, { useState, useEffect } from "react";
import axios from "../contextAPI/axios";
import "./payment.css";
import { useStateValue } from "../contextAPI/StateProvider";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../contextAPI/reducer";
import CheckoutProduct from "./CheckoutProduct";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../firebase.js";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const Payment = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const [proceesing, setProceesing] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState(null);
  const [successed, setSuccessed] = useState(false);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payment/create?total=${getBasketTotal(basket) * 100}`, // Stripe expect amount in subunits... paise me btao
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);

  const handlesubmit = async (event) => {
    event.preventDefault();
    setProceesing(true);
    if (elements == null) {
      return;
    }

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        // save data in firebase database
        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        // Because thing went smooth
        setProceesing(false);
        setError(null);
        setSuccessed(true);

        dispatch({
          type: "EMPTY_THE_BASKET",
        });

        // redirect to your ORDER page
        navigate("/order", { replace: true });
      });
  };

  const onChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h2>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h2>

        {/* Address Check */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>Flat 503, Coral Reefs Appartment</p>
            <p> Rau, Indore, MP</p>
          </div>
        </div>

        {/* Item Review */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review Items</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        {/* Payment method */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>

          <div className="payment__details">
            <form onSubmit={handlesubmit}>
              <CardElement onChange={onChange} />
              <div className="payment__price__container">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <h4>Order Total: {value}</h4>
                    </>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"₹ "}
                />
              </div>

              <button
                type="submit"
                disabled={proceesing || disabled || successed}
              >
                <span>{proceesing ? <p>"Proceessing"</p> : "Buy Now"}</span>
              </button>

              {/* Error */}
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
