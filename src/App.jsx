import { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

// --- 페이지 import ---
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import WelcomeScreen from './pages/WelcomeScreen.jsx';
import Settings from './pages/Settings.jsx';
import Terms from './pages/Terms.jsx';

// 👇 'v2' 떼고 '원래' 파일 이름으로 import! 👇
import SignUp from './pages/SignUp.jsx'; // SignUp_v2 (X) -> SignUp (O)
import Profile from './pages/Profile.jsx'; // Profile_v2 (X) -> Profile (O)

// --- 스타일 정의 (로그인 필요 컴포넌트용) ---
const center = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 12,
  padding: '40px',
};

const btnStyle = {
  padding: '8px 14px',
  borderRadius: 8,
  border: '1px solid #ddd',
  cursor: 'pointer',
  background: '#111',
  color: '#fff',
};

// --- 메인 App 컴포넌트 ---
export default function App() {
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  // '로그인'하면 '토큰' 저장
  const login = (t) => {
    localStorage.setItem('token', t);
    setToken(t);
  };

  // '로그아웃'하면 '토큰' 삭제
  const logout = () => {
    localStorage.removeItem('token');
    setToken('');
  };

  return (
    <BrowserRouter>
      {/* 👇 '라우터' (길 안내원) 설정 👇 */}
      <Routes>
        {/* '깡' 주소('/')는 '로고+버튼' 화면 */}
        <Route path="/" element={<WelcomeScreen />} />

        {/* '/home' 주소는 '홈' 화면 */}
        <Route path="/home" element={<Home />} />

        {/* '/login' 주소는 '로그인' 화면 */}
        <Route path="/login" element={<Login onLogin={login} />} />

        {/* '/signup' 주소는 'SignUp' (저장 기능 O) 화면 */}
        <Route path="/signup" element={<SignUp />} />

        {/* '/profile' 주소는 'Profile' (불러오기 기능 O) 화면 */}
        <Route
          path="/profile"
          // (단, '토큰'이 '있을 때만' Profile 보여주고, '없으면' NeedLogin 보여줘!)
          element={token ? <Profile /> : <NeedLogin />}
        />

        {/* '/settings' 주소는 '설정' 화면 */}
        <Route path="/settings" element={<Settings />} />

        {/* '/terms' 주소는 '이용약관' 화면 */}
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </BrowserRouter>
  );
}

// --- '로그인 필요' 화면 컴포넌트 ---
// (토큰 없을 때 Profile 대신 보여줄 화면)
function NeedLogin() {
  const nav = useNavigate();
  return (
    <div style={center}>
      <h2>로그인이 필요합니다</h2>
      <button style={btnStyle} onClick={() => nav('/login')}>
        로그인하러 가기
      </button>
    </div>
  );
}