import React, { useState } from 'react';

interface Props {
  addTodo: AddTodo;
}

export const AddTodoForm: React.FC<Props> = ({ addTodo }) => {
  const [text, setText] = useState('');
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addTodo(text);
        setText('');
      }}
    >
      <input type='text' onChange={(e) => setText(e.target.value)} />
      <button type='submit'>Add Todo</button>
    </form>
  );
};
