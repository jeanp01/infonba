import { HashRouter, useRoutes } from "react-router-dom";
import Home from "../Home";

function AppRoutes(){
  const routes = useRoutes([
    {path: '/', element: <Home/>}
  ])
  return routes
}

function App(){
  return(
    <HashRouter>
      <AppRoutes></AppRoutes>
    </HashRouter>
  )
}

export default App
