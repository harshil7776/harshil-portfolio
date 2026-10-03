// Single source of truth for all site content. Edit details here only.

export const profile = {
    name: "Harshil Thakkar",
    firstName: "Harshil",
    lastName: "Thakkar",
    initials: "HT",
    role: "Software Engineer",
    roleSecondary: "Full-Stack Developer",
    email: "harshilthakkar0102@gmail.com",
    phone: "+91 8200769545",
    phoneHref: "tel:+918200769545", // set phone to "" to hide it from the page
    location: "Gujarat, India",
    github: "https://github.com/harshil7776",
    githubHandle: "harshil7776",
    linkedin: "", // TODO: paste your full profile URL, e.g. https://www.linkedin.com/in/your-id
    resume: "/resume.pdf", // put resume.pdf inside /public
  };
  
  // [label, section id]
  export const navLinks = [
    ["Home", "home"],
    ["About", "about"],
    ["Skills", "skills"],
    ["Projects", "projects"],
    ["Education", "education"],
    ["Services", "services"],
    ["Contact", "contact"],
  ];
  
  export const skills = {
    Programming: ["C", "C++", "Java", "Python", "JavaScript"],
    Frontend: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Vite"],
    Backend: ["Node.js", "Express.js", "REST APIs", "FastAPI"],
    Database: ["SQL", "MySQL", "MongoDB", "SQLite"],
    "Data & AI": [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Data Cleaning",
      "Data Visualization",
      "YOLO",
    ],
    Tools: ["Git", "GitHub", "VS Code", "Postman"],
  };
  
  // Leave github / demo as "" until you have real links; the buttons hide automatically.
  export const projects = [
    {
      number: "01",
      title: "Construction PPE Detection",
      type: "AI / Computer Vision",
      description:
        "AI-powered construction site safety system that detects PPE compliance and identifies helmet and vest violations using computer vision.",
      technologies: ["Python", "YOLO", "OpenCV", "FastAPI", "React", "SQLite"],
      features: [
        "Real-time PPE detection",
        "Helmet and vest violation detection",
        "Live monitoring dashboard",
        "Violation database",
        "Safety status tracking",
      ],
      github: "",
      demo: "",
    },
    {
      number: "02",
      title: "Jewellery E-Commerce",
      type: "Full-Stack MERN",
      description:
        "Full-stack e-commerce platform for imitation jewellery with authentication, products, categories, cart, wishlist and order management.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      features: [
        "User authentication",
        "Product and category management",
        "Cart and wishlist",
        "Order management",
        "Responsive shopping experience",
      ],
      github: "",
      demo: "",
    },
    {
      number: "03",
      title: "AI Personal Financial Planner",
      type: "AI / Full-Stack",
      description:
        "Personal finance platform designed to organize income, expenses, loans, investments, savings and financial goals in one dashboard.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "AI"],
      features: [
        "Secure user accounts",
        "Income and expense tracking",
        "Loan and EMI management",
        "Financial goals",
        "Personalized insights",
      ],
      github: "",
      demo: "",
    },
    {
      number: "04",
      title: "Data Analytics Projects",
      type: "Data / Analytics",
      description:
        "Data analysis and visualization work focused on cleaning datasets, identifying patterns and presenting actionable insights.",
      technologies: ["Python", "Pandas", "NumPy", "SQL", "Matplotlib"],
      features: [
        "Data cleaning",
        "Exploratory analysis",
        "SQL analysis",
        "Visualization",
        "Insight reporting",
      ],
      github: "",
      demo: "",
    },
  ];
  
  export const education = [
    {
      period: "2019 — 2023",
      title: "Bachelor's Degree",
      field: "Information Technology",
      result: "Graduated with 73.3%",
      areas: [
        "Data Structures",
        "DBMS",
        "Web Development",
        "OOP",
        "Software Engineering",
      ],
    },
  ];
  