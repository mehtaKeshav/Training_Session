import React from 'react';
import { useAtom } from 'jotai';
import { todosAtom } from '../state/todosAtom';
import TodoItem from './TodoItem';

const TodoList = () => {
  const [todos] = useAtom(todosAtom);

  return (
    <ul class ="p-2 mx-20 w-auto">
      {todos.map((todo, index) => (
        <TodoItem key={index} index={index} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
