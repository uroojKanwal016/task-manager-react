import { useState } from "react";

function TaskInput({ tasks, setTasks }) {
  const [input, setInput] = useState("");

  const addTask = () => {
    if (!input.trim()) return;

    setTasks([
      ...tasks,
      {
        id: Date.now(),
        text: input,
        completed: false,
        createdAt: Date.now(),
      },
    ]);

    setInput("");
  };

  return (
    <div>
      <input
        value={input}
        placeholder="Add a task..."
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && addTask()}
      />
      <button onClick={addTask} className="add-btn">Add</button>
    </div>
  );
}

export default TaskInput;