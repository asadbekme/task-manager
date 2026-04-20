import { useState } from "react";
import AddTaskForm from "./components/add-task-form";
import StatsBar from "./components/stats-bar";
import FilterBar from "./components/filter-bar";
import TaskList from "./components/task-list";

const INITIAL_TASKS = [
  { id: 1, title: "React o'rganish", priority: "high", isDone: true },
  { id: 2, title: "Props tushunish", priority: "high", isDone: true },
  { id: 3, title: "State o'rganish", priority: "high", isDone: false },
  { id: 4, title: "Loyiha qurish", priority: "medium", isDone: false },
];

function App() {
  // ✅ Global state — bir necha komponent ishlatadi
  const [tasks, setTasks] = useState(INITIAL_TASKS);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  // console.log("component rendered");

  // ✅ Derived state — hisoblanadi, alohida useState emas
  const filteredTasks = tasks
    .filter((t) =>
      filter === "all" ? true : filter === "active" ? !t.isDone : t.isDone,
    )
    .filter((t) => t.title.toLowerCase().includes(search.toLowerCase()));

  const doneCount = tasks.filter((t) => t.isDone).length;
  const totalCount = tasks.length;

  // ✅ Handlerlar
  const addTask = ({ title, priority }) =>
    setTasks((prev) => [
      ...prev,
      { id: Date.now(), title, priority, isDone: false },
    ]);

  const toggleTask = (id) =>
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, isDone: !t.isDone } : t)),
    );

  const editTask = (id, newTitle) =>
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, title: newTitle } : t)),
    );

  const deleteTask = (id) =>
    setTasks((prev) => prev.filter((t) => t.id !== id));

  // ✅ Keyboard shortcut — global
  const handleGlobalKey = (e) => {
    // Ctrl+A — hammasini bajarilgan deb belgilash
    if (e.key === "a" && e.ctrlKey && e.shiftKey) {
      console.log("Test");

      e.preventDefault();
      setTasks((prev) => prev.map((t) => ({ ...t, isDone: true })));
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f1f5f9",
        display: "flex",
        justifyContent: "center",
        padding: "40px 16px",
        fontFamily: "'Segoe UI', sans-serif",
      }}
      onKeyDown={handleGlobalKey}
      tabIndex={-1}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 560,
          background: "#fff",
          borderRadius: 16,
          padding: 28,
          boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
          alignSelf: "flex-start",
        }}
      >
        <h1 style={{ textAlign: "center", color: "#1e293b", marginBottom: 8 }}>
          📋 Task Manager
        </h1>
        <p
          style={{
            textAlign: "center",
            color: "#9ca3af",
            fontSize: 12,
            marginBottom: 20,
          }}
        >
          Tahrirlash uchun ikki marta bosing | Ctrl+Shift+A — hammasini bajarish
        </p>

        {/* Props sifatida uzatiladi */}
        <StatsBar total={totalCount} done={doneCount} />

        <AddTaskForm onAdd={addTask} />

        <FilterBar
          search={search}
          filter={filter}
          onSearch={setSearch}
          onFilter={setFilter}
        />

        {/* Natija */}
        <TaskList
          filteredTasks={filteredTasks}
          search={search}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      </div>
    </div>
  );
}

export default App;
