import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/topbar/topbar'; // Ensure Navbar is correctly imported
import Footer from '@/components/footer/footer'; // Importing Footer component
import styles from './about.module.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

// Team Members Data
const teamMembers = [
  {
    name: 'Pratyush Sharma',
    role: 'Developer/Designer',
    github: 'https://github.com/Pratyushs411',
    linkedin: 'https://www.linkedin.com/in/pratyushsharma411/',
    description: 'Pratyush is a skilled developer and designer who combines technical expertise with creative flair to build engaging and user-friendly websites.',
    photo: '/team/pratyush.jpg', // Ensure this image is in the public/team folder
  },
  {
    name: 'Somil Kumar',
    role: 'Developer/Designer',
    github: 'https://github.com/ksomil2562',
    linkedin: 'https://www.linkedin.com/in/somil-kumar-4307a0258/',
    description: 'Leading Algo Arena development to build a vibrant coding community at Thapar, blending innovation with modern design.',
    photo: '/somill.jpg', // Replace with actual path
  },
  {
    name: 'Dilpreet Singh',
    role: 'Documentation',
    github: '#',
    linkedin: 'https://www.linkedin.com/in/dilpreet-singh-4742031b6/',
    description: 'Dilpreet is a versatile designer and documentation specialist who combines creativity with clarity.',
    photo: '/team/dilpreet.jpg', // Replace with actual path
  },
  {
    name: 'Ruhani Grover',
    role: 'Documentation',
    github: '#',
    linkedin: 'https://www.linkedin.com/in/ruhani-grover-333583245/',
    description: 'Ruhani is a dedicated documentation specialist who excels in creating clear and concise materials.',
    photo: '/team/ruhani.jpg', // Replace with actual path
  },
];

const gifs = [
  { src: '/meta.gif', alt: 'Meta', duration: 3800 },
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
      <Navbar />
      <section className="container mx-auto px-6 py-8 flex justify-between mt-4">
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
            src="/code1.gif"
            alt="About Us Image"
            width={450}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Separator */}
      <div className="h-1 bg-turquoise my-16 mx-6 rounded-full" />

      {/* Our Mission Section */}
      <section className="container mx-auto px-6 py-8 flex justify-between">
        <div className="w-1/2 flex justify-start">
          <Image
            src="/eg.gif"
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
      </section>

      {/* Separator */}
      <div className="h-1 bg-turquoise my-16 mx-6 rounded-full" />

      {/* Our Goal Section */}
      <section className="container mx-auto px-6 py-8 flex items-center justify-between">
        <div className="w-1/2 pl-12">
          <h1 className="text-4xl font-bold text-turquoise mb-6">Our Goal</h1>
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
      <div className="h-1 bg-turquoise my-8 mx-6 rounded-full" />

      {/* Meet the Team Section */}
      <section className="container mx-auto px-6 py-8">
        <h1 className="text-4xl font-bold text-turquoise mb-12 text-center">Meet the Team</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
              <div className="w-32 h-32 bg-gray-200 rounded-full overflow-hidden mb-4">
                <Image
                  src={member.photo}
                  alt={`${member.name}'s photo`}
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                />
              </div>
              <h2 className="text-xl font-semibold text-turquoise">{member.name}</h2>
              <h3 className="text-l text-turquoise mb-2">{member.role}</h3>
              <section className="flex justify-center items-center mb-2">
                <a
                  className="group flex justify-center p-2 mr-2 rounded-md drop-shadow-xl bg-gradient-to-r from-gray-800 to-black text-white font-semibold hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
                  href={member.github}
                >
                  <FaGithub />
                </a>
                <a
                  className="group flex justify-center p-2 rounded-md drop-shadow-xl bg-[#0077b5] from-gray-800 text-white font-semibold hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
                  href={member.linkedin}
                >
                  <FaLinkedin />
                </a>
              </section>
              <p className="text-gray-600 text-center">{member.description}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutPage;
