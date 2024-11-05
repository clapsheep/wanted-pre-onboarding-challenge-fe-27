import RootLayout from "@/layouts/RootLayout";
import { Login, Regist } from "@/pages";
import { createBrowserRouter, redirect } from "react-router-dom";
import {
  createTodosAction,
  getTodoListAction,
  loginAction,
  registAction,
} from "./actions";
import HomeElement from "@/pages/HomeElement";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomeElement />,
        loader: async () => {
          const data = await getTodoListAction();
          return data;
        },
        action: async (args) => {
          try {
            const result = await createTodosAction(args);
            return result;
          } catch (error) {
            console.error("Error in action:", error);
            return { error: "Todo 생성 중 오류가 발생했습니다." };
          }
        },
      },
      {
        path: "todos/:id",
      },
      {
        path: "auth",
        children: [
          {
            path: "login",
            element: <Login />,
            action: async (args) => {
              const result = await loginAction(args);
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
