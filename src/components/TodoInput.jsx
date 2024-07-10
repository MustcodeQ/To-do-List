import React, { useState } from 'react';

export default function TodoInput({ handleAddTodos }) {
  const [todoValue, setTodoValue] = useState('');

  const handleInputChange = (e) => {
    setTodoValue(e.target.value);
  };

  const handleAddClick = () => {
    if (todoValue.trim() !== '') {
      handleAddTodos(todoValue);
      setTodoValue('');
    }
  };

  return (
    <header style={{ marginBottom: '10px' }}> {/* Add margin-bottom here */}
      <input
        value={todoValue}
        onChange={handleInputChange}
        placeholder="Enter to-do..."
        style={{ marginRight: '10px', padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }} // Example styles
      />
      <button
        onClick={handleAddClick}
        style={{
          padding: '10px',
          borderRadius: '5px',
          border: 'none',
          backgroundColor: '#800080', // Change background color to purple
          color: '#fff' // Ensure the text color is white for contrast
        }}
      >
        Add
      </button>
    </header>
  );
}
