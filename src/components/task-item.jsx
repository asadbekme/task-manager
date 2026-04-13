function TaskItem({ task, onToggle, onDelete }) {
  const priorityBorder = { high: "#ef4444", medium: "#f59e0b", low: "#10b981" };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "11px 14px",
        marginBottom: 8,
        background: task.isDone ? "#f9fafb" : "#fff",
        border: "1px solid #e5e7eb",
        borderLeft: `4px solid ${priorityBorder[task.priority]}`,
        borderRadius: 10,
        transition: "all 0.2s",
      }}
    >
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={() => onToggle(task.id)}
        style={{
          width: 17,
          height: 17,
          cursor: "pointer",
          accentColor: "#3b82f6",
        }}
      />
      <span
        style={{
          flex: 1,
          fontSize: 14,
          color: task.isDone ? "#9ca3af" : "#111827",
          textDecoration: task.isDone ? "line-through" : "none",
        }}
      >
        {task.title}
      </span>
      <button
        onClick={() => onDelete(task.id)}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          fontSize: 15,
          opacity: 0.4,
          transition: "opacity 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = 1)}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = 0.4)}
      >
        🗑️
      </button>
    </div>
  );
}

export default TaskItem;
