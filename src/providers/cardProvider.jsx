import React from "react";

export const CardProvider = React.createContext();
export const SetCardProvicer = React.createContext();

const AppCardProvider = ({ children }) => {
  const [state, setState] = React.useState([]);

  return (
    <CardProvider.Provider value={state}>
      <SetCardProvicer.Provider value={setState}>
        {children}
      </SetCardProvicer.Provider>
    </CardProvider.Provider>
  );
};

export default AppCardProvider;
