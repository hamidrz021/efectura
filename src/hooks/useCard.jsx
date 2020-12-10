import React from "react";
import { CardProvider } from "../providers/cardProvider";

function useCard() {
  return React.useContext(CardProvider);
}

export default useCard;
