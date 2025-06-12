// Define the mentor data structure
export interface Mentor {
  id: string;
  name: string;
  title: string;
  synopsis: string;
  role: string;
  company: string;
  image: string;
  expertise: string[];
  bio: string;
  education: string;
}

// Export mentor data
export const mentorsData: Mentor[] = [
  {
    id: "mentor-1",
    name: "Dr. Sarah Johnson",
    title: "Use Cases of Generative AI",
    role: "AI Research Scientist",
    company: "Google DeepMind",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auhref=format&fit=crop&w=256",
    expertise: ["Machine Learning", "Natural Language Processing", "Neural Networks"],
    bio: "Dr. Sarah Johnson is a leading researcher in artificial intelligence with over 15 years of experience. She has published numerous papers on deep learning applications and worked on projects ranging from healthcare diagnostics to automated language translation systems. Her current research focuses on developing more efficient and explainable neural network architectures.",
    education: "Ph.D. in Computer Science, Stanford University",
    synopsis: "Highlighting diverse use cases, Rajeswaran offers a framework on how to select the right generative model based on your problem and data. He advises leveraging AI when you need to uncover insights at scale or generate new data, exploring challenges best tackled by neural networks.",
  },
  {
    id: "mentor-2",
    name: "Michael Chen",
    title: "Use Cases of Generative AI",
    role: "Senior Software Engineer",
    company: "Microsoft",
    image: "https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?auhref=format&fit=crop&w=256",
    expertise: ["Cloud Architecture", "DevOps", "Microservices"],
    bio: "Michael Chen specializes in cloud-native applications and infrastructure automation. He has helped numerous organizations modernize their tech stacks and implement efficient CI/CD pipelines. With expertise in containers, Kubernetes, and serverless architectures, Michael has been instrumental in building scalable and resilient systems for enterprise applications.",
    education: "M.S. in Computer Engineering, UC Berkeley",
    synopsis: "Highlighting diverse use cases, Rajeswaran offers a framework on how to select the right generative model based on your problem and data. He advises leveraging AI when you need to uncover insights at scale or generate new data, exploring challenges best tackled by neural networks.",

  },
  {
    id: "mentor-3",
    name: "Priya Patel",
    title: "Use Cases of Generative AI",
    role: "Data Science Director",
    company: "Netflix",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auhref=format&fit=crop&w=256",
    expertise: ["Big Data Analytics", "Recommendation Systems", "Statistical Modeling"],
    bio: "Priya leads data science initiatives focused on improving content recommendations and user experience through advanced analytics. Her team leverages machine learning algorithms to analyze viewing patterns and predict user preferences. Prior to Netflix, she worked in quantitative finance, developing models for risk assessment and algorithmic trading.",
    education: "Ph.D. in Statistics, MIT",
    synopsis: "Highlighting diverse use cases, Rajeswaran offers a framework on how to select the right generative model based on your problem and data. He advises leveraging AI when you need to uncover insights at scale or generate new data, exploring challenges best tackled by neural networks.",

  },
  {
    id: "mentor-4",
    name: "James Wilson",
    title: "Use Cases of Generative AI",
    role: "Cybersecurity Expert",
    company: "CyberShield Inc.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auhref=format&fit=crop&w=256",
    expertise: ["Network Security", "Penetration Testing", "Security Architecture"],
    bio: "James specializes in identifying vulnerabilities in systems and developing robust security protocols to prevent cyber attacks. He has conducted security assessments for government agencies, financial institutions, and healthcare organizations. His approach combines technical expertise with an understanding of human factors in security breaches.",
    education: "B.S. in Computer Science, Georgia Tech",
    synopsis: "Highlighting diverse use cases, Rajeswaran offers a framework on how to select the right generative model based on your problem and data. He advises leveraging AI when you need to uncover insights at scale or generate new data, exploring challenges best tackled by neural networks.",

  },
  {
    id: "mentor-5",
    name: "Elena Rodriguez",
    title: "Use Cases of Generative AI",
    role: "Frontend Engineering Lead",
    company: "Airbnb",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auhref=format&fit=crop&w=256",
    expertise: ["React", "UI/UX Design", "Performance Optimization"],
    bio: "Elena leads frontend development teams creating beautiful, accessible, and high-performance web applications. She is passionate about building intuitive user interfaces and optimizing web performance. Her approach combines technical excellence with a deep understanding of user needs and behaviors to create engaging digital experiences.",
    education: "M.S. in Human-Computer Interaction, Carnegie Mellon",
    synopsis: "Highlighting diverse use cases, Rajeswaran offers a framework on how to select the right generative model based on your problem and data. He advises leveraging AI when you need to uncover insights at scale or generate new data, exploring challenges best tackled by neural networks.",

  },
  {
    id: "mentor-6",
    name: "David Kim",
    title: "Use Cases of Generative AI",
    role: "Product Manager",
    company: "Spotify",
    image: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?auhref=format&fit=crop&w=256",
    expertise: ["Product Strategy", "User Research", "Agile Methodologies"],
    bio: "David specializes in building digital products that users love. He has a background in both engineering and design, which gives him a unique perspective on product development. At Spotify, he leads initiatives to improve music discovery and user engagement through data-driven product decisions and continuous experimentation.",
    education: "MBA, Harvard Business School",
    synopsis: "Highlighting diverse use cases, Rajeswaran offers a framework on how to select the right generative model based on your problem and data. He advises leveraging AI when you need to uncover insights at scale or generate new data, exploring challenges best tackled by neural networks.",

  }
];