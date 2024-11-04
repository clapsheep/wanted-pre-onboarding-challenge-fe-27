import InputText from "@/components/InputText";

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
      <a href="/regist">회원가입</a>
    </>
  );
};
export default Login;
