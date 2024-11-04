import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="flex gap-10 justify-center bg-blue-200">
        <Link to="/">홈</Link>
        <Link to="/auth/login">로그인</Link>
        <Link to="/auth/regist">회원가입</Link>
      </div>
    </>
  );
}

export default Header;
