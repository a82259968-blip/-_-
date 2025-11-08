import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css'; // 짝꿍 CSS
import logoImage from '../assets/logo.png'; // 👈 로고 이미지 '불러오기'!

export default function SignUp() {
  const navigate = useNavigate();

  // 입력 값 저장 변수
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [birthYear, setBirthYear] = useState('');
  const [birthMonth, setBirthMonth] = useState('');
  const [birthDay, setBirthDay] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  // '가입하기' 버튼 눌렀을 때 실행될 함수
  const handleSignUp = () => {
    
    // 👇👇👇 '이름표' 수정! 👇👇👇
    // 1. 'Profile.jsx'가 쓰는 '예시' 형식대로 '년/월/일'을 '조립'
    const birthdate = `${birthYear}년 ${birthMonth}월 ${birthDay}일`; 
    
    // 2. 'userData' 상자에 'birthday' (X) -> 'birthdate' (O) 이름표로 '저장'!
    const userData = { 
      id, 
      password, 
      name, 
      birthdate, // 👈 '이름표' 통일 완료!
      phone, 
      address,
      gender: '' // 👈 '성별' 칸도 '미리' 빈칸으로 '만들어' 둠! (중요!)
    };
    // 👆👆👆 (수정 완료!) 👆👆👆

    // '회원 정보'를 'localStorage'에 '저장'
    localStorage.setItem('userProfile', JSON.stringify(userData));
    alert('회원가입이 완료되었습니다!');
    navigate('/home'); // 가입 완료 후 홈 화면으로 이동
  };

  return (
    // '겉' 화면 CSS 적용 (signup-container)
    <div className="signup-container">
      {/* 뒤로가기 버튼 */}
      <button className="back-button" onClick={() => navigate(-1)}>
        &lt;
      </button>

      {/* 헤더 */}
      <div className="signup-header">
        <h1>회원가입</h1>
      </div>

      {/* '하트 말풍선' 로고 이미지 삽입! */}
      <img src={logoImage} alt="나만의 관계비서 로고" className="signup-logo-image" />

      {/* 입력 필드들 */}
      <div className="input-group">
        <label htmlFor="id">아이디</label>
        <input
          type="text"
          id="id"
          placeholder="아이디를 입력하세요"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label htmlFor="password">비밀번호</label>
        <input
          type="password"
          id="password"
          placeholder="비밀번호를 입력하세요"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label htmlFor="name">이름</label>
        <input
          type="text"
          id="name"
          placeholder="이름을 입력하세요"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>생년월일</label>
        <div className="birthday-inputs">
          <input
            type="text"
            placeholder="년 (4자)"
            value={birthYear}
            onChange={(e) => setBirthYear(e.target.value)}
          />
          <input
            type="text"
            placeholder="월"
            value={birthMonth}
            onChange={(e) => setBirthMonth(e.target.value)}
          />
          <input
            type="text"
            placeholder="일"
            value={birthDay}
            onChange={(e) => setBirthDay(e.target.value)}
          />
        </div>
      </div>

      <div className="input-group">
        <label>휴대 전화</label>
        <div className="phone-inputs">
          <input type="text" value="대한민국 +82" readOnly />
          <input
            type="text"
            placeholder="전화번호를 입력하세요"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
      </div>

      <div className="input-group">
        <label htmlFor="address">거주지</label>
        <input
          type="text"
          id="address"
          placeholder="거주지를 입력하세요"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>

      {/* '가입하기' 버튼 */}
      <button className="signup-button-bottom" onClick={handleSignUp}>
        가입하기 (임시)
      </button>
    </div>
  );
}