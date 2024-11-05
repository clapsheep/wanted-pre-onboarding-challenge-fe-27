import RootLayout from "@/layouts/RootLayout";
import { Login, Regist } from "@/pages";
import { createBrowserRouter, redirect } from "react-router-dom";
import {
  createTodosAction,
  deleteTodoAction,
  updateTodoAction,
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
          const method = args.request.method;
          switch (method) {
            case "POST":
              return await createTodosAction(args);
            case "DELETE":
              return await deleteTodoAction(args);
            case "PUT":
              return await updateTodoAction(args);
            default:
              return { success: false, error: "지원하지 않는 메소드입니다." };
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
