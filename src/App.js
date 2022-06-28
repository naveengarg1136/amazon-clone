import "./App.css";
import React, { useEffect } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import { auth } from "./firebase";
import { useStateValue } from "./contextAPI/StateProvider";
import Payment from "./components/Payment";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import Orders from "./components/Orders";

const stripePromise = loadStripe(
  "pk_test_51LFAhASDcbdXG3CeFbUhJc0y6doovGUEaCVwQ1IS6DLBTSu0V5sdRKOpjAfoCqjbSkRRBT35Xk1w7UnDVrBULLHd00kRQuPkM7"
);

function App() {
  const [{ basket }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={[<Header />, <Home />]} />
          <Route path="/checkout" element={[<Header />, <Checkout />]} />
          <Route path="/order" element={[<Header />, <Orders />]} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/payment"
            element={[
              <Header />,
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>,
            ]}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
