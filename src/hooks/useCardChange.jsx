import React from "react";
import { SetCardProvicer } from "../providers/cardProvider";

function useCardChange() {
  return React.useContext(SetCardProvicer);
}

export default useCardChange;
