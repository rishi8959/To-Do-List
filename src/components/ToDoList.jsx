import ToDoItem from "./ToDoItem";

function ToDoList(props) {
  return (
    <ul>
      {props.tasks.map(function (task) {
        return (
          <ToDoItem
            key={task.id}
            task={task}
            deleteTask={props.deleteTask}
            toggleTask={props.toggleTask}
            editTask={props.editTask}
          />
        );
      })}
    </ul>
  );
}

export default ToDoList;
