import { useNavigate, useParams } from "react-router-dom";
import ItemForm from "../components/ItemForm";
import useRequest from "../hooks/useRequest";
import { FormsWrapper } from "../styles/styles";
import { useGlobalContext } from "../contexts/GlobalContext";

const CreateItemPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { token, userId } = useGlobalContext();
  const { loading, sendRequest } = useRequest(
    `https://collectionwebserver.onrender.com/createItem/${id}`,
    "POST"
  );
  const onFormSubmit = (name, date, description, customFields) => {
    sendRequest({ name, date, description, customFields, userId }, token)
      .then(() => navigate(`/collection/${id}`))
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <FormsWrapper>
      <ItemForm onFormSubmit={onFormSubmit} />
    </FormsWrapper>
  );
};

export default CreateItemPage;
