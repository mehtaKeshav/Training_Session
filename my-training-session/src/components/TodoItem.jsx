import React, { useRef } from 'react';
import { useAtom } from 'jotai';
import { todosAtom } from '../state/todosAtom';

const TodoItem = ({ todo, index }) => {
  const [todos, setTodos] = useAtom(todosAtom);
  const selectRef = useRef(null);

  const toggleCheck = () => {
    const updatedTodos = [...todos];
    updatedTodos[index].isChecked = !updatedTodos[index].isChecked;
    setTodos(updatedTodos);
  };

  const changeColor = () => {
    const updatedTodos = [...todos];
    updatedTodos[index].color = selectRef.current.value;
    setTodos(updatedTodos);
  };

  return (
    <li class = "text-black rounded-xl mb-2  border-black	"
      style={{ 
        backgroundColor: todo.isChecked ? 'green' : todo.color 
      }}
    >
    <div class = 'inline-flex pl-5 w-full'>
      <input 
        type="checkbox" 
        checked={todo.isChecked} 
        onChange={toggleCheck} 
      />
          <div class = "px-2">
            {todo.text}
          </div>
          <select class = "text-white text-sm align-middle rounded-lg float-right" ref={selectRef} onChange={changeColor}>
            <option  class = 'text-'value="">Select Color</option>
            <option  class = 'text-sm'value="yellow">Yellow</option>
            <option  class = 'text-sm'value="red">Red</option>
          </select>
      

    </div>
    </li>
  );
};

export default TodoItem;
