import TaskItem from "./TaskItem";

function TaskList({ tasks, setTasks, filter }) {
  const now = Date.now();

  const filtered = tasks.filter((t) => {
    if (filter === "completed") {
      return (
        t.completed &&
        t.completedAt &&
        now - t.completedAt <= 24 * 60 * 60 * 1000
      );
    }

    // ALL & PENDING → only active tasks
    return !t.completed;
  });

  if (filtered.length === 0) {
    return <p>✨ No tasks here</p>;
  }

  return (
    <div>
      {filtered.map((task) => (
        <TaskItem key={task.id} task={task} tasks={tasks} setTasks={setTasks} />
      ))}
    </div>
  );
}

export default TaskList;