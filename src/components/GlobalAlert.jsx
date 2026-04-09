import React from "react";
import { useAlert } from "../context/AlertContext";

const GlobalAlert = () => {
  const { alert, hideAlert } = useAlert();

  if (!alert.visible) return null;

  const getStyles = () => {
    switch (alert.type) {
      case "success":
        return {
          backgroundColor: "#4CAF50",
          icon: "✅",
        };
      case "error":
        return {
          backgroundColor: "#F44336",
          icon: "❌",
        };
      case "warning":
        return {
          backgroundColor: "#FF9800",
          icon: "⚠️",
        };
      default:
        return {
          backgroundColor: "#333",
          icon: "",
        };
    }
  };

  const { backgroundColor, icon } = getStyles();

  return (
    <div style={styles.container}>
      <div style={{ ...styles.alertBox, backgroundColor }}>
        <span style={styles.icon}>{icon}</span>
        <span style={styles.message}>{alert.message}</span>

        <button onClick={hideAlert} style={styles.closeBtn}>
          ✖
        </button>
      </div>
    </div>
  );
};

export default GlobalAlert;

const styles = {
  container: {
    position: "fixed",
    top: "20px",
    right: "20px",
    zIndex: 9999,
  },
  alertBox: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    color: "#fff",
    padding: "12px 16px",
    borderRadius: "8px",
    minWidth: "250px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
  },
  icon: {
    fontSize: "18px",
  },
  message: {
    flex: 1,
    fontSize: "14px",
  },
  closeBtn: {
    background: "transparent",
    border: "none",
    color: "#fff",
    cursor: "pointer",
    fontSize: "16px",
  },
};