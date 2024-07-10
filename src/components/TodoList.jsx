import React from 'react';
import TodoCards from './TodoCards';

export default function TodoList({ todos, handleDeleteTodos, handleEditTodos }) {
  return (
    <ul className='main' style={{ marginTop: '10px' }}>
      {todos.map((todo, index) => (
        <TodoCards
          key={index}
          index={index}
          onDelete={handleDeleteTodos}
          onEdit={handleEditTodos}
        >
          <p>{todo}</p>
        </TodoCards>
      ))}
    </ul>
  );
}
