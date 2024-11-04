import { Link, useNavigate } from "react-router-dom";

function Header({ isLoggedIn }: { isLoggedIn: boolean }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");

    navigate("/");
  };

  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              to="/"
              className="text-gray-800 hover:text-blue-600 font-bold text-xl"
            >
              홈
            </Link>
          </div>

          <div className="flex items-center gap-6">
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="text-gray-600 hover:text-blue-600 font-medium"
              >
                로그아웃
              </button>
            ) : (
              <>
                <Link
                  to="/auth/login"
                  className="text-gray-600 hover:text-blue-600 font-medium"
                >
                  로그인
                </Link>
                <Link
                  to="/auth/regist"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
                >
                  회원가입
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
