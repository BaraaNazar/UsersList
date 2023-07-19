import React from 'react';

function Card({ userName, userAge, onDelete, id }) {
  return (
    <div className='flex w-screen justify-center text-lg font-bold '>
      <h1
        key={id}
        onClick={onDelete}
        className='w-1/3 rounded-lg bg-purple-200 p-5'
      >
        {userName}({userAge} years old)
      </h1>
    </div>
  );
}

export default Card;
