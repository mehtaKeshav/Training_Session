import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <div class=" w-screen h-fit">
      <h1 class= " mx-20  p-2 my-2">Todo List</h1>
      <TodoForm/>
      <TodoList/>
    </div>
  );
};

export default App;
