import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [stsLogin, setStsLogin] = useState("Login");

  useEffect(() => {
    const token = localStorage.getItem("ctd_token");
    console.log("Token no contexto: " + token);
    if(token == null)
      setStsLogin("Login");
    else
      setStsLogin("Logout");
  }, []);
  
  function saveName(nome) {
    localStorage.setItem("ctd_nome", nome);
  }

  function saveToken(token) {
    localStorage.setItem("ctd_token", token);
  }

  function removeUserStorage() {
    localStorage.removeItem("ctd_nome");
    localStorage.removeItem("ctd_token");
  }

  function setEstadoLogin(login){
    setStsLogin(login);
  }

  return (
    <AuthContext.Provider
      value={{ saveName, removeUserStorage, saveToken, stsLogin, setEstadoLogin }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;