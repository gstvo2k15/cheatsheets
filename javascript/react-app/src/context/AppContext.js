import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, setState] = useState({
    user: null,
    isAuthenticated: false,
  });

  const login = (user) => {
    setState({ user, isAuthenticated: true });
  };

  const logout = () => {
    setState({ user: null, isAuthenticated: false });
  };

  return (
    <AppContext.Provider value={{ state, login, logout }}>
      {children}
    </AppContext.Provider>
  );
};
