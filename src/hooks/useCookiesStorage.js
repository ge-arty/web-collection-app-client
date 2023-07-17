import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const useCookiesStorage = (storageKey, fallback) => {
  const [value, setValue] = useState(Cookies.get(storageKey) || fallback);

  useEffect(() => {
    Cookies.set(storageKey, value);
  }, [storageKey, value]);

  return [value, setValue];
};

export default useCookiesStorage;
