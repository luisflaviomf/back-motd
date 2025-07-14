
import React, { ReactNode } from 'react';
import ChevronDownIcon from './icons/ChevronDownIcon';

interface AccordionItemProps {
  title: string;
  children: ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children, isOpen, onToggle }) => {
  return (
    <div className="border-t-2 border-blood-red/30 first-of-type:border-t-0">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center p-5 text-left text-soft-silver hover:bg-blood-red/20 transition-colors"
      >
        <span className="text-xl font-bold">{title}</span>
        <ChevronDownIcon
          className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <div className="p-5 bg-black/20 text-soft-silver">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
