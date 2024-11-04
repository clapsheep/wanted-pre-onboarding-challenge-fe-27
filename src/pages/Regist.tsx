import InputText from "@/components/InputText";

const Regist = () => {
  return (
    <>
      <InputText id="id">아이디</InputText>
      <InputText id="password">비밀번호</InputText>
      <InputText id="valid-password">비밀번호 확인</InputText>
      <button type="submit">회원가입</button>
    </>
  );
};
export default Regist;
