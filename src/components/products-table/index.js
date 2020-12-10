import React, { useEffect, useState } from "react";
import Product from "../product";
import Card from "../card";
import { getProducts } from "../../services/cartService";
import "./products-table.scss";

const ProductsTable = () => {
  const [state, setState] = useState();
  useEffect(() => {
    getProducts().then(({ data }) => {
      setState(data);
    });
  }, []);
  return (
    <div className="wrapper">
      <table>
        <thead>
          <tr>
            <th>Shopping Badge</th>
            <th>Format</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {state?.map((item) => (
            <Product data={item} key={item.id} />
          ))}
        </tbody>
      </table>
      <Card />
    </div>
  );
};

export default ProductsTable;
