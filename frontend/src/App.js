import { useState } from "react";
import "./styles.css";

import Card from "./components/Card";
import Section from "./components/Section";
import DetailModal from "./components/DetailModal";
import ProfileHeader from "./components/ProfileHeader";



const skills = [
  {
    title: "ML & NLP",
    subtitle: "Modeling, Training, Evaluation",
    details: [
      "PyTorch for building and training deep learning models",
      "Transformers for attention-based NLP and generative tasks",
      "Hugging Face for pretrained models, fine-tuning, and datasets",
      "TensorFlow for end-to-end machine learning pipelines",
      "Feature engineering to create meaningful model inputs",
      "Model evaluation using metrics and validation techniques"
    ]
  },
  {
    title: "Retrieval-Augmented Generation",
    subtitle: "Search, Vectors, Prompting",
    details: [
      "FAISS for efficient similarity search over embeddings",
      "Vector databases for storing and retrieving embeddings at scale",
      "Semantic search for meaning-based information retrieval",
      "Cross-encoder re-ranking to improve retrieval accuracy",
      "Prompt engineering for grounding LLM responses"
    ]
  },
  {
    title: "Agentic AI & LLM Systems",
    subtitle: "Agents, Graphs, Orchestration",
    details: [
      "LangChain for building LLM-powered applications",
      "LangGraph for graph-based agent orchestration",
      "Multi-agent systems for collaborative task execution",
      "State machines for controlled agent behavior",
      "LLM APIs (Google Gemini) for hosted large language models"
    ]
  },
  {
    title: "Programming Languages",
    subtitle: "Multi-language Development",
    details: [
      "Python for AI, machine learning, and backend development",
      "Java for enterprise and microservices applications",
      "JavaScript for frontend and backend web development",
      "C++ for performance-critical and system-level programming",
      "C# (.NET) for desktop, web, and enterprise solutions"
    ]
  },
  {
    title: "Backend & APIs",
    subtitle: "Server-side Development",
    details: [
      "Node.js for scalable backend services",
      "Spring Boot for building Java-based microservices",
      "Spring MVC for structured enterprise applications",
      "Flask for lightweight Python web APIs",
      "FastAPI for high-performance, async Python APIs",
      "RESTful APIs for standardized service communication"
    ]
  },
  {
    title: "Data & Databases",
    subtitle: "SQL & NoSQL Systems",
    details: [
      "Pandas for data manipulation and analysis",
      "NumPy for numerical computing and arrays",
      "PostgreSQL for advanced open-source relational databases",
      "MySQL for widely used relational database systems",
      "SQL Server for Microsoft-based enterprise databases",
      "MongoDB for NoSQL document-oriented storage",
      "Oracle for enterprise-grade relational databases"
    ]
  },
  {
    title: "Data Visualization & BI Tools",
    subtitle: "Analytics & Reporting",
    details: [
      "Matplotlib for low-level data visualization in Python",
      "Seaborn for statistical and aesthetic visualizations",
      "Power BI for interactive dashboards and reporting",
      "Tableau for advanced data visualization and analytics"
    ]
  },
  {
    title: "Software Engineering Concepts",
    subtitle: "Design & Quality",
    details: [
      "System design for scalable and reliable applications",
      "Performance optimization for efficient software systems",
      "Design patterns for reusable and maintainable code",
      "Code reviews for improving quality and collaboration"
    ]
  },
  {
    title: "DevOps & Tools",
    subtitle: "Automation & Deployment",
    details: [
      "Docker for containerization and consistent deployments",
      "Git for version control and team collaboration",
      "CI/CD pipelines for automated build and deployment",
      "Linux for server administration and scripting",
      "Jenkins for automation and continuous integration"
    ]
  },
  {
    title: "Agile Methodology",
    subtitle: "Team & Process Management",
    details: [
      "Scrum for iterative development and sprint planning",
      "Kanban for visual workflow and continuous delivery"
    ]
  },
  {
    title: "Architecture",
    subtitle: "System Design Patterns",
    details: [
      "Microservices architecture for scalable systems",
      "Client-server architecture separating frontend and backend"
    ]
  },
  {
    title: "Productivity Tools",
    subtitle: "Documentation & Presentation",
    details: [
      "MS Excel for data analysis and reporting",
      "MS Word for professional and technical documentation",
      "MS PowerPoint for presentations and storytelling",
      "LaTeX for high-quality technical and academic documents"
    ]
  }
];


const experience = [
  {
  "title": "Research Assistant – Data Science",
  "subtitle": "RAG, NLP, Machine Learning | IAB, Nürnberg (Oct 2024 – Dec 2025)",
  "details": [
    "Led development of a RAG-based job-matching pipeline using FAISS embeddings, cross-encoder reranking, and LoRA fine-tuning- increased model F1 from 0.26 to 0.80 and improved precision by 60%.",
    "Built an automated weak-supervision pipeline to generate 41,000 labeled samples, reducing manual labeling effort by 50% and enabling downstream model training improvements.",
    "Implemented end-to-end evaluation (Precision/Recall/F1/AUC) and monitoring dashboards to track model drift and performance for stakeholders.",
    "Cleaned, transformed, and analyzed large-scale datasets using Python (Pandas, NumPy) and SQL, and created visual reports to communicate insights and model performance to stakeholders.",
    "Collaborated with domain experts to ensure ethical, explainable AI practices; produced reproducible training notebooks and model cards for audits.",
  ]
},

        {
  "title": "Working Student – Full-Stack Developer",
  "subtitle": "Scalable Dashboards, Security, Modern Web Stack | A. Eberle GmbH & Co. KG, Nürnberg (Jan 2023 – Jul 2023)",
  "details": [
    "Contributed to system design decisions for dashboard architecture, ensuring scalability and performance of data visualization services for power quality solutions.",
    "Streamlined user role and permission management, improving application security and access control efficiency.",
    "Developed and maintained clean, reusable frontend and backend code by following design patterns and best practices.",
    "Actively participated in code reviews to ensure high code quality and maintainability.",
    "Worked with Node.js and React to build and enhance full-stack web applications.",
  ]
},
        {
  "title": "Full-Stack Developer",
  "subtitle": "Loyalty Systems, Secure Payments, High-Performance APIs | ICC Loyalty, Noida (Feb 2022 – Sept 2022)",
  "details": [
    "Designed, developed, and maintained customer-facing web applications, including a Gift Card Management System and Loyalty Points Program, leveraging data analytics to improve customer engagement and retention.",
    "Integrated secure Visa and Mastercard payment gateways enabling real-time online transactions.",
    "Implemented MFA authentication, strengthening security compliance and user data protection.",
    "Optimized API performance through query tuning and efficient data modeling, reducing response latency by 30%.",
    "Developed scalable backend services using Java, Spring Boot, Hibernate, and Spring MVC.",
  ]
},
        {
  "title": "Software Engineer – Product Development",
  "subtitle": "Telecom Products, Scalable Backend Systems | Capgemini, Gurugram (Dec 2019 – Jan 2022)",
  "details": [
    "Developed telecom product workflows including custom data/voice packs and bundle offers to support customer personalization.",
    "Designed USSD flows for real-time activation and recharge automation",
    "Implemented automated notification systems to alert customers on recharge success, package expiration, and 80% dataconsumption thresholds, improving user experience and transparency.",
    "Participated in system design discussions, code reviews, and applied design patterns to build scalable and maintainable telecom applications.",
    "Optimized backend performance using database tuning, caching, and asynchronous processing.",
  ]
}
]
const education = [
  {
  "title": "M.Sc. in Data Science",
  "subtitle": "Friedrich-Alexander-Universität Erlangen-Nürnberg | Erlangen, Germany (Oct 2022 - Present)",
  "details": [
    "Coursework in Deep Learning and advanced neural network architectures.",
    "Studied Pattern Recognition techniques for classification and clustering problems.",
    "Completed Machine Learning for Time Series focusing on forecasting and sequential data modeling.",
    "Learned Machine Learning in Finance for risk modeling, prediction, and quantitative analysis.",
    "Gained expertise in Business Intelligence for data-driven decision making and reporting.",
    "Explored Explainable Machine Learning techniques to improve model transparency and trust.",
    "Studied Knowledge Discovery in Databases (KDD) for large-scale data mining and pattern extraction.",
    "Covered selected advanced topics in Machine Learning and current research trends."
  ]
},
       {
  "title": "B.Tech in Information Technology",
  "subtitle": "Guru Gobind Singh Indraprastha University | Delhi, India (Aug 2015 - July 2019)",
  "details": [
    "Studied Software Engineering principles including system design, SDLC, and best development practices.",
    "Built strong foundations in Applied Mathematics for problem solving and algorithmic thinking.",
    "Learned Web Technology covering frontend and backend web application development.",
    "Gained expertise in Data Structures and Algorithms for efficient and optimized programming.",
    "Developed object-oriented design and programming skills through Object Oriented Programming.",
    "Studied Advanced Database Administration including database design, optimization, and management."
  ]
}
]
const projects = [
  {
    title: "ArguMind – Multi-Agent AI Debate System",
    subtitle: "LangGraph, Agentic AI, FastAPI, React",
    url: "https://github.com/BIJAYS09/ArguMind",
    iconType: "github",
    details: [
      "Designed and developed a full-stack multi-agent AI debate system using LangGraph with Pro, Contra, Judge, and Critic agents orchestrated via a state-machine workflow.",
      "Developed a FastAPI backend exposing REST endpoints to run debates and return structured AI outputs.",
      "Created an interactive React.js + React Flow frontend to visualize agent execution as draggable, real-time graph nodes.",
      "Implemented SOLID architecture and dependency injection for modular, extensible, and testable agent design.",
      "Designed the system to be containerization-ready with Docker for scalable deployment"
    ]
  },
  {
    title: "RAG-Based AI Chatbot",
    subtitle: "Retrieval-Augmented Generation, Semantic Search",
    url: "https://github.com/BIJAYS09/RAG-Based-AI-Chatbot",
    iconType: "github",
    details: [
      "Developed a Python-based Retrieval-Augmented Generation (RAG) chatbot application to deliver context-aware responses by combining information retrieval with large language model generation.",
      "Leveraged semantic vector search techniques for effective retrieval of relevant response context, reducing hallucinations and improving answer relevance.",
      "Designed and containerized the application using Docker and Docker Compose for efficient environment setup, deployment, and scalability.",
      "Implemented semantic vector search techniques for effective retrieval of relevant context.",
      "Designed the system for modularity and ease of deployment across environments."
    ]
  }
];

const certifications = [
  {
    title: "Advanced RAG Applications with Vector Databases",
    subtitle: "Retrieval-Augmented Generation, Vector Search",
    url: "https://www.linkedin.com/learning/certificates/a3c790ef8292e3de48da55668cf8c60a6600958cf56c0a3a6af464fa333904ee",
    iconType: "certificate",
    details: [
      "Completed an advanced certification focused on building Retrieval-Augmented Generation (RAG) systems using vector databases",
      "Learned techniques for storing, indexing, and retrieving embeddings for semantic search",
      "Applied RAG pipelines to improve LLM response accuracy and reduce hallucinations",
      "Explored practical design patterns for integrating vector databases with large language models",
      "Covered real-world use cases for scalable and production-ready RAG applications"
    ]
  },
  {
    title: "Learning Docker",
    subtitle: "Containerization, Deployment, DevOps",
    url: "https://www.linkedin.com/learning/certificates/419b12eabbf930f5e6098a690a835eb2a2d1b6496eb754970fbf49d5d3ba2931",
    iconType: "certificate",
    details: [
      "Completed a hands-on certification focused on Docker fundamentals and container-based application deployment",
      "Learned how to build, run, and manage Docker containers for consistent development environments",
      "Worked with Docker images, containers, and Dockerfiles to package applications efficiently",
      "Explored container orchestration concepts and best practices for scalable deployments",
      "Applied Docker workflows to simplify application setup, deployment, and environment consistency"
    ]
  }
];


const languages = [
   {
    "title": "English",
    "subtitle": "Professional Proficiency (C1)",
    "details": [
      "Used daily in academic, research, and professional environments",
      "Fluent in technical documentation, presentations, and discussions",
      "Experienced in writing research reports and software documentation"
    ]
  },
  {
    "title": "German",
    "subtitle": "Intermediate Proficiency (A2, Actively Learning)",
    "details": [
      "Conversational ability in everyday and workplace scenarios",
      "Currently improving speaking, listening, and writing skills",
      "Able to understand basic technical and professional terminology"
    ]
  },
  {
    "title": "Hindi",
    "subtitle": "Native Proficiency",
    "details": [
      "Native-level fluency in speaking, reading, and writing",
      "Used for professional and personal communication",
      "Strong command of formal and informal communication"
    ]
  }
]

export default function App() {
  // 1. State must be INSIDE the component
  const [selected, setSelected] = useState(null);

  // 3. JSX rendering also inside the same component
  return (
    <>
      <ProfileHeader />

      <div className="dashboard">
        <Section title="Skills">
          {skills.map((item, i) => (
            <Card
              key={i}
              title={item.title}
              subtitle={item.subtitle}
              onClick={() =>
                setSelected({
                  title: item.title,
                  content: item.details,
                })
              }
            />
          ))}
        </Section>

        <Section title="Experience">
          {experience.map((item, i) => (
            <Card
              key={i}
              title={item.title}
              subtitle={item.subtitle}
              onClick={() =>
                setSelected({
                  title: item.title,
                  content: item.details,
                })
              }
            />
          ))}
        </Section>

        <Section title="Education">
          {education.map((item, i) => (
            <Card
              key={i}
              title={item.title}
              subtitle={item.subtitle}
              onClick={() =>
                setSelected({
                  title: item.title,
                  content: item.details,
                })
              }
            />
          ))}
        </Section>

        <Section title="Projects">
          {projects.map((item, i) => (
            <Card
              key={i}
              title={item.title}
              subtitle={item.subtitle}
              onClick={() =>
                setSelected({
                  title: item.title,
                  content: item.details,
                  url: item.url,
                  iconType: item.iconType
                })
              }
            />
          ))}
        </Section>

        <Section title="Certifications">
          {certifications.map((item, i) => (
            <Card
              key={i}
              title={item.title}
              subtitle={item.subtitle}
              onClick={() =>
                setSelected({
                  title: item.title,
                  content: item.details,
                  url: item.url,
                  iconType: item.iconType
                })
              }
            />
          ))}
        </Section>

        <Section title="Languages">
          {languages.map((item, i) => (
            <Card
              key={i}
              title={item.title}
              subtitle={item.subtitle}
              onClick={() =>
                setSelected({
                  title: item.title,
                  content: item.details,
                })
              }
            />
          ))}
        </Section>
      </div>

      <DetailModal data={selected} onClose={() => setSelected(null)} />

    </>

    
  );
  
}
