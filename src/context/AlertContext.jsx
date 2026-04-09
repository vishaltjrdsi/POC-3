import { createContext, useContext, useState } from "react";

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState({
    message: "",
    type: "success",
    visible: false,
  });

  const showAlert = (message, type) => {
    setAlert({ message, type, visible: true });

    setTimeout(() => {
      setAlert((prev) => ({ ...prev, visible: false }));
    }, 3000);
  };

  const hideAlert = () => {
    setAlert((prev) => ({ ...prev, visible: false }));
  };

  return (
    <AlertContext.Provider value={{ alert, showAlert, hideAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export const useAlert = () => useContext(AlertContext);