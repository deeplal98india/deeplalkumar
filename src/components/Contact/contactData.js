import { Mail, Phone, MapPin } from "lucide-react";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export const contactInfo = Object.freeze([
  {
    id: 1,
    icon: Mail,
    title: "Email",
    value: "deeplalkumar1400036@gmail.com",
    subtitle: "Feel free to contact me anytime.",
    link: "mailto:deeplalkumar1400036@gmail.com",
  },

  {
    id: 2,
    icon: Phone,
    title: "Phone",
    value: "+91 9877911131",
    subtitle: "Available Monday - Saturday",
    link: "tel:+919877911131",
  },

  {
    id: 3,
    icon: MapPin,
    title: "Location",
    value: "Varanasi, Uttar Pradesh, India",
    subtitle: "Open to Remote & On-site opportunities.",
    link: null,
  },
]);

export const socialLinks = Object.freeze([
  {
    id: 1,
    icon: FaGithub,
    title: "GitHub",
    subtitle: "Open Source Projects",
    url: "https://github.com/deeplal98india",
  },

  {
    id: 2,
    icon: FaLinkedin,
    title: "LinkedIn",
    subtitle: "Professional Network",
    url: "https://www.linkedin.com/in/deeplal-kumar-b47548229/",
  },

  {
    id: 3,
    icon: FaInstagram,
    title: "Instagram",
    subtitle: "Creative Journey",
    url: "https://www.instagram.com/iamdeeplal/",
  },
]);
