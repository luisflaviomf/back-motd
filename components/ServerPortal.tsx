import React from 'react';
import { SERVERS } from '../constants';
import { type Server } from '../types';

const ServerCard: React.FC<{ server: Server }> = ({ server }) => {
    const isOnline = !server.players.startsWith('0/');

    const handleConnect = () => {
        window.location.href = `steam://connect/${server.ip}`;
    };

    const cardStyle = server.imageUrl ? { backgroundImage: `url(${server.imageUrl})` } : {};

    return (
        <div
            style={cardStyle}
            className="bg-cover bg-center bg-no-repeat relative border-2 border-blood-red rounded-lg overflow-hidden transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-blood-red/20 hover:-translate-y-1"
        >
            <div className="bg-graphite-gray/90 backdrop-blur-sm p-4 flex flex-col justify-between min-h-[170px]">
                <div>
                    <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-bold text-white">{server.name}</h3>
                        {isOnline ? (
                            <div className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-3 py-1 flex-shrink-0">
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
                                </span>
                                <span className="text-white text-xs font-bold uppercase">Online</span>
                            </div>
                        ) : (
                            <div className="flex items-center gap-2 bg-gray-600/20 border border-gray-500 rounded-full px-3 py-1 flex-shrink-0">
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gray-400"></span>
                                <span className="text-soft-silver text-xs font-bold uppercase">Offline</span>
                            </div>
                        )}
                    </div>
                    {/* Player count and ping are hidden as requested */}
                </div>
                <div className="flex justify-center w-full mt-auto">
                    <button
                        onClick={handleConnect}
                        disabled={!isOnline}
                        className="bg-transparent border-2 border-soft-silver text-soft-silver font-bold py-2 px-8 rounded-md transition-all duration-300 enabled:hover:bg-blood-red enabled:hover:text-white enabled:hover:border-blood-red disabled:opacity-50 disabled:cursor-not-allowed"
                        aria-label={`Conectar ao servidor ${server.name}`}
                    >
                        Conectar
                    </button>
                </div>
            </div>
        </div>
    );
};


const ServerPortal: React.FC = () => {
  return (
    <section id="server-portal" className="py-8 px-4 sm:px-6 lg:px-8 animate-fade-in-section">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-condensed font-bold text-soft-silver text-center mb-8">
          Servidores
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {SERVERS.map(server => (
            <ServerCard key={server.name} server={server} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServerPortal;