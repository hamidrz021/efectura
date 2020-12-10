import React, { useEffect, useState } from "react";
import useCard from "../../hooks/useCard";
import useCardChange from "../../hooks/useCardChange";
import "./product.scss";

const Product = ({ data }) => {
  const [state, setState] = useState();

  const card = useCard();
  const setCard = useCardChange();
  useEffect(() => {
    if (state) {
      const otherProduct = card.filter((item) => item.id !== state.id);
      setCard([...otherProduct, state]);
    }
    // eslint-disable-next-line
  }, [state]);

  return (
    <tr className="book">
      <td>
        <img width="80px" src={data.thumbnail} alt="product thumbnail" />
        {data.name}
        <br />
        {data.author}
      </td>
      <td>{data.format}</td>
      <td>
        <input
          type="number"
          min="0"
          onChange={(e) => setState({ ...data, quantity: +e.target.value })}
          placeholder="0"
        />
      </td>
      <td>{data.price}</td>
    </tr>
  );
};

export default Product;
