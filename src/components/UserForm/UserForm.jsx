import React, { useState } from 'react';
import Error from '../../components/UI/Error/Error';

const UserForm = (props) => {
  const [isVaild, setIsVaild] = useState(true);
  const [enteredName, setEnteredName] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();
  const [showError, setShowError] = useState(true);
  const showErrorHandler = () => {
    setShowError(!showError);
  };

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    enteredName.trim().length && enteredAge.length === 0
      ? setIsVaild(false)
      : setIsVaild(true);
    if (enteredName.trim().length === 0 || enteredAge.length === 0) {
      setIsVaild(false);
      setError({
        title: 'Invalid name',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    }
    if (+enteredAge <= 0) {
      setIsVaild(false);
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    } else {
      props.onAddUser({ name: enteredName, age: enteredAge });
      setEnteredName('');
      setEnteredAge('');
    }
  };

  return (
    <div>
      {showError
        ? error && (
            <Error
              title={error.title}
              message={error.message}
              onShow={showErrorHandler}
            />
          )
        : null}
      <div className='flex w-screen justify-center p-10 '>
        <form onSubmit={submitHandler} className='w-1/3 space-y-2'>
          <div className='flex flex-col'>
            <label>Name</label>
            <input
              className='border-2 border-emerald-950 rounded p-2'
              type='text'
              value={enteredName}
              onChange={nameChangeHandler}
              style={{ borderColor: isVaild ? 'black' : 'red' }}
              placeholder='Enter your name'
            />
          </div>
          <div className='flex flex-col'>
            <label>Age</label>
            <input
              className='border-2 border-emerald-950 rounded p-2'
              type='number'
              value={enteredAge}
              style={{ borderColor: isVaild ? 'black' : 'red' }}
              onChange={ageChangeHandler}
              placeholder='Enter your age'
            />
          </div>
          <button
            className='bg-purple-400 border border-black p-2 rounded'
            type='submit'
          >
            Add User
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
