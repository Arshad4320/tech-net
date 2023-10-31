import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home";
import App from "../App";
import NotFound from "../page/NotFound";
import Login from "../page/Login";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
