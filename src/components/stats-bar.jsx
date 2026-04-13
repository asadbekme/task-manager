function StatsBar({ total, done }) {
  const percent = total > 0 ? Math.round((done / total) * 100) : 0;
  const remaining = total - done;

  return (
    <div style={{ marginBottom: 20 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 6,
        }}
      >
        <span style={{ color: "#6b7280", fontSize: 13 }}>
          {remaining > 0 ? `${remaining} ta qoldi` : "Hammasi bajarildi 🎉"}
        </span>
        <span style={{ color: "#3b82f6", fontWeight: 700, fontSize: 13 }}>
          {percent}%
        </span>
      </div>
      <div style={{ height: 8, background: "#e5e7eb", borderRadius: 999 }}>
        <div
          style={{
            height: "100%",
            borderRadius: 999,
            width: `${percent}%`,
            background: percent === 100 ? "#10b981" : "#3b82f6",
            transition: "width 0.4s",
          }}
        />
      </div>
    </div>
  );
}

export default StatsBar;
