import React from 'react';
import { useNavigate } from 'react-router-dom';


function ResultPage({ score, setScore }) {
    const navigate = useNavigate();

    const goToStart = () => {
        setScore(0);
        navigate('/');

    };

    const endingMent = score >= 3 ? '당신은 감별왕입니다!' : '당신은 감자입니다!'

    return (
        <div className="container">
            <h1>결과</h1>
            <p>총 5문제 중 {score}개 맞았어요!</p>
            <h2>{endingMent}</h2>

            <button className="next-button" onClick={goToStart}>
                처음 화면으로
            </button>
        </div>
    );
}

export default ResultPage;
