

export default function DetailModal({ data, onClose }) {
  if (!data) return null;

  const content = Array.isArray(data.content) ? data.content : [];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal-title">
          {data.iconType === "github" && data.url && (
            <a
              href={data.url}
              target="_blank"
              rel="noopener noreferrer"
              className="title-icon"
              title="View on GitHub"
              onClick={(e) => e.stopPropagation()}
            >
              <i className="fab fa-github"></i>
            </a>
          )}

          {data.iconType === "certificate" && data.url && (
            <a
              href={data.url}
              target="_blank"
              rel="noopener noreferrer"
              className="title-icon"
              title="View Certificate"
              onClick={(e) => e.stopPropagation()}
            >
              <i className="fas fa-certificate"></i>
            </a>
          )}

          <span>{data.title}</span>
        </h2>

        <ul className="modal-list">
          {content.map((line, i) => (
            <li key={i}>
              <span className="bullet">▸</span>
              <span>{line}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
