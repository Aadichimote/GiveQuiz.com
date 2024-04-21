import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import Quizheader from "./Quizheader";

const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 3600);
  const remainingSeconds = seconds %3600;
  const formattedTime = `${String(minutes).padStart(2, "0")}:${String(
    remainingSeconds
  ).padStart(2, "0")}`;
  return formattedTime;
};

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(3600); 
  const [timerIntervalId, setTimerIntervalId] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/quiz.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // Verify that data is fetched correctly
        setQuestions(data);
      });
  
    const intervalId = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);
    setTimerIntervalId(intervalId);
  
    
  }, [timer]); 

  const handleAnsSelect = (questionId, selectedOption) => {
    console.log(selectedOption);
    const updateAnswer = { ...answers, [questionId]: selectedOption };
    console.log(updateAnswer);
    setAnswers(updateAnswer);
  };

  const handleOnclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setLoading(true);
    clearInterval(timerIntervalId); // Stop the timer interval directly
    setTimer(0); // Set timer to 0
    
    // Show "Please wait" message for 3 seconds before showing the scoreboard
    setTimeout(() => {
      const quizScore = calculateScore(answers);
      setScore(quizScore);
      const percentage = (quizScore / questions.length) * 100;
      console.log(percentage);
  
      const newStatus = percentage >= 50 ? "passed" : "failed";
      setStatus(newStatus);
      setShowResult(true);
      setLoading(false);
    }, 3000);
  };
  
  
  const calculateScore = (userAnswer) => {
    let score = 0; // Initialize score variable
    for (const questionId in userAnswer) {
      if (userAnswer[questionId] === questions[questionId - 1].answer) {
        score++;
      }
    }
    return score;
  };

  const returnQuiz = () => {
    setAnswers({});
    setScore(0);
    setShowResult(false);
    setLoading(false);
    setTimer(3600); // Reset timer to 60 minutes
    clearInterval(timerIntervalId);

    setTimeout(() => {
      navigate("/quiz");
    }, 3000);
    window.location.reload();
  };

  return (
    <div>
      {loading && <Loading message=" please wait your result is loading " />}
      <Quizheader initialTimer={3600} />
     
 
      <div className="md:w-9/12 w-[90%] mx-auto my-8 flex flex-col sm:flex-row justify-between items-start">
        <div className="md:w-[70%] w-full">
          {questions.map((question, index) => (
            <div
              key={question.id}
              className="m-3 py-3 px-4 shadow-sm border border-gray-200 rounded"
            >
              <p className="flex items-center rounded text-xs p-2 cursor-pointer">
                <span className="h-8 w-8 bg-yellow-500 rounded flex items-center justify-center text-green-800 mr-3">
                  {index + 1}
                </span>
                <p className="text-base text-[20px]">{question.question}</p>
              </p>
              <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 mt-5">
                {question.options.map((option, optionIndex) => (
                  <div
                    onClick={() => handleAnsSelect(question.id, option)}
                    key={optionIndex}
                    className={`border p-2 border-gray-200 rounded text-sx cursor-pointer hover:bg-yellow-500 ${
                      answers[question.id] === option ? "bg-gray-300" : ""
                    }`}
                  >
                    <p className="text-[15px] mb-1">
                      Option {optionIndex + 1}
                      <p className="pl-3 text-[20px] md:text-[15px]">
                        {option}
                      </p>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <button
            className="bg bg-yellow-500 px-6 py-2 text-white rounded"
            onClick={handleOnclick}
            
          >
            Submit Quiz

          </button>
        </div>

        <div className="md:w-[30%] w-full p-4">
          {showResult && (
            <div>
              {loading ? (
                <p>Please wait...</p>
              ) : (
                <div>
                  <h3 className="text-2xl font-medium ">Your Score:</h3>
                  <div className=" h-[220px] w-[220px] mx-auto mt-8 flex flex-col justify-between items-center border-2 rounded-tr-[50%] rounded-bl-[50%]">
                    <h3
                      className={`text-xs ${
                        status === "passed" ? "text-yellow-500" : "text-red-500"
                      }`}
                    >
                      {status}
                    </h3>
                    <h1 className="text-3xl font-bold my-2 top correct ">
                      {score} of
                      <span className="text-slate-800 my-1 "> 50 question <br />is correct</span>
                    </h1>
                    
                  </div>
                  <button
                    className="bg bg-yellow-500 mt-8 mx-auto px-6 py-2 text-white flex justify-center align-center rounded"
                    onClick={returnQuiz}
                  >
                    
                    Restart
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Quiz;
