import React, { useState, useEffect } from "react";
import { questions } from "../Data";
import {useNavigate} from 'react-router-dom';

function QuestionPage({score, setScore}) {
    const [answer, setAnswer] = useState(null) // 사용자 답 저장
    const [update, setUpdate] = useState(false) //상태 업데이트
    const [randQuestions, setRandQuestions] = useState([]);
    const [questionIndex, setQuestionIndex] = useState(0);
    const navigate = useNavigate(); // 페이지 이동

    useEffect(() => {
        const shuffled = [...questions].sort(() => Math.random() - 0.5);
        const picked = shuffled.slice(0, 5);
        setRandQuestions(picked);
    }, []);


    useEffect(() => { //페이지 넘어가면 초기화돼서 정답 안 보임
        setAnswer(null); //정답 표시 상태 초기화
        setUpdate(false); //정답 확인 여부
    }, [questionIndex]);

    const current = randQuestions[questionIndex];

    if (randQuestions.length === 0 || !current) {
        return <div>문제를 불러오는 중입니다...</div>;
    }

    const handleAnswer = (select) => {
        setAnswer(select);
        setUpdate(true);

        if (select == current.author){
            setScore(score + 1);
        }
    };
    const nextPage = () => {
        const next = questionIndex + 1;
        if (next >= 5) {
            navigate('/result');
        } else {
            setQuestionIndex(next);
        }
    };


    return (
        <div className="container">
            <h1>AI vs 인간</h1>
            <h3>문제 {questionIndex + 1} </h3>

            <div className="question"> {current.content}</div>

            <div className="buttons">
                <button
                    className="choice-button human"
                    onClick={() => handleAnswer('human')}
                    disabled={update}
                >
                    👤 사람이다
                </button>
                <button
                    className="choice-button ai"
                    onClick={() => handleAnswer('AI')}
                    disabled={update}
                >
                    🤖 AI다
                </button>
            </div>

            {update && (
                <div className="answer">
                    <br />
                    {answer === current.author ? '정답이에요!' : '틀렸어요!'}
                </div>
            )}

            {update && (
                <button className="next-button" onClick={nextPage}>
                    다음 문제 →
                </button>
            )}
        </div>


    );
}

export default QuestionPage;
