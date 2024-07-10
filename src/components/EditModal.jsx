import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Bind modal to your appElement (root div)

export default function EditModal({ isOpen, onRequestClose, todo, onSave }) {
  const [editedTodo, setEditedTodo] = useState(todo);

  useEffect(() => {
    setEditedTodo(todo);
  }, [todo]);

  const handleSave = () => {
    console.log(`Saving edited todo: ${editedTodo}`);
    onSave(editedTodo);
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Edit Todo"
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          padding: '20px',
          borderRadius: '10px',
          background: '#fff',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        },
      }}
    >
      <h2>Edit Todo</h2>
      <input
        type="text"
        value={editedTodo}
        onChange={(e) => setEditedTodo(e.target.value)}
        style={{
          width: '100%',
          padding: '10px',
          marginBottom: '20px',
          borderRadius: '5px',
          border: '1px solid #ccc',
        }}
      />
      <button
        onClick={handleSave}
        style={{
          padding: '10px 20px',
          background: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginRight: '10px',
        }}
      >
        Save
      </button>
      <button
        onClick={onRequestClose}
        style={{
          padding: '10px 20px',
          background: '#6c757d',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Cancel
      </button>
    </Modal>
  );
}
