import React from 'react';

export default function About() {
  return (
    <>
      <div className="bg-[rgba(169, 169, 72, 0.712)]  bg-yellow-200 min-h-screen flex justify-center items-center">
        <div className="md:w-[70%] w-full max-w-3xl border mx-4 mt-4 md:p-8 p-4 border-black rounded-lg text-black">
          <p className="text-center mb-4"><b>User-Friendly Design:</b> The quiz interface is intuitively designed with a clean layout, making it easy for users to navigate and interact with quizzes.</p>
          <p className="text-center mb-4"><b>Countdown Timer:</b> A countdown timer feature adds an element of urgency and challenge to quizzes, motivating users to answer questions within a specified time limit.</p>
          <p className="text-center mb-4"><b>Immediate Feedback:</b> Users receive immediate feedback on their quiz performance, including the number of correct answers, incorrect answers, and overall score.</p>
          <p className="text-center mb-4"><b>Score Breakdown:</b> The quiz results display a score breakdown, highlighting strengths and areas for improvement, fostering a learning-oriented approach.</p>
          <p className="text-center"><b>Quiz Focus:</b> The quiz is centered around essential concepts and practices in HTML, CSS, and JavaScript (JS), covering a range of topics from basic syntax to advanced techniques.</p>
        </div>
      </div>
    </>
  );
}
