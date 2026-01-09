export interface Project {
  id: string;
  name: string;
  description: string;
  problem: string;
  solution: string;
  techStack: string[];
  category: "systems" | "ai-ml" | "web" | "blockchain";
  github?: string;
  demo?: string;
  featured?: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: "distributed-cache",
    name: "Distributed Cache System",
    description: "High-performance distributed caching system with consistent hashing",
    problem: "Need for scalable caching solution handling millions of requests per second",
    solution: "Built a distributed cache using consistent hashing, achieving 99.9% uptime and sub-millisecond latency",
    techStack: ["Go", "Redis", "Docker", "Kubernetes"],
    category: "systems",
    github: "https://github.com/yourusername/distributed-cache",
    featured: true,
  },
  {
    id: "ml-inference-engine",
    name: "ML Inference Engine",
    description: "Optimized inference engine for deploying ML models at scale",
    problem: "ML models taking too long to serve predictions in production",
    solution: "Created a custom inference engine with model quantization and batching, reducing latency by 10x",
    techStack: ["Python", "PyTorch", "TensorRT", "FastAPI"],
    category: "ai-ml",
    github: "https://github.com/yourusername/ml-inference",
    demo: "https://ml-inference-demo.vercel.app",
    featured: true,
  },
  {
    id: "realtime-collab",
    name: "Real-time Collaboration Platform",
    description: "Google Docs-like collaborative editing with operational transforms",
    problem: "Need for seamless multi-user editing without conflicts",
    solution: "Implemented operational transformation algorithm enabling real-time collaboration for 100+ concurrent users",
    techStack: ["TypeScript", "React", "WebSocket", "PostgreSQL"],
    category: "web",
    github: "https://github.com/yourusername/realtime-collab",
    demo: "https://collab-demo.vercel.app",
    featured: true,
  },
  {
    id: "defi-protocol",
    name: "DeFi Lending Protocol",
    description: "Decentralized lending protocol with dynamic interest rates",
    problem: "Traditional lending systems lack transparency and accessibility",
    solution: "Built a trustless lending protocol with automated market makers and liquidation mechanisms",
    techStack: ["Solidity", "Hardhat", "React", "Ethers.js"],
    category: "blockchain",
    github: "https://github.com/yourusername/defi-protocol",
    featured: true,
  },
  {
    id: "code-analyzer",
    name: "Static Code Analyzer",
    description: "AST-based code analyzer for detecting security vulnerabilities",
    problem: "Manual code reviews missing critical security issues",
    solution: "Developed a static analyzer using AST parsing to detect common vulnerabilities and code smells",
    techStack: ["Rust", "LLVM", "Tree-sitter"],
    category: "systems",
    github: "https://github.com/yourusername/code-analyzer",
  },
  {
    id: "recommendation-system",
    name: "Recommendation System",
    description: "Hybrid recommendation engine using collaborative and content-based filtering",
    problem: "Low user engagement due to irrelevant content suggestions",
    solution: "Built a hybrid recommender achieving 40% improvement in click-through rate",
    techStack: ["Python", "TensorFlow", "Scikit-learn", "Apache Spark"],
    category: "ai-ml",
    github: "https://github.com/yourusername/recommender",
  },
];

export const CATEGORIES = [
  { id: "all", label: "All Projects" },
  { id: "systems", label: "Systems" },
  { id: "ai-ml", label: "AI / ML" },
  { id: "web", label: "Web" },
  { id: "blockchain", label: "Blockchain" },
];
