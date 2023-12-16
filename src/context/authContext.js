import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContexProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({
    name: localStorage.getItem("name") || null,
    role: localStorage.getItem("role") || null,
    email: localStorage.getItem("email") || null,
    contactNumber: localStorage.getItem("contactNumber") || null,
    libId: localStorage.getItem("libId") || null,
    id: localStorage.getItem("id") || null,
    user_id: localStorage.getItem("id") || 180
  });

  const login = async (values) => {
    const response = await axios.post("/login", values);

    setCurrentUser({
      name: response.data.user.name || null,
      role: response.data.user.role || null,
      email: response.data.user.email || null,
      contactNumber: response.data.user.contactNumber || null,
      libId: response.data.user.libId || null,
      id: response.data.user.id || null,
      user_id: response.data.user.id || null
    });
  };

  const logout = async () => {
    await axios.post("/logout");

    localStorage.removeItem("libId");
    localStorage.removeItem("role");
    localStorage.removeItem("contactNumber");
    localStorage.removeItem("email");
    localStorage.removeItem("name");
    localStorage.clear();
  };

  useEffect(() => {
    localStorage.setItem("role", currentUser.role);
    localStorage.setItem("contactNumber", currentUser.contactNumber);
    localStorage.setItem("email", currentUser.email);
    localStorage.setItem("name", currentUser.name);
    localStorage.setItem("libId", currentUser.libId);
    localStorage.setItem("id", currentUser.id);
    localStorage.setItem("user_id", currentUser.id)
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
