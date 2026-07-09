import immaculateLogo from "../assets/company/immaculateLogo.webp";
import pigopiLogo from "../assets/company/pigopiLogo.webp";
const experienceData = [
  {
    id: 1,

    company: "Immaculate Platform",

    position: "Software Developer",

    duration: "Jan 2026 – Present",

    location: "Delhi, India",

    type: "Full-Time",

    current: true,

    logo: immaculateLogo,

    description:
      "Developing enterprise-grade Admin Dashboard and Vendor Management modules using React.js and Tailwind CSS. Focused on building scalable, responsive, and reusable UI components while integrating secure REST APIs and delivering production-ready user experiences.",

    achievements: [
      "Developed enterprise Admin Dashboard",
      "Built Vendor Management modules",
      "Integrated secure REST APIs using Axios",
      "Implemented Role-Based UI",
      "Improved UI responsiveness and performance",
      "Created reusable React components",
    ],

    technologies: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "Axios",
      "REST API",
      "Git",
      "GitHub",
      "VS Code",
    ],
  },

  {
    id: 2,

    company: "PigoPi Pvt. Ltd.",

    position: "Software Developer Intern",

    duration: "Aug 2025 – Jan 2026",

    location: "Sector 63, Noida, India",

    type: "Internship",

    current: false,

    logo: pigopiLogo,

    description:
      "Worked on enterprise backend development using Node.js, Express.js, and MongoDB. Built secure REST APIs, implemented JWT Authentication, Role-Based Access Control (RBAC), and contributed to the Task Management System backend.",

    achievements: [
      "Developed scalable REST APIs",
      "Implemented JWT Authentication",
      "Built Role-Based Access Control (RBAC)",
      "Designed MongoDB database schemas",
      "Developed Task Management backend",
      "Optimized API performance",
    ],

    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "REST API",
      "Git",
      "Postman",
    ],
  },
];

export default experienceData;