import { createContext, useContext, useState, useEffect } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  user: string | null;
  login: (token: string, userData: any) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    // 앱 시작시 토큰 확인
    const token = localStorage.getItem("accessToken");
    if (token) {
      // 토큰 유효성 검증 및 사용자 정보 가져오기
      setUser(token);
      setIsAuthenticated(true);
    }
  }, []);

  const login = (token: string, userData: any) => {
    localStorage.setItem("accessToken", `Bearer ${token}`);
    setUser(userData.token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
