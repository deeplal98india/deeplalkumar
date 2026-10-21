
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
    imageAlt: "Interior Design Management System interface",
    description:
      "An enterprise interior design management platform with project workflows, client and vendor management, quotations and REST API integrations.",
    problem:
      "Interior design projects involve multiple stakeholders, deliverables and workflows that need to be accessible through a consistent interface.",
    solution:
      "Developing responsive interfaces and reusable UI components for project management, client management, vendor workflows and quotation handling.",
    contribution:
      "Working on frontend development with React, JavaScript, Tailwind CSS and API integration. This is ongoing work; the description reflects the stated responsibilities.",
    features: [
      "Project Management",
      "Client Management",
      "Vendor Management",
      "Quotation Management",
    ],
    tech: ["React", "JavaScript", "Tailwind CSS", "Axios", "REST API"],
    github: "",
    live: "",
  },
  {
    id: 2,
    title: "Task Management System",
    subtitle: "Full-Stack Application",
    category: "Full Stack",
    featured: true,
    image: taskManagement,
    imageAlt: "Task Management System dashboard",
    description:
      "A role-based task management platform built with the MERN stack, including authentication, organization management, task assignment and project tracking.",
    problem:
      "Teams need a structured way to manage organizations, assign tasks and control access to project information.",
    solution:
      "Designed a REST API-based application with JWT authentication, role-based access control and task and organization management.",
    contribution:
      "Backend development using Node.js, Express.js and MongoDB, including authentication, authorization and REST API implementation.",
    features: [
      "JWT Authentication",
      "Role-Based Access",
      "Organization Management",
      "Task Assignment",
    ],
    tech: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT"],
    github: "",
    live: "",
  },
  {
    id: 3,
    title: "Developer Portfolio",
    subtitle: "Personal Project",
    category: "Frontend",
    featured: false,
    image: portfolio,
    imageAlt: "Developer Portfolio website preview",
    description:
      "A responsive developer portfolio presenting projects, technical skills and professional information with a dark visual design.",
    problem:
      "A developer needs a central place to present their work, skills and project demonstrations to potential clients and employers.",
    solution:
      "Created a responsive portfolio with reusable React components, project previews and clear navigation.",
    contribution:
      "Built the frontend using React, Tailwind CSS and Vite, with Framer Motion for restrained interface animations.",
    features: [
      "Responsive Layout",
      "Project Showcase",
      "Reusable Components",
      "Accessible Navigation",
    ],
    tech: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    github: "",
    live: "",
  },
  {
    id: 4,
    title: "School Attendance Management",
    subtitle: "SaaS Application",
    category: "Full Stack",
    featured: false,
    image: school,
    imageAlt: "School Attendance Management dashboard",
    description:
      "A school management application planned around role-based access, attendance tracking, academic workflows and reporting.",
    problem:
      "School administration requires organized access for different user roles and a consistent way to manage attendance-related information.",
    solution:
      "Building a modular application with authentication, role-based permissions, school management and attendance-related functionality.",
    contribution:
      "Developing backend modules with Node.js, Express.js and MongoDB, alongside a React and Tailwind CSS frontend.",
    features: [
      "Authentication",
      "Role-Based Access",
      "School Management",
      "Attendance Workflows",
    ],
    tech: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
    github: "",
    live: "",
  },
  {
    id: 5,
    title: "Responsive Admin Dashboard",
    subtitle: "Dashboard UI",
    category: "Frontend",
    featured: false,
    image: Responsive_Admin_Dashboard,
    imageAlt: "Responsive Admin Dashboard interface",
    description:
      "An admin dashboard interface focused on responsive layouts, reusable components and clear data presentation.",
    problem:
      "Administrative interfaces need to keep navigation, data and common actions usable across screen sizes.",
    solution:
      "Created a dashboard interface with reusable components, responsive layouts and a consistent visual hierarchy.",
    contribution:
      "Frontend implementation using React and Tailwind CSS, with attention to layout, component reuse and responsive behavior.",
    features: [
      "Responsive Layout",
      "Reusable Components",
      "Data Presentation",
      "Dashboard UI",
    ],
    tech: ["React", "Tailwind CSS", "JavaScript"],
    github: "",
    live: "",
  },
  {
    id: 6,
    title: "Business Landing Page",
    subtitle: "Web Experience",
    category: "Frontend",
    featured: false,
    image: Landing_Page,
    imageAlt: "Business landing page preview",
    description:
      "A modern business landing page focused on clear content hierarchy, responsive presentation and straightforward navigation.",
    problem:
      "A business website should communicate its value clearly while remaining easy to navigate on desktop and mobile.",
    solution:
      "Built a landing page layout with responsive sections, consistent typography and clear calls to action.",
    contribution:
      "Implemented the frontend using React and Tailwind CSS, with Framer Motion where animation improves the experience.",
    features: [
      "Responsive Design",
      "Content Hierarchy",
      "Reusable UI",
      "Clear Calls to Action",
    ],
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    github: "",
    live: "",
  },
]);
