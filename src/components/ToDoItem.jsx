import { useState } from "react";

function ToDoItem(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(props.task.text);

  function handleToggle() {
    props.toggleTask(props.task.id);
  }

  function handleDelete() {
    props.deleteTask(props.task.id);
  }

  function handleEdit() {
    setIsEditing(true);
  }

  function handleCancel() {
    setIsEditing(false);
    setEditText(props.task.text);
  }

  function handleSave() {
    if (editText.trim() !== "") {
      props.editTask(props.task.id, editText);
      setIsEditing(false);
    }
  }

  function handleChange(e) {
    setEditText(e.target.value);
  }

  return (
    <li>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editText}
            onChange={handleChange}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </>
      ) : (
        <>
          <span
            onClick={handleToggle}
            style={{
              textDecoration: props.task.completed ? "line-through" : "none",
              cursor: "pointer"
            }}
          >
            {props.task.text}
          </span>

          <button onClick={handleDelete}>Delete</button>
          <button onClick={handleEdit}>Edit</button>
        </>
      )}
    </li>
  );
}

export default ToDoItem;
