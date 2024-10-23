import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/topbar/topbar'; // Make sure the Navbar is correctly imported
import Footer from '@/components/footer/footer'; // Importing Footer component

// Team Members Data
const teamMembers = [
  {
    name: 'Pratyush Sharma',
    description: 'Pratyush is an innovative interior designer who excels at transforming spaces into personalized havens. His attention to detail and commitment to quality are unmatched.',
  },
  {
    name: 'Somil Kumar',
    description: 'Somil is a visionary architect with over a decade of experience in creating stunning residential spaces. His passion lies in blending functionality with aesthetics.',
  },
  {
    name: 'Dilpreet Singh',
    description: 'Dilpreet is a seasoned realtor with a deep understanding of the local market. He is dedicated to finding clients their dream homes while ensuring a smooth buying experience.',
  },
  {
    name: 'Ruhani Grover',
    description: 'Ruhani is a talented project manager who brings designs to life. Her organizational skills and keen eye for design help in delivering projects on time and within budget.',
  },
];

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <section className="container mx-auto px-6 py-16 flex items-center justify-between">
        {/* Left side - Our Mission Text */}
        <div className="w-1/2">
          <h1 className="text-4xl font-bold text-teal-500 mb-6">Our Mission</h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Hackney started as a small interior design firm in downtown Michigan, aiming to help 
            home buyers make do with the new space that they had acquired. It soon became obvious 
            that it would make sense to help our clients see beyond the walls and floor plans, and 
            be there with them from the get-go.
          </p>
        </div>

        {/* Right side - Image */}
        <div className="w-1/2 flex justify-end">
          <Image 
            src="/quote.png"  // Ensure this image is in the public folder
            alt="About Us Image"
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Separator */}
      <div className="h-1 bg-teal-500 my-16 mx-6 rounded-full" />

      {/* Second section - Our Goal */}
      <section className="container mx-auto px-6 py-16 flex items-center justify-between">
        {/* Left side - Image */}
        <div className="w-1/2 flex justify-start">
          <Image 
            src="/hero.png"  // Ensure you have an image for this as well in the public folder
            alt="Our Goal Image"
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right side - Our Goal Text */}
        <div className="w-1/2 pl-12">
          <h1 className="text-4xl font-bold text-teal-500 mb-6">Our Goal</h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our goal is to ensure that every client we work with finds a space that truly feels like home. 
            We strive to create designs and solutions that not only meet their immediate needs but are also 
            adaptable for the future.
          </p>
        </div>
      </section>

      {/* Separator */}
      <div className="h-1 bg-teal-500 my-16 mx-6 rounded-full" />

      {/* Meet the Team Section */}
      <section className="container mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-teal-500 mb-8 text-center">Meet the Team</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
              <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                <span className="text-gray-400">Photo</span>
              </div>
              <h2 className="text-xl font-semibold text-teal-500 mb-2">{member.name}</h2>
              <p className="text-gray-600 text-center">{member.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutPage;
