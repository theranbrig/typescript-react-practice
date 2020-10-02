import React, { useState } from 'react';
import { AddTodoForm } from './AddTodoForm';

import { TodoList } from './TodoList';

const initialTodos: Todo[] = [
  {
    text: 'Walk the dog',
    complete: false,
  },
  {
    text: 'Write app',
    complete: true,
  },
];

function App() {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo = (text: string) => {
    const newTodo = { text, complete: false };
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (selectedTodo: Todo) => {
    const newTodos = todos.filter((todo) => {
      return todo.text !== selectedTodo.text;
    });
    setTodos(newTodos);
  };
  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
      <AddTodoForm addTodo={addTodo} />
    </>
  );
}

export default App;
