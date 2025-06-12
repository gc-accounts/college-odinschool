import { dsFaqsData } from '@/components/data/course-section/faqs/dsFaqsData';
import { genAiFaqsData } from '@/components/data/course-section/faqs/genAiFaqsData';
import { genAiiitgFaqsData } from '@/components/data/course-section/faqs/genAiiitgFaqsData';
import { dsEliteFaqsData } from '@/components/data/course-section/faqs/dsEliteFaqsData';
import { IbFaqsData } from '@/components/data/course-section/faqs/IbFaqsData';

import { DsCareerPathData } from '@/components/data/course-section/carrer-path/DsCareerPathData';
import { DsEliteCareerPathData } from '@/components/data/course-section/carrer-path/DsEliteCareerPathData';
import { GenAICareerPathData } from '@/components/data/course-section/carrer-path/GenAICareerPathData';
import { GenAIIITGCareerPathData } from '@/components/data/course-section/carrer-path/GenAIIITGCareerPathData';
import { IbCareerPathData } from '@/components/data/course-section/carrer-path/IbCareerPathData';

import { DsMentorsData } from '@/components/data/course-section/mentors/DsMentorsData';
import { DsEliteMentorsData } from '@/components/data/course-section/mentors/DsEliteMentorsData';
import { GenAIMentorsData } from '@/components/data/course-section/mentors/GenAIMentorsData';
import { GenAIIITGMentorsData } from '@/components/data/course-section/mentors/GenAIIITGMentorsData';

import { DsEliteDataLeadersData } from '@/components/data/course-section/data-leaders/DsEliteDataLeadersData';
import { IbDataLeadersData } from '@/components/data/course-section/data-leaders/IbDataLeadersData';




const getCourseData = (slug: string) => {
  switch (slug) {
    case 'data-science-course':
      return {
        faqs: dsFaqsData,
        jobs: [],
        careerPath: DsCareerPathData,
        mentors: DsMentorsData,
        dataLeaders: [],
      };
    case 'generative-ai-bootcamp':
      return {
        faqs: genAiFaqsData,
        jobs: [],
        careerPath: GenAICareerPathData,
        mentors: GenAIMentorsData,
        dataLeaders: [],
      };
    case 'generative-ai-course-iitg':
      return {
        faqs: genAiiitgFaqsData,
        jobs: [],
        careerPath: GenAIIITGCareerPathData,
        mentors: GenAIIITGMentorsData,
        dataLeaders: [],
      };
    case 'data-science-elite-course':
      return {
        faqs: dsEliteFaqsData,
        jobs: [],
        careerPath: DsEliteCareerPathData,
        mentors: DsEliteMentorsData,
        dataLeaders: DsEliteDataLeadersData,
      };

      case 'investment-banking-and-finance-operations-elite-course':
      return {
        faqs: IbFaqsData,
        jobs: [],
        careerPath: IbCareerPathData,
        mentors: DsEliteMentorsData,
        dataLeaders: IbDataLeadersData,
      };

    default:
      return {
        faqs: [],
        jobs: [],
      };
  }
};


export default getCourseData