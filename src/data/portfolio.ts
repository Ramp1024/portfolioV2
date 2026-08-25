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
        "Sole technical owner of CLM Workflows, re-architecting the workflow feature as Workflow Phase-2 on CLM to enable migration of 15+ enterprise Conga Contracts customers and accelerate adoption of Platform CLM.",
        "Architected and delivered the Multiple Contract Requests feature from scratch, earning broad stakeholder approval for the solution design. Enabled customers to generate multiple contracts through a single streamlined workflow instead of manually drafting individual contracts, reducing repetitive effort by over 30%.",
        "Developing internal AI agents that streamline engineering workflows through graph-based contextual retrieval, token optimization, and structured tool orchestration.",
        "Developed Playwright (Java) regression test suites, reducing manual end-of-release testing effort by over 80% while minimizing defect leakage into higher environments.",
      ],
    },
    {
      role: "Associate Software Developer",
      company: "Conga",
      location: "Bengaluru, KA",
      start: "04/2023",
      end: "03/2025",
      highlights: [
        "Architected the CLM Redline AI UI from greenfield, leading a 3-engineer team through system design, implementation, code reviews, and cross-application compatibility, enabling rollout across Salesforce CLM, CFS, and RLP Platform.",
        "Designed and built the integration layer enabling CLM to leverage Platform Workflow capabilities, delivering Workflow Phase 1 for strategic customers including Nomura and Michelin. The reusable architecture was subsequently adopted by multiple product teams to implement workflow capabilities within their applications.",
      ],
    },
    {
      role: "Associate Developer Intern",
      company: "IBM India",
      location: "Bengaluru, KA",
      start: "02/2022",
      end: "07/2022",
      highlights: [
        "Partnered on the National Grid project by working on both Salesforce Admin and Salesforce Developer modules.",
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
        "A local-first Retrieval-Augmented Generation (RAG) system over Notion workspaces using Ollama-hosted LLMs, Qdrant vector search, and a pluggable connector architecture, ensuring no personal data leaves the local environment.",
      achievements: [
        "Architected a hybrid retrieval stack combining metadata-aware search, dense vector retrieval, BM25 lexical search, Reciprocal Rank Fusion (RRF), reranking, and grounded citation generation.",
        "Developed an automated retrieval evaluation framework with curated benchmark datasets and category-level analysis (Recall@5, Recall@10, MRR), improving retrieval performance from 0.74 Recall@5 (vector-only) to 0.95 Recall@5 (hybrid retrieval).",
        "Implemented natural-language query understanding with LLM-based intent analysis, metadata filter generation, and temporal query handling, enabling structured retrieval across dynamically discovered metadata schemas.",
        "Shipped a streaming React/TypeScript interface with validated source citations and Dockerized deployment; retrieval and answer generation run entirely on local infrastructure using open-source models.",
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
        "An MCP-based AI agent for the Reporting product, integrating with Apache Superset APIs to automate the end-to-end analytics pipeline from dataset creation to charts, dashboards, and report generation.",
      achievements: [
        "Built a harness API layer to orchestrate and validate multi-step execution, improving the consistency and reliability of AI-generated analytics workflows.",
        "Contributed to the only end-to-end cross-product AI solution spanning CPQ, CLM, Approvals, and Reporting, earning critical acclaim from the judging panel for its technical depth and enterprise-wide scope.",
      ],
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
