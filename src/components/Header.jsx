import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import logo from '/logoBourderVerde.svg'

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    const navItems = [
        { label: 'Inicio', id: 'hero' },
        { label: 'Nosotros', id: 'about' },
        { label: 'Habilidades', id: 'skills' },
        { label: 'Agentes IA', id: 'ai-agents' },
        { label: 'Portfolio', id: 'portfolio' },
        { label: 'Contacto', id: 'contact' },
    ];

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
                }`}
        >
            <nav className="container mx-auto px-2 py-2">
                <div className="flex items-center justify-between">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center space-x-3 cursor-pointer"
                        onClick={() => scrollToSection('hero')}
                    >
                        <img
                            src={logo}
                            alt="Bourder Web Logo"
                            className="h-16 w-auto rounded-lg"
                        />
                    </motion.div>

                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className="text-slate-700 hover:text-emerald-700 font-medium transition-colors duration-200 relative group"
                            >
                                {item.label}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-300"></span>
                            </button>
                        ))}
                        <button
                            onClick={() => scrollToSection('turnos')}
                            className="inline-flex items-center gap-1 bg-emerald-600 text-white px-4 py-2 rounded-full font-semibold text-sm hover:bg-emerald-700 shadow-md hover:shadow-lg transition-all duration-200"
                        >
                            Bourder Turnos
                            <ArrowUpRight size={16} />
                        </button>
                    </div>

                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden text-slate-700 hover:text-emerald-700 transition-colors"
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden mt-4 pb-4 space-y-3"
                    >
                        <button
                            onClick={() => scrollToSection('turnos')}
                            className="block w-full text-left px-4 py-2 bg-emerald-600 text-white font-semibold rounded-lg"
                        >
                            Bourder Turnos — Software para tu club
                        </button>
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-colors"
                            >
                                {item.label}
                            </button>
                        ))}
                    </motion.div>
                )}
            </nav>
        </motion.header>
    );
};

export default Header;
