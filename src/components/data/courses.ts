export const coursesData = [
  {
    id: '1',
    title: 'Data Science Course',
    description: 'Master JavaScript from the ground up. Learn fundamentals, ES6+, DOM manipulation, and build full-stack applications with Node.js, Express, and MongoDB.',
    instructor: 'Sarah Johnson',
    level: 'Beginner to Advanced',
    duration: '32 hours',
    lessons: 85,
    rating: 4.8,
    students: 15420,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&w=800',
    category: 'Web Development',
    company: 'Google',
    price: 149.99,
    sale: true,
    salePrice: 15000,
    certificate: true,
    tags: ['JavaScript', 'Web Development', 'Front-end', 'Back-end', 'MERN Stack'],
    prerequisites: ['Basic HTML and CSS knowledge'],
    learningObjectives: [
      'Understand JavaScript fundamentals and core concepts',
      'Build interactive web applications with modern JavaScript',
      'Master asynchronous programming with Promises and async/await',
      'Create server-side applications with Node.js and Express',
      'Develop full-stack applications with MongoDB integration'
    ],
    curriculum: [
      { title: 'React Fundamentals', lessons: 10, duration: '2.5 hours' ,
        subLessons: [
          { title: "Overview of Web Development", duration: "20 min" },
          { title: "Setting Up Your Development Environment", duration: "25 min" },
          { title: "HTML Fundamentals", duration: "30 min" },
          { title: "CSS Basics", duration: "25 min" },
          { title: "Your First Web Page", duration: "20 min" }
        ] },
      { title: 'Components and Props', lessons: 8, duration: '2 hours',  subLessons: [
        { title: "Overview of Web Development", duration: "20 min" },
        { title: "Setting Up Your Development Environment", duration: "25 min" },
        { title: "HTML Fundamentals", duration: "30 min" },
        { title: "CSS Basics", duration: "25 min" },
        { title: "Your First Web Page", duration: "20 min" }
      ] },
      { title: 'State and Lifecycle', lessons: 7, duration: '1.5 hours' },
      { title: 'Hooks in Depth', lessons: 10, duration: '3 hours' },
      { title: 'Routing with React Router', lessons: 6, duration: '1.5 hours' },
      
    ],
  },
  {
    id: '2',
    title: 'Power BI Certification Course',
    description: 'Build modern, responsive web applications with React.js and related ecosystem tools.',
    instructor: 'Michael Chen',
    level: 'Intermediate',
    duration: '15 hours',
    lessons: 60,
    rating: 4.9,
    students: 8325,
    image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=2000',
    category: 'Frontend',
    company: 'Microsoft',
    price: 15000,
    salePrice: 15000,
    fullDescription: `
      <p>Take your frontend development skills to the next level with this comprehensive React course. Designed for developers who already understand JavaScript basics, this course will teach you everything you need to know about building professional applications with React.</p>
      
      <p>You'll start by understanding React's core concepts - components, props, and state - before diving into more advanced topics like hooks, context API, and state management with Redux. You'll learn best practices for structuring React applications, optimizing performance, and implementing common patterns used in enterprise applications.</p>
      
      <p>Throughout the course, you'll build a complete application from scratch, implementing features like authentication, data fetching, routing, and form handling. By the end, you'll have the skills and confidence to build complex, production-ready React applications.</p>
    `,
    curriculum: [
      { title: 'React Fundamentals', lessons: 10, duration: '2.5 hours' },
      { title: 'Components and Props', lessons: 8, duration: '2 hours' },
      { title: 'State and Lifecycle', lessons: 7, duration: '1.5 hours' },
      { title: 'Hooks in Depth', lessons: 10, duration: '3 hours' },
      { title: 'Routing with React Router', lessons: 6, duration: '1.5 hours' },
      { title: 'State Management', lessons: 8, duration: '2 hours' },
      { title: 'Testing React Applications', lessons: 6, duration: '1.5 hours' },
      { title: 'Deployment and Performance', lessons: 5, duration: '1 hour' },
    ],
    skills: [
      'React.js', 
      'Component Architecture', 
      'State Management', 
      'React Hooks', 
      'React Router', 
      'Performance Optimization', 
      'Testing'
    ],

    courseProjects: []
  },
  {
    id: '3',
    title: 'Certification Program in Data Science and Machine Learning',
    description: 'Learn to analyze and visualize data using Python and popular data science libraries.',
    instructor: 'Emily Rodriguez',
    level: 'Intermediate',
    duration: '20 hours',
    lessons: 72,
    rating: 4.7,
    students: 9840,
    image: 'https://images.unsplash.com/photo-1600267185393-e158a98703de?q=80&w=2000',
    category: 'Data Science',
    company: 'Amazon',
    price: 59.99,
    salePrice: 15000,
    fullDescription: `
      <p>Dive into the world of data science with Python in this comprehensive course. You'll learn how to work with data using Python's powerful libraries and tools, gaining practical skills that are in high demand across industries.</p>
      
      <p>Starting with Python basics for data manipulation, you'll quickly progress to advanced data analysis topics. You'll master libraries like NumPy, Pandas, and Matplotlib for data processing and visualization. The course covers statistical analysis, data cleaning, exploratory data analysis, and building predictive models with scikit-learn.</p>
      
      <p>Through hands-on projects analyzing real-world datasets, you'll develop a portfolio that demonstrates your data science capabilities. By the end of the course, you'll be able to extract meaningful insights from data and communicate your findings effectively.</p>
    `,
    curriculum: [
      { title: 'Python for Data Science', lessons: 10, duration: '2.5 hours' },
      { title: 'NumPy Fundamentals', lessons: 8, duration: '2 hours' },
      { title: 'Data Analysis with Pandas', lessons: 12, duration: '3 hours' },
      { title: 'Data Visualization', lessons: 10, duration: '2.5 hours' },
      { title: 'Statistical Analysis', lessons: 8, duration: '2 hours' },
      { title: 'Machine Learning Basics', lessons: 12, duration: '4 hours' },
      { title: 'Practical Data Science Projects', lessons: 12, duration: '4 hours' },
    ],
    skills: [
      'Python Programming', 
      'Data Analysis', 
      'Data Visualization', 
      'Statistical Analysis', 
      'Machine Learning Basics', 
      'NumPy', 
      'Pandas'
    ]
  },
  {
    id: '4',
    title: 'Certification Program in Applied Generative AI',
    description: 'Dive deep into ML algorithms, neural networks, and practical applications.',
    instructor: 'David Kim',
    level: 'Advanced',
    duration: '25 hours',
    lessons: 80,
    rating: 4.9,
    students: 5670,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&w=800',
    category: 'Artificial Intelligence',
    price: 799,
    salePrice: 15000,
    fullDescription: `
      <p>This advanced machine learning course is designed for students with a strong foundation in programming and mathematics who want to master cutting-edge ML techniques. The course provides in-depth coverage of sophisticated algorithms and their practical applications.</p>
      
      <p>You'll delve into neural networks architecture, deep learning frameworks like TensorFlow and PyTorch, and advanced topics including computer vision, natural language processing, and reinforcement learning. The course emphasizes both theoretical understanding and practical implementation through complex, real-world projects.</p>
      
      <p>By completing this course, you'll be able to design, implement, and deploy sophisticated machine learning solutions across various domains, positioning yourself at the forefront of AI innovation.</p>
    `,
    curriculum: [
      { title: 'ML Fundamentals Review', lessons: 5, duration: '1.5 hours' },
      { title: 'Neural Networks', lessons: 10, duration: '3 hours' },
      { title: 'Deep Learning with TensorFlow', lessons: 12, duration: '4 hours' },
      { title: 'Computer Vision', lessons: 10, duration: '3 hours' },
      { title: 'Natural Language Processing', lessons: 10, duration: '3 hours' },
      { title: 'Reinforcement Learning', lessons: 8, duration: '2.5 hours' },
      { title: 'Generative Models', lessons: 8, duration: '2.5 hours' },
      { title: 'ML Deployment and MLOps', lessons: 7, duration: '2 hours' },
      { title: 'Advanced Research Topics', lessons: 10, duration: '3.5 hours' },
    ],
    skills: [
      'Deep Learning', 
      'Neural Networks', 
      'TensorFlow', 
      'PyTorch', 
      'Computer Vision', 
      'NLP', 
      'Reinforcement Learning',
      'Model Deployment'
    ]
  },
  {
    id: '5',
    title: 'Data Analyst College Program',
    description: 'Build complete web applications from front to back end using modern technologies.',
    instructor: 'James Wilson',
    level: 'Intermediate',
    duration: '30 hours',
    lessons: 95,
    rating: 4.8,
    students: 7250,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2000',
    category: 'Web Development',
    price: 69.99,
    salePrice: 15000,
    fullDescription: `
      <p>Become a complete web developer with this comprehensive full-stack course. You'll learn to build end-to-end web applications, handling everything from user interfaces to server logic and database management.</p>
      
      <p>The course begins with front-end development using HTML, CSS, and JavaScript, then introduces modern frameworks like React. On the back-end, you'll master Node.js and Express, learn database design with MongoDB and SQL, and implement authentication, API development, and deployment.</p>
      
      <p>Through building multiple real-world projects, you'll gain practical experience with the entire development lifecycle. By the end, you'll have the skills to create, deploy, and maintain complete web applications independently.</p>
    `,
    curriculum: [
      { title: 'Front-end Fundamentals', lessons: 15, duration: '4 hours' },
      { title: 'React Development', lessons: 12, duration: '3.5 hours' },
      { title: 'Back-end with Node.js', lessons: 12, duration: '3.5 hours' },
      { title: 'Database Design and Implementation', lessons: 10, duration: '3 hours' },
      { title: 'API Development', lessons: 8, duration: '2.5 hours' },
      { title: 'Authentication and Security', lessons: 8, duration: '2.5 hours' },
      { title: 'Deployment and DevOps', lessons: 7, duration: '2 hours' },
      { title: 'Full-Stack Projects', lessons: 18, duration: '6 hours' },
      { title: 'Performance Optimization', lessons: 5, duration: '2 hours' },
    ],
    skills: [
      'HTML/CSS/JavaScript', 
      'React', 
      'Node.js', 
      'Express', 
      'Database Design', 
      'API Development', 
      'Authentication',
      'Deployment'
    ]
  },
  {
    id: '6',
    title: 'Mobile App Development with Flutter',
    description: 'Create beautiful cross-platform mobile applications with Flutter framework.',
    instructor: 'Sophie Taylor',
    level: 'Intermediate',
    duration: '18 hours',
    lessons: 65,
    rating: 4.6,
    students: 4320,
    image: 'https://images.unsplash.com/photo-1617040619263-41c5a9ca7521?q=80&w=2000',
    category: 'Mobile Development',
    price: 59.99,
    fullDescription: `
      <p>Learn to build beautiful, responsive mobile applications for both iOS and Android with a single codebase using Flutter. This course takes you from Flutter basics to publishing your apps on app stores.</p>
      
      <p>You'll start with Dart programming language fundamentals before diving into Flutter widgets, state management, and UI design. The course covers navigation, data persistence, API integration, and using device features. You'll also learn about app deployment, testing, and performance optimization.</p>
      
      <p>Throughout the course, you'll build multiple complete mobile applications, giving you hands-on experience with real-world development challenges. By the end, you'll be able to create and ship professional-quality mobile apps.</p>
    `,
    curriculum: [
      { title: 'Dart Programming Basics', lessons: 8, duration: '2 hours' },
      { title: 'Flutter Fundamentals', lessons: 10, duration: '2.5 hours' },
      { title: 'Building UI with Widgets', lessons: 12, duration: '3 hours' },
      { title: 'State Management', lessons: 8, duration: '2 hours' },
      { title: 'Navigation and Routing', lessons: 6, duration: '1.5 hours' },
      { title: 'Working with APIs', lessons: 7, duration: '2 hours' },
      { title: 'Data Persistence', lessons: 6, duration: '1.5 hours' },
      { title: 'Publishing and Deployment', lessons: 8, duration: '2 hours' },
    ],
    skills: [
      'Dart Programming', 
      'Flutter Framework', 
      'Cross-Platform Development', 
      'UI Design', 
      'State Management', 
      'API Integration', 
      'App Publishing'
    ]
  },
  {
    id: '7',
    title: 'NodeJS Backend Development',
    description: 'Build scalable server-side applications with Node.js and Express.',
    instructor: 'Ryan Martinez',
    level: 'Intermediate',
    duration: '16 hours',
    lessons: 58,
    rating: 4.7,
    students: 5890,
    image: 'https://images.unsplash.com/photo-1629904853716-f0bc54eea481?q=80&w=2000',
    category: 'Backend',
    price: 54.99,
    fullDescription: `
      <p>Master server-side JavaScript with this comprehensive Node.js course designed for web developers. You'll learn to build robust, scalable backend systems that power modern web applications.</p>
      
      <p>The course covers Node.js fundamentals, Express framework, RESTful API design, authentication, database integration with MongoDB and SQL, error handling, and performance optimization. You'll also explore microservices architecture, real-time applications with Socket.io, and deployment techniques.</p>
      
      <p>Through building complete backend systems for various application types, you'll gain practical experience with the entire development cycle. By the end, you'll be able to architect and implement sophisticated server-side solutions.</p>
    `,
    curriculum: [
      { title: 'Node.js Fundamentals', lessons: 10, duration: '2.5 hours' },
      { title: 'Express Framework', lessons: 8, duration: '2 hours' },
      { title: 'RESTful API Design', lessons: 7, duration: '2 hours' },
      { title: 'Database Integration', lessons: 10, duration: '3 hours' },
      { title: 'Authentication and Authorization', lessons: 8, duration: '2 hours' },
      { title: 'Error Handling and Logging', lessons: 5, duration: '1 hour' },
      { title: 'Testing Node.js Applications', lessons: 6, duration: '1.5 hours' },
      { title: 'Deployment and Scaling', lessons: 4, duration: '1 hour' },
    ],
    skills: [
      'Node.js', 
      'Express', 
      'API Development', 
      'MongoDB', 
      'Authentication', 
      'Server Architecture', 
      'Performance Optimization'
    ]
  },
  {
    id: '8',
    title: 'Cloud Computing with AWS',
    description: 'Deploy and scale applications using Amazon Web Services infrastructure.',
    instructor: 'Priya Patel',
    level: 'Advanced',
    duration: '22 hours',
    lessons: 75,
    rating: 4.8,
    students: 3950,
    image: 'https://images.unsplash.com/photo-1603695950834-3963cfb7fd5c?q=80&w=2000',
    category: 'DevOps',
    price: 69.99,
    fullDescription: `
      <p>Gain mastery of Amazon Web Services (AWS) with this comprehensive cloud computing course. You'll learn to architect, deploy, and manage scalable, highly available, and fault-tolerant systems on the world's most popular cloud platform.</p>
      
      <p>The course covers core AWS services including EC2, S3, RDS, Lambda, and more, along with networking, security, and cost optimization. You'll explore infrastructure as code with CloudFormation and Terraform, continuous integration/deployment pipelines, monitoring, and best practices for cloud architecture.</p>
      
      <p>Through hands-on labs and real-world projects, you'll gain practical experience designing and implementing cloud solutions. By the end, you'll be prepared to design and manage production AWS environments and pursue AWS certification.</p>
    `,
    curriculum: [
      { title: 'AWS Fundamentals', lessons: 10, duration: '2.5 hours' },
      { title: 'Compute Services', lessons: 8, duration: '2 hours' },
      { title: 'Storage Solutions', lessons: 7, duration: '2 hours' },
      { title: 'Database Services', lessons: 8, duration: '2.5 hours' },
      { title: 'Networking in AWS', lessons: 7, duration: '2 hours' },
      { title: 'Serverless Architecture', lessons: 10, duration: '3 hours' },
      { title: 'Infrastructure as Code', lessons: 8, duration: '2.5 hours' },
      { title: 'Security Best Practices', lessons: 8, duration: '2 hours' },
      { title: 'Monitoring and Management', lessons: 5, duration: '1.5 hours' },
      { title: 'Cost Optimization', lessons: 4, duration: '1 hour' },
    ],
    skills: [
      'AWS Services', 
      'Cloud Architecture', 
      'Infrastructure as Code', 
      'Serverless Computing', 
      'Cloud Security', 
      'Scalability', 
      'Cost Management'
    ]
  },
  {
    id: '9',
    title: 'UI/UX Design Fundamentals',
    description: 'Learn the principles of user interface and experience design for digital products.',
    instructor: 'Olivia Taylor',
    level: 'Beginner',
    duration: '12 hours',
    lessons: 48,
    rating: 4.9,
    students: 6780,
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000',
    category: 'Design',
    price: 49.99,
    fullDescription: `
      <p>Master the fundamentals of UI/UX design in this comprehensive course for beginners. You'll learn the essential principles and processes behind creating user-centered digital experiences that are both functional and visually appealing.</p>
      
      <p>The course covers design thinking methodology, user research, information architecture, wireframing, prototyping, and visual design principles. You'll learn to use industry-standard tools like Figma and conduct usability testing to validate your designs. The curriculum emphasizes both theoretical knowledge and practical application.</p>
      
      <p>Through hands-on projects, you'll build a professional design portfolio that demonstrates your abilities. By the end of the course, you'll have the skills to design intuitive, accessible, and engaging user experiences for websites and applications.</p>
    `,
    curriculum: [
      { title: 'Introduction to UI/UX Design', lessons: 5, duration: '1 hour' },
      { title: 'Design Thinking Process', lessons: 6, duration: '1.5 hours' },
      { title: 'User Research Methods', lessons: 7, duration: '1.5 hours' },
      { title: 'Information Architecture', lessons: 5, duration: '1 hour' },
      { title: 'Wireframing and Prototyping', lessons: 8, duration: '2 hours' },
      { title: 'Visual Design Principles', lessons: 7, duration: '2 hours' },
      { title: 'Designing with Figma', lessons: 6, duration: '1.5 hours' },
      { title: 'Usability Testing', lessons: 4, duration: '1 hour' },
    ],
    skills: [
      'UI Design', 
      'UX Design', 
      'User Research', 
      'Wireframing', 
      'Prototyping', 
      'Visual Design', 
      'Usability Testing'
    ]
  },
  {
    id: '10',
    title: 'Data Analyst Course',
    description: 'Deploy and scale applications using Amazon Web Services infrastructure.',
    instructor: 'Priya Patel',
    level: 'Advanced',
    duration: '22 hours',
    lessons: 75,
    rating: 4.8,
    students: 3950,
    image: 'https://images.unsplash.com/photo-1603695950834-3963cfb7fd5c?q=80&w=2000',
    category: 'DevOps',
    price: 69.99,
    fullDescription: `
      <p>Gain mastery of Amazon Web Services (AWS) with this comprehensive cloud computing course. You'll learn to architect, deploy, and manage scalable, highly available, and fault-tolerant systems on the world's most popular cloud platform.</p>
      
      <p>The course covers core AWS services including EC2, S3, RDS, Lambda, and more, along with networking, security, and cost optimization. You'll explore infrastructure as code with CloudFormation and Terraform, continuous integration/deployment pipelines, monitoring, and best practices for cloud architecture.</p>
      
      <p>Through hands-on labs and real-world projects, you'll gain practical experience designing and implementing cloud solutions. By the end, you'll be prepared to design and manage production AWS environments and pursue AWS certification.</p>
    `,
    curriculum: [
      { title: 'AWS Fundamentals', lessons: 10, duration: '2.5 hours' },
      { title: 'Compute Services', lessons: 8, duration: '2 hours' },
      { title: 'Storage Solutions', lessons: 7, duration: '2 hours' },
      { title: 'Database Services', lessons: 8, duration: '2.5 hours' },
      { title: 'Networking in AWS', lessons: 7, duration: '2 hours' },
      { title: 'Serverless Architecture', lessons: 10, duration: '3 hours' },
      { title: 'Infrastructure as Code', lessons: 8, duration: '2.5 hours' },
      { title: 'Security Best Practices', lessons: 8, duration: '2 hours' },
      { title: 'Monitoring and Management', lessons: 5, duration: '1.5 hours' },
      { title: 'Cost Optimization', lessons: 4, duration: '1 hour' },
    ],
    skills: [
      'AWS Services', 
      'Cloud Architecture', 
      'Infrastructure as Code', 
      'Serverless Computing', 
      'Cloud Security', 
      'Scalability', 
      'Cost Management'
    ]
  },
  {
    id: '11',
    title: 'AI Analyst Course',
    description: 'Deploy and scale applications using Amazon Web Services infrastructure.',
    instructor: 'Priya Patel',
    level: 'Advanced',
    duration: '22 hours',
    lessons: 75,
    rating: 4.8,
    students: 3950,
    image: 'https://images.unsplash.com/photo-1603695950834-3963cfb7fd5c?q=80&w=2000',
    category: 'DevOps',
    price: 69.99,
    fullDescription: `
      <p>Gain mastery of Amazon Web Services (AWS) with this comprehensive cloud computing course. You'll learn to architect, deploy, and manage scalable, highly available, and fault-tolerant systems on the world's most popular cloud platform.</p>
      
      <p>The course covers core AWS services including EC2, S3, RDS, Lambda, and more, along with networking, security, and cost optimization. You'll explore infrastructure as code with CloudFormation and Terraform, continuous integration/deployment pipelines, monitoring, and best practices for cloud architecture.</p>
      
      <p>Through hands-on labs and real-world projects, you'll gain practical experience designing and implementing cloud solutions. By the end, you'll be prepared to design and manage production AWS environments and pursue AWS certification.</p>
    `,
    curriculum: [
      { title: 'AWS Fundamentals', lessons: 10, duration: '2.5 hours' },
      { title: 'Compute Services', lessons: 8, duration: '2 hours' },
      { title: 'Storage Solutions', lessons: 7, duration: '2 hours' },
      { title: 'Database Services', lessons: 8, duration: '2.5 hours' },
      { title: 'Networking in AWS', lessons: 7, duration: '2 hours' },
      { title: 'Serverless Architecture', lessons: 10, duration: '3 hours' },
      { title: 'Infrastructure as Code', lessons: 8, duration: '2.5 hours' },
      { title: 'Security Best Practices', lessons: 8, duration: '2 hours' },
      { title: 'Monitoring and Management', lessons: 5, duration: '1.5 hours' },
      { title: 'Cost Optimization', lessons: 4, duration: '1 hour' },
    ],
    skills: [
      'AWS Services', 
      'Cloud Architecture', 
      'Infrastructure as Code', 
      'Serverless Computing', 
      'Cloud Security', 
      'Scalability', 
      'Cost Management'
    ]
  },
];

// Add an alias export to fix import errors
export const courses = coursesData;

// Add the getCourseById function that was missing
export const getCourseById = (id: string) => {
  return coursesData.find(course => course.id === id) || null;
};
