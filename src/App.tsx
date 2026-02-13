import CounterPage from "./pages/counter/counterPage";
import NotificationModal from "./pages/notification/notification";
import ProductsPage from "./pages/products/ProductsPage";
import ThemePage from "./pages/theme/themePage";
import UserAuthPage from "./pages/userAuth/userAuth";

function App() {
  return (
    <>
      <CounterPage />
      <ThemePage />
      <UserAuthPage />
      <NotificationModal />
      <ProductsPage />
    </>
  );
}

export default App;
