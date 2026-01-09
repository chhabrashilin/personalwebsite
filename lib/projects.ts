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
    id: "skywash",
    name: "SkyWash",
    description: "Interactive PM₂.₅ analytics and cloud-seeding simulation platform",
    problem: "Researchers needed an accessible platform to analyze air quality data and simulate cloud-seeding interventions at scale",
    solution: "Engineered a production-grade Kubernetes service on NSF NCAR's CIRRUS infrastructure, adopted by 150+ researchers. Built a zero-egress CI/CD pipeline with in-cluster GitHub Actions, achieving 60% faster build times with Harbor Trivy security gating and OpenBao secret management.",
    techStack: ["React", "TypeScript", "FastAPI", "Docker", "Kubernetes", "GitHub Actions", "OpenBao", "Harbor"],
    category: "systems",
    demo: "https://skywash.k8s.ucar.edu/",
    featured: true,
  },
  {
    id: "loan-predictor",
    name: "Loan Approval Predictor",
    description: "Machine learning system for predicting loan approvals using big data",
    problem: "Need to analyze large-scale Wisconsin loan data to predict approval patterns and identify key factors",
    solution: "Processed and analyzed loan application data using Apache Spark and SparkSQL. Developed a decision tree model achieving 89.3% accuracy in predicting approvals based on loan amount, income, and interest rate.",
    techStack: ["Python", "Apache Spark", "SparkSQL", "Docker"],
    category: "ai-ml",
    featured: true,
  },
  {
    id: "k8s-hpc-platform",
    name: "Kubernetes HPC Platform",
    description: "Cloud-native HPC platform for atmospheric research",
    problem: "NSF NCAR needed scalable containerized infrastructure for high-performance computing workloads",
    solution: "Deployed four containerized solutions on an 18-node Kubernetes cluster (10 GPU, 8 CPU) using Docker, Kubernetes, and Helm, improving computational resource utilization by 20%. Automated CI/CD with GitOps and Argo CD, accelerating deployments by 30%.",
    techStack: ["Kubernetes", "Docker", "Helm", "Argo CD", "Harbor", "Trivy"],
    category: "systems",
    featured: true,
  },
  {
    id: "inventory-management",
    name: "Inventory Management System",
    description: "Web-based inventory system with real-time tracking and automation",
    problem: "Manual inventory tracking led to frequent stock discrepancies and inefficiencies",
    solution: "Designed and deployed a full-stack web application using React.js, Node.js, and MongoDB with robust data validation and automation, reducing stock discrepancies by 7%. Optimized database performance through indexing and aggregation, achieving 30% faster response times.",
    techStack: ["React.js", "Node.js", "MongoDB", "Express"],
    category: "web",
    featured: true,
  },
];

export const CATEGORIES = [
  { id: "all", label: "All Projects" },
  { id: "systems", label: "Systems" },
  { id: "ai-ml", label: "AI / ML" },
  { id: "web", label: "Web" },
];
