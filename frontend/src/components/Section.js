export default function Section({ title, children, className = "" }) {
  return (
    <div className={`section ${className}`}>
      <div className="section-title">{title}</div>
      <div className="section-content">
        {children}
      </div>
    </div>
  );
}
