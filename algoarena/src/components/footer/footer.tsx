import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Navigation Links */}
          <div className="mb-6 md:mb-0">
            <h3 className="font-bold text-lg mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/home1" className="hover:text-teal-500">
                  About
                </Link>
              </li>
              <li>
                <Link href="/home2" className="hover:text-teal-500">
                  Problems
                </Link>
              </li>
              <li>
                <Link href="/home3" className="hover:text-teal-500">
                  Contest
                </Link>
              </li>
              <li>
                <Link href="/home4" className="hover:text-teal-500">
                  Discuss
                </Link>
              </li>
              <li>
                <Link href="/home5" className="hover:text-teal-500">
                  Profile
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="mb-6 md:mb-0">
            <h3 className="font-bold text-lg mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-teal-500">
                <Image src="" alt="Facebook" width={24} height={24} />
              </Link>
              <Link href="#" className="hover:text-teal-500">
                <Image src="" alt="Twitter" width={24} height={24} />
              </Link>
              <Link href="#" className="hover:text-teal-500">
                <Image src="" alt="Instagram" width={24} height={24} />
              </Link>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-bold text-lg mb-2">Contact Us</h3>
            <p>Thapar Institute of Engineering & Technology</p>
            <p>Bhadson Rd, Adarsh Nagar, Prem Nagar</p>
            <p>Patiala, Punjab 147004</p>
            <p>Email: contact@algoarena.com</p>
            <p>Phone: +91 7838610837</p>
          </div>
        </div>
      </div>
      {/* Copyright Notice */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} AlgoArena. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
