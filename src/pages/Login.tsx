import InputText from "@/components/InputText";
import { useAuth } from "@/contexts/AuthContext";
import { useEffect } from "react";
import { Form, Link, useActionData, useNavigate } from "react-router-dom";
import BasicButton from "@/components/BasicButton";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const actionData = useActionData() as {
    success: boolean;
    userInfo: { token: string; email: string };
  };

  useEffect(() => {
    if (actionData?.success) {
      login(actionData.userInfo.token, actionData.userInfo.email);
      navigate("/");
    } else if (actionData && !actionData.success) {
      alert("아이디나 비밀번호를 확인해주세요.");
    }
  }, [actionData]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-gray-900">로그인</h2>
          <p className="mt-2 text-sm text-gray-600">
            서비스를 이용하시려면 로그인해주세요
          </p>
        </div>

        <Form action="/auth/login" method="post" className="mt-8 space-y-6">
          <div className="space-y-4">
            <InputText type="email" id="email" autoComplete="email">
              아이디
            </InputText>
            <InputText
              type="password"
              id="password"
              autoComplete="current-password"
            >
              비밀번호
            </InputText>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                로그인 상태 유지
              </label>
            </div>

            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                비밀번호 찾기
              </a>
            </div>
          </div>

          <div>
            <BasicButton type="submit" className="w-full">
              로그인
            </BasicButton>
          </div>

          <div className="text-center">
            <Link
              to="/auth/regist"
              className="font-medium text-sm text-blue-600 hover:text-blue-500"
            >
              회원가입하기
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
};
export default Login;
