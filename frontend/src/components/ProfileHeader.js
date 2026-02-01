import profileImg from "../profile.jpg";

export default function ProfileHeader() {
  return (
    <div className="profile-header-wrapper">
      <div className="profile-header">

        {/* LEFT BLOCK */}
        <div className="profile-main">
          <div className="profile-left">
            <img
              src={profileImg}
              alt="Bijay Marasini"
              className="profile-image"
            />
          </div>

          <div className="profile-right">
            <h1>Bijay Marasini</h1>
            <p className="profile-title">
              MSc Data Science | AI & Full-Stack Engineer
            </p>

            <p className="profile-summary">
              Problem-solving ML / AI Engineer with a strong full-stack engineering background and a Master’s in Data Science. Hands-on experience in Generative AI, NLP, RAG, and multi-agent AI systems, gained through applied research, projects, and working-student roles, with a strong focus on production-ready, scalable software.
            </p>

            <div className="profile-links">
              <a href="https://github.com/BIJAYS09" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/bijay-marasini-a438b0157"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a href="mailto:bijays09@gmail.com">Email</a>
            </div>
          </div>
          {/* RIGHT BLOCK – STATUS CARD */}
          <div className="profile-status-card">
            <span className="status-badge">
              <span className="availability-dot"></span>
              Open to Opportunities
            </span>
            <div className="status-accent">
              <p>Applied AI / ML Engineer</p>
              <p>Generative AI Systems</p>
              <p>Production AI Development</p>
              <p>RAG & Agent-Based Systems</p>
              <p>Scalable AI Backend & APIs</p>
            </div>
          </div>
        </div>




      </div>
    </div>
  );
}
