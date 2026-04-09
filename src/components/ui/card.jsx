export function Card({ children, title, footer }) {
  return (
    <div
      style={{
        border: "1px solid #e5e7eb",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
      }}
    >
      {/* Header — faqat title bo'lsa ko'rinadi */}
      {title && (
        <div
          style={{ padding: "16px 20px", borderBottom: "1px solid #e5e7eb" }}
        >
          <h3 style={{ margin: 0 }}>{title}</h3>
        </div>
      )}

      {/* Body — children */}
      <div style={{ padding: "20px" }}>{children}</div>

      {/* Footer — faqat footer bo'lsa ko'rinadi */}
      {footer && (
        <div
          style={{
            padding: "12px 20px",
            borderTop: "1px solid #e5e7eb",
            background: "#f9fafb",
          }}
        >
          {footer}
        </div>
      )}
    </div>
  );
}
