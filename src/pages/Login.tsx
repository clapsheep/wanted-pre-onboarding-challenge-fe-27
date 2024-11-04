import InputText from "@/components/InputText";
import { Link } from "react-router-dom";

const Login = () => {
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <InputText id="id">아이디</InputText>
        <InputText id="password">비밀번호</InputText>
        <button type="submit">로그인</button>
      </form>
      <Link to="/auth/login">회원가입</Link>
    </>
  );
};
export default Login;
