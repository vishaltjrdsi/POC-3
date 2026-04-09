import { Routes, Route } from "react-router-dom";
import { LoginCallback } from "@okta/okta-react";
import Dashboard from "../pages/Dashboard";
import ProtectedRoute from "../components/ProtectedRoute";

export const AppRoutes = () => {
  return (
    <Routes>
      {/* ✅ Use Okta callback */}
      <Route path="/login/callback" element={<LoginCallback />} />

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};