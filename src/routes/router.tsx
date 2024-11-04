import { createBrowserRouter } from "react-router-dom";
import { Home, Login, Regist } from "@/pages";
import RootLayout from "@/layouts/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "auth",
        children: [
          {
            path: "login",
            element: <Login />,
          },
          {
            path: "regist",
            element: <Regist />,
          },
        ],
      },
    ],
  },
]);

export default router;
