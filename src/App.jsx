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
import CollectionPage from "./pages/CollectionPage";
import CreateItemPage from "./pages/CreateItemPage";
import ItemUpdatePage from "./pages/ItemUpdatePage";

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
          <Route
            path={"/collection/:id/create-item"}
            element={<CreateItemPage />}
          />
          <Route path={"/collection/:id"} element={<CollectionPage />} />
          <Route
            path={"/item-update/:collectionId/:id"}
            element={<ItemUpdatePage />}
          />
        </Routes>
        <Footer />
      </GlobalContextProvider>
    </AppWrapper>
  );
}

export default App;
