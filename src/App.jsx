import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import Sidebar from './components/Sidebar';
import { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo];
    setTodos(newTodoList);
  }

  function handleDeleteTodos(index) {
    console.log(`Deleting todo at index: ${index}`);
    const newTodoList = todos.filter((_, todosIndex) => todosIndex !== index);
    setTodos(newTodoList);
  }

  function handleEditTodos(index, newTodo) {
    console.log(`Editing todo at index: ${index} with new value: ${newTodo}`);
    const newTodoList = todos.map((todo, todosIndex) =>
      todosIndex === index ? newTodo : todo
    );
    setTodos(newTodoList);
  }

  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <TodoInput handleAddTodos={handleAddTodos} />
        <TodoList
          todos={todos}
          handleDeleteTodos={handleDeleteTodos}
          handleEditTodos={handleEditTodos}
        />
      </div>
    </div>
  );
}

export default App;
