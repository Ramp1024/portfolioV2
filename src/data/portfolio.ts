import type { Portfolio } from "@/types/portfolio";

export const portfolio: Portfolio = {
  profile: {
    name: "Ramprakash N",
    title: "Software Developer",
    location: "Bengaluru, KA",
    email: "n.ramprakash333@gmail.com",
    phone: "8667207006",
    summary:
      "Software Engineer with 3+ years of experience architecting enterprise systems, specializing in Contract Lifecycle Management (CLM), workflow automation, microservices, and AI engineering. Led the re-architecture of core CLM workflow capabilities at Conga, enabling migration of 15+ enterprise customers. Member of the CLM AI adoption team, exploring AI-based solutions to simplify complex workflows, reduce development friction, and improve team productivity.",
  },

  socials: [
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/ramprakash-n-430327197/",
    },
    { label: "GitHub", url: "https://github.com/Ramp1024" },
    { label: "Email", url: "mailto:n.ramprakash333@gmail.com" },
  ],

  experience: [
    {
      role: "Software Developer",
      company: "Conga",
      location: "Bengaluru, KA",
      start: "04/2025",
      end: "Present",
      highlights: [
      ],
    },
    {
      role: "Associate Software Developer",
      company: "Conga",
      location: "Bengaluru, KA",
      start: "04/2023",
      end: "03/2025",
      highlights: [],
    },
    {
      role: "Associate Developer Intern",
      company: "IBM India",
      location: "Bengaluru, KA",
      start: "02/2022",
      end: "07/2022",
      highlights: [
      ],
    },
  ],

  projects: [
    {
      title: "Vault",
      subtitle: "Local-first Personal RAG Knowledge Platform",
      featured: true,
      category: "AI",
      date: "06/2026",
      description:
                "Built a privacy-first RAG system over Notion workspaces using local LLMs and hybrid retrieval. Improved retrieval quality from 0.74 → 0.95 Recall@5 through metadata-aware search, BM25, vector retrieval, and reranking.",
      achievements: [
      ],
      technologies: [
        "FastAPI",
        "Python",
        "Qdrant",
        "Ollama",
        "React",
        "TypeScript",
        "Docker",
      ],
    },
    {
      title: "Conga Companion AI",
      subtitle: "Conga AI Hackathon",
      featured: true,
      category: "Hackathon",
      date: "06/2026",
      description:
        "Built an MCP-based AI agent with Harness that automated analytics workflows from dataset creation to dashboard generation through Apache Superset integrations. Part of the only end-to-end cross-product AI solution spanning CPQ, CLM, Approvals, and Reporting.",
      achievements: [],
      technologies: ["Python", "MCPs", "Apache Superset", "LLMs"],
      award: "Special recognition from the judging panel — Conga AI Hackathon",
    },
    {
      title: "Connect",
      subtitle: "Web Development Competition — IIT Hyderabad",
      featured: false,
      category: "Web",
      date: "03/2021",
      description:
        "A real-time social interaction web application using React, Node.js, and WebSockets, enabling users to connect and communicate instantly.",
      achievements: [
        "Secured 2nd Runner-Up position in Elan & Nision Web Development Competition for innovative design and functionality.",
      ],
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "CSS",
        "WebSockets",
      ],
      award: "2nd Runner-Up — Elan & Nision Web Development Competition",
    },
    {
      title: "SmartSite Developer",
      subtitle: "SASTRA Utsav Competition",
      featured: false,
      category: "Web",
      date: "10/2020",
      description:
        "A civil organization management web platform that facilitated coordination between clients and construction teams.",
      achievements: [
        "Awarded 2nd Runner-Up for practical design implementation and usability.",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "MySQL"],
      award: "2nd Runner-Up — SASTRA Utsav Competition",
    },
  ],

  awards: [
    {
      title: "Award for Entrepreneurial Spirit",
      issuer: "Conga",
      date: "03/2026",
      description:
        "Earned company-wide recognition from the Director of Engineering (CLM) for solving high-complexity, leadership-identified problems, delivering scalable solutions that accelerated adoption of CLM on the Conga Advantage Platform by simplifying migration for existing Conga Contracts customers.",
    },
    {
      title: "Company-wide Award — CLM Workflow & Multiple Requests",
      issuer: "Conga",
      date: "",
      description:
        "Recognized with a company-wide award for leading CLM Workflow and Multiple Requests initiatives, driving feature parity and enabling migration of 15+ customers to Platform CLM.",
    },
    {
      title: "Delivery Excellence — Redline AI UI",
      issuer: "Conga",
      date: "",
      description:
        "Led a 3-member team to deliver the Redline AI UI module one month ahead of schedule with zero P1 issues, earning organization-wide recognition for delivery excellence.",
    },
    {
      title: "Judging Panel Recognition — Conga Internal AI Hackathon",
      issuer: "Conga",
      date: "",
      description:
        "Received special recognition from the judging panel at Conga's internal AI Hackathon for contributing to the only end-to-end cross-product AI solution spanning CPQ, CLM, Approvals, and Reporting. Designed the Reporting AI pipeline using an MCP-based architecture and governance APIs to improve the reliability and consistency of LLM-driven report generation.",
    },
  ],

  education: [
    {
      degree:
        "Bachelor of Technology in Electronics and Communication Engineering (ECE)",
      institution: "SASTRA Deemed University",
      location: "Thanjavur, TN",
      start: "2018",
      end: "2022",
    },
  ],

  skills: {
    languages: ["TypeScript", "JavaScript", "Python", "C#", "SQL", "Java"],
    ai: [
      "Retrieval-Augmented Generation (RAG)",
      "Qdrant",
      "Semantic Search",
      "Vector Search",
      "Local LLMs (Ollama)",
      "Sentence Transformers",
      "Embedding Models",
      "Retrieval Evaluation (Recall@k, MRR)",
    ],
    backend: ["FastAPI", ".NET 8", "PostgreSQL", "REST APIs", "Microservices"],
    frontend: ["React", "Next.js", "TypeScript", "Redux Toolkit"],
    infrastructure: [
      "Docker",
      "Docker Compose",
      "Rancher",
      "Kubernetes",
      "Git",
      "CI/CD",
    ],
  },

  now: {
    building: [
      "Internal AI agents that streamline engineering workflows through graph-based contextual retrieval, token optimization, and structured tool orchestration.",
    ],
    learning: [],
    reading: [],
    exploring: [
      "AI-based solutions to simplify complex CLM workflows, reduce development friction, and improve team productivity.",
    ],
  },
};
