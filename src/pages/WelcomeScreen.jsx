import React from 'react';
import { Link } from 'react-router-dom';
import './WelcomeScreen.css'; // 짝꿍 CSS
import logoImage from '../assets/logo.png'; // 👈 로고 이미지 '불러오기'!

export default function WelcomeScreen() {
  return (
    // '겉' 화면 CSS 적용 (welcome-screen-container)
    <div className="welcome-screen-container">
      
      {/* 👇👇👇 '하트 말풍선' 로고 이미지 삽입! 👇👇👇 */}
      <img src={logoImage} alt="나만의 관계비서 로고" className="welcome-logo-image" />
      {/* 👆👆👆 (이미지 삽입 완료!) 👆👆👆 */}


      <h1 className="welcome-title">첫 화면에 오신 것을 환영합니다!</h1>
      <p className="welcome-subtitle">
        '나만의 관계비서'가 당신의 관계를 관리해 드립니다.
      </p>

      {/* 버튼 컨테이너 */}
      <div className="button-container">
        {/* '로그인 하러가기' 버튼 */}
        <Link to="/login" className="login-button">
          로그인 하러가기
        </Link>
        {/* '회원가입' 버튼 */}
        <Link to="/signup" className="signup-button">
          회원가입
        </Link>
      </div>
    </div>
  );
}