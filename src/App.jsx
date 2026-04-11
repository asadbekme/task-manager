import { useState } from "react";
import AddTaskForm from "./components/add-task-form";
import StatsBar from "./components/stats-bar";
import TaskList from "./components/task-list";

const INITIAL_TASKS = [
  { id: 1, title: "React o'rganish", priority: "high", isDone: true },
  { id: 2, title: "Props tushunish", priority: "high", isDone: true },
  { id: 3, title: "State o'rganish", priority: "high", isDone: false },
  { id: 4, title: "Loyiha qurish", priority: "medium", isDone: false },
];

function App() {
  const [tasks, setTasks] = useState(INITIAL_TASKS);

  const addTask = ({ title, priority }) => {
    setTasks((prev) => [
      ...prev,
      { id: Date.now(), title, priority, isDone: false },
    ]);
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task,
      ),
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f1f5f9",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "40px 16px",
        fontFamily: "'Segoe UI', sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 560,
          background: "#fff",
          borderRadius: 16,
          padding: 28,
          boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
        }}
      >
        <h1 style={{ textAlign: "center", color: "#1e293b", marginBottom: 24 }}>
          📋 Task Manager
        </h1>

        <StatsBar tasks={tasks} />
        <AddTaskForm onAdd={addTask} />

        <TaskList
          tasks={tasks}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  );
}

export default App;
