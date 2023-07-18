import { useState } from "react";
import { useGlobalContext } from "../contexts/GlobalContext";

const useRequest = (url, method) => {
  const { setAdmin, setToken, setUserId } = useGlobalContext();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const sendRequest = async (body, token, custom) => {
    setLoading(true);
    const res = await fetch(url || custom, {
      method,
      headers: {
        "Content-type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      body: !!body && method !== "GET" ? JSON.stringify(body) : undefined,
    });
    const data = await res.json();

    if (method === "POST" && data.token) {
      setAdmin(data.admin);
      setToken(data.token);
      setUserId(data._id);
    }
    if (data.message) setMessage(data.message);
    setLoading(false);
    return data;
  };
  return { loading, setMessage, message, sendRequest };
};
export default useRequest;
