import React, { useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import useCookieStorage from "../hooks/useCookiesStorage";
import useTheme from "../hooks/useTheme";

const GlobalContext = React.createContext({
  admin: "false",
  userId: "",
  token: null,
});

const useGlobalContext = () => {
  return useContext(GlobalContext);
};

const GlobalContextProvider = ({ children }) => {
  const { theme, toggle } = useTheme();
  const [admin, setAdmin] = useLocalStorage("admin", "false");
  const [userId, setUserId] = useLocalStorage("userId", "");
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
        theme,
        toggle,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, useGlobalContext, GlobalContextProvider };
