import React, { useState } from 'react';
import UserForm from './components/UserForm/UserForm';
import UsersList from './components/UsersList/UsersList';

export default function App() {
  const [userInput, setUserInput] = useState([]);

  const addUserHandler = (userData) => {
    setUserInput((prevUsers) => [
      ...prevUsers,
      { ...userData, id: Math.random().toString() },
    ]);
  };

  const deleteUserHandler = (id) => {
    setUserInput((prevUsers) => {
      const updatedUsers = prevUsers.filter((user) => user.id !== id);
      return updatedUsers;
    });
  };

  let content = <p style={{ textAlign: 'center' }}>No users. Maybe add one?</p>;
  if (userInput.length > 0) {
    content = <UsersList items={userInput} onDeleteItem={deleteUserHandler} />;
  }

  return (
    <div>
      <UserForm onAddUser={addUserHandler} />
      <section>{content}</section>
    </div>
  );
}
