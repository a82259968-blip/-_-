import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Settings.css'; // 이 CSS 파일도 만들어야 해

export default function Settings() {
  // '뒤로가기'를 위해 useNavigate 훅 사용
  const navigate = useNavigate();

  return (
    <div className="settings-screen">
      {/* 1. 상단 상태바 (Home.jsx랑 동일) */}
      <div className="status-bar">
        <span>9:41</span>
        <span>📶 🔋</span>
      </div>

      {/* 2. 페이지 헤더 (뒤로가기 버튼 + 제목) */}
      <header className="page-header">
        {/* 클릭하면 이전 페이지로 이동 */}
        <button onClick={() => navigate(-1)} className="back-button">
          &lt;
        </button>
        <h2>설정</h2>
      </header>

      {/* 3. 메인 컨텐츠 */}
      <main className="settings-content">
        {/* '이용 약관 및 정책'을 Link로 감싸서 /terms로 이동시킴 */}
        <Link to="/terms" className="settings-item link-item">
          <span>이용 약관 및 정책</span>
          <span>&gt;</span>
        </Link>
        
        <div className="settings-item">
          <span>버전 v 1.0.0</span>
        </div>
      </main>

      {/* 4. 하단 탭 바 (Home.jsx랑 동일) */}
      {/* 이 부분은 App.jsx에서 <Outlet>과 함께
        공통 레이아웃으로 빼는 게 좋지만, 
        일단 Home.jsx와 동일하게 복사해 넣을게.
      */}
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