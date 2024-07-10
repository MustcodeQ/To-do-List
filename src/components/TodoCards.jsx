import React, { useState } from 'react';
import EditModal from './EditModal';

export default function TodoCards({ children, index, onEdit, onDelete }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditClick = () => {
    setIsModalOpen(true);
  };

  const handleSave = (editedTodo) => {
    onEdit(index, editedTodo);
    setIsModalOpen(false);
  };

  return (
    <li className='todoItem'>
      {children}
      <div className='actionsContainer'>
        <i
          className="fa-solid fa-pen-to-square"
          onClick={handleEditClick}
          style={{ cursor: 'pointer' }}
        ></i>
        <i
          className="fa-solid fa-trash"
          onClick={() => {
            console.log(`Deleting todo at index: ${index}`);
            onDelete(index);
          }}
          style={{ cursor: 'pointer' }}
        ></i>
      </div>
      <EditModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        todo={children.props.children}
        onSave={handleSave}
      />
    </li>
  );
}
