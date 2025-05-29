import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import '../styles.css';

function Header() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header className="header">
    
      <div className="logo">
        {isHome ? (
          // 메인 페이지에서만 스크롤 이동
          <ScrollLink to="home" smooth={true} duration={500}>
            <img
              src="/logo.png" 
              alt="로고"
              className="logo-img"
            />
          </ScrollLink>
        ) : (
        
          <RouterLink to="/">
            <img
              src="/logo.png"
              alt="로고"
              className="logo-img"
            />
          </RouterLink>
        )}
      </div>

    
      <nav className="nav">
        {isHome ? (
          <>
            <ScrollLink to="home" smooth={true} duration={500}>Home</ScrollLink>
            <ScrollLink to="features" smooth={true} duration={500}>Features</ScrollLink>
            <ScrollLink to="login" smooth={true} duration={500}>Login</ScrollLink>
          </>
        ) : (
          <RouterLink to="/">Home</RouterLink>
        )}
        <RouterLink to="/recognition">Recognition</RouterLink>
        <RouterLink to="/education">Education</RouterLink>
      </nav>
    </header>
  );
}

export default Header;
