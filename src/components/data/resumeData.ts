
import { ResumeData } from '@/types/resume';
import { v4 as uuidv4 } from 'uuid';

export const initialResumeData: ResumeData = {
  personal: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    website: '',
    linkedin: '',
    github: '',
    objective: ''
  },
  education: [
    {
      id: uuidv4(),
      institution: '',
      degree: '',
      field: '',
      startDate: '',
      endDate: '',
      location: '',
      description: ''
    }
  ],
  experience: [
    {
      id: uuidv4(),
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      current: false,
      description: '',
      location: ''
    }
  ],
  skills: [
    {
      id: uuidv4(),
      name: '',
      level: 'Intermediate'
    }
  ],
  projects: [
    {
      id: uuidv4(),
      name: '',
      description: '',
      url: '',
      startDate: '',
      endDate: ''
    }
  ],
  certifications: [
    {
      id: uuidv4(),
      name: '',
      issuer: '',
      date: '',
      url: ''
    }
  ]
};
