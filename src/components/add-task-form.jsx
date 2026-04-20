import { useRef, useState } from "react";

function AddTaskForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("medium");
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e?.preventDefault();
    if (!title.trim()) return;
    onAdd({ title: title.trim(), priority });
    setTitle("");
    setPriority("medium");
    inputRef.current?.focus(); // Qo'shgandan keyin focus qaytarish
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSubmit();
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
        ref={inputRef}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Yangi vazifa... (Enter bosing)"
        style={{
          flex: 1,
          padding: "9px 13px",
          borderRadius: 8,
          border: "1px solid #d1d5db",
          fontSize: 14,
          outline: "none",
        }}
        onFocus={(e) => (e.target.style.borderColor = "#3b82f6")}
        onBlur={(e) => (e.target.style.borderColor = "#d1d5db")}
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
        onClick={handleSubmit}
        disabled={!title.trim()}
        style={{
          padding: "9px 18px",
          borderRadius: 8,
          fontWeight: 700,
          background: title.trim() ? "#3b82f6" : "#bfdbfe",
          color: "#fff",
          border: "none",
          cursor: title.trim() ? "pointer" : "not-allowed",
          transition: "background 0.2s",
        }}
      >
        + Qo'shish
      </button>
    </div>
  );
}

export default AddTaskForm;
