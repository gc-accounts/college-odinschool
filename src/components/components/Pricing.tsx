
import React, { useRef, useEffect, useState } from 'react';
import { Check, HelpCircle } from 'lucide-react';
import Button from './Button';
import { cn } from '@/components/lib/utils';

interface PricingTierProps {
  title: string;
  price: number;
  description: string;
  features: string[];
  highlighted?: boolean;
  buttonText: string;
  period: 'monthly' | 'yearly';
}

const pricingTiers: Omit<PricingTierProps, 'period'>[] = [
  {
    title: 'Basic',
    price: 19,
    description: 'Perfect for individuals starting their coding journey',
    features: [
      'Access to 50+ basic courses',
      'Basic project assessments',
      'Community forum access',
      'Email support',
      'Course completion certificates',
    ],
    buttonText: 'Get Started',
  },
  {
    title: 'Pro',
    price: 49,
    description: 'For developers who want to accelerate their skills',
    features: [
      'Access to 200+ courses including advanced',
      'Personalized learning paths',
      'Unlimited project assessments',
      'Priority email support',
      'Expert code reviews',
      'Job-ready portfolio guidance',
      'Course completion certificates',
    ],
    buttonText: 'Go Pro',
    highlighted: true,
  },
  {
    title: 'Enterprise',
    price: 99,
    description: 'For teams and organizations training developers',
    features: [
      'Everything in Pro plan',
      'Custom learning tracks',
      'Team progress analytics',
      '24/7 premium support',
      'Dedicated account manager',
      'API access for LMS integration',
      'Bulk license discounts',
      'Custom certificates',
    ],
    buttonText: 'Contact Sales',
  },
];

const Pricing = () => {
  const [period, setPeriod] = useState<'monthly' | 'yearly'>('monthly');
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    if (headerRef.current) observer.observe(headerRef.current);
    if (pricingRef.current) observer.observe(pricingRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="pricing" className="py-16 md:py-24">
      <div className="container">
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-12 md:mb-16 opacity-0">
          <h2 className="heading-lg mb-4">
            Simple, <span className="text-primary-600">Transparent Pricing</span>
          </h2>
          <p className="body-md text-gray-600 max-w-2xl mx-auto mb-8">
            Choose the plan that fits your learning goals and take the next step in your coding journey.
          </p>
          
          <div className="inline-flex items-center p-1 bg-gray-100 rounded-lg">
            <button
              onClick={() => setPeriod('monthly')}
              className={cn(
                "py-2 px-4 rounded-md text-sm font-medium transition-all",
                period === 'monthly' 
                  ? "bg-white text-primary-800 shadow-sm" 
                  : "text-gray-600 hover:text-gray-800"
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => setPeriod('yearly')}
              className={cn(
                "py-2 px-4 rounded-md text-sm font-medium transition-all relative",
                period === 'yearly' 
                  ? "bg-white text-primary-800 shadow-sm" 
                  : "text-gray-600 hover:text-gray-800"
              )}
            >
              Yearly
              <span className="absolute -top-2 -right-2 bg-primary-600 text-white text-xs px-1.5 py-0.5 rounded-full">
                20% off
              </span>
            </button>
          </div>
        </div>

        <div 
          ref={pricingRef} 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto opacity-0"
          style={{ animationDelay: '200ms' }}
        >
          {pricingTiers.map((tier) => (
            <div 
              key={tier.title}
              className={cn(
                "rounded-xl overflow-hidden transition-all duration-300 h-full flex flex-col",
                tier.highlighted 
                  ? "border-2 border-primary-500 shadow-lg relative scale-105 z-10" 
                  : "border shadow-sm hover:shadow-md"
              )}
            >
              {tier.highlighted && (
                <div className="bg-primary-600 py-1.5 text-white text-center text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="p-6 md:p-8 flex-grow">
                <div className="mb-5">
                  <h3 className="text-xl font-display font-bold mb-2">{tier.title}</h3>
                  <p className="text-gray-600 text-sm">{tier.description}</p>
                </div>
                
                <div className="mb-8">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-display font-bold">
                      ${period === 'yearly' ? (tier.price * 0.8 * 12).toFixed(0) : tier.price}
                    </span>
                    <span className="text-gray-600 ml-2">
                      /{period === 'yearly' ? 'year' : 'month'}
                    </span>
                  </div>
                  {period === 'yearly' && (
                    <p className="text-xs text-primary-700 mt-1">
                      Billed annually (save 20%)
                    </p>
                  )}
                </div>
                
                <div className="space-y-4 mb-8">
                  {tier.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <Check size={18} className="text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="px-6 md:px-8 pb-8">
                <Button 
                  variant={tier.highlighted ? "primary" : "secondary"}
                  fullWidth
                >
                  {tier.buttonText}
                </Button>
                
                <div className="text-center mt-4">
                  <a href="#" className="text-xs text-gray-500 flex items-center justify-center hover:text-primary-600 transition-colors">
                    Need help choosing?
                    <HelpCircle size={14} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
