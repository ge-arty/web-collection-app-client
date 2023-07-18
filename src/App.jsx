import { Route, Routes } from "react-router-dom";
import Header from "./containers/Header";
import Explore from "./pages/Explore";
import Login from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/RegisterPage";
import Footer from "./containers/Footer";
import CreatePage from "./pages/CreatePage";
import { AppWrapper } from "./styles/styles";
import { GlobalContextProvider } from "./contexts/GlobalContext.jsx";

function App() {
  return (
    <AppWrapper>
      <GlobalContextProvider>
        <Header />
        <Routes>
          <Route exact path={"/"} element={<Explore />} />
          <Route path={"/dashboard"} element={<Dashboard />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/register"} element={<Register />} />
          <Route path={"/create-collection"} element={<CreatePage />} />
        </Routes>
        <Footer />
      </GlobalContextProvider>
    </AppWrapper>
  );
}

export default App;
