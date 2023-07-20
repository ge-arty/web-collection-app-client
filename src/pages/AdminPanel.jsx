import { useNavigate } from "react-router-dom";
import AdminPanelTable from "../containers/AdminPanelTable";
import { useGlobalContext } from "../contexts/GlobalContext";
import useFetch from "../hooks/useFetch";
import useRequest from "../hooks/useRequest";
import { AdminPanelWrapper } from "../styles/styles";

const AdminPanel = () => {
  const { setToken, setUserId, setAdmin, userId, token } = useGlobalContext();
  const navigate = useNavigate();
  const { response, error, loading, resendRequest } = useFetch(
    `https://collectionwebserver.onrender.com/users/${userId}`,
    "GET",
    token
  );
  const { sendRequest } = useRequest(null, null);

  const reqDeleteUser = (id) => {
    const body = { id };
    sendRequest(
      body,
      token,
      `https://collectionwebserver.onrender.com/deleteUser`,
      "DELETE"
    ).then(() => {
      if (id === userId) {
        setAdmin(false);
        setUserId("");
        setToken(null);
        navigate("/login");
      } else resendRequest();
    });
  };

  const reqAdminControl = (id, admin) => {
    const body = { id, admin };
    sendRequest(
      body,
      token,
      `https://collectionwebserver.onrender.com/admin`,
      "PUT"
    ).then(() => {
      if (id === userId) {
        setAdmin(false);
        setUserId("");
        setToken(null);
        navigate("/login");
      } else resendRequest();
    });
  };

  const reqBlockControl = (id, block) => {
    const body = { id, block };
    sendRequest(
      body,
      token,
      `https://collectionwebserver.onrender.com/block`,
      "PUT"
    ).then(() => {
      if (id === userId) {
        setAdmin(false);
        setUserId("");
        setToken(null);
        navigate("/login");
      } else resendRequest();
    });
  };

  return (
    <AdminPanelWrapper>
      <AdminPanelTable
        response={response}
        reqDeleteUser={reqDeleteUser}
        reqAdminControl={reqAdminControl}
        reqBlockControl={reqBlockControl}
      />
    </AdminPanelWrapper>
  );
};
export default AdminPanel;
