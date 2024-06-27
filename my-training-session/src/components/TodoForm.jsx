import React, { useState } from 'react';
import { useAtom } from 'jotai';
import { todosAtom } from '../state/todosAtom';

const TodoForm = () => {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useAtom(todosAtom);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.length > 10) {
      setTodos([...todos, { text: input, isChecked: false, color: '' }]);
      setInput('');
    }
  };

  return (
    <form class = "mx-20 px-2 mb-2"onSubmit={handleSubmit}>
      <input 
        class = "w-2/5 p-2 rounded-lg"
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="Add a new todo"
      />
      <button
        style={{marginLeft: 10}} 
      type="submit" disabled={input.length <= 10}>Add</button>

    </form>
  );
};

export default TodoForm;
