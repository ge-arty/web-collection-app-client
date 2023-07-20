import {
  StyledLink,
  UserAccountDetails,
  UserInfoWrapper,
} from "../styles/styles";
import useFetch from "../hooks/useFetch";
import { useGlobalContext } from "../contexts/GlobalContext";
import { Link } from "react-router-dom";
import CollectionCards from "./CollectionCards";
import useRequest from "../hooks/useRequest";
import {
  languageDictionary,
  useLanguageContext,
} from "../contexts/LanguageContext";

const UserInfo = () => {
  const { userId, token } = useGlobalContext();
  const { language } = useLanguageContext();
  const { response, error, loading, resendRequest } = useFetch(
    `https://collectionwebserver.onrender.com/user/${userId}`,
    "GET",
    token
  );
  const { sendRequest } = useRequest(null, "DELETE");
  const onDelete = (collectionId) => {
    const body = { userId };
    sendRequest(
      body,
      token,
      `https://collectionwebserver.onrender.com/deleteCollection/${collectionId}`
    ).then(() => resendRequest());
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <UserInfoWrapper>
      <UserAccountDetails>
        <p>
          {languageDictionary[language].username}:{response?.username}
        </p>
        <p>
          {languageDictionary[language].email}:{response?.email}
        </p>
        <p>
          {languageDictionary[language].ownerId}:{response?._id}
        </p>
        <p>
          {languageDictionary[language].adminStatus}:
          {response?.admin === true ? "Admin" : "User"}
        </p>
        <StyledLink style={{ color: "#FFF" }} to={"/create-collection"}>
          {languageDictionary[language].createCollection}
        </StyledLink>
      </UserAccountDetails>
      <CollectionCards response={response} onDelete={onDelete} />
    </UserInfoWrapper>
  );
};

export default UserInfo;
