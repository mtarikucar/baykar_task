import React, { useState, useEffect } from 'react';

const Quiz = () => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [timer, setTimer] = useState(30);
    const [answers, setAnswers] = useState([]);
    const [isClickable, setIsClickable] = useState(false);

    // Verileri çekme ve localStorage'a kaydetme
    useEffect(() => {
        const storedQuestions = localStorage.getItem('questions');
        if (storedQuestions) {
            setQuestions(JSON.parse(storedQuestions));
        } else {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(response => response.json())
                .then(data => {
                    const quizQuestions = data.slice(0, 10); // İlk 10 soruyu al
                    localStorage.setItem('questions', JSON.stringify(quizQuestions));
                    setQuestions(quizQuestions);
                });
        }
    }, []);

    // Zamanlayıcı
    useEffect(() => {
        if (timer > 0) {
            const interval = setInterval(() => {
                setTimer(prevTimer => prevTimer - 1);
            }, 1000);
            return () => clearInterval(interval);
        } else if (currentQuestionIndex < questions.length - 1) {
            // Sonraki soruya geçiş
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setTimer(30);
            setIsClickable(false);
        }
    }, [timer, currentQuestionIndex, questions.length]);

    useEffect(() => {
        if (timer === 20) {
            setIsClickable(true);
        }
    }, [timer]);

    const handleAnswer = (index) => {
        if (!isClickable) return;
        setAnswers([...answers, { question: questions[currentQuestionIndex].title, answer: index }]);
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setTimer(30);
            setIsClickable(false);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <div className="question">
                <h2 className="text-lg font-bold">{questions[currentQuestionIndex]?.title}</h2>
                <div className="timer text-red-500">Kalan Zaman: {timer}</div>
                <div className="options">
                    {['A', 'B', 'C', 'D'].map((option, index) => (
                        <button
                            key={index}
                            className={`p-2 m-2 text-white font-bold ${isClickable ? 'bg-green-500' : 'bg-gray-500'} `}
                            onClick={() => handleAnswer(index)}
                            disabled={!isClickable}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            </div>
            {currentQuestionIndex === questions.length - 1 && (
                <div className="results">
                    <h2 className="text-xl font-bold">Sonuçlar</h2>
                    <ul>
                        {answers.map((answer, index) => (
                            <li key={index}>{`${answer.question}: Cevap ${answer.answer}`}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Quiz;
