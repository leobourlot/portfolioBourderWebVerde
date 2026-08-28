import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Calendar, MessageCircle, ShoppingCart, HeadphonesIcon, Zap } from 'lucide-react';
import { Button } from './ui/button';

const AIAgents = () => {
    const agents = [
        {
            icon: HeadphonesIcon,
            title: 'Atención al Cliente',
            description:
                'Chats automatizados que responden consultas frecuentes, derivan casos complejos y brindan soporte 24/7 sin intervención humana.',
            color: 'from-emerald-500 to-teal-500',
            tags: ['24/7', 'Atención al cliente'],
        },
        {
            icon: Calendar,
            title: 'Reserva de Turnos',
            description:
                'La base de Bourder Turnos: agentes que gestionan agendas, confirman disponibilidad, envían recordatorios y cancelan turnos de forma autónoma.',
            color: 'from-teal-500 to-emerald-700',
            tags: ['Agenda inteligente', 'Recordatorios', 'Integración calendario'],
        },
        {
            icon: ShoppingCart,
            title: 'Asistente de Ventas',
            description:
                'Bots que guían al usuario en el proceso de compra, responden dudas sobre productos y ayudan a cerrar ventas en tiempo real.',
            color: 'from-green-500 to-emerald-600',
            tags: ['E-commerce'],
        },
        {
            icon: MessageCircle,
            title: 'WhatsApp & Redes',
            description:
                'Automatización de conversaciones en WhatsApp, Instagram y otras plataformas para captar clientes y responder mensajes al instante.',
            color: 'from-emerald-600 to-green-600',
            tags: ['WhatsApp', 'Instagram', 'Captación de clientes'],
        },
    ];

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="ai-agents" className="py-20 px-4 bg-neutral-300">
            <div className="container mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-6"
                >
                    <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full mb-6">
                        <Bot size={18} />
                        <span className="text-sm font-semibold">Inteligencia Artificial Aplicada</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="text-gradient">Agentes de IA</span>
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        Automatizamos la atención y los procesos de tu negocio con agentes conversacionales inteligentes, disponibles las 24 horas, los 7 días de la semana, para mejorar la experiencia de tus clientes y aumentar tus ventas.
                    </p>
                </motion.div>

                {/* Cards */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {agents.map((agent, index) => (
                        <motion.div
                            key={agent.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group"
                        >
                            <div className={`bg-gradient-to-br ${agent.color} p-4 rounded-xl inline-block mb-5`}>
                                <agent.icon className="text-white" size={32} />
                            </div>

                            <h3 className="text-2xl font-bold text-slate-800 mb-3">{agent.title}</h3>
                            <p className="text-slate-600 leading-relaxed mb-5">{agent.description}</p>

                            <div className="flex flex-wrap gap-2">
                                {agent.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA banner */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="bg-gradient-to-r from-emerald-700 to-teal-800 rounded-2xl p-10 text-center text-white shadow-xl"
                >
                    <Zap className="mx-auto mb-4 opacity-90" size={40} />
                    <h3 className="text-3xl font-bold mb-3">¿Querés automatizar tu negocio?</h3>
                    <p className="text-lg opacity-90 mb-6 max-w-xl mx-auto">
                        Contanos tu idea y diseñamos el agente de IA perfecto para tu empresa, adaptado a tus necesidades y canales de comunicación.
                    </p>
                    <Button
                        onClick={() => scrollToSection('contact')}
                        size="lg"
                        className="bg-white text-emerald-700 hover:bg-emerald-50 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                        <MessageCircle className="mr-2" size={20} />
                        Consultar ahora
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};

export default AIAgents;
