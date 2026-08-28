import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Palette, Zap } from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Frontend',
            icon: Code,
            color: 'from-emerald-500 to-teal-500',
            skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Astro', 'Angular'],
        },
        {
            title: 'Backend',
            icon: Server,
            color: 'from-teal-500 to-emerald-700',
            skills: ['Node.js', 'Express', 'NestJS'],
        },
        {
            title: 'Diseño',
            icon: Palette,
            color: 'from-green-500 to-emerald-600',
            skills: ['UI/UX', 'Responsive Design', 'Tailwind CSS'],
        },
        {
            title: 'Herramientas',
            icon: Zap,
            color: 'from-emerald-600 to-slate-700',
            skills: ['Git', 'Vite', 'REST APIs', 'Database Design'],
        },
    ];

    return (
        <section id="skills" className="py-20 px-4 bg-neutral-200">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="text-gradient">Nuestras Habilidades</span>
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        Tecnologías y herramientas que dominamos para crear soluciones excepcionales
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                        >
                            <div className={`bg-gradient-to-br ${category.color} p-4 rounded-xl inline-block mb-4`}>
                                <category.icon className="text-white" size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-800 mb-4">{category.title}</h3>
                            <div className="space-y-2">
                                {category.skills.map((skill) => (
                                    <div
                                        key={skill}
                                        className="bg-emerald-50 text-emerald-700 px-3 py-2 rounded-lg text-sm font-medium hover:bg-emerald-100 transition-colors"
                                    >
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
