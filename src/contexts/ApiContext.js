import React, { createContext, useState } from "react";

const ApiContext = createContext([]);

export default ApiContext;

export const ApiContextProvider = ({ children }) => {
  const [state, setState] = useState([]);

  return (
    <ApiContext.Provider value={(state, setState)}>
      {children}
    </ApiContext.Provider>
  );
};
