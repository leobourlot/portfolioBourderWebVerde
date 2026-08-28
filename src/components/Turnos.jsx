import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle2, MessageCircle, ExternalLink, PhoneOff, ClipboardX, Clock } from 'lucide-react';
import { Button } from './ui/button';
import turnosImg from '/turnosCaptura.webp'

const Turnos = () => {
    const dolores = [
        {
            icon: ClipboardX,
            text: 'Dejá de anotar turnos en un cuaderno o planillas que se pierden en el mostrador.',
        },
        {
            icon: PhoneOff,
            text: 'Vos dejás de contestar el teléfono: tus jugadores reservan solos, cuando quieren.',
        },
        {
            icon: Clock,
            text: 'Disponibilidad de canchas en tiempo real, las 24 horas, sin depender de nadie.',
        },
    ];

    const phone = import.meta.env?.VITE_PHONE;
    const msg = 'Hola Bourder Web, quiero automatizar las reservas de mi club';
    const waLink = phone ? `https://wa.me/${phone}?text=${encodeURIComponent(msg)}` : 'https://info-turnos.bourderweb.com.ar';

    return (
        <section id="turnos" className="py-20 px-4 bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 text-white">
            <div className="container mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full">
                            <Calendar size={18} />
                            <span className="text-sm font-semibold">Nuestro producto propio</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                            Bourder Turnos
                        </h2>
                        <p className="text-xl text-emerald-50/90">
                            El software de reservas para clubes de pádel, tenis, fútbol, básquet y vóley. Tu club, con tu propia web de turnos, funcionando sola.
                        </p>

                        <ul className="space-y-4">
                            {dolores.map((item) => (
                                <li key={item.text} className="flex items-start gap-3">
                                    <item.icon className="text-emerald-300 mt-0.5 flex-shrink-0" size={22} />
                                    <span className="text-emerald-50/95">{item.text}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-wrap items-center gap-4 pt-2">
                            <div className="bg-white/10 border border-white/20 rounded-xl px-5 py-3">
                                <div className="text-2xl font-bold">Desde $50.000/mes</div>
                                <div className="text-sm text-emerald-100/80">30 días de prueba gratis, sin tarjeta</div>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-2">
                            <Button
                                onClick={() => window.open('https://info-turnos.bourderweb.com.ar', '_blank')}
                                size="lg"
                                className="bg-white text-emerald-800 hover:bg-emerald-50 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                Ver planes y precios
                                <ExternalLink className="ml-2" size={18} />
                            </Button>
                            <Button
                                onClick={() => window.open(waLink, '_blank')}
                                size="lg"
                                variant="outline"
                                className="bg-green-600 border-2 border-white/70 text-white hover:bg-white/10
                                "
                            >
                                <MessageCircle className="mr-2" size={20} />
                                Coordinar alta por WhatsApp
                            </Button>
                        </div>
                        <p className="text-xs text-emerald-100/70">El alta y la carga inicial de canchas se coordinan por WhatsApp con nuestro equipo — sin vueltas, en el mismo día.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                            <img
                                src={turnosImg}
                                alt="Bourder Turnos - Plataforma de reserva de canchas"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        <div className="flex items-center gap-2 mt-4 text-emerald-100/80 text-sm">
                            <CheckCircle2 size={16} className="text-emerald-300" />
                            Sitio propio con la marca de tu club, sin marketplace de por medio.
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Turnos;
