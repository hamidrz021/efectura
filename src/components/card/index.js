import React, { useEffect, useState } from "react";
import useCard from "../../hooks/useCard";
import "./card.scss";

const Card = () => {
  const [state, setState] = useState({ subTotal: 0, shipping: 0, total: 0 });
  const cardData = useCard();

  useEffect(() => {
    let subTotal = 0;
    let shipping = 0;
    let total = 0;
    for (let item of cardData) {
      subTotal += (item.price * item.quantity);
      if (item.quantity) {
        shipping += item.shipping;
      }
      total = subTotal + shipping;
    }
    setState({ subTotal, shipping, total });
  }, [cardData]);

  return (
    <div className="card">
      <p>
        <span>Subtotal:</span>
        <span>{state.subTotal}</span>
      </p>
      <p>
        <span>Shipping:</span>
        <span>{state.shipping}</span>
      </p>
      <p className="total">
        <span>Total(tax included):</span>
        <span>{state.total}</span>
      </p>
      <button className="btn">
        <span>checkout</span>
        <span>{state.total}</span>
      </button>
    </div>
  );
};

export default Card;
