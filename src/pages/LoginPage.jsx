import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import useRequest from "../hooks/useRequest";
import { FormsWrapper } from "../styles/styles";

const LoginPage = () => {
  const navigate = useNavigate();
  const { loading, setMessage, message, sendRequest } = useRequest(
    "https://collectionwebserver.onrender.com/login",
    "POST"
  );
  const onFormSubmit = (email, password) => {
    sendRequest({ email, password })
      .then(() => navigate("/"))
      .catch((err) => {
        setMessage(err);
      });
  };
  if (loading) return <p>Loading... </p>;
  return (
    <FormsWrapper>
      <LoginForm onFormSubmit={onFormSubmit} message={message} />;
    </FormsWrapper>
  );
};

export default LoginPage;
