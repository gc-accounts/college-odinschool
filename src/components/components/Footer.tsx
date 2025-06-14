
import React from 'react';
import Link from 'next/link';
import { Facebook, Linkedin, Instagram, Youtube } from 'lucide-react';

// Utility function to handle links both inside and outside Router context
const SafeLink = ({ to, className, children }: {
  to: string;
  className?: string;
  children: React.ReactNode;
}) => {
  try {
    // Try to use the Link component
    return (
      <Link href={to} className={className}>
        {children}
      </Link>
    );
  } catch (error) {
    // Fallback to using an anchor tag
    return (
      <a href={to} className={className}>
        {children}
      </a>
    );
  }
};

const Footer = () => {
  const footerLinks = [
    {
      title: 'Platform',
      links: [
        { name: 'Home', href: '/' },
        // { name: 'Courses', href: '/courses' },
        { name: 'Webinars', href: 'https://www.odinschool.com/webinars' },
        { name: 'Success Stories', href: 'https://www.odinschool.com/success-stories' },
      ],
    },
    {
      title: 'Tools',
      links: [
        { name: 'Salary Calculator', href: 'https://www.odinschool.com/salary-calculator' },
        { name: 'Resume Builder', href: 'https://www.odinschool.com/resume-builder' },
        { name: 'Hire Talent', href: 'https://www.odinschool.com/hire-talent' },
        { name: 'Become a Mentor', href: 'https://www.odinschool.com/become-a-mentor' },
        { name: 'Referral Program', href: 'https://www.odinschool.com/referral-program' },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "All Resources", href: "https://www.odinschool.com/resources" },
        { name: "Blog", href: "https://www.odinschool.com/blog" },
        { name: "Free Project", href: "https://www.odinschool.com/free-resources" },
        { name: "Fun With Statistics", href: "https://www.odinschool.com/fun-with-statistics" },
        { name: "Data Science Career Guide", href: "https://www.odinschool.com/data-science-career-guide" },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: 'https://www.odinschool.com/about-us' },
        { name: 'News Room', href: 'https://www.odinschool.com/news' },
        { name: 'Careers', href: 'https://www.odinschool.com/careers' },
        { name: 'Contact', href: 'https://www.odinschool.com/contact-us' },
        { name: 'FAQ', href: 'https://www.odinschool.com/faq' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Terms of Use', href: 'https://www.odinschool.com/terms' },
        { name: 'Privacy Policy', href: 'https://www.odinschool.com/privacy' },
        // { name: 'Cookie Policy', href: '/cookies' },
      ],
    },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:grid-cols-5">
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="text-white font-medium mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <SafeLink
                      to={link.href}
                      className="text-gray-400 hover:text-gray-200 transition-colors"
                    >
                      {link.name}
                    </SafeLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <SafeLink to="/" className="text-xl font-bold text-white">
                OdinSchool
              </SafeLink>
              <p className="mt-2 text-sm text-gray-400">
                Empowering your learning journey with expert-led courses
              </p>
            </div>

            <div className="flex space-x-6">

              <a href="https://www.facebook.com/OdinSchool/" className="text-gray-400 hover:text-gray-200">
                <span className="sr-only">Facebook</span>
                <Facebook size={20} className="text-primary-600" />
              </a>
              <a href="https://www.linkedin.com/school/odinschool/" className="text-gray-400 hover:text-gray-200">
                <span className="sr-only">LinkedIn</span>
                <Linkedin size={20} className="text-primary-600" />
              </a>
              <a href="https://www.instagram.com/odin_school/" className="text-gray-400 hover:text-gray-200">
                <span className="sr-only">Instagram</span>
                <Instagram size={20} className="text-primary-600" />
              </a>
              <a href="https://www.youtube.com/@OdinSchool" className="text-gray-400 hover:text-gray-200">
                <span className="sr-only">Youtube</span>
                <Youtube size={20} className="text-primary-600" />
              </a>



            </div>
          </div>

          <p className="mt-8 text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} OdinSchool. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
