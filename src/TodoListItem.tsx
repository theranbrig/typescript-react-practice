import React from 'react';

interface Props {
  todo: Todo;
  toggleTodo: ToggleTodo;
  removeTodo: RemoveTodo;
}

export const TodoListItem: React.FC<Props> = ({ todo, toggleTodo, removeTodo }) => {
  return (
    <li>
      <label style={{ textDecoration: todo.complete ? 'line-through' : undefined }}>
        <input
          type='checkbox'
          checked={todo.complete}
          onClick={() => {
            toggleTodo(todo);
          }}
        />{' '}
        {todo.text}
      </label>
      <button onClick={() => removeTodo(todo)}>X</button>
    </li>
  );
};
