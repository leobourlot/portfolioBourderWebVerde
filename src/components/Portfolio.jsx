import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';
import { Button } from './ui/button';
import dtgas from '/dtgasCaptura.webp'

const Portfolio = () => {
    const projects = [
        {
            title: 'Pertusatti | Sabalette - Abogadas',
            url: 'https://persaestudiojuridico.com.ar',
            description: 'Web del estudio jurídico, con sistema para base de datos de clientes, donde los mismos pueden ver el avance de sus causas.',
            image: '/persaestudio.webp',
            tags: ['Abogado', 'Estudio Jurídico', 'Clientes'],
        },
        {
            title: 'Club de Pádel y Tenis — reservas online',
            url: 'prueba1-turnos.bourderweb.com.ar',
            description: 'Implementación real de Bourder Turnos: reserva de canchas 24hs, gestión de usuarios y horarios sin planillas ni llamados, para un club de pádel y tenis.',
            image: '/turnosCaptura.webp',
            tags: ['Turnos', 'Padel', 'Tenis', 'Canchas'],
        },
        {
            title: 'Gaston Verde - Negocios inmobiliarios',
            url: 'gastonverdeinmobiliaria.com.ar',
            description: 'Sitio inmobiliario con filtro de propiedades por zona, precio y tipo, más panel de gestión para que el equipo actualice el catálogo sin depender de un programador.',
            image: '/gastonVerdeCaptura.jpeg',
            tags: ['Inmobiliaria', 'Alquiler', 'Venta'],
        },
        {
            title: 'DT Gas',
            url: 'www.dtgas.cl',
            description: 'Plataforma institucional para una empresa de servicios de gas en Chile, pensada para transmitir confianza a clientes corporativos.',
            image: '/dtgasCaptura.webp',
            tags: ['Web App', 'Servicios', 'Chile'],
        },

    ];

    return (
        <section id="portfolio" className="py-20 px-4 bg-neutral-200">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="text-gradient">Nuestro Portfolio</span>
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        Proyectos reales, por rubro, con resultados concretos para cada cliente
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="bg-gradient-to-br from-slate-50 to-emerald-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
                        >
                            <div className="relative w-auto h-auto overflow-hidden bg-gradient-to-br from-emerald-100 to-teal-200">
                                <img
                                    className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
                                    alt={`Screenshot of ${project.title}`}
                                    src={project.image} />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <Button
                                        onClick={() => window.open(`https://${project.url}`, '_blank')}
                                        className="bg-white text-emerald-700 hover:bg-emerald-50"
                                    >
                                        <ExternalLink className="mr-2" size={18} />
                                        Visitar Sitio
                                    </Button>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="text-2xl font-bold text-slate-800">{project.title}</h3>
                                    <Code className="text-emerald-600" size={24} />
                                </div>

                                <p className="text-slate-600 mb-4 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <a
                                    href={`https://${project.url}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-emerald-700 hover:text-emerald-800 font-medium inline-flex items-center group/link"
                                >
                                    {project.url}
                                    <ExternalLink className="ml-2 group-hover/link:translate-x-1 transition-transform" size={16} />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
