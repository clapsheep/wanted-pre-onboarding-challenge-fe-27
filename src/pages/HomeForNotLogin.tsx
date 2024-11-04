import { Link } from "react-router-dom";

function HomeForNotLogin() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">
        프로젝트 이름에 오신 것을 환영합니다
      </h1>

      <div className="prose mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-4">프로젝트 소개</h2>
        <p className="mb-4">
          이 프로젝트는 할 일 관리를 위한 서비스입니다. 효율적인 일정 관리와
          업무 추적을 도와드립니다.
        </p>

        <h3 className="text-xl font-semibold mb-4">주요 기능</h3>
        <ul className="list-disc pl-5 mb-8">
          <li>할 일 생성 및 관리</li>
          <li>진행 상태 추적</li>
          <li>마감일 설정</li>
          <li>카테고리 분류</li>
        </ul>
      </div>

      <div className="flex justify-center gap-4">
        <Link
          to="/auth/login"
          className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors"
        >
          로그인하기
        </Link>
        <Link
          to="/auth/regist"
          className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition-colors"
        >
          회원가입하기
        </Link>
      </div>
    </div>
  );
}

export default HomeForNotLogin;
