import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Profile.css'; // CSS는 'Profile.css' (v2 아님!)
import './Home.css'; // 하단 탭 바 CSS 재활용

// '성별'에 따라 CSS 클래스 이름 정해주는 함수
const getProfilePicClassName = (gender) => {
  if (gender === '남자') {
    return 'profile-pic gender-male'; // '남자'면 '노란색'
  }
  if (gender === '여자') {
    return 'profile-pic gender-female'; // '여자'면 '핑크색'
  }
  return 'profile-pic gender-none'; // '기본'은 '파란색'
};

export default function Profile() {
  const navigate = useNavigate();

  // 1. '빈칸' (state) 만들기
  const [gender, setGender] = useState('');
  const [name, setName] = useState('');
  const [birthdate, setBirthdate] = useState(''); // 생년월일 (통합)
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  // (아이디/비번은 민감하니까 프로필엔 안 띄움)

  // 2. '불러오기' (제일 중요!)
  useEffect(() => {
    // 2-1. 컴퓨터(브라우저)에서 "userProfile" 상자 '불러오기'!
    const savedProfileData = localStorage.getItem('userProfile');

    // 2-2. '상자'가 진짜 '있으면' (회원가입 했으면)
    if (savedProfileData) {
      // '글자'로 바꿨던 상자를 '진짜 상자'로 다시 복원 (JSON.parse)
      const userProfile = JSON.parse(savedProfileData);

      // 2-3. '불러온' 정보로 '빈칸'들을 '채워넣기'!
      setName(userProfile.name || '');
      setBirthdate(userProfile.birthdate || '');
      setPhone(userProfile.phone || '');
      setAddress(userProfile.address || '');
      setGender(userProfile.gender || ''); // '성별'도 불러오기
    }
  }, []); // '[]' 비어있으면 "딱 한 번만 실행"

  // 3. '수정완료' 버튼 눌렀을 때 실행될 함수
  const handleProfileUpdate = () => {
    // 3-1. '수정된' 정보로 'userProfile' 상자 '업데이트'!
    const updatedProfile = {
      ...JSON.parse(localStorage.getItem('userProfile')),
      name: name,
      birthdate: birthdate,
      phone: phone,
      address: address,
      gender: gender, // '성별'도 '최신' 정보로 덮어쓰기
    };

    // 3-2. '업데이트된' 상자를 '컴퓨터'에 "다시 저장"!!!
    localStorage.setItem('userProfile', JSON.stringify(updatedProfile));

    // 3-3. "수정 끝! 홈 화면으로 이동!"
    alert('프로필이 수정되었습니다!');
    navigate('/home'); // 홈 화면으로 이동
  };

  // '성별' 값에 따라 아이콘 배경색 CSS 클래스 이름 가져오기
  const profilePicClassName = getProfilePicClassName(gender);

  return (
    // '겉' 화면 CSS 적용 (profile-screen)
    <div className="profile-screen">
      {/* 1. 상단 상태바 (임시) */}
      <div className="status-bar">
        <span>9:41</span>
        <span>📶 🔋</span>
      </div>

      {/* 2. 페이지 헤더 */}
      <header className="page-header">
        <button onClick={() => navigate(-1)} className="back-button">
          &lt;
        </button>
        <h2>회원정보</h2>
      </header>

      {/* 3. 메인 컨텐츠 (프로필 폼) */}
      <main className="profile-content">
        {/* 프로필 사진 (이제 '성별'에 따라 색이 바뀜!) */}
        <div className={profilePicClassName}>
          {/* '성별' 감지 SVG 아이콘 */}
          <svg
            width="60"
            height="60"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12ZM12 14C8.68629 14 6 16.6863 6 20H18C18 16.6863 15.3137 14 12 14Z" />
          </svg>
        </div>

        {/* '성별' 입력칸 */}
        <div className="form-group">
          <label htmlFor="gender">성별</label>
          <input
            type="text"
            id="gender"
            placeholder="성별을 입력하세요 (남자 or 여자)"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
        </div>

        {/* '이름' 입력칸 */}
        <div className="form-group">
          <label htmlFor="name">이름</label>
          <input
            type="text"
            id="name"
            placeholder="이름을 입력하세요"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* '생년월일' 입력칸 (통합) */}
        <div className="form-group">
          <label htmlFor="birthdate">생년월일</label>
          <input
            type="text"
            id="birthdate"
            placeholder="예: 2004년 2월 22일"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
          />
        </div>

        {/* '휴대전화' 입력칸 */}
        <div className="form-group">
          <label htmlFor="phone">휴대전화</label>
          <input
            type="text"
            className="phone-prefix-input"
            value="대한민국 +82"
            readOnly
          />
          <input
            type="tel"
            id="phone"
            placeholder="전화번호 입력하세요"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        {/* '거주지' 입력칸 */}
        <div className="form-group">
          <label htmlFor="address">거주지</label>
          <input
            type="text"
            id="address"
            placeholder="거주지를 입력하세요"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        {/* 👇👇👇 '수정완료' 버튼 '이사' 완료! (거주지 '밑'으로!) 👇👇👇 */}
        <div className="profile-button-container">
          <button
            type="button"
            className="profile-submit-button"
            onClick={handleProfileUpdate}
          >
            수정완료
          </button>
        </div>
      </main>
      {/* 👆👆👆 (main 태그 닫기) 👆👆👆 */}

      {/* 4. 하단 탭 바 (Home.css 재활용) */}
      <footer className="bottom-tab-bar">
        <Link to="/home" className="tab-bar-item">
          <div className="tab-bar-icon"></div>
          <span>홈</span>
        </Link>
        {/* 'MY' 탭이 '활성화' 되도록 'active' 클래스 추가! */}
        <Link to="/profile" className="tab-bar-item active">
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