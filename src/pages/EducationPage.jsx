import React, { useState } from 'react';
import Header from '../components/Header';
import '../styles.css'; 

const EducationPage = () => {
  const [userAnswer, setUserAnswer] = useState('');
  const [message, setMessage] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const quizData = [
    {
      image: '/images/hello.png',
      answer: '안녕하세요',
    },
    {
      image: '/images/thankyou.png',
      answer: '감사합니다',
    },
  
  ];

  const handleSubmit = () => {
    if (userAnswer.trim() === quizData[currentIndex].answer) {
      setMessage('정답입니다!');
    } else {
      setMessage('오답입니다.');
    }
  };

  const handleNext = () => {
    setUserAnswer('');
    setMessage('');
    setCurrentIndex((prev) => (prev + 1) % quizData.length);
  };

  return (
    <div className="education-page">
      <Header /> 
      <div className="content">
        <h2>수어 학습</h2>
        <img src={quizData[currentIndex].image} alt="수어 이미지" width="200" />
        <div>
          <input
            type="text"
            placeholder="이 수어의 의미를 입력하세요"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
          />
          <button onClick={handleSubmit}>제출</button>
          <button onClick={handleNext}>다음</button>
        </div>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default EducationPage;
