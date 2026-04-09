import React, { createContext, useContext, useState, useRef } from "react";

export const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState({ type: "", message: "" });
  const timeoutRef = useRef(null); // keep track of timeout

  const showAlert = (type, message) => {
    // Clear previous timer if exists
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    setAlert({ type, message });

    // Auto-hide after 3 seconds
    timeoutRef.current = setTimeout(() => {
      setAlert({ type: "", message: "" });
      timeoutRef.current = null;
    }, 3000);
  };

  return (
    <AlertContext.Provider value={{ alert, showAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export const useAlert = () => useContext(AlertContext);