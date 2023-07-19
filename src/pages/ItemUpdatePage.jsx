import { useNavigate, useParams } from "react-router-dom";
import ItemForm from "../components/ItemForm";
import { FormsWrapper } from "../styles/styles";
import { useGlobalContext } from "../contexts/GlobalContext";
import useFetch from "../hooks/useFetch";
import useRequest from "../hooks/useRequest";

const ItemUpdatePage = () => {
  const navigate = useNavigate();
  // item id
  const { collectionId, id } = useParams();
  const { userId, token } = useGlobalContext();
  const { response, error, resendRequest } = useFetch(
    `https://collectionwebserver.onrender.com/user/${userId}`,
    "GET",
    token
  );
  const collection = response?.collections.find(
    (collection) => collection._id === collectionId
  );

  const item = collection?.item.find((item) => item._id === id);

  const { loading, sendRequest } = useRequest(
    `https://collectionwebserver.onrender.com/updateItem/${id}`,
    "PUT"
  );
  const onFormSubmit = (name, date, description, customFields) => {
    sendRequest({ name, date, description, customFields, userId }, token)
      .then(() => resendRequest())
      .then(() => navigate(`/collection/${collectionId}`))
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <FormsWrapper>
      <ItemForm onFormSubmit={onFormSubmit} item={item} />
    </FormsWrapper>
  );
};

export default ItemUpdatePage;
