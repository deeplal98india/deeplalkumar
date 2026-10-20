import immaculate from "../assets/images/immaculate.webp";
import portfolio from "../assets/images/portfolio.webp";
import taskManagement from "../assets/images/taskManagement.webp";
import school from "../assets/images/school.webp";
import Responsive_Admin_Dashboard from "../assets/images/Responsive_Admin_Dashboard.webp";
import Landing_Page from "../assets/images/Landing_Page.webp";
export const projects = Object.freeze([
   {
  id: 1,

  title: "Interior Design Management System",

  subtitle: "Frontend Developer",

  category: "Frontend",

  featured: true,

  image: immaculate,

  description:
  "Currently working as a Frontend Developer on an enterprise-grade Interior Design Management System. Developing scalable React.js interfaces, responsive dashboards, workflow management modules, reusable components, and integrating REST APIs to deliver a production-ready user experience.",

  features: [
  "Project Management",
  "Client Management",
  "Vendor Management",
  "Quotation Management",
  "Workflow Tracking",
  "REST API Integration",
],

tech: [
  "React",
  "JavaScript",
  "Tailwind CSS",
  "Axios",
  "REST API",
  "Responsive UI",
],

  github: "",

  live: ""
},

  {
    id: 2,
    featured: true,
    category: "Backend",

    title: "Task Management System",

    subtitle: "Backend Developer",

    description:
      "A role-based enterprise task management platform built using the MERN Stack. It includes authentication, authorization, organization management, employee management, project tracking, dashboards and secure REST APIs.",

    image: taskManagement,

    imageAlt: "Employee Task Management Dashboard",

    github: "#",

    live: "#",

    features: [
      "JWT Authentication",
      "Role Based Access",
      "Organization Management",
      "Task Assignment",
      "Project Dashboard",
      "REST APIs",
    ],

    tech: [
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
    ],
  },

  {
    id: 3,
    featured: false,
    category: "Frontend",

    title: "Developer Portfolio",

    subtitle: "Personal Portfolio",

    description:
      "Modern portfolio website built using React, Tailwind CSS and Framer Motion with premium UI animations and responsive layouts.",

    image: portfolio,

    imageAlt: "Developer Portfolio Website",

    github: "#",

    live: "#",

    features: [
      "Responsive Design",
      "Dark Theme",
      "Smooth Animations",
      "Reusable Components",
    ],

    tech: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Vite",
    ],
  },

  {
    id: 4,
    featured: false,
    category: "Full Stack",

    title: "School Attendance Management",

    subtitle: "Enterprise SaaS",

    description:
      "Attendance Management System with authentication, dashboards, attendance reports, academic management and role-based access.",

    image: school,

    imageAlt: "School Attendance Management Dashboard",

    github: "#",

    live: "#",

    features: [
      "Attendance Tracking",
      "Role Based Access",
      "Academic Management",
      "Reports",
    ],

    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
    ],
  },

  {
    id: 5,
    featured: false,
    category: "Frontend",

    title: "Responsive Admin Dashboard",

    subtitle: "Dashboard UI",

    description:
      "Professional admin dashboard built with React and Tailwind CSS featuring charts, reusable components and responsive layouts.",

    image: Responsive_Admin_Dashboard,

    imageAlt: "Responsive Admin Dashboard",

    github: "#",

    live: "#",

    features: [
      "Charts",
      "Responsive Layout",
      "Dark Mode",
      "Reusable Components",
    ],

    tech: [
      "React",
      "Tailwind CSS",
      "Chart.js",
    ],
  },

  {
    id: 6,
    featured: false,
    category: "Frontend",

    title: "Landing Page",

    subtitle: "Business Website",

    description:
      "Modern animated landing page with premium UI, responsive design, optimized performance and engaging micro interactions.",

    image: Landing_Page,

    imageAlt: "Modern Business Landing Page",

    github: "#",

    live: "#",

    features: [
      "Animations",
      "Responsive Design",
      "SEO Friendly",
      "Performance Optimized",
    ],

    tech: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
]);