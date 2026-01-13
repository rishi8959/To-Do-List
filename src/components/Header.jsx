import { useState } from "react";

function Header(props) {
  const [text, setText] = useState("");

  function handleAdd() {
    if (text.trim() !== "") {
      props.addTask(text);
      setText("");
    }
  }

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <header>
      <h1>To-Do List</h1>
      
      <input
      
        type="text"
        value={text}
        placeholder="Enter task"
        onChange={handleChange}
      />
      <button onClick={handleAdd}>Add</button>
    </header>
  );
}

export default Header;
