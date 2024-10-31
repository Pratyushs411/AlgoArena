import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/topbar/topbar'; // Make sure the Navbar is correctly imported
import Footer from '@/components/footer/footer'; // Importing Footer component
import styles from './about.module.css';
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
const gifs = [
  { src: '/meta.gif', alt: 'Meta', duration: 3800 },     // duration in ms (3 seconds)
  { src: '/apple.gif', alt: 'Apple', duration: 3000 },
  { src: '/amazon.gif', alt: 'Amazon', duration: 3000 },
  { src: '/netflix.gif', alt: 'Netflix', duration: 3000 },
  { src: '/google.gif', alt: 'Google', duration: 1800 },
];
const AboutPage: React.FC = () => {
  const [currentGifIndex, setCurrentGifIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  useEffect(() => {
    const fadeOutDuration = 500;
    const currentGifDuration = gifs[currentGifIndex].duration - fadeOutDuration;

    const fadeTimer = setTimeout(() => setIsFading(true), currentGifDuration);
    const gifTimer = setTimeout(() => {
      setIsFading(false);
      setCurrentGifIndex((prevIndex) => (prevIndex + 1) % gifs.length);
    }, gifs[currentGifIndex].duration);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(gifTimer);
    };
  }, [currentGifIndex]);
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />
      <section className="container mx-auto px-6 py-8 flex  justify-between mt-4">
        {/* Left side - Our Mission Text */}
        <div className="w-1/2">
          <h1 className="text-4xl font-bold text-turquoise mb-6">About Us</h1>
          <p className="text-gray-600 text-lg leading-relaxed text-justify">
          Welcome to AlgoArena, a dynamic and inclusive coding platform built to fuel your passion for programming, hone your skills, and connect you with a vibrant community of learners. AlgoArena is the right place for anybody who wants to start with the world of programming and software development. AlgoArena will provide you with structured content with ample practice problems to solidify your knowledge. Our team is committed to keeping AlgoArena at the forefront of coding education and career development. We regularly update our content, features, and community resources to reflect the latest industry trends and standards.
          </p>
        </div>

        {/* Right side - Image */}
        <div className="w-1/2 flex justify-end rounded-lg">
          <Image
            src="/code1.gif"  // Ensure this image is in the public folder
            alt="About Us Image"
            width={450}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>
      <div className="h-1 bg-teal-500 my-16 mx-6 rounded-full" />
      <section className="container mx-auto px-6 py-8 flex  justify-between">
        <div className="w-1/2 flex justify-start">
          <Image
            src="/eg.gif"  // Ensure this image is in the public folder
            alt="About Us Image"
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="w-1/2">
          <h1 className="text-4xl font-bold text-turquoise mb-6">Our Mission</h1>
          <p className="text-gray-600 text-lg leading-relaxed text-justify">
          Our mission is to empower developers at all skill levels by offering an inclusive platform for engaging, real-world coding competitions that foster continuous growth, creativity, and technical excellence. We aim to bring together a global community of coders, creating opportunities to learn, innovate, and collaborate across diverse backgrounds. By providing fair, accessible challenges, we strive to nurture future-ready skills, prepare coders for impactful careers, and inspire a tech landscape that values skill, passion, and potential. Through every contest, we champion diversity, resilience, and a shared commitment to innovation.
          </p>
        </div>

        {/* Right side - Image */}
      
      </section>

      {/* Separator */}
      <div className="h-1 bg-teal-500 my-16 mx-6 rounded-full" />

      {/* Second section - Our Goal */}
      <section className="container mx-auto px-6 py-8 flex items-center justify-between">
        <div className="w-1/2 pl-12">
          <h1 className="text-4xl font-bold text-teal-500 mb-6">Our Goal</h1>
          <p className="text-gray-600 text-lg leading-relaxed text-justify">
          At AlgoArena, our primary goal is to democratize coding education and make it accessible to everyone, regardless of their background or experience level. We strive to create a comprehensive learning environment that fosters growth, creativity, and collaboration among aspiring and experienced developers alike. By offering diverse resources, including coding challenges, interactive tutorials, and community support, we aim to enhance problem-solving skills and technical knowledge. In addition to skill development, we are committed to helping individuals land their dream jobs at leading tech companies. We provide tailored resources such as mock interviews, resume building, and career coaching to bridge the gap between education and industry demands. Our vision is to cultivate a global community where knowledge is shared, innovation thrives, and every member feels empowered to pursue their coding journey with confidence, ultimately achieving their professional aspirations.
          </p>
        </div>
        <div className="container mx-auto px-6 flex items-center justify-end w-1/2">
        <div
        className={`${styles.fadeContainer} ${isFading ? styles.fadeOut : styles.fadeIn} rounded-lg`}
      >
        <Image
        src={gifs[currentGifIndex].src}
        alt={gifs[currentGifIndex].alt}
        width={500}
        height={500}
        className={`rounded-lg shadow-lg flex justify-end ${styles.img}`}
      />
      </div>
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
