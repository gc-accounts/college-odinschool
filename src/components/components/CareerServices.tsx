import { Code, Brain, Rocket } from 'lucide-react';
import RequestCallback from './custom-component/RequestCallback';

interface CareerServicesProps{
  slug:String
}
const CareerServices = ({slug}:CareerServicesProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gray-900">
            <span className="text-primary-600">Career Services</span> in a nutshell
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Get ready for your dream job! Attend comprehensive industry readiness training with Career Services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {[
            {
              icon: <Code className="h-10 w-10 text-primary-600" />,
              title: "Learn workplace skills",
              description: "Your working style and behavior decide if you are a good cultural fit. Learn the right skills so you never feel out of place at work."
            },
            {
              icon: <Brain className="h-10 w-10 text-primary-600" />,
              title: "Sell your skills, and sell them well",
              description: "You are halfway there if you have a great resume and an optimized online presence. Work with our experts to build your professional profiles."
            },
            {
              icon: <Rocket className="h-10 w-10 text-primary-600" />,
              title: "Attend mock interviewst",
              description: "Get a grip on those pre-interview nerves. Test and practice your skills with mock interview sessions."
            }
          ].map((item, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-all">
              <div className="mx-auto flex items-center justify-center h-16 w-16 bg-primary-50 rounded-full mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
            </div>
          ))}
        </div>
         
       <RequestCallback slug={slug}/>
      </div>
    </section>
  );
};

export default CareerServices;