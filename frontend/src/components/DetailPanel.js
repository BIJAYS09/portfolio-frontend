export default function DetailPanel({ data, onClose }) {
  if (!data) return null;

  return (
    <div style={{
      position: "fixed",
      right: 0,
      top: 0,
      width: "380px",
      height: "100vh",
      background: "#020617",
      borderLeft: "1px solid #334155",
      padding: "20px",
      zIndex: 50
    }}>
      <button
        onClick={onClose}
        style={{
          background: "none",
          border: "none",
          color: "#94a3b8",
          fontSize: "18px",
          float: "right",
          cursor: "pointer"
        }}
      >✕</button>

      <h2>{data.title}</h2>
      {data.content.map((line, i) => (
        <p key={i}>{line}</p>
      ))}
    </div>
  );
}
