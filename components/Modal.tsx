
import React from 'react';
import XMarkIcon from './icons/XMarkIcon';
import { TEXTS } from '../constants';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4 transition-opacity"
      onClick={onClose}
    >
      <div
        className="bg-graphite-gray border-2 border-blood-red rounded-lg shadow-xl w-full max-w-2xl max-h-[80vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex justify-between items-center p-4 border-b border-soft-silver/20">
          <h2 className="text-xl font-bold text-soft-silver">{title}</h2>
          <button onClick={onClose} className="text-soft-silver hover:text-white">
            <XMarkIcon className="w-6 h-6" />
          </button>
        </header>
        <main className="p-6 overflow-y-auto">
          {children}
        </main>
        <footer className="p-4 border-t border-soft-silver/20 text-right">
            <button 
                onClick={onClose}
                className="bg-blood-red text-white font-bold py-2 px-6 rounded-md hover:bg-opacity-80 transition-all"
            >
                {TEXTS.close}
            </button>
        </footer>
      </div>
    </div>
  );
};

export default Modal;
