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
            <h1>대학원생의 일기</h1>
            <p>
                나는 대학원생이다. <br/>
                오늘도 교수님은 나에게 학생들의 과제 채점을 맡기셨다...<br/>
                요즘 과제에 AI를 사용하는 학생들이 많으니 잘 구별하라고 하신다<br/>
                AI가 작성했는지 학생이 작성했는지 감별해 보자!!!
                </p>
            <button className="next-button" onClick={startQuiz}>
                시작하기
            </button>
        </div>
    );
}

export default StartPage;
