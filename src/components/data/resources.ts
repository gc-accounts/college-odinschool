
export interface Resource {
  id: string;
  title: string;
  description: string;
  category: ResourceCategory;
  video: string;
  poster?: string;
  downloadUrl: string;
  fileSize: string;
  fileFormat: string;
  createdAt: string;
  popularity: number;
  tags: string[];
}

export type ResourceCategory = 
  | "Project Template" 
  | "Code Snippet" 
  | "Design Asset" 
  | "Cheat Sheet" 
  | "Tutorial" 
  | "Starter Kit";

export const resources: Resource[] = [
  {
    id: "1",
    title: "React E-commerce Starter Template",
    description: "A fully responsive e-commerce template built with React, Redux, and Tailwind CSS. Includes product listings, cart functionality, checkout process, and user authentication.",
    category: "Project Template",
    video: "https://images.unsplash.com/photo-1561070791-2526d30994b5",
    downloadUrl: "/downloads/react-ecommerce-template.zip",
    fileSize: "4.2 MB",
    fileFormat: "ZIP",
    createdAt: "2023-06-15",
    popularity: 4850,
    tags: ["React", "Redux", "Tailwind CSS", "E-commerce"]
  },
  {
    id: "2",
    title: "Web Development Cheat Sheet Bundle",
    description: "A comprehensive collection of cheat sheets covering HTML5, CSS3, JavaScript, React, Node.js, and Git. Perfect for quick reference during development or interviews.",
    category: "Cheat Sheet",
    video: "https://images.unsplash.com/photo-1517842645767-c639042777db",
    downloadUrl: "/downloads/web-dev-cheatsheets.pdf",
    fileSize: "2.8 MB",
    fileFormat: "PDF",
    createdAt: "2023-05-20",
    popularity: 7230,
    tags: ["HTML", "CSS", "JavaScript", "Reference"]
  },
  {
    id: "3",
    title: "Portfolio Website Template",
    description: "A clean, modern portfolio template designed for developers and designers. Features a responsive layout, dark/light mode, project showcase section, and contact form.",
    category: "Project Template",
    video: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8",
    downloadUrl: "/downloads/portfolio-template.zip",
    fileSize: "3.5 MB",
    fileFormat: "ZIP",
    createdAt: "2023-07-10",
    popularity: 3920,
    tags: ["Portfolio", "HTML", "CSS", "JavaScript"]
  },
  {
    id: "4",
    title: "UI Component Library",
    description: "A collection of 50+ reusable UI components built with HTML, CSS, and vanilla JavaScript. Includes buttons, cards, modals, tabs, accordions, and more.",
    category: "Design Asset",
    video: "https://images.unsplash.com/photo-1585435421671-0c16737a421a",
    downloadUrl: "/downloads/ui-component-library.zip",
    fileSize: "6.7 MB",
    fileFormat: "ZIP",
    createdAt: "2023-03-12",
    popularity: 5680,
    tags: ["UI", "Components", "Frontend", "Design"]
  },
  {
    id: "5",
    title: "MongoDB CRUD Operations Snippet Pack",
    description: "A collection of code snippets for common MongoDB CRUD operations, including queries, aggregations, and data modeling patterns.",
    category: "Code Snippet",
    video: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb",
    downloadUrl: "/downloads/mongodb-snippets.js",
    fileSize: "1.2 MB",
    fileFormat: "JS",
    createdAt: "2023-08-05",
    popularity: 2950,
    tags: ["MongoDB", "Database", "Backend", "CRUD"]
  },
  {
    id: "6",
    title: "Full-Stack Web App Starter Kit",
    description: "A complete starter kit for building full-stack web applications with React, Node.js, Express, and MongoDB. Includes authentication, database setup, and API integration.",
    category: "Starter Kit",
    video: "https://images.unsplash.com/photo-1518773553398-650c184e0bb3",
    downloadUrl: "/downloads/fullstack-starter-kit.zip",
    fileSize: "8.3 MB",
    fileFormat: "ZIP",
    createdAt: "2023-06-28",
    popularity: 6340,
    tags: ["Full-Stack", "MERN", "Starter", "Template"]
  },
  {
    id: "7",
    title: "Responsive CSS Grid Layouts",
    description: "A collection of 20 responsive layout templates built with CSS Grid. Perfect for building modern, flexible web layouts without frameworks.",
    category: "Design Asset",
    video: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2",
    downloadUrl: "/downloads/css-grid-layouts.zip",
    fileSize: "2.5 MB",
    fileFormat: "ZIP",
    createdAt: "2023-04-19",
    popularity: 4120,
    tags: ["CSS Grid", "Responsive", "Layout", "Design"]
  },
  {
    id: "8",
    title: "Interactive JavaScript Tutorial: Building a To-Do App",
    description: "A step-by-step tutorial for building a to-do application with vanilla JavaScript. Covers DOM manipulation, event handling, local storage, and more.",
    category: "Tutorial",
    video: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    downloadUrl: "/downloads/javascript-todo-tutorial.zip",
    fileSize: "3.8 MB",
    fileFormat: "ZIP",
    createdAt: "2023-07-15",
    popularity: 3780,
    tags: ["JavaScript", "Tutorial", "Beginner", "Project"]
  }
];
