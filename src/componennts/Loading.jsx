import React from 'react';

const Loading = ({ message }) => {
  return (
    <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-zinc-900 bg-opacity-70 backdrop-filter backdrop-blur-sm z-50'>
      <h1 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-1xl text-white font-500'>
        {message}
      </h1>
    </div>
  );
};

export default Loading;
