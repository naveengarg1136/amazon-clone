import React from "react";
import CurrencyFormat from "react-currency-format";
import "./checkoutProduct.css";

const Price = ({ amount }) => {
  return (
    <>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p className="checkoutProduct__price">
              <strong>{value}</strong>
            </p>
          </>
        )}
        decimalScale={2}
        value={amount}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹ "}
      />
    </>
  );
};

export default Price;
