export default function Card({ title, subtitle, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-title">{title}</div>
      {subtitle && <div className="card-sub">{subtitle}</div>}
    </div>
  );
}
