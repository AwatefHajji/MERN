import React from "react";
function TodoItem({ todo, index, removeTodo, toggleTodo }) {
    return (
      <div>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(index)}
        />
        <span style={{ textDecoration: todo.completed ? "line-through" : "" }}>
          {todo.text}
        </span>
        <button onClick={() => removeTodo(index)}>Delete</button>
      </div>
    );
  }
  
  
  export default TodoItem;

  
  
  