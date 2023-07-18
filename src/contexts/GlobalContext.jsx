import React, { useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import useCookieStorage from "../hooks/useCookiesStorage";

const GlobalContext = React.createContext({
  admin: false,
  userId: null,
  token: null,
});

const useGlobalContext = () => {
  return useContext(GlobalContext);
};

const GlobalContextProvider = ({ children }) => {
  const [admin, setAdmin] = useLocalStorage("admin", false);
  const [userId, setUserId] = useLocalStorage("userId", null);
  const [token, setToken] = useCookieStorage("token", null);

  return (
    <GlobalContext.Provider
      value={{
        admin,
        setAdmin,
        userId,
        setUserId,
        token,
        setToken,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, useGlobalContext, GlobalContextProvider };
