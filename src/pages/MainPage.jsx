import React from 'react';
import Header from '../components/Header';
import '../styles.css';

function MainPage() {

  const handleGoogleLogin = () => {
    window.open('https://accounts.google.com/signin', '_blank');
  };

  const handleKakaoLogin = () => {
    window.open('https://kauth.kakao.com/oauth/authorize', '_blank');
  };

  return (
    <>
      <Header />


      <section className="section welcome-section" id="home">
        <h1>수어리움에 오신 것을 환영합니다</h1>
        <p>청각장애인을 위한 수어 인식 및 교육 서비스</p>
      </section>


      <section className="section features-section" id="features">
        <h2>Explore Our Features</h2>
        <div className="card-container">
          <div className="card">
            <h3>실시간 수어 인식</h3>
            <p>웹캠을 통해 사용자의 수어를 실시간으로 인식하고 텍스트로 변환합니다.</p>
          </div>
          <div className="card">
            <h3>수어 교육</h3>
            <p>기초부터 실전까지 다양한 수어 교육 콘텐츠를 제공합니다.</p>
          </div>
        </div>
      </section>


      <section className="section login-section" id="login">
        <h2>Login</h2>
        <p>외부 계정을 사용하여 로그인하세요.</p>
        <div className="login-buttons">
          <img
            src="./assets/google-login.png"
            alt="Google Login"
            onClick={handleGoogleLogin}
          />
          <img
            src="./assets/kakao-login.png"
            alt="Kakao Login"
            onClick={handleKakaoLogin}
          />
        </div>
      </section>
    </>
  );
}

export default MainPage;
