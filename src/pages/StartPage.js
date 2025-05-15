import React from 'react';
import { useNavigate } from 'react-router-dom';

function StartPage({setScore}) {
    const navigate = useNavigate();

    const startQuiz = () => {
        setScore(0);
        navigate('/questions');
    };

    return (
        <div className="container">
            <h1>AI vs 사람 감별 게임</h1>
            <p></p>
            <button className="next-button" onClick={startQuiz}>
                시작하기
            </button>
        </div>
    );
}

export default StartPage;
