import { useState } from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import Clock from "./components/Clock";

function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(text) {
    setTasks([
      ...tasks,
      { id: Date.now(), text: text, completed: false }
    ]);
  }

  function deleteTask(id) {
    setTasks(tasks.filter(function (task) {
      return task.id !== id;
    }));
  }

  function toggleTask(id) {
    setTasks(
      tasks.map(function (task) {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    );
  }

  function editTask(id, newText) {
    setTasks(
      tasks.map(function (task) {
        if (task.id === id) {
          return { ...task, text: newText };
        }
        return task;
      })
    );
  }

  return (
    <div className="app">
      <Clock/>
      <Header addTask={addTask} />
      <ToDoList
        tasks={tasks}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
        editTask={editTask}
      />
    </div>
  );
}

export default App;
