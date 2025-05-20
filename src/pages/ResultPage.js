import React from 'react';
import { useNavigate } from 'react-router-dom';
import image1 from '../happy.png';
import image2 from '../Sad.png';


function ResultPage({ score, setScore }) {
    const navigate = useNavigate();

    const goToStart = () => {
        setScore(0);
        navigate('/');

    };

    const endingMent = score >= 3 ? '자네는 졸업일세!' : '졸업은 꿈도 꾸지 말게!!';
    const resultImage = score >= 3 ? image1 : image2;

    return (
        <div className="container">
            <h1>결과</h1>
            <p>총 5문제 중 {score}개 맞았어요!</p>

            <img src={resultImage} alt="결과 이미지" style={{width: '250px', marginTop: '5px'}}/>

            <h2>{endingMent}</h2>

            <button className="next-button" onClick={goToStart}>
                처음 화면으로
            </button>
        </div>
    );
}

    export default ResultPage;
