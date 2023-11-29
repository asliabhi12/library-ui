import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContexProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({
    name: JSON.parse(localStorage.getItem("name")) || null,
    role: JSON.parse(localStorage.getItem("name")) || null,
    email: JSON.parse(localStorage.getItem("name")) || null,
    contactNumber: JSON.parse(localStorage.getItem("name")) || null,
    libId:  JSON.parse(localStorage.getItem("name")) || null,
}
  );

  const login = async (inputs) => {
    const response = await axios.post("/auth/login", inputs);
    setCurrentUser({
        name: JSON.parse(localStorage.getItem("name")) || null,
    role: JSON.parse(localStorage.getItem("name")) || null,
    email: JSON.parse(localStorage.getItem("name")) || null,
    contactNumber: JSON.parse(localStorage.getItem("name")) || null,
    libId:  JSON.parse(localStorage.getItem("name")) || null,
    });
  };

  const logout = async (inputs) => {
    await axios.post("/auth/logout");
    setCurrentUser(null);
  };

  useEffect(() => {
    localStorage.setItem("role", response.data.user.role)
        localStorage.setItem("contactNumber",response.data.user.contactNumber)
        localStorage.setItem("email", response.data.user.email)
        localStorage.setItem("name", response.data.user.name)
        localStorage.setItem("libId", response.data.user.libId)
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
