import React, { useState } from 'react';
import { TEXTS, URLS, SERVER_RULES, USEFUL_COMMANDS, CHANGELOG_ENTRIES } from '../constants';
import Modal from './Modal';
import AccordionItem from './AccordionItem';

type OpenSection = 'commands' | 'changelog' | null;

const ButtonPanel: React.FC = () => {
    const [isRulesModalOpen, setRulesModalOpen] = useState(false);
    const [openSection, setOpenSection] = useState<OpenSection>(null);

    const toggleSection = (section: OpenSection) => {
        setOpenSection(openSection === section ? null : section);
    };

    const buttons = [
        { label: TEXTS.buttons.rules, action: () => setRulesModalOpen(true) },
        { label: TEXTS.buttons.discord, action: () => window.open(URLS.discord, '_blank') },
        { label: TEXTS.buttons.store, action: () => window.open(URLS.store, '_blank') },
        { label: TEXTS.buttons.commands, action: () => toggleSection('commands') },
        { label: TEXTS.buttons.changelog, action: () => toggleSection('changelog') },
    ];

    return (
        <div className="px-4 sm:px-6 lg:px-8 py-8">
            <div className="container mx-auto max-w-4xl">
                <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-4">
                    {buttons.map((button, index) => (
                        <button
                            key={index}
                            onClick={button.action}
                            className="text-center py-3 px-6 bg-graphite-gray/50 border-2 border-blood-red text-soft-silver font-bold uppercase tracking-wider hover:bg-blood-red hover:text-white transition-all duration-300 rounded-md text-base"
                        >
                            {button.label}
                        </button>
                    ))}
                </div>
                <div className="bg-graphite-gray/50 rounded-md overflow-hidden">
                    <AccordionItem
                        title={TEXTS.buttons.commands}
                        isOpen={openSection === 'commands'}
                        onToggle={() => toggleSection('commands')}
                    >
                        <ul className="space-y-3">
                            {USEFUL_COMMANDS.map((cmd, i) => (
                                <li key={i}>
                                    <strong className="text-white">{cmd.command}</strong> - <span className="text-soft-silver/80">{cmd.description}</span>
                                </li>
                            ))}
                        </ul>
                    </AccordionItem>
                    <AccordionItem
                        title={TEXTS.buttons.changelog}
                        isOpen={openSection === 'changelog'}
                        onToggle={() => toggleSection('changelog')}
                    >
                        <div className="space-y-6">
                            {CHANGELOG_ENTRIES.map((entry, i) => (
                                <div key={i}>
                                    <h4 className="font-bold text-white">{entry.version} <span className="font-normal text-soft-silver/80">- {entry.date}</span></h4>
                                    <ul className="list-disc list-inside mt-2 space-y-1 pl-2">
                                        {entry.changes.map((change, j) => <li key={j}>{change}</li>)}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </AccordionItem>
                </div>
            </div>
            
            <Modal isOpen={isRulesModalOpen} onClose={() => setRulesModalOpen(false)} title={TEXTS.modalTitle}>
                 <div className="space-y-4">
                    {SERVER_RULES.map((rule, index) => (
                        <div key={index}>
                            <h3 className="font-bold text-white text-lg">{rule.title}</h3>
                            <p className="text-soft-silver/90">{rule.description}</p>
                        </div>
                    ))}
                </div>
            </Modal>
        </div>
    );
};

export default ButtonPanel;