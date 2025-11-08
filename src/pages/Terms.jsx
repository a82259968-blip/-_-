import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Terms.css'; // 이용약관 CSS
import '../pages/Settings.css'; // 헤더, 상태바 스타일 재활용
import '../pages/Home.css'; // 탭바 스타일 재활용

export default function Terms() {
  const navigate = useNavigate();

  return (
    // 'settings-screen' 클래스 재활용
    <div className="settings-screen terms-screen"> 
      {/* 1. 상단 상태바 (재활용) */}
      <div className="status-bar">
        <span>9:41</span>
        <span>📶 🔋</span>
      </div>

      {/* 2. 페이지 헤더 (재활용) */}
      <header className="page-header">
        <button onClick={() => navigate(-1)} className="back-button">
          &lt;
        </button>
        <h2>이용 약관 및 정책</h2>
      </header>

      {/* 3. 메인 컨텐츠 (지금은 비워둠) */}
      <main className="settings-content terms-content">
        <p>여기에 이용약관 내용이 들어갑니다.</p>
        <p>...</p>
      </main>

      {/* 4. 하단 탭 바 (재활용) */}
      <footer className="bottom-tab-bar">
        <Link to="/home" className="tab-bar-item">
          <div className="tab-bar-icon"></div>
          <span>홈</span>
        </Link>
        <Link to="/profile" className="tab-bar-item">
          <div className="tab-bar-icon"></div>
          <span>MY</span>
        </Link>
        <Link to="#" className="tab-bar-item">
          <div className="tab-bar-icon"></div>
          <span>채팅</span>
        </Link>
        <Link to="#" className="tab-bar-item">
          <div className="tab-bar-icon"></div>
          <span>스토어</span>
        </Link>
      </footer>
    </div>
  );
}