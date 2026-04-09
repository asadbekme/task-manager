import TaskList from "./components/task-list";

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        padding: "32px 16px",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ maxWidth: 560, margin: "0 auto" }}>
        <h1 style={{ textAlign: "center", color: "#1e293b", marginBottom: 32 }}>
          📋 Task Manager
        </h1>
        <TaskList />
      </div>
    </div>
  );
}

export default App;
