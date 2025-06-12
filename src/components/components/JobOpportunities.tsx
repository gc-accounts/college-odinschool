
import React from 'react';
import { Button } from '@/components/components/ui/button';
import { MapPin, Briefcase, DollarSign } from 'lucide-react';

interface JobOpportunitiesProps {
  courseCategory: string;
  courseTitle: string;
}

const JobOpportunities = ({ courseCategory, courseTitle }: JobOpportunitiesProps) => {
  // Sample job data based on course category
  const getJobsByCategory = (category: string) => {
    const jobsByCategory: Record<string, unknown> = {
      'Web Development': [
        {
          title: 'Frontend Developer',
          company: 'TechCorp',
          location: 'Remote',
          salary: '$80k - $120k',
          skills: ['JavaScript', 'React', 'CSS'],
          logo: 'T'
        },
        {
          title: 'Full Stack Engineer',
          company: 'StartupX',
          location: 'New York, NY',
          salary: '$90k - $140k',
          skills: ['JavaScript', 'Node.js', 'MongoDB'],
          logo: 'S'
        },
        {
          title: 'Web Developer',
          company: 'Digital Agency',
          location: 'San Francisco, CA',
          salary: '$85k - $130k',
          skills: ['HTML', 'CSS', 'JavaScript'],
          logo: 'D'
        }
      ],
      'Data Science': [
        {
          title: 'Data Scientist',
          company: 'Analytics Co',
          location: 'Boston, MA',
          salary: '$95k - $145k',
          skills: ['Python', 'ML', 'Statistics'],
          logo: 'A'
        },
        {
          title: 'Data Analyst',
          company: 'DataViz',
          location: 'Chicago, IL',
          salary: '$75k - $110k',
          skills: ['SQL', 'Tableau', 'Excel'],
          logo: 'D'
        },
        {
          title: 'Machine Learning Engineer',
          company: 'AI Solutions',
          location: 'Remote',
          salary: '$100k - $160k',
          skills: ['TensorFlow', 'Python', 'Data Modeling'],
          logo: 'A'
        }
      ],
      'Design': [
        {
          title: 'UI/UX Designer',
          company: 'Creative Studio',
          location: 'Los Angeles, CA',
          salary: '$70k - $110k',
          skills: ['Figma', 'Adobe XD', 'User Research'],
          logo: 'C'
        },
        {
          title: 'Product Designer',
          company: 'DesignHub',
          location: 'Seattle, WA',
          salary: '$85k - $130k',
          skills: ['UI Design', 'Prototyping', 'User Testing'],
          logo: 'D'
        },
        {
          title: 'Graphic Designer',
          company: 'BrandWorks',
          location: 'Miami, FL',
          salary: '$65k - $95k',
          skills: ['Photoshop', 'Illustrator', 'Typography'],
          logo: 'B'
        }
      ],
      'Mobile Development': [
        {
          title: 'iOS Developer',
          company: 'AppFactory',
          location: 'Austin, TX',
          salary: '$90k - $140k',
          skills: ['Swift', 'Objective-C', 'XCode'],
          logo: 'A'
        },
        {
          title: 'Android Developer',
          company: 'MobileTech',
          location: 'Portland, OR',
          salary: '$85k - $135k',
          skills: ['Kotlin', 'Java', 'Android SDK'],
          logo: 'M'
        },
        {
          title: 'React Native Developer',
          company: 'CrossApp',
          location: 'Denver, CO',
          salary: '$80k - $125k',
          skills: ['React Native', 'JavaScript', 'Mobile UI'],
          logo: 'C'
        }
      ],
      'Backend': [
        {
          title: 'Backend Engineer',
          company: 'ServerTech',
          location: 'Atlanta, GA',
          salary: '$95k - $145k',
          skills: ['Node.js', 'Express', 'MongoDB'],
          logo: 'S'
        },
        {
          title: 'Java Developer',
          company: 'Enterprise Solutions',
          location: 'Washington DC',
          salary: '$100k - $150k',
          skills: ['Java', 'Spring', 'Microservices'],
          logo: 'E'
        },
        {
          title: 'API Developer',
          company: 'CloudConnect',
          location: 'Phoenix, AZ',
          salary: '$85k - $130k',
          skills: ['REST APIs', 'GraphQL', 'Database Design'],
          logo: 'C'
        }
      ],
      'DevOps': [
        {
          title: 'DevOps Engineer',
          company: 'CloudOps',
          location: 'Seattle, WA',
          salary: '$105k - $160k',
          skills: ['AWS', 'Kubernetes', 'CI/CD'],
          logo: 'C'
        },
        {
          title: 'Cloud Architect',
          company: 'InfraWorks',
          location: 'San Jose, CA',
          salary: '$120k - $180k',
          skills: ['AWS', 'Azure', 'Infrastructure as Code'],
          logo: 'I'
        },
        {
          title: 'Site Reliability Engineer',
          company: 'TechGiant',
          location: 'New York, NY',
          salary: '$110k - $170k',
          skills: ['Linux', 'Monitoring', 'Automation'],
          logo: 'T'
        }
      ],
      'Artificial Intelligence': [
        {
          title: 'AI Researcher',
          company: 'AI Lab',
          location: 'Boston, MA',
          salary: '$120k - $180k',
          skills: ['Deep Learning', 'NLP', 'Python'],
          logo: 'A'
        },
        {
          title: 'ML Engineer',
          company: 'AlgoTech',
          location: 'San Francisco, CA',
          salary: '$110k - $170k',
          skills: ['PyTorch', 'TensorFlow', 'Neural Networks'],
          logo: 'A'
        },
        {
          title: 'Computer Vision Engineer',
          company: 'VisionAI',
          location: 'Austin, TX',
          salary: '$100k - $160k',
          skills: ['OpenCV', 'Image Processing', 'Python'],
          logo: 'V'
        }
      ],
      'Frontend': [
        {
          title: 'React Developer',
          company: 'WebFront',
          location: 'Remote',
          salary: '$85k - $130k',
          skills: ['React', 'Redux', 'TypeScript'],
          logo: 'W'
        },
        {
          title: 'Frontend Engineer',
          company: 'UX Solutions',
          location: 'New York, NY',
          salary: '$90k - $140k',
          skills: ['JavaScript', 'CSS', 'Frontend Frameworks'],
          logo: 'U'
        },
        {
          title: 'UI Developer',
          company: 'DesignTech',
          location: 'Chicago, IL',
          salary: '$80k - $125k',
          skills: ['HTML', 'CSS', 'JavaScript'],
          logo: 'D'
        }
      ]
    };
    
    // Default to web development if category doesn't exist
    return jobsByCategory[category] || jobsByCategory['Web Development'];
  };
  
  const jobs = getJobsByCategory(courseCategory);
  
  return (
    <div className="mt-10 bg-gray-50 rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-2">Career Opportunities</h2>
      <p className="text-gray-600 mb-6">
        After completing {courseTitle}, you'll be qualified for these exciting job roles:
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {jobs.map((job, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                <span className="text-primary-700 font-semibold">{job.logo}</span>
              </div>
              <div>
                <h4 className="font-medium">{job.title}</h4>
                <p className="text-sm text-gray-500">{job.company}</p>
              </div>
            </div>
            
            <div className="space-y-2 mb-3">
              <div className="flex items-center text-sm text-gray-600">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Briefcase className="h-4 w-4 mr-1" />
                <span>Full-time</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <DollarSign className="h-4 w-4 mr-1" />
                <span>{job.salary}</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-3">
              {job.skills.map((skill: string, i: number) => (
                <span key={i} className="px-2 py-1 text-xs bg-gray-100 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
            
            <Button variant="outline" size="sm" className="w-full">
              View Job
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobOpportunities;
