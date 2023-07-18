import UserInfo from "../containers/UserInfo";
import { useGlobalContext } from "../contexts/GlobalContext";
import { DashboardWrapper } from "../styles/styles";

const Dashboard = () => {
  const { userId } = useGlobalContext();
  return (
    <DashboardWrapper>
      {userId ? <UserInfo /> : <p>Please Login</p>}
    </DashboardWrapper>
  );
};

export default Dashboard;
