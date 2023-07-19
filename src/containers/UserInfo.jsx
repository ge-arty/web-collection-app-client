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

const UserInfo = () => {
  const { userId, token } = useGlobalContext();
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
        <p>Username: {response?.username}</p>
        <p>User Email:{response?.email}</p>
        <p>User id:{response?._id}</p>
        <p>Admin Status:{response?.admin === "true" ? "Admin" : "User"}</p>
        <StyledLink style={{ color: "#FFF" }} to={"/create-collection"}>
          Create Collection
        </StyledLink>
      </UserAccountDetails>
      <CollectionCards response={response} onDelete={onDelete} />
    </UserInfoWrapper>
  );
};

export default UserInfo;
