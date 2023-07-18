import CollectionForm from "../components/CollectionForm";
import { FormsWrapper } from "../styles/styles";
import useRequest from "../hooks/useRequest";
import { useGlobalContext } from "../contexts/GlobalContext";
import { useNavigate } from "react-router-dom";

const CreatePage = () => {
  const navigate = useNavigate();
  const { token, userId } = useGlobalContext();
  const { loading, sendRequest } = useRequest(
    "https://collectionwebserver.onrender.com/createCollection",
    "POST"
  );
  const onFormSubmit = (name, description, category, date, image) => {
    sendRequest({ name, description, category, date, image, userId }, token)
      .then(() => navigate("/"))
      .catch((err) => {
        console.log(err);
      });
  };
  if (loading) return <p>Loading... </p>;
  return (
    <FormsWrapper>
      <CollectionForm onFormSubmit={onFormSubmit} />
    </FormsWrapper>
  );
};
export default CreatePage;
