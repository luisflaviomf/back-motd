
import React from 'react';
import { TEXTS, URLS } from '../constants';
import DiscordIcon from './icons/DiscordIcon';
import YoutubeIcon from './icons/YoutubeIcon';
import InstagramIcon from './icons/InstagramIcon';

const Footer: React.FC = () => {
  const socialLinks = [
    { href: URLS.discord, icon: <DiscordIcon className="h-6 w-6" />, name: 'Discord' },
    { href: URLS.youtube, icon: <YoutubeIcon className="h-6 w-6" />, name: 'YouTube' },
    { href: URLS.instagram, icon: <InstagramIcon className="h-6 w-6" />, name: 'Instagram' },
  ];

  return (
    <footer className="bg-graphite-gray py-6 mt-8 border-t border-soft-silver/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center text-center">
        <p className="text-soft-silver text-sm mb-4 sm:mb-0">
          {TEXTS.footer}
        </p>
        <div className="flex items-center space-x-6">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-soft-silver hover:text-white transition-colors duration-300"
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
