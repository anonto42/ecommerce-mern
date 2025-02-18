import bcrypt from "bcryptjs";

export const ProtectedRoute = ({ children }) => {
      const data = localStorage.getItem("_store_");
      if (!data) {
        return window.location.href = "/";
      }
      const isAdmin = bcrypt.compare("admin", data);
      if (!isAdmin) {
        return window.location.href = "/";
      }

  return children
}