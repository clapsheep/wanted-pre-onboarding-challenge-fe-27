import { TodoType } from "@/components/TodoList";
import getAuth from "@/utils/getAuth";

const { VITE_API_URI } = import.meta.env;

// 회원가입 비즈니스 로직
export const registAction = async ({ request }: { request: Request }) => {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    const response = await fetch(`${VITE_API_URI}/users/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error("회원가입 실패");
    }

    return { success: true };
  } catch (error) {
    if (error instanceof Error) {
      return { error: error.message };
    }
    return { error: "알 수 없는 오류가 발생했습니다." };
  }
};

// 로그인 비즈니스 로직
export const loginAction = async ({ request }: { request: Request }) => {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    const res = await fetch(`${VITE_API_URI}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    const { token } = data;

    if (!res.ok) {
      throw new Error("로그인 실패");
    }
    return { success: true, userInfo: { token, email } };
  } catch (error) {
    if (error instanceof Error) {
      return { success: false, error: error.message };
    }
    return { success: false, error: "알 수 없는 오류가 발생했습니다." };
  }
};

// todo 비즈니스 로직
export const getTodoListAction = async () => {
  const { token } = getAuth();
  if (!token) {
    return { data: [], error: "로그인 후 이용해주세요." };
  }
  try {
    const res = await fetch(`${VITE_API_URI}/todos`, {
      headers: token
        ? {
            Authorization: token,
            "Content-Type": "application/json",
          }
        : undefined,
    });

    if (!res.ok) {
      throw new Error("할 일 목록을 가져오는데 실패했습니다.");
    }

    const { data } = await res.json();
    return { data, error: null };
  } catch (error) {
    console.error("getTodos error:", error);
    return { data: [], error: "할 일 목록을 불러오는 중 오류가 발생했습니다." };
  }
};
// // get Todo 비즈니스 로직
// export const getTodoAction = async (id: string) => {
//   console.log(id);
//   const { token } = getAuth();
//   try {
//     const res = await fetch(`${VITE_API_URI}/todos/${id}`, {
//       headers: token
//         ? {
//             Authorization: token,
//             "Content-Type": "application/json",
//           }
//         : undefined,
//     });
//     if (!res.ok) {
//       throw new Error("할 일을 불러오는데 실패했습니다.");
//     }
//     const { data } = await res.json();
//     return { data, error: null };
//   } catch (error) {
//     console.error("getTodo error:", error);
//     return { data: [], error: "할 일을 불러오는 중 오류가 발생했습니다." };
//   }
// };

// get Todo Detail 비즈니스 로직
export const getTodoDetail = async (selectedPost: TodoType) => {
  const { token } = getAuth();
  const res = await fetch(`${VITE_API_URI}/todos/${selectedPost.id}`, {
    method: "GET",
    headers: token
      ? {
          Authorization: token,
          "Content-Type": "application/json",
        }
      : undefined,
  });
  const data = await res.json();
  return data;
};

// create todo 비즈니스 로직
export const createTodosAction = async ({ request }: { request: Request }) => {
  const { token } = getAuth();
  const formData = await request.formData();
  const title = formData.get("title");
  const content = formData.get("content");
  console.log(title, content);

  try {
    const res = await fetch(`${VITE_API_URI}/todos`, {
      method: "POST",
      headers: token
        ? {
            Authorization: token,
            "Content-Type": "application/json",
          }
        : undefined,
      body: JSON.stringify({ title, content }),
    });

    if (!res.ok) {
      throw new Error("할 일 생성에 실패했습니다.");
    }
    const data = await res.json();
    return { success: true, data };
  } catch (error) {
    console.error("createTodos error:", error);
    return { data: [], error: "할 일 생성에 오류가 발생했습니다." };
  }
};
// delete todo 비즈니스 로직
export const deleteTodoAction = async ({ request }: { request: Request }) => {
  const { token } = getAuth();
  const formData = await request.formData();
  const id = formData.get("todoId");

  try {
    const res = await fetch(`${VITE_API_URI}/todos/${id}`, {
      method: "DELETE",
      headers: token
        ? {
            Authorization: token,
            "Content-Type": "application/json",
          }
        : undefined,
    });
    const data = await res.json();
    if (!res.ok) {
      return {
        success: false,
        error: data.message || "삭제 중 오류가 발생했습니다.",
      };
    }
    return { success: true, data };
  } catch (error) {
    console.error("deleteTodo error:", error);
    if (error instanceof Error) {
      return { success: false, error: error.message };
    }
    return { success: false, error: "할 일 삭제 중 오류가 발생했습니다." };
  }
};
export const updateTodoAction = async ({ request }: { request: Request }) => {
  const { token } = getAuth();
};
