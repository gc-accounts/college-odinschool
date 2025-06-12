
export interface Webinar {
  id: string;
  title: string;
  description: string;
  date: string; // ISO date string
  time: string; // e.g., "2:00 PM - 3:30 PM EST"
  duration: string; // e.g., "90 minutes"
  instructor: string;
  price: number; // 0 for free webinars
  image: string;
  category: string;
  tags: string[];
  isFeatured: boolean;
  isPaid: boolean;
  status: 'upcoming' | 'past';
}

export const webinars: Webinar[] = [
  {
    id: "web-1",
    title: "Mastering React Hooks for State Management",
    description: "Learn how to use React hooks effectively for state management in your applications without external libraries.",
    date: "2023-12-10T14:00:00",
    time: "2:00 PM - 3:30 PM EST",
    duration: "90 minutes",
    instructor: "Sarah Johnson",
    price: 0,
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auhref=format&fit=crop",
    category: "Web Development",
    tags: ["React", "Hooks", "Frontend"],
    isFeatured: true,
    isPaid: false,
    status: "upcoming"
  },
  {
    id: "web-2",
    title: "Advanced TypeScript Patterns for Enterprise Applications",
    description: "Discover advanced TypeScript patterns used in large-scale applications and how to implement them in your projects.",
    date: "2023-12-15T18:00:00",
    time: "6:00 PM - 8:00 PM EST",
    duration: "120 minutes",
    instructor: "Michael Chen",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1619410283995-43d9134e7656?q=80&w=2070&auhref=format&fit=crop",
    category: "Programming",
    tags: ["TypeScript", "Enterprise", "Patterns"],
    isFeatured: true,
    isPaid: true,
    status: "upcoming"
  },
  {
    id: "web-3",
    title: "Building Responsive UIs with Tailwind CSS",
    description: "Learn how to create beautiful, responsive user interfaces using Tailwind CSS from scratch.",
    date: "2023-12-05T15:00:00",
    time: "3:00 PM - 4:30 PM EST",
    duration: "90 minutes",
    instructor: "Emily Rodriguez",
    price: 0,
    image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?q=80&w=2070&auhref=format&fit=crop",
    category: "Web Development",
    tags: ["CSS", "Tailwind", "UI Design"],
    isFeatured: false,
    isPaid: false,
    status: "past"
  },
  {
    id: "web-4",
    title: "Deploying Microservices with Kubernetes",
    description: "A comprehensive guide to deploying and managing microservices architecture using Kubernetes.",
    date: "2023-11-25T13:00:00",
    time: "1:00 PM - 3:00 PM EST",
    duration: "120 minutes",
    instructor: "David Kim",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=2070&auhref=format&fit=crop",
    category: "DevOps",
    tags: ["Kubernetes", "Microservices", "Cloud"],
    isFeatured: false,
    isPaid: true,
    status: "past"
  },
  {
    id: "web-5",
    title: "Introduction to AI and Machine Learning",
    description: "Get started with artificial intelligence and machine learning concepts with practical examples.",
    date: "2023-12-20T16:00:00",
    time: "4:00 PM - 6:00 PM EST",
    duration: "120 minutes",
    instructor: "Rachel Lee",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2070&auhref=format&fit=crop",
    category: "AI & Machine Learning",
    tags: ["AI", "ML", "Data Science"],
    isFeatured: true,
    isPaid: true,
    status: "upcoming"
  },
  {
    id: "web-6",
    title: "Data Visualization with D3.js",
    description: "Learn how to create interactive data visualizations using D3.js for your web applications.",
    date: "2023-12-18T17:00:00",
    time: "5:00 PM - 6:30 PM EST",
    duration: "90 minutes",
    instructor: "Jason Taylor",
    price: 0,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auhref=format&fit=crop",
    category: "Data Visualization",
    tags: ["D3.js", "JavaScript", "Data"],
    isFeatured: false,
    isPaid: false,
    status: "upcoming"
  }
];

export function getWebinarById(id: string): Webinar | undefined {
  return webinars.find(webinar => webinar.id === id);
}

export function getUpcomingWebinars(): Webinar[] {
  return webinars.filter(webinar => webinar.status === 'upcoming');
}

export function getPastWebinars(): Webinar[] {
  return webinars.filter(webinar => webinar.status === 'past');
}

export function getFeaturedWebinars(): Webinar[] {
  return webinars.filter(webinar => webinar.isFeatured);
}

export function getFreeWebinars(): Webinar[] {
  return webinars.filter(webinar => !webinar.isPaid);
}

export function getPaidWebinars(): Webinar[] {
  return webinars.filter(webinar => webinar.isPaid);
}
