import React, { useEffect, useState } from 'react';

const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  return formattedTime;
};

function Quizheader({ initialTimer }) {
  const [timer, setTimer] = useState(initialTimer);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='shadow-sm my-5 py-2 top-0 bg-white x-10'>
      <div className='md:w-9/12 w-[90%] mx-auto my-8 flex flex-col sm:flex-row justify-between items-start'>
        <div className='text-xs'>
          <p>Attention: you have 60 minutes to solve 6 questions.</p>
          <p>Please keep an eye on the timer and make sure to answer all the questions before time runs out.</p>
        </div>
        <div><h1>{formatTime(timer)}</h1></div>
      </div>
    </div>
  );
}

export default Quizheader;
