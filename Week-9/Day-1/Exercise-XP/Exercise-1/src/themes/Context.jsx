import React, { createContext, useState } from "react";

const DynamicContext = createContext();

const DynamicContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const changeMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <DynamicContext.Provider value={{ darkMode, changeMode }}>
      {children}
    </DynamicContext.Provider>
  );
};

export {DynamicContext, DynamicContextProvider};
