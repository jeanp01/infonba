import { HashRouter, useRoutes } from "react-router-dom";
import Home from "../Home";
import Navbar from "../../components/Nabvar/Navbar.jsx";

function AppRoutes() {
  const routes = useRoutes([{ path: "/", element: <Home /> }]);
  return routes;
}

function App() {
  return (
    <HashRouter>
      <Navbar />
      <AppRoutes></AppRoutes>
    </HashRouter>
  );
}

export default App;
