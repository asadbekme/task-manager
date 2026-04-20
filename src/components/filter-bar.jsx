function FilterBar({ search, filter, onSearch, onFilter }) {
  const filters = [
    { key: "all", label: "Hammasi" },
    { key: "active", label: "Aktiv" },
    { key: "completed", label: "Bajarilgan" },
  ];

  return (
    <div
      style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap" }}
    >
      <input
        value={search}
        onChange={(e) => onSearch(e.target.value)}
        placeholder="🔍 Qidirish..."
        onKeyDown={(e) => e.key === "Escape" && onSearch("")}
        placeholder="🔍 Qidirish... (Esc — tozalash)"
        style={{
          flex: 1,
          minWidth: 150,
          padding: "9px 13px",
          borderRadius: 8,
          border: "1px solid #d1d5db",
          fontSize: 14,
        }}
      />
      {filters.map((f) => (
        <button
          key={f.key}
          onClick={() => onFilter(f.key)}
          style={{
            padding: "9px 16px",
            borderRadius: 8,
            border: "1px solid #d1d5db",
            background: filter === f.key ? "#3b82f6" : "#fff",
            color: filter === f.key ? "#fff" : "#374151",
            cursor: "pointer",
            fontWeight: 600,
            fontSize: 13,
            transition: "all 0.2s",
          }}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;
