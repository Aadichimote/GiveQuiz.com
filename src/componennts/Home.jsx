import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loading from "./Loading";

const Home=  () => {
  const [loading, setloading] = useState(false);
  const navigate=useNavigate()

  const handlestatequiz = () => {
    setloading(true);
    setTimeout(()=>{
      navigate('quiz')
      
      setloading(false);},2000);
     
  };
  const handlequizstate = () => {
    setloading(true);
    navigate('about')
  }

  
  return (
    <section className=" bg:w-9/12 md:w-[90%] px-4 mx-auto mt-12 flex flex-col md:flex-row-reverse justify-between items-center">
      {loading && <Loading message=" Stay seated Stay Sharp. Starting Quiz in a moment! " />}
      <div className="md:w-1/2 w-full">
        <img
          src="../../public/images/banner.png"
          alt="banner"
          className="w-full"
        />
      </div>
      <div className=" pad md:1/2 w-full space-y-6 ">
        <h2 className="my-8 lg:text-4x1 text-3x1 font-medium text-[#333] md:w-4/6 lg:heading-normal leading-normal mb-3">
          learn new concept for each question
        </h2>
        <p className="py-2 mb-6 text-gray-500 pl-2 border-l-4 border-yellow-400 text-base">
          Let me help you prepare exam and quizzes
        </p>
        <div className="text-lg flex flex-col sm:flex-row gap-5 mb-5">
          <button
            onClick={handlestatequiz}
            className="bg bg-yellow-500 px-6  py-2 text-white rounded"
          >
            Start Quiz
          </button>

          <button onClick={ handlequizstate} className=" px-6  py-2 text-yellow-500 ml-3 hover:bg-yellow-500 hover:text-white transition-all duration-300 ease-in">
            {" "}
            >learn more
          </button>
        </div>
      </div>
    </section>
  );
}

export default Home;
