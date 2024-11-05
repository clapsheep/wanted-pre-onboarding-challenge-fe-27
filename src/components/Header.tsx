import BasicButton from "@/components/BasicButton";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function Header({ isLoggedIn }: { isLoggedIn: boolean }) {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <BasicButton to="/" color="primary">
              홈
            </BasicButton>
          </div>

          <div className="flex items-center gap-6">
            {isLoggedIn ? (
              <BasicButton onClick={handleLogout} color="secondary">
                로그아웃
              </BasicButton>
            ) : (
              <>
                <BasicButton to="/auth/login" color="secondary">
                  로그인
                </BasicButton>
                <BasicButton to="/auth/regist" color="primary">
                  회원가입
                </BasicButton>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
