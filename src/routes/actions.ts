import getAuth from "@/utils/getAuth";

const { VITE_API_URI } = import.meta.env;

// 회원가입 비즈니스 로직
export const registAction = async ({ request }: { request: Request }) => {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  console.log(email, password);

  try {
    // API 호출 등 실제 회원가입 로직 구현
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

    // 성공시 로그인 페이지로 리다이렉트
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
  console.log(email, password);

  try {
    const res = await fetch(`${VITE_API_URI}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    console.log(data);

    const { token } = data;

    localStorage.setItem("accessToken", `Bearer ${token}`);
    console.log(token);

    if (!res.ok) {
      throw new Error("로그인 실패");
    }
    return { success: true };
  } catch (error) {
    if (error instanceof Error) {
      return { error: error.message };
    }
    return { error: "알 수 없는 오류가 발생했습니다." };
  }
};

// todo 비즈니스 로직
export const getTodosAction = async () => {
  const { token } = getAuth();
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
