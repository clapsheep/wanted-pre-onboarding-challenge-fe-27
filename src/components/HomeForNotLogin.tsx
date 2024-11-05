import BasicButton from "@/components/BasicButton";

function HomeForNotLogin() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">
        To-Do List에 오신 것을 환영합니다
      </h1>

      <div className="prose mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-4">프로젝트 소개</h2>
        <p className="mb-4 whitespace-pre-wrap">
          사용자들이 일상적인 할 일을 체계적으로 관리할 수 있도록 도와주는 웹
          애플리케이션입니다. 할 일 목록을 쉽게 작성하고, 수정하며, 완료 여부를
          표시할 수 있습니다.
          <br /> React와 TypeScript를 활용한 할 일 관리 서비스입니다. 프론트엔드
          개발 실력 향상과 현대적인 웹 개발 기술 학습을 위해 시작되었으며,
          사용자 친화적인 인터페이스를 통해 효율적인 일정 관리 경험을
          제공합니다.
        </p>

        <h3 className="text-xl font-semibold mb-4">주요 기능</h3>
        <ul className="list-disc pl-5 mb-8">
          <li>유저 인증 및 권한 관리</li>
          <li>할 일 생성 및 관리</li>
        </ul>
      </div>

      <div className="flex justify-center gap-4">
        <BasicButton to="/auth/login" color="primary">
          로그인하기
        </BasicButton>
        <BasicButton to="/auth/regist" color="secondary">
          회원가입하기
        </BasicButton>
      </div>
    </div>
  );
}

export default HomeForNotLogin;
