
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
    title: string;
    about: string;
  };
  category: string;
  coverImage: string;
  readTime: number;
  publishedAt: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Top 10 Programming Languages to Learn in 2023",
    slug: "top-10-programming-languages-2023",
    excerpt: "Discover the most in-demand programming languages that will boost your career prospects in the tech industry this year.",
    content: `
      `,
    author: {
      name: "Sarah Johnson",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      title: "Senior Developer Advocate",
      about: "A part-time writer and a full-time human. Indulges in art, poetry, dance, tech... but identifies with none. Flowing through life's rhythm, becoming one with the cosmic hum. I strongly believe, trying to know a person reading a three-line bio is just not done!",
    },
    category: "Programming",
    coverImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    readTime: 6,
    publishedAt: "2023-05-15",
    tags: ["Programming", "Career", "Technology"]
  },
  {
    id: "2",
    title: "How to Prepare for a Technical Interview",
    slug: "prepare-technical-interview",
    excerpt: "Master the technical interview process with our comprehensive guide covering coding challenges, system design, and behavioral questions.",
    content: `
      <p>Technical interviews can be intimidating, but with the right preparation, you can approach them with confidence. This guide covers the essential aspects of technical interview preparation, from coding challenges to behavioral questions.</p>
      
      <h3>Understanding the Technical Interview Process</h3>
      <p>Most technical interviews follow a similar structure, typically including:</p>
      <ul>
        <li>An initial screening call with a recruiter</li>
        <li>One or more technical phone/video interviews with coding exercises</li>
        <li>An onsite interview with multiple rounds focusing on coding, system design, and cultural fit</li>
      </ul>
      
      <h3>Mastering Coding Challenges</h3>
      <p>Coding challenges assess your problem-solving abilities and coding proficiency. To prepare:</p>
      <ul>
        <li>Practice regularly on platforms like LeetCode, HackerRank, or CodeSignal</li>
        <li>Focus on data structures (arrays, linked lists, trees, graphs) and algorithms (sorting, searching, dynamic programming)</li>
        <li>Practice explaining your thought process while coding (think aloud)</li>
        <li>Analyze time and space complexity of your solutions</li>
      </ul>
      
      <h3>System Design Preparation</h3>
      <p>For senior roles, system design questions are crucial. They evaluate your ability to architect scalable systems. Key areas to cover:</p>
      <ul>
        <li>Scalability concepts (horizontal vs. vertical scaling)</li>
        <li>Database design and selection (SQL vs. NoSQL)</li>
        <li>Caching strategies</li>
        <li>Load balancing</li>
        <li>Microservices architecture</li>
      </ul>
      
      <h3>Behavioral Questions</h3>
      <p>Technical skills alone aren't enough. Companies want team players who can communicate effectively:</p>
      <ul>
        <li>Prepare stories about challenging projects you've worked on</li>
        <li>Use the STAR method (Situation, Task, Action, Result) to structure your responses</li>
        <li>Showcase your teamwork, leadership, and conflict resolution skills</li>
      </ul>
      
      <h3>Company Research</h3>
      <p>Tailoring your preparation to the specific company is essential:</p>
      <ul>
        <li>Understand the company's products, technologies, and values</li>
        <li>Read about the company's engineering blog and GitHub repositories</li>
        <li>Research common interview questions asked by the company on platforms like Glassdoor</li>
      </ul>
      
      <h3>Mock Interviews</h3>
      <p>Practice makes perfect:</p>
      <ul>
        <li>Conduct mock interviews with friends or use services like Pramp or interviewing.io</li>
        <li>Practice with a timer to get comfortable with time constraints</li>
        <li>Get feedback on both technical solutions and communication style</li>
      </ul>
      
      <h3>On the Day of the Interview</h3>
      <ul>
        <li>Get plenty of rest the night before</li>
        <li>Test your technical setup for remote interviews</li>
        <li>Have pen, paper, and water ready</li>
        <li>Prepare questions to ask your interviewers</li>
      </ul>
      
      <h3>Conclusion</h3>
      <p>Remember, interviewing is a skill that improves with practice. Even if you don't get the offer, each interview provides valuable experience for future opportunities. Stay persistent, keep improving, and approach each interview as a learning opportunity.</p>
    `,
    author: {
      name: "Michael Chen",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      title: "Technical Interview Coach",
      about: "A part-time writer and a full-time human. Indulges in art, poetry, dance, tech... but identifies with none. Flowing through life's rhythm, becoming one with the cosmic hum. I strongly believe, trying to know a person reading a three-line bio is just not done!",
    },
    category: "Career",
    coverImage: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    readTime: 8,
    publishedAt: "2023-06-22",
    tags: ["Career", "Interviews", "Programming"]
  },
  {
    id: "3",
    title: "Introduction to Machine Learning: A Beginner's Guide",
    slug: "introduction-machine-learning",
    excerpt: "Demystify machine learning concepts and explore the fundamentals that every aspiring data scientist should know.",
    content: `
      <p>Machine learning has transformed from an academic pursuit to a technology that impacts our daily lives. From recommendation systems to voice assistants, machine learning powers many of the services we use daily. This guide provides a gentle introduction to the core concepts of machine learning for beginners.</p>
      
      <h3>What is Machine Learning?</h3>
      <p>Machine learning is a subset of artificial intelligence that enables systems to learn and improve from experience without being explicitly programmed. The key idea is that systems can learn from data, identify patterns, and make decisions with minimal human intervention.</p>
      
      <h3>Types of Machine Learning</h3>
      <p>Machine learning can be categorized into three main types:</p>
      
      <h4>1. Supervised Learning</h4>
      <p>In supervised learning, the algorithm learns from labeled data. It's like learning with a teacher who provides the correct answers. Examples include:</p>
      <ul>
        <li><strong>Classification:</strong> Predicting a category (e.g., spam detection)</li>
        <li><strong>Regression:</strong> Predicting a continuous value (e.g., house prices)</li>
      </ul>
      
      <h4>2. Unsupervised Learning</h4>
      <p>Unsupervised learning deals with unlabeled data. The algorithm must find patterns without guidance. Common techniques include:</p>
      <ul>
        <li><strong>Clustering:</strong> Grouping similar data points (e.g., customer segmentation)</li>
        <li><strong>Dimensionality Reduction:</strong> Simplifying data while preserving important information</li>
      </ul>
      
      <h4>3. Reinforcement Learning</h4>
      <p>Reinforcement learning involves an agent learning to make decisions by performing actions and receiving rewards or penalties. It's commonly used in robotics, gaming, and autonomous systems.</p>
      
      <h3>Key Concepts in Machine Learning</h3>
      
      <h4>Features and Labels</h4>
      <p>Features are the input variables used to make predictions. Labels are the outputs we're trying to predict in supervised learning.</p>
      
      <h4>Training and Testing</h4>
      <p>Machine learning models are typically developed using a training dataset and evaluated on a separate testing dataset to assess their generalization capabilities.</p>
      
      <h4>Overfitting and Underfitting</h4>
      <p>Overfitting occurs when a model learns the training data too well, including its noise, resulting in poor performance on new data. Underfitting happens when a model is too simple to capture the underlying patterns.</p>
      
      <h3>Popular Machine Learning Algorithms</h3>
      <ul>
        <li><strong>Linear Regression:</strong> For predicting continuous values</li>
        <li><strong>Logistic Regression:</strong> For binary classification problems</li>
        <li><strong>Decision Trees:</strong> Tree-like models used for both classification and regression</li>
        <li><strong>Random Forests:</strong> Ensemble of decision trees for improved accuracy</li>
        <li><strong>Support Vector Machines:</strong> Effective for classification in high-dimensional spaces</li>
        <li><strong>K-means Clustering:</strong> For grouping unlabeled data</li>
        <li><strong>Neural Networks:</strong> The foundation of deep learning</li>
      </ul>
      
      <h3>Getting Started with Machine Learning</h3>
      
      <h4>Essential Skills</h4>
      <p>To begin your machine learning journey, focus on developing these skills:</p>
      <ul>
        <li>Programming (Python is the most popular language for ML)</li>
        <li>Mathematics (linear algebra, calculus, probability)</li>
        <li>Data preprocessing and visualization</li>
        <li>Model evaluation techniques</li>
      </ul>
      
      <h4>Tools and Libraries</h4>
      <p>Popular tools and libraries for machine learning include:</p>
      <ul>
        <li><strong>Scikit-learn:</strong> Comprehensive library for classical ML algorithms</li>
        <li><strong>TensorFlow and PyTorch:</strong> For deep learning</li>
        <li><strong>Pandas:</strong> For data manipulation</li>
        <li><strong>Matplotlib and Seaborn:</strong> For data visualization</li>
      </ul>
      
      <h3>Conclusion</h3>
      <p>Machine learning is a vast field with continuous advancements. This introduction covers just the basics, but it provides a foundation for further exploration. The journey to becoming proficient in machine learning involves continuous learning and practice. Start with simple projects, gradually tackle more complex problems, and stay updated with the latest research and techniques.</p>
    `,
    author: {
      name: "Rebecca Wong",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      title: "AI Research Scientist",
      about: "A part-time writer and a full-time human. Indulges in art, poetry, dance, tech... but identifies with none. Flowing through life's rhythm, becoming one with the cosmic hum. I strongly believe, trying to know a person reading a three-line bio is just not done!",
    },
    category: "Machine Learning",
    coverImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    readTime: 10,
    publishedAt: "2023-07-10",
    tags: ["Machine Learning", "AI", "Data Science", "Programming"]
  },
  {
    id: "4",
    title: "Building Responsive Web Designs with Modern CSS",
    slug: "responsive-web-design-modern-css",
    excerpt: "Learn how to create adaptive, flexible layouts using the latest CSS techniques including Grid, Flexbox, and custom properties.",
    content: `
      <p>Responsive web design has evolved significantly since Ethan Marcotte first coined the term in 2010. Modern CSS provides powerful tools that make creating adaptive layouts simpler and more intuitive. This article explores the latest techniques for building responsive websites that work seamlessly across all device sizes.</p>
      
      <h3>The Foundation: Viewport and Responsive Units</h3>
      <p>The basics of responsive design start with proper viewport configuration and flexible units:</p>
      
      <pre><code>
&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
      </code></pre>
      
      <p>Instead of fixed pixel values, use relative units:</p>
      <ul>
        <li><strong>rem:</strong> Relative to the root element's font size</li>
        <li><strong>em:</strong> Relative to the parent element's font size</li>
        <li><strong>vw/vh:</strong> Relative to the viewport width/height</li>
        <li><strong>%:</strong> Percentage of the parent container</li>
      </ul>
      
      <h3>CSS Grid: Two-Dimensional Layout Power</h3>
      <p>CSS Grid provides a two-dimensional layout system that revolutionizes page structure:</p>
      
      <pre><code>
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}
      </code></pre>
      
      <p>The above code creates a responsive grid where:</p>
      <ul>
        <li><code>auto-fit</code> automatically determines the number of columns</li>
        <li><code>minmax(300px, 1fr)</code> ensures columns are at least 300px wide and grow equally</li>
        <li>Columns automatically reflow based on available space</li>
      </ul>
      
      <h3>Flexbox: One-Dimensional Layout Control</h3>
      <p>Flexbox excels at distributing space along a single axis:</p>
      
      <pre><code>
.flex-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

.flex-item {
  flex: 1 1 300px; /* grow, shrink, basis */
  margin: 0.5rem;
}
      </code></pre>
      
      <p>This creates a flexible row of items that will wrap when necessary, with each item having a minimum width of 300px but able to grow and shrink as needed.</p>
      
      <h3>Modern Media Queries</h3>
      <p>While CSS Grid and Flexbox reduce the need for media queries, they're still essential for significant layout changes:</p>
      
      <pre><code>
/* Base mobile styles first (mobile-first approach) */
.container {
  padding: 1rem;
}

/* Tablet styles */
@media (min-width: 768px) {
  .container {
    padding: 2rem;
  }
}

/* Desktop styles */
@media (min-width: 1024px) {
  .container {
    padding: 3rem;
    max-width: 1200px;
    margin: 0 auto;
  }
}
      </code></pre>
      
      <p>Modern media queries can also target specific device capabilities:</p>
      
      <pre><code>
/* Dark mode */
@media (prefers-color-scheme: dark) {
  :root {
    --text-color: #ffffff;
    --background-color: #121212;
  }
}

/* Reduced motion preferences */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
      </code></pre>
      
      <h3>CSS Custom Properties for Responsive Values</h3>
      <p>CSS Variables (Custom Properties) allow for dynamic value changes:</p>
      
      <pre><code>
:root {
  --spacing-unit: 1rem;
  --main-font-size: 1rem;
}

@media (min-width: 768px) {
  :root {
    --spacing-unit: 1.5rem;
    --main-font-size: 1.125rem;
  }
}

body {
  font-size: var(--main-font-size);
  padding: var(--spacing-unit);
}
      </code></pre>
      
      <h3>Container Queries: The Future of Component-Based Responsive Design</h3>
      <p>Container queries allow components to adapt based on their parent container's size, not just the viewport:</p>
      
      <pre><code>
.card-container {
  container-type: inline-size;
}

.card {
  display: grid;
  grid-template-columns: 1fr;
}

@container (min-width: 400px) {
  .card {
    grid-template-columns: 200px 1fr;
  }
}
      </code></pre>
      
      <p>This enables truly reusable components that adapt to their context, regardless of viewport size.</p>
      
      <h3>Responsive Images</h3>
      <p>Modern HTML provides powerful tools for responsive images:</p>
      
      <pre><code>
&lt;picture&gt;
  &lt;source srcset="image-large.webp" media="(min-width: 800px)" type="image/webp"&gt;
  &lt;source srcset="image-large.jpg" media="(min-width: 800px)"&gt;
  &lt;source srcset="image-small.webp" type="image/webp"&gt;
  &lt;img src="image-small.jpg" alt="Responsive image" loading="lazy"&gt;
&lt;/picture&gt;
      </code></pre>
      
      <p>This allows for:</p>
      <ul>
        <li>Different image resolutions for different screen sizes</li>
        <li>Modern formats with fallbacks (WebP with JPEG fallback)</li>
        <li>Lazy loading for performance</li>
      </ul>
      
      <h3>Putting It All Together: Best Practices</h3>
      <ul>
        <li><strong>Mobile-first approach:</strong> Design for small screens first, then enhance for larger screens</li>
        <li><strong>Progressive enhancement:</strong> Ensure core functionality works everywhere, then add enhancements for modern browsers</li>
        <li><strong>Performance:</strong> Optimize images, minimize CSS, and use lazy loading</li>
        <li><strong>Accessibility:</strong> Ensure your responsive design works for all users, including those with disabilities</li>
        <li><strong>Testing:</strong> Test on actual devices, not just browser resizing</li>
      </ul>
      
      <h3>Conclusion</h3>
      <p>Modern CSS has transformed responsive web design from a complex challenge into a more manageable task. By leveraging CSS Grid, Flexbox, custom properties, and emerging features like container queries, developers can create fluid, adaptable layouts that provide optimal user experiences across all devices.</p>
    `,
    author: {
      name: "Jordan Lee",
      avatar: "https://randomuser.me/api/portraits/men/55.jpg",
      title: "Frontend Developer",
      about: "A part-time writer and a full-time human. Indulges in art, poetry, dance, tech... but identifies with none. Flowing through life's rhythm, becoming one with the cosmic hum. I strongly believe, trying to know a person reading a three-line bio is just not done!",
    },
    category: "Web Development",
    coverImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    readTime: 9,
    publishedAt: "2023-08-05",
    tags: ["CSS", "Web Development", "Frontend", "Responsive Design"]
  }
];
