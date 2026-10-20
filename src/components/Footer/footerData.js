// footerData.js

import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

import { MdEmail } from "react-icons/md";

export const quickLinks = [
  {
    title: "Home",
    href: "#home",
  },
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Skills",
    href: "#skills",
  },
  {
    title: "Projects",
    href: "#projects",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

export const socialLinks = [
  {
    id: 1,
    title: "GitHub",
    subtitle: "Explore my repositories",
    icon: FaGithub,
    href: "https://github.com/deeplal98india",
  },
  {
    id: 2,
    title: "LinkedIn",
    subtitle: "Professional profile",
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/deeplal-kumar-b47548229/",
  },
  {
    id: 3,
    title: "Email",
    subtitle: "Let's discuss your project",
    icon: MdEmail,
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=deeplalkumar1400036@gmail.com&su=Portfolio%20Inquiry&body=Hi%20Deeplal,%0A%0AI%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.",
  },
  {
    id: 4,
    title: "WhatsApp",
    subtitle: "Quick conversation",
    icon: FaWhatsapp,
    href: "https://wa.me/919877911131",
  },
];

export const footerInfo = {
  name: "Deeplal Kumar",

  role: "Full Stack Developer",

  currentRole: "Frontend Developer",

  email: "deeplalkumar1400036@gmail.com",

  location: "Varanasi, Uttar Pradesh",

  description:
    "Passionate MERN Stack Developer specializing in enterprise-grade React applications, scalable Node.js backends and modern user interfaces with a strong focus on performance, clean architecture and exceptional user experience.",

  available: true,
};
