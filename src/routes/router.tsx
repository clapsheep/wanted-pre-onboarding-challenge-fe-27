import HomeElement from "@/components/HomeElement";
import RootLayout from "@/layouts/RootLayout";
import { Home, Login, Regist } from "@/pages";
import { createBrowserRouter, redirect } from "react-router-dom";
import { getTodosAction, loginAction, registAction } from "./actions";
import ProtectedRoute from "@/components/ProtectedRoute";
import getAuth from "@/utils/getAuth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    loader: async () => {
      const data = await getTodosAction();
      console.log(data);
      return data;
    },
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
            action: async (args) => {
              const result = await loginAction(args);
              if (result.success) {
                return redirect("/");
              }
              return result;
            },
          },
          {
            path: "regist",
            element: <Regist />,
            action: async (args) => {
              const result = await registAction(args);
              if (result.success) {
                alert("회원가입이 완료되었습니다.");
                return redirect("/auth/login");
              }
              return result;
            },
          },
        ],
      },
    ],
  },
]);

export default router;
