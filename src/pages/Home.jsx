import React from 'react';
import { Link } from 'react-router-dom'; // 네비게이션을 위해 Link import
import './Home.css'; // 방금 만든 CSS 파일

// 임시 데이터 (나중에 서버에서 받아오면 됨)
const friends = [
  { name: '오늘도피곤', img: null },
  { name: '청소광', img: null },
  { name: '잠만보', img: null },
  { name: '혼술조아', img: null },
];

const sajuItems = [
  { sub: '오늘의 운세는?', main: '오늘의 운세', img: null },
  { sub: '당신과 그분의 점수는?', main: '궁합', img: null },
  { sub: '전문가 상담 연결', main: 'AI 챗봇', img: null },
];

export default function Home() {
  return (
    <div className="home-screen">
      {/* 1. 상단 상태바 (9:41) */}
      <div className="home-status-bar">
        <span>9:41</span>
        <span>📶 🔋</span>
      </div>

      {/* 2. 상단 네비게이션 */}
      <nav className="home-top-nav">
        <div className="nav-item">
          <div className="nav-item-icon"></div>
          <span>알림</span>
        </div>
        <div className="nav-item">
          <div className="nav-item-icon"></div>
          <span>출석체크</span>
        </div>
        <div className="nav-item-logo">나만의<br/>관계비서</div>
        <Link to="/profile" className="nav-item">
          <div className="nav-item-icon"></div>
          <span>회원정보</span>
        </Link>
        {/* -------------------- */}

        {/* 👇 여기 <div>가 <Link>로 수정됨 */}
        <Link to="/settings" className="nav-item">
          <div className="nav-item-icon"></div>
          <span>설정</span>
        </Link>
      </nav>

      {/* 3. 주간 리포트 배너 */}
      <div className="home-banner">
        <span>주간리포트</span>
        <div className="banner-image"></div>
      </div>

      {/* 4. 위치 기반 친구 추천 */}
      <section className="content-section">
        <div className="section-title-row">
          <h3>위치 기반 친구 추천</h3>
          <span>&gt;</span>
        </div>
        <div className="horizontal-scroll">
          {friends.map((friend, index) => (
            <div className="friend-item" key={index}>
              <div className="friend-circle"></div>
              <span>{friend.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 5. 사주 섹션 */}
      <section className="content-section">
        <div className="section-title-row">
          <h3>사주</h3>
          <span>&gt;</span>
        </div>
        <div className="horizontal-scroll">
          {sajuItems.map((item, index) => (
            <div className="saju-card" key={index}>
              <div className="saju-image"></div>
              <p className="info-sub">{item.sub}</p>
              <p className="info-main">{item.main}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. 하단 탭 바 */}
      <footer className="bottom-tab-bar">
        <Link to="/home" className="tab-bar-item active">
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