import React from "react";
import { useAlert } from "../../context/AlertContext"; 
import "./GlobalAlert.css";

const GlobalAlert = () => {
  const { alert } = useAlert(); // ✅ useAlert hook

  if (!alert?.message) return null;

  const alertClass = {
    success: "alert-success",
    error: "alert-error",
    warning: "alert-warning",
  }[alert.type] || "alert-success";

  return <div className={`global-alert ${alertClass}`}>{alert.message}</div>;
};

export default GlobalAlert;