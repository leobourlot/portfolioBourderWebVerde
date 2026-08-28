import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Target, Linkedin, Instagram } from 'lucide-react';

const About = () => {
    const team = [
        {
            name: 'Leonardo Bourlot',
            role: 'Full-Stack Developer',
            icon: Users,
        },
        {
            name: 'Mariela Derudder',
            role: 'Full-Stack Developer',
            icon: Users,
        },
    ];

    const highlights = [
        {
            icon: Award,
            title: 'Técnicos Universitarios',
            description: 'Formación académica en Desarrollo Web en la Universidad Nacional de Entre Ríos',
        },
        {
            icon: Target,
            title: 'Resultados por rubro',
            description: 'Webs con filtros y paneles de gestión para inmobiliarias, sitios institucionales para empresas de servicios y software propio para clubes deportivos',
        },
    ];

    const redes = [
        {
            icon: Linkedin,
            title: 'Linkedin',
            description: 'Linkedin de Bourder Web',
            link: 'https://www.linkedin.com/in/bourder-web-a9b805397/'
        },
        {
            icon: Instagram,
            title: 'Instagram',
            description: 'Seguinos en nuestro Instagram!',
            link: 'https://www.instagram.com/bourderweb/'
        }
    ]

    return (
        <section id="about" className="py-20 px-4 bg-neutral-300">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="text-gradient">Sobre Nosotros</span>
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        Un equipo chico, con trato directo, que se mete a fondo en cada proyecto en vez de entregar una plantilla más
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {team.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <div className="flex items-center space-x-4 mb-4">
                                <div className="bg-emerald-600 p-3 rounded-full">
                                    <member.icon className="text-white" size={28} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-800">{member.name}</h3>
                                    <p className="text-emerald-700 font-medium">{member.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                    {highlights.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="flex items-start space-x-4 p-6 bg-slate-50 rounded-xl hover:bg-emerald-50 transition-colors "
                        >
                            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-3 rounded-lg">
                                <item.icon className="text-white" size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h3>
                                <p className="text-slate-600">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {redes.map((item, index) => (
                        <motion.a
                            key={item.title}
                            href={item.link}
                            target='_blank'
                            rel='noopener noreferrer'
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="flex items-start space-x-4 p-6 bg-slate-50 rounded-xl hover:bg-emerald-50 transition-colors"
                        >
                            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-3 rounded-lg">
                                <item.icon className="text-white" size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h3>
                                <p className="text-slate-600">{item.description}</p>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
