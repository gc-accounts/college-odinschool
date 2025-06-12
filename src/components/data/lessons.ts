
export const lessonsData = [
  {
    id: "1",
    courseId: "1",
    title: "Introduction to JavaScript",
    description: "Learn the basics of JavaScript programming language",
    duration: "45 minutes",
    videoUrl: "https://player.vimeo.com/video/174002812"
  },
  {
    id: "2",
    courseId: "1",
    title: "Variables and Data Types",
    description: "Understanding variables, constants, and data types in JavaScript",
    duration: "1 hour",
    videoUrl: "https://player.vimeo.com/video/174002812"
  },
  {
    id: "3",
    courseId: "1",
    title: "Functions and Scope",
    description: "Working with functions and understanding variable scope",
    duration: "1.5 hours",
    videoUrl: "https://player.vimeo.com/video/174002812"
  },
  {
    id: "4",
    courseId: "2",
    title: "Introduction to React",
    description: "Getting started with React and component-based architecture",
    duration: "1 hour",
    videoUrl: "https://player.vimeo.com/video/174002812"
  },
  {
    id: "5",
    courseId: "2",
    title: "Components and Props",
    description: "Creating components and passing data with props",
    duration: "1.5 hours",
    videoUrl: "https://player.vimeo.com/video/174002812"
  },
  {
    id: "6",
    courseId: "2",
    title: "State and Lifecycle",
    description: "Managing component state and lifecycle methods",
    duration: "2 hours",
    videoUrl: "https://player.vimeo.com/video/174002812"
  },
  {
    id: "7",
    courseId: "3",
    title: "Python Basics",
    description: "Introduction to Python programming language",
    duration: "1 hour",
    videoUrl: "https://player.vimeo.com/video/174002812"
  },
  {
    id: "8",
    courseId: "3",
    title: "Working with NumPy",
    description: "Numerical computing with NumPy library",
    duration: "1.5 hours",
    videoUrl: "https://player.vimeo.com/video/174002812"
  },
  {
    id: "9",
    courseId: "3",
    title: "Data Analysis with Pandas",
    description: "Analyzing data using Pandas dataframes",
    duration: "2 hours",
    videoUrl: "https://player.vimeo.com/video/174002812"
  }
];

// Add an alias export to fix import errors
export const lessons = lessonsData;

// Export the lesson content from the existing file
export { lessonContent } from './lessonContent';
