export interface ProjectData {
  id: string;
  title: string;
  category: string;
  year: string;
  role: string;
  src: string;
  aspectRatio: string;
  client: string;
  location: string;
  technologies: string[];
  summary: string;
  challenge: string;
  solution: string;
}

export const projectsData: ProjectData[] = [
  {
    id: "stampede-prevention",
    title: "STAMPEDE PREVENTION SYSTEM",
    category: "COMPUTER VISION / DEEP LEARNING",
    year: "2025",
    role: "RESEARCH INTERN",
    src: "/projects/stampede.png",
    aspectRatio: "aspect-[16/10]",
    client: "CHENNAI INST. OF TECHNOLOGY",
    location: "CHENNAI, INDIA",
    technologies: ["PYTHON", "OPENCV", "YOLO", "DEEP LEARNING"],
    summary:
      "A real-time crowd monitoring and alert system using computer vision for automated density estimation and risk detection, accepted for publication at IEEE RCSM 2025.",
    challenge:
      "Crowd control and stampede prevention in dense gatherings suffer from slow manual monitoring and delayed response times. Traditional systems fail to estimate crowd density across multiple real-time camera feeds dynamically and lack automated trigger mechanics to alert security coordinators of high-risk densities.",
    solution:
      "Engineered real-time computer vision pipelines utilizing Python, OpenCV, and YOLO model architectures to detect and track individuals across multi-feed camera setups. Implemented automated crowd density estimation and predictive hazard alert systems that flag dangerous crowd build-ups, validated and published at IEEE RCSM 2025.",
  },
  {
    id: "floatchat",
    title: "FLOATCHAT",
    category: "AI CONVERSATIONAL / RAG",
    year: "2024",
    role: "AI WORKFLOW ENGINEER",
    src: "/projects/floatchat.png",
    aspectRatio: "aspect-[4/3]",
    client: "PERSONAL DEVELOPMENT",
    location: "REMOTE",
    technologies: ["REACT.JS", "NODE.JS", "LANGCHAIN", "FAISS", "POSTGRESQL"],
    summary:
      "An AI-powered conversational platform for oceanographic data discovery using a full-stack architecture, featuring semantic FAISS vector search and retrieval-augmented generation.",
    challenge:
      "Oceanographic datasets are highly specialized, disparate, and challenging for researchers to query using standard keyword searches. Finding semantic relationships in academic databases requires a smart retrieval pipeline that understands domain terms and returns context-aware, verifiable answers.",
    solution:
      "Designed and built FloatChat, a conversational data discovery system. Deployed LangChain for prompt orchestration, FAISS for dense vector indexing, and PostgreSQL for relational user management. Developed a React.js client interface that streamlines natural language queries, turning complex oceanographic datasets into interactive conversational feeds.",
  },
  {
    id: "student-query-bot",
    title: "STUDENT QUERY BOT",
    category: "RAG CHATBOT / AI AGENTS",
    year: "2024",
    role: "AI WORKFLOW ENGINEER",
    src: "/projects/query_bot.png",
    aspectRatio: "aspect-[16/10]",
    client: "CHENNAI INST. OF TECHNOLOGY",
    location: "CHENNAI, INDIA",
    technologies: ["DIFY", "LANGFLOW", "RAG", "PROMPT ENGINEERING", "VECTOR DATABASES"],
    summary:
      "An AI-powered academic assistant for institutional query resolution using retrieval-augmented generation to reduce manual support dependencies.",
    challenge:
      "Academic administrative channels are often overloaded with repetitive inquiries regarding policies, fee structures, and campus guidelines. Processing these support tickets manually creates significant lag times and consumes valuable administrative resources.",
    solution:
      "Created an institutional RAG chatbot utilizing Dify and Langflow to coordinate prompt logic and retrieve relevant information from policy handbook embeddings. Structured response validation pipelines to deliver verified institutional answers, significantly offloading administrative support volumes.",
  },
];
