import { useState } from "react";

function AddTaskForm({ onAdd }) {
  // Bu state faqat form uchun → shu yerda turishi to'g'ri
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("medium");

  const handleAdd = () => {
    if (!title.trim()) return;
    onAdd({ title: title.trim(), priority });
    setTitle("");
    setPriority("medium");
  };

  return (
    <div
      style={{
        display: "flex",
        gap: 8,
        marginBottom: 20,
        padding: 14,
        background: "#f8fafc",
        borderRadius: 10,
        border: "1px dashed #cbd5e1",
      }}
    >
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAdd()}
        placeholder="Yangi vazifa nomi..."
        style={{
          flex: 1,
          padding: "9px 13px",
          borderRadius: 8,
          border: "1px solid #d1d5db",
          fontSize: 14,
        }}
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        style={{
          padding: "9px 10px",
          borderRadius: 8,
          border: "1px solid #d1d5db",
        }}
      >
        <option value="high">🔴 Yuqori</option>
        <option value="medium">🟡 O'rta</option>
        <option value="low">🟢 Past</option>
      </select>
      <button
        onClick={handleAdd}
        disabled={!title.trim()}
        style={{
          padding: "9px 18px",
          borderRadius: 8,
          fontWeight: 700,
          background: title.trim() ? "#3b82f6" : "#bfdbfe",
          color: "#fff",
          border: "none",
          cursor: title.trim() ? "pointer" : "not-allowed",
        }}
      >
        + Qo'shish
      </button>
    </div>
  );
}

export default AddTaskForm;
