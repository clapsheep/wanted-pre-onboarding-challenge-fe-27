# 원티드 프리온보딩 프론트엔드 챌린지 (2024-11)

<p align="center">
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white"/>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=TypeScript&logoColor=white"/>
  <img src="https://img.shields.io/badge/Vite-646CFF?style=flat&logo=Vite&logoColor=white"/>
  <img src="https://img.shields.io/badge/React Router-CA4245?style=flat&logo=React Router&logoColor=white"/>
  <img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=flat&logo=Tailwind CSS&logoColor=white"/>
</p>

## 👋 소개

안녕하세요! 이 프로젝트는 원티드 프리온보딩 프론트엔드 과정의 과제로 제작된 Todo List 애플리케이션입니다.

**개발자**: clasheep

## 🎯 프로젝트 목표

- React와 TypeScript를 활용한 견고한 Todo List 애플리케이션 구현
- 사용자 인증 시스템 구현
- REST API를 활용한 CRUD 기능 구현
- 클린 코드와 재사용 가능한 컴포넌트 설계

## 🛠 기술 스택

- **Frontend**: React, TypeScript
- **Build Tool**: Vite
- **Style**: Tailwind CSS
- **상태 관리**: React Context API
- **라우팅**: React Router v6

## 📁 프로젝트 구조

```
src/
├── components/
│   ├── auth/
│   │   ├── LoginForm.tsx
│   │   └── SignupForm.tsx
│   ├── todo/
│   │   ├── TodoList.tsx
│   │   ├── TodoItem.tsx
│   │   └── TodoForm.tsx
│   └── common/
├── hooks/
│   ├── useAuth.ts
│   └── useTodo.ts
├── contexts/
│   ├── AuthContext.tsx
│   └── TodoContext.tsx
├── services/
│   ├── api.ts
│   └── todoApi.ts
├── types/
│   └── index.ts
└── utils/
    └── validation.ts
```

## ⚙️ 주요 기능

### 인증 기능

- 이메일/비밀번호 기반 회원가입
- 로그인/로그아웃
- 토큰 기반 인증 관리

### Todo 기능

- Todo 목록 조회
- Todo 추가/수정/삭제
- Todo 상세 보기
- 실시간 데이터 동기화

## 🔍 컴포넌트 설계

### Auth 컴포넌트

- `Login`: 로그인 폼 컴포넌트
- `Regist`: 회원가입 폼 컴포넌트
- `HomeElement`: 홈 페이지 컴포넌트 (로그인 상태에서는 To-do 기능 사용 가능 아니면 안내 문구 표시)

### Todo 컴포넌트

- `TodoList`: Todo 목록을 표시하는 컨테이너 컴포넌트
- `TodoItem`: 개별 Todo 항목을 표시하는 컴포넌트
- `TodoModal`: Todo 생성/수정 폼 컴포넌트

## 🔐 상태 관리 전략

- `AuthContext`: 사용자 인증 상태 관리

## 🚀 시작하기

1. 저장소 클론

```bash
git clone https://github.com/clasheep/wanted-pre-onboarding-challenge-fe-1
```

2. 의존성 설치

```bash
npm install
```

3. 개발 서버 실행

```bash
npm run dev
```

## 📝 API 문서

백엔드 API는 원티드 프리온보딩 챌린지에서 제공하는 서버를 사용합니다.

- [API 문서 보기](https://github.com/starkoora/wanted-pre-onboarding-challenge-fe-1-api)

## 🌟 진행사항

2024-11-05 (1주차) 🚀

- 디자인 및 마크업
- 인증 (로그인, 회원가입) 구현
- 인증 상태 관리
- Todo 기능 구현 (목록 조회, 상세 보기, 추가)
