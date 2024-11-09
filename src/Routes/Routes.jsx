import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root";
import Home from "../components/Home/Home";
import Register from "../components/Register/Register";
import Login from "../components/LogIn/Login";
import Signin from "../components/Signin/Signin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/singin",
        element: <Signin></Signin>,
      },
    ],
  },
]);

export default router;
