import React from 'react';

function Error({ title, message, onShow }) {
  return (
    <>
      <div className='flex flex-col w-screen h-screen justify-center items-center z-10'>
        <div className='z-20 bg-white rounded'>
          <header className='bg-purple-400 text-black font-bold text-center rounded-t'>
            <h2>{title}</h2>
          </header>
          <body className=' p-5 text-sm'>
            <p>{message}</p>
          </body>
          <footer className='flex justify-center p-5'>
            <button
              type='button'
              onClick={onShow}
              className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'
            >
              Okay
            </button>
          </footer>
        </div>
      </div>
      <div className='fixed top-0 left-0 w-full h-screen z-10 bg-black bg-opacity-75' />
    </>
  );
}

export default Error;
