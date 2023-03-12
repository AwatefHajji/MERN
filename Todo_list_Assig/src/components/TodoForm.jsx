import React, { useState} from "react";

function TodoForm({ addTodo }) {
    const [value, setValue] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!value) return;
      addTodo({
        text: value,
        completed: false,
      });
      setValue("");
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add todo..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    );
  }
  export default TodoForm;