import { useState, useEffect } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import Filter from "./components/Filter";

function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [filter, setFilter] = useState("all");

  // Save tasks to localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="container">
      <h1>🌸 Task Manager</h1>

      <p className="stats">
        {tasks.filter(t => !t.completed).length} active •{" "}
        {tasks.filter(t => t.completed).length} done
      </p>

      <TaskInput tasks={tasks} setTasks={setTasks} />

      <Filter filter={filter} setFilter={setFilter} />

      <TaskList tasks={tasks} setTasks={setTasks} filter={filter} />
    </div>
  );
}

export default App;