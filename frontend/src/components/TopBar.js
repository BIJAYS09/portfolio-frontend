export default function TopBar() {
  return (
    <div style={{
      position: "fixed",
      top: 10,
      left: "50%",
      transform: "translateX(-50%)",
      padding: "10px 18px",
      background: "#0f172a",
      border: "1px solid #334155",
      borderRadius: "8px",
      zIndex: 100
    }}>
      <a
        href="/Bijay_Marasini_CV.pdf"
        download
        style={{ color: "#38bdf8", textDecoration: "none", fontWeight: 600 }}
      >
        ⬇ Download CV
      </a>
    </div>
  );
}
