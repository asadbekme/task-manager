import { useState } from "react";

function TaskItem({ task, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(task.title);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") saveEdit();
    if (e.key === "Escape") cancelEdit();
  };

  const saveEdit = () => {
    if (editValue.trim() && editValue.trim() !== task.title) {
      onEdit(task.id, editValue.trim());
    }
    setIsEditing(false);
  };

  const cancelEdit = () => {
    setEditValue(task.title);
    setIsEditing(false);
  };

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
      // Card o'zini bosganda — event delegation
      onDoubleClick={() => !isEditing && setIsEditing(true)}
    >
      {/* Checkbox */}
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={(e) => {
          e.stopPropagation(); // card double click dan himoya
          onToggle(task.id);
        }}
        style={{
          width: 17,
          height: 17,
          cursor: "pointer",
          accentColor: "#3b82f6",
        }}
      />
      {/* Editing */}
      {isEditing ? (
        <input
          autoFocus
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={saveEdit}
          onClick={(e) => e.stopPropagation()}
          style={{
            flex: 1,
            padding: "4px 10px",
            borderRadius: 6,
            border: "2px solid #3b82f6",
            fontSize: 14,
            outline: "none",
          }}
        />
      ) : (
        <span
          style={{
            flex: 1,
            fontSize: 14,
            cursor: "text",
            color: task.isDone ? "#9ca3af" : "#111827",
            textDecoration: task.isDone ? "line-through" : "none",
          }}
          title="Tahrirlash uchun ikki marta bosing"
        >
          {task.title}
        </span>
      )}

      {/* Buttons */}
      {!isEditing && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsEditing(true);
            }}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: 14,
              opacity: 0.4,
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = 1)}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = 0.4)}
            title="Tahrirlash"
          >
            ✏️
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete(task.id);
            }}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: 14,
              opacity: 0.4,
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = 1)}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = 0.4)}
            title="O'chirish"
          >
            🗑️
          </button>
        </>
      )}

      {/* Save / Cancel */}
      {isEditing && (
        <div style={{ display: "flex", gap: 4 }}>
          <button
            onMouseDown={(e) => e.preventDefault()} // blur dan oldin ishlashi uchun
            onClick={saveEdit}
            style={{
              padding: "4px 10px",
              background: "#10b981",
              color: "#fff",
              border: "none",
              borderRadius: 6,
              cursor: "pointer",
              fontSize: 12,
            }}
          >
            ✅
          </button>
          <button
            onMouseDown={(e) => e.preventDefault()}
            onClick={cancelEdit}
            style={{
              padding: "4px 10px",
              background: "#e5e7eb",
              border: "none",
              borderRadius: 6,
              cursor: "pointer",
              fontSize: 12,
            }}
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}

export default TaskItem;
