import { nanoid } from "nanoid";
import { FaGlobe, FaMobileAlt, FaWordpress } from "react-icons/fa";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#expertise", text: "expertise" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const expertise = [
  {
    id: nanoid(),
    title: "Modern Web Development",
    icon: <FaGlobe className="h-16 w-16 text-emerald-500" />,
    text: "Proficient in creating visually engaging and fully responsive website, ensuring seamless user experiences through modern web development practices.",
  },
  {
    id: nanoid(),
    title: "Mobile App Development",
    icon: <FaMobileAlt className="h-16 w-16 text-emerald-500" />,
    text: "Skilled in designing intuitive and responsive mobile applications, delivering smooth user experiences through advanced mobile development techniques.",
  },
  {
    id: nanoid(),
    title: "Word Press",
    icon: <FaWordpress className="h-16 w-16 text-emerald-500" />,
    text: "Experienced in building responsive and visually appealing WordPress sites, optimizing user experiences through custom themes, plugins, and modern development practices.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://nextjs-store-production.vercel.app/",
    github: "https://github.com/john-smilga",
    title: "E-commerce projects",
    text: "This e-commerce platform offers a seamless shopping experience where customers can easily browse products, add items to their cart, and securely complete their purchase in just a few clicks. The site is optimized for speed, ensuring fast loading times and a user-friendly interface for both desktop and mobile users",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://nextjs-jobify-production.vercel.app/",
    github: "https://github.com/john-smilga",
    title: "Web App projects",
    text: "This Web app provides a smooth and intuitive user experience, allowing users to easily navigate through features with minimal effort. The app is optimized for speed and performance, ensuring fast loading times and seamless interactions, whether you’re browsing, shopping, or exploring content.",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://react-vite-comfy-store-v2.netlify.app/",
    github: "https://github.com/john-smilga",
    title: "WordPress project",
    text: "This WordPress site offers a fully customizable and responsive design, built with user-friendly features and seamless navigation. It allows easy content updates, integrates essential plugins, and provides a secure and scalable platform for growing businesses.",
  },
];
