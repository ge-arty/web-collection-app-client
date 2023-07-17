import { Route, Routes } from "react-router-dom";
import Header from "./containers/Header";
import Explore from "./pages/Explore";
import Login from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/RegisterPage";
import Footer from "./containers/Footer";
import { AppWrapper } from "./styles/styles";

function App() {
  return (
    <AppWrapper>
      <Header />
      <Routes>
        <Route exact path={"/"} element={<Explore />} />
        <Route path={"/dashboard"} element={<Dashboard />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/register"} element={<Register />} />
      </Routes>
      <Footer />
    </AppWrapper>
  );
}

export default App;
