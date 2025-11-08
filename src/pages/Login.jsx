// src/pages/Login.jsx

// 0. 리액트 훅(useState)과 CSS 파일 import
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'; // 방금 만든 CSS 파일 가져오기

// App.jsx에서 onLogin 함수를 props로 내려받음
export default function Login({ onLogin }) {
  // 1. 아이디, 비밀번호 입력을 위한 state
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  // 2. 로그인 버튼 클릭 시 실행될 함수
  const handleSubmit = (e) => {
    e.preventDefault(); // form 태그가 새로고침되는 걸 막음
    
    // (임시) 아이디/비번이 뭐든 '임시토큰'으로 로그인 성공 처리
    // 나중에 실제 서버랑 연결할 때 여기를 수정하면 됨
    console.log('로그인 시도:', { id, password });
    onLogin('my-secret-token'); // App.jsx로 토큰 전달
  };

  return (
    // A. 전체 화면
    <div className="login-screen">
      
      {/* B. 로고 (임시 텍스트) */}
      <div className="login-logo">
        나만의<br />관계비서
      </div>

      {/* C. 로그인 폼 */}
      <form className="login-form" onSubmit={handleSubmit}>
        
        {/* D. 아이디 입력창 */}
        <input
          type="text"
          className="login-input"
          placeholder="아이디를 입력하세요"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        
        {/* D. 비밀번호 입력창 */}
        <input
          type="password"
          className="login-input"
          placeholder="비밀번호를 입력하세요"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        {/* E. 로그인 버튼 */}
        <button type="submit" className="login-button">
          로그인
        </button>
        
        {/* F. 회원가입 링크 (일단 #으로) */}
        <Link to="/signup" className="signup-link">
          회원가입
        </Link>
      </form>
    </div>
  );
}