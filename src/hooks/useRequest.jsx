import { useState } from "react";
import { useGlobalContext } from "../contexts/GlobalContext";

const useRequest = (url, method) => {
  const { setAdmin, setToken, setUserId } = useGlobalContext();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const sendRequest = async (body, token, customUrl, customMethod) => {
    setLoading(true);
    const finalUrl = url || customUrl;
    const finalMethod = customMethod || method || "GET";

    const requestOptions = {
      method: finalMethod,
      headers: {
        "Content-type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      body: !!body && finalMethod !== "GET" ? JSON.stringify(body) : undefined,
    };

    try {
      const res = await fetch(finalUrl, requestOptions);
      const data = await res.json();

      if (finalMethod === "POST" && data.token) {
        setAdmin(data.admin);
        setToken(data.token);
        setUserId(data._id);
      }

      setMessage("");
      if (data.error) setMessage(data.error);

      setLoading(false);
      return data;
    } catch (error) {
      setMessage("Error occurred during the request.");
      setLoading(false);
      return { error: "Error occurred during the request." };
    }
  };

  return { loading, setMessage, message, sendRequest };
};

export default useRequest;
