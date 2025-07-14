
import React from 'react';
import { TEXTS } from '../constants';
import XMarkIcon from './icons/XMarkIcon';

interface HeaderProps {
    isMenuOpen: boolean;
    onMenuToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, onMenuToggle }) => {
  return (
    <header className="bg-graphite-gray py-4 px-4 sm:px-6 lg:px-8 shadow-lg sticky top-0 z-40">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex-1 flex justify-center md:justify-start">
            <div className="text-center">
                <h1 className="text-3xl sm:text-4xl font-condensed font-bold text-white drop-shadow-red tracking-wider">
                    {TEXTS.logo}
                </h1>
                <p className="text-soft-silver font-condensed tracking-widest text-sm sm:text-base">
                    {TEXTS.subtitle}
                </p>
            </div>
        </div>
        <div className="md:hidden">
            <button
                onClick={onMenuToggle}
                className="text-soft-silver hover:text-white transition-colors"
                aria-label="Toggle menu"
            >
                {isMenuOpen ? (
                    <XMarkIcon className="h-8 w-8" />
                ) : (
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                )}
            </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
