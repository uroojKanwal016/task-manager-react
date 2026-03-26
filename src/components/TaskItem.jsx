import { useState } from "react";
import confetti from "canvas-confetti";

function TaskItem({ task, tasks, setTasks }) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(task.text);
  const [removing, setRemoving] = useState(false);

  const completeTask = () => {
    setRemoving(true);

    setTimeout(() => {
      const updatedTasks = tasks.map((t) =>
        t.id === task.id
          ? {
              ...t,
              completed: true,
              completedAt: Date.now(),
            }
          : t
      );

      setTasks(updatedTasks);

      confetti({
        particleCount: 120,
        spread: 80,
      });
    }, 250);
  };

  const deleteTask = () => {
    setRemoving(true);

    setTimeout(() => {
      setTasks(tasks.filter((t) => t.id !== task.id));
    }, 250);
  };

  const saveEdit = () => {
    if (!text.trim()) return;

    setTasks(
      tasks.map((t) =>
        t.id === task.id ? { ...t, text } : t
      )
    );

    setIsEditing(false);
  };

  return (
    <div className={`task ${removing ? "fade-out" : ""}`}>
      <div className="task-left">
        {isEditing ? (
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        ) : (
          <>
            <div className="task-text">{task.text}</div>
            <small className="task-date">
              {new Date(task.createdAt).toLocaleDateString(undefined, {
                day: "numeric",
                month: "short",
              })}
            </small>
          </>
        )}
      </div>

      <div className="actions">
        {!task.completed && (
          <button onClick={completeTask}>✔</button>
        )}

        {isEditing ? (
          <button onClick={saveEdit}>💾</button>
        ) : (
          <button onClick={() => setIsEditing(true)}>✏️</button>
        )}

        <button onClick={deleteTask}>✖</button>
      </div>
    </div>
  );
}

export default TaskItem;