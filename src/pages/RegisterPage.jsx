import RegisterForm from "../components/RegisterForm";
import { FormsWrapper } from "../styles/styles";
import useRequest from "../hooks/useRequest";

const RegisterPage = () => {
  const { loading, message, sendRequest } = useRequest(
    "https://collectionwebserver.onrender.com/register",
    "POST"
  );
  const onFormSubmit = (username, email, password) => {
    sendRequest({ username, email, password }).catch((err) => {
      console.log(err);
    });
  };
  if (loading) return <p>Loading... </p>;
  return (
    <FormsWrapper>
      <RegisterForm onFormSubmit={onFormSubmit} message={message} />
    </FormsWrapper>
  );
};

export default RegisterPage;
