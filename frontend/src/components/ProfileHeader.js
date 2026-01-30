import { useState } from "react";
import profileImg from "../profile.jpg";


export default function ProfileHeader() {
  // 🔹 States for Playground
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  // 🔹 Function that talks to your Flask backend
  const runPrompt = async () => {
    if (!prompt.trim()) {
      setResponse("⚠️ Please ask something about me.");
      return;
    }

    try {
      const res = await fetch("https://portfolio-backend-bje5.onrender.com/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: prompt }),
      });

      const data = await res.json();
      setResponse(data.answer);
    } catch (error) {
      setResponse("❌ Backend not reachable. Start your Flask server.");
    }
  };

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
              AI-focused software engineer with experience in Generative AI, RAG systems,
              NLP, and full-stack development. Passionate about building intelligent systems
              that combine machine learning and scalable engineering.
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
        </div>

        {/* RIGHT BLOCK – REAL LLM PLAYGROUND */}
        <div className="header-playground">
          <div className="playground-title">🧪 Mini LLM Playground</div>

          <div className="playground-body">
            {/* LEFT: Input */}
            <div className="playground-left">
              <textarea
                className="playground-input"
                placeholder="Ask something like: Where did you study?"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />

              <button className="playground-run" onClick={runPrompt}>
                Ask My AI
              </button>
            </div>

            {/* RIGHT: Output */}
            <div className="playground-output">
              {response || "Ask me anything about my education, skills, experience, or location."}
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}
