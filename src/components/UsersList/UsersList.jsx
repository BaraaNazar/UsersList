import React from 'react';
import Card from '../UI/Card/Card';

function UsersList({ items, onDeleteItem }) {
  return (
    <div>
      <ul className='goal-list'>
        {items.map((user) => (
          <Card
            key={user.id}
            id={user.id}
            onDelete={onDeleteItem}
            userName={user.name}
            userAge={user.age}
          />
        ))}
      </ul>
    </div>
  );
}

export default UsersList;
