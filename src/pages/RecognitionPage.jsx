import React, { useRef, useEffect, useState } from 'react';
import { Hands } from '@mediapipe/hands';
import { Camera } from '@mediapipe/camera_utils';
import * as drawingUtils from '@mediapipe/drawing_utils';
import { Link } from 'react-router-dom';
import '../styles.css';

function RecognitionPage() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [translatedText, setTranslatedText] = useState('');

  useEffect(() => {
    const videoElement = videoRef.current;
    const canvasElement = canvasRef.current;
    const canvasCtx = canvasElement.getContext('2d');

    const hands = new Hands({
      locateFile: (file) =>
        `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`,
    });

    hands.setOptions({
      maxNumHands: 1,
      modelComplexity: 1,
      minDetectionConfidence: 0.7,
      minTrackingConfidence: 0.7,
    });

    hands.onResults((results) => {
      canvasCtx.save();
      canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
      canvasCtx.drawImage(
        results.image,
        0,
        0,
        canvasElement.width,
        canvasElement.height
      );

      if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
        for (const landmarks of results.multiHandLandmarks) {
          drawingUtils.drawConnectors(canvasCtx, landmarks, Hands.HAND_CONNECTIONS, {
            color: '#00FF00',
            lineWidth: 2,
          });
          drawingUtils.drawLandmarks(canvasCtx, landmarks, {
            color: '#FF0000',
            lineWidth: 1,
          });

          // 여기에 실제 인식 결과 연동
          setTranslatedText('예: 안녕하세요');
        }
      }

      canvasCtx.restore();
    });

    if (videoElement) {
      const camera = new Camera(videoElement, {
        onFrame: async () => {
          await hands.send({ image: videoElement });
        },
        width: 640,
        height: 480,
      });
      camera.start();
    }

    return () => {
      hands.close();
    };
  }, []);

  return (
    <div className="recognition-container">
      {/* ✅ 헤더 */}
      <header className="header">
        <div className="logo">
          <Link to="/"> {/* 로고 클릭 시 홈 이동 */}
            <img src="/logo.png" alt="수어리움 로고" className="logo-img" />
          </Link>
        </div>
        <nav className="nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/recognition" className="nav-link">Recognition</Link>
          <Link to="/education" className="nav-link">Education</Link>
        </nav>
      </header>

      <h2 className="page-title">수어 인식</h2>

      <div className="webcam-wrapper">
        <video ref={videoRef} className="input_video" autoPlay muted playsInline />
        <canvas ref={canvasRef} className="output_canvas" width="640" height="480" />
      </div>

      <div className="subtitle-section">
        <h3>실시간 자막</h3>
        <div className="subtitle-box">{translatedText}</div>
      </div>
    </div>
  );
}

export default RecognitionPage;
