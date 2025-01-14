import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import GoogleBtn from 'C:\Users\User\Desktop\HandTalker-main\HandTalker-main\front\src\assets\icons\OIP.png'; // Google 버튼 이미지 경로

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const ArrowIcon = styled.img`
  cursor: pointer;
  width: 30px;
  height: 30px;
  margin-bottom: 20px;
`;

const Copy = styled.p`
  font-size: 18px;
  margin: 10px 0;
`;

const Character = styled.img`
  width: 100px;
  height: 100px;
  margin: 20px 0;
`;

const GBtn = styled.img`
  width: 200px;
  height: 50px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const GoogleLogin = () => {
  const navigate = useNavigate();

  const handleNavigateBack = () => {
    navigate(-1);
  };

  const handleLogin = () => {
    // 구글 로그인 화면으로 이동시키기
    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?
    client_id=${process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID}
    &redirect_uri=${process.env.REACT_APP_GOOGLE_AUTH_REDIRECT_URI}
    &response_type=code
    &scope=email profile`;
  };

  return (
    <SignUpContainer>
      <ArrowIcon src="./path-to-arrow-icon.png" onClick={handleNavigateBack} />
      <Copy>안녕하세요</Copy>
      <Copy>구글 계정이 있나요?</Copy>
      <Character src="./path-to-character-image.png" />
      <GBtn src={GoogleBtn} onClick={handleLogin} />
    </SignUpContainer>
  );
};

export default GoogleLogin;