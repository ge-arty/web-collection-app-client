import { Route, Routes } from "react-router-dom";
import Header from "./containers/Header";
import Explore from "./pages/Explore";
import Login from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/RegisterPage";
import Footer from "./containers/Footer";
import CreatePage from "./pages/CreatePage";
import { AppWrapper } from "./styles/styles";
import { useGlobalContext } from "./contexts/GlobalContext.jsx";
import CollectionPage from "./pages/CollectionPage";
import CreateItemPage from "./pages/CreateItemPage";
import ItemUpdatePage from "./pages/ItemUpdatePage";
import BcollectionItems from "./pages/BcollectionItems";
import WildCard from "./pages/WildCard";
import AdminPanel from "./pages/AdminPanel";
import useTheme from "./hooks/useTheme";

function App() {
  const { userId, admin, theme } = useGlobalContext();

  return (
    <AppWrapper style={theme}>
      <Header />
      <Routes>
        <Route exact path={"/"} element={<Explore />} />
        <Route path={"/dashboard"} element={<Dashboard />} />

        {!userId && (
          <>
            <Route path={"/login"} element={<Login />} />
            <Route path={"/register"} element={<Register />} />
          </>
        )}

        {userId && admin && (
          <Route path="/admin-panel" element={<AdminPanel />} />
        )}

        {userId && (
          <>
            <Route path={"/create-collection"} element={<CreatePage />} />
            <Route
              path={"/collection/:id/create-item"}
              element={<CreateItemPage />}
            />
            <Route
              path={"/item-update/:collectionId/:id"}
              element={<ItemUpdatePage />}
            />
            <Route path={"/collection/:id"} element={<CollectionPage />} />
          </>
        )}

        <Route
          path={"/biggest-collection/:id"}
          element={<BcollectionItems />}
        />

        <Route path={"*"} element={<WildCard />} />
      </Routes>
      <Footer />
    </AppWrapper>
  );
}

export default App;
