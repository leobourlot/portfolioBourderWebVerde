import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Sparkles, PenTool, Calendar } from 'lucide-react';
import { Button } from './ui/button';
import logo from '/logoBourderVerde.svg'

const Hero = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-4 pb-8 bg-gradient-to-br from-neutral-400 via-neutral-100 to-neutral-50">
            <div className="container mx-auto ">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <div className="flex gap-3 flex-wrap">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full"
                            >
                                <PenTool size={18} />
                                <span className="text-sm font-semibold">Webs que consiguen clientes</span>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.25 }}
                                className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full"
                            >
                                <Calendar size={18} />
                                <span className="text-sm font-semibold">Bourder Turnos: software para tu club</span>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full"
                            >
                                <Sparkles size={18} />
                                <span className="text-sm font-semibold">Agentes de IA para automatizar</span>
                            </motion.div>
                        </div>

                        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                            <span className="text-gradient">BOURDER WEB</span>
                            <br />
                            <span className="text-slate-800">Tu web y tu software, hechos para que vendas más</span>
                        </h1>

                        <p className="text-xl text-slate-600 leading-relaxed">
                            Somos Leonardo Bourlot y Mariela Derudder, Técnicos Universitarios en Desarrollo Web. Diseñamos sitios que convierten visitas en clientes y creamos software propio a medida — como <strong className="text-emerald-700">Bourder Turnos</strong>, nuestra plataforma de reservas para clubes de pádel, tenis, fútbol y básquet.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Button
                                onClick={() => scrollToSection('turnos')}
                                size="lg"
                                className="bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-700 hover:to-green-800 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <Calendar className="mr-2" size={20} />
                                Conocer Bourder Turnos
                            </Button>
                            <Button
                                onClick={() => scrollToSection('portfolio')}
                                variant="outline"
                                size="lg"
                                className="border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-600 hover:text-emerald-50"
                            >
                                <Code2 className="mr-2" size={20} />
                                Ver Proyectos
                            </Button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative"
                    >
                        <div className="relative z-10">
                            <img
                                src={logo}
                                alt="Bourder Web - Desarrollo Web Profesional"
                                className="w-full max-w-md mx-auto drop-shadow-2xl rounded-2xl"
                            />
                        </div>
                        {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-emerald-300 to-teal-400 rounded-full blur-3xl opacity-40 animate-pulse"></div> */}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
