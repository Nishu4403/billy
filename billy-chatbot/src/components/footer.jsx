import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-[#d1e0f0] text-black py-4 text-center mt-auto">
      <div className="container mx-auto">
        <p>&copy; 2024 Your Website. All rights reserved.</p>
        <p className="flex justify-center items-center space-x-4">
          <a href="https://twitter.com/cyberdost" target="_blank" rel="noopener noreferrer" className="hover:underline">
            <FontAwesomeIcon icon={faTwitter} className="ml-2" />
          </a>
          <a href="https://facebook.com/CyberDostI4C" target="_blank" rel="noopener noreferrer" className="hover:underline">
            <FontAwesomeIcon icon={faFacebook} className="ml-2" />
          </a>
          <a href="https://www.instagram.com/cyberdosti4c/" target="_blank" rel="noopener noreferrer" className="hover:underline">
            <FontAwesomeIcon icon={faInstagram} className="ml-2" />
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
