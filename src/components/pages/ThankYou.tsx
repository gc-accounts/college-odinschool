'use client'
import React, { useEffect } from 'react';
import { CheckCircle, Home, BookOpen, ArrowRight } from 'lucide-react';
import Navbar from '@/components/components/Navbar';
import Footer from '@/components/components/Footer';
import { Button } from '@/components/components/ui/button';
import Link from 'next/link';

const ThankYou = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 flex items-center">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-green-100 rounded-full p-3">
                <CheckCircle className="h-16 w-16 text-green-600" />
              </div>
            </div>

            <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
            <p className="text-gray-600 text-lg mb-8">
              Your submission has been received successfully. We appreciate your interest and will be in touch soon.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-xl font-bold mb-2">What's Next?</h2>
                <p className="text-gray-600 mb-4">
                  While you wait, check out our courses and other resources to continue your learning journey.
                </p>
                <div className="flex justify-center">
                  <Button variant="outline" asChild>
                    <Link href="https://www.odinschool.com/resources">
                      Free Resources
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-xl font-bold mb-2">Explore More</h2>
                <p className="text-gray-600 mb-4">
                  While you wait, check out our courses and other resources to continue your learning journey.
                </p>
                <div className="flex justify-center">
                  <Button variant="outline" asChild>
                    <Link href="https://www.odinschool.com/courses">
                      Browse Courses
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="flex items-center" asChild>
                <Link href="/">
                  <Home className="mr-2 h-4 w-4" />
                  Return to Home
                </Link>
              </Button>
              <Button variant="outline" className="flex items-center" asChild>
                <Link href="https://www.odinschool.com/webinars">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Upcoming Webinars
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ThankYou;
