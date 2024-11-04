import BasicButton from "@/components/BasicButton";
import InputText from "@/components/InputText";
import { useState } from "react";
import { Form, Link } from "react-router-dom";

const Regist = () => {
  const initialForm = {
    email: "",
    password: "",
    validPassword: "",
  };
  const [form, setForm] = useState(initialForm);

  const validEmail = form.email.includes("@") && form.email.includes(".");
  const validPassword =
    form.password.length >= 8 && form.password === form.validPassword;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-gray-900">회원가입</h2>
          <p className="mt-2 text-sm text-gray-600">
            계정 생성을 위해 정보를 입력해주세요
          </p>
        </div>

        <Form method="post" action="/auth/regist" className="mt-8 space-y-6">
          <div className="space-y-4">
            <InputText
              type="email"
              id="email"
              autoComplete="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            >
              아이디
            </InputText>
            <InputText
              type="password"
              id="password"
              autoComplete="new-password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            >
              비밀번호
            </InputText>
            <InputText
              type="password"
              id="valid-password"
              autoComplete="new-password"
              value={form.validPassword}
              onChange={(e) =>
                setForm({ ...form, validPassword: e.target.value })
              }
            >
              비밀번호 확인
            </InputText>
          </div>

          <div className="mt-6">
            <BasicButton
              color="primary"
              type="submit"
              disabled={!validEmail || !validPassword}
              className="w-full flex justify-center py-3 px-4"
            >
              회원가입
            </BasicButton>
          </div>
        </Form>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            이미 계정이 있으신가요?{" "}
            <Link
              to="/auth/login"
              className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors"
            >
              로그인하기
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Regist;
