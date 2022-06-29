import React from "react";
import { useStateValue } from "../contextAPI/StateProvider";
import "./product.css";
import star from "../image/rating samll start2.png";
import blankStar from "../image/Blankrating.png";
import Price from "./Price";

const Product = (props) => {
  const { id, title, image, price, rating } = props;
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <img className="product__img" src={image} alt="" />
        <p>{title}</p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <img src={star} alt="" />
            ))}
          {Array(5 - rating)
            .fill()
            .map((_, i) => (
              <img src={blankStar} alt="" />
            ))}
        </div>
        <p className="product__price">
          <Price amount={price} />
        </p>
        <button onClick={addToBasket}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
