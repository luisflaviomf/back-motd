import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ButtonPanel from './components/ButtonPanel';
import Footer from './components/Footer';
import ServerPortal from './components/ServerPortal';

const App: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="min-h-screen bg-graphite-gray text-white font-sans flex flex-col">
            <Header isMenuOpen={isMenuOpen} onMenuToggle={handleMenuToggle} />
            
            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-graphite-gray z-30 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden pt-24`}>
                 <div className="h-full overflow-y-auto px-4 pb-24">
                    <div className="space-y-4">
                        <ServerPortal />
                        <ButtonPanel />
                    </div>
                 </div>
            </div>

            <main className={`flex-grow transition-opacity duration-300 ${isMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                <Hero />
                <div className="hidden md:block">
                  <ServerPortal />
                  <ButtonPanel />
                </div>
            </main>
            
            <div className={`transition-opacity duration-300 ${isMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                <Footer />
            </div>
        </div>
    );
};

export default App;