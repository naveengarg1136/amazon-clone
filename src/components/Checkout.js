import React from "react";
import "./checkout.css";
import banner from "../image/banner.jpg";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "../contextAPI/StateProvider";

const Checkout = () => {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img className="checkout__ad" src={banner} alt="" />
        <div>
          <h2 className="checkout__title">
            Your Shopping Cart {basket.length === 0 && " is empty."}
          </h2>

          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}

          {/* basketItem */}
          {/* basketItem */}
          {/* basketItem */}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
