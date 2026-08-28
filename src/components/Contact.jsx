import { useState } from 'react';
import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Mail, MessageCircle, MessageSquare, Send } from 'lucide-react';
import { Button } from './ui/button';
import { useToast } from './ui/use-toast';
import * as emailjs from '@emailjs/browser';

const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        asunto: '',
        message: ''
    });

    const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(false);

    const { toast } = useToast();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus('');

        try {
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

            if (!serviceId || !templateId || !publicKey) {
                throw new Error('Faltan las credenciales de EmailJS');
            }

            const templateParams = {
                name: formData.name,
                email: formData.email,
                asunto: formData.asunto,
                message: formData.message,
                // to_name: 'Destinatario', // Opcional
            };

            const response = await emailjs.send(
                serviceId,
                templateId,
                templateParams,
                publicKey
            );

            if (response.status === 200) {
                toast({
                    title: "¡Mensaje enviado!",
                    description: "Te responderemos pronto.",
                });
                // CORREGIDO: Resetear TODOS los campos del formulario
                setFormData({
                    name: '',
                    email: '',
                    asunto: '',
                    message: ''
                });
            }
        } catch (error) {
            console.error('Error al enviar email:', error);
            toast({
                title: "Error",
                description: "No se pudo enviar el mensaje. Por favor intenta nuevamente.",
                variant: "destructive"
            });
        } finally {
            setLoading(false);
        }
    };

    const phone = import.meta.env.VITE_PHONE; // sin +, sin espacios
    const msg = 'Hola Bourder Web, quiero consultar sobre un proyecto';
    const waLink = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;


    // emailjs.sendForm(
    //     'service_0vcl68h',
    //     'YOUR_TEMPLATE_ID',
    //     e.target,
    //     'YOUR_PUBLIC_KEY'
    // )
    //     .then(() => {
    //         toast({
    //             title: "¡Mensaje enviado!",
    //             description: "Te responderemos pronto.",
    //         });
    //         e.target.reset();
    //     })
    //     .catch(() => {
    //         toast({
    //             title: "Error",
    //             description: "No se pudo enviar el mensaje.",
    //             variant: "destructive"
    //         });
    //     });
    //     };

    return (
        <section id="contact" className="py-20 px-4 bg-neutral-300">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="text-gradient">Trabajemos Juntos</span>
                    </h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Contanos qué necesitás -una web, un agente de IA o probar Bourder Turnos en tu club- y te respondemos en menos de 24hs
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">
                                    Nombre
                                </label>
                                <input
                                    type="text"
                                    name='name'
                                    className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-emerald-500 focus:outline-none transition-colors"
                                    placeholder="Tu nombre"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name='email'
                                    className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-emerald-500 focus:outline-none transition-colors"
                                    placeholder="tu@email.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                Asunto
                            </label>
                            <input
                                type="text"
                                name='asunto'
                                className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-emerald-500 focus:outline-none transition-colors"
                                placeholder="¿En qué podemos ayudarte?"
                                value={formData.asunto}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                Mensaje
                            </label>
                            <textarea
                                rows={6}
                                name='message'
                                className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-emerald-500 focus:outline-none transition-colors resize-none"
                                placeholder="Cuéntanos sobre tu proyecto..."
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <Button
                            type="submit"
                            size="lg"
                            className="w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                            disabled={loading}
                        >
                            <Send className="mr-2" size={20} />
                            {loading ? 'Enviando...' : 'Enviar Mensaje'}
                        </Button>
                    </form>

                    <div className="mt-8 pt-8 border-t border-slate-200">
                        <div className="flex flex-wrap justify-center gap-6">
                            <div className="flex items-center space-x-2 text-slate-600">
                                <Mail className="text-emerald-600" size={20} />
                                <span className="font-medium">contacto@bourderweb.com</span>
                            </div>
                            <div className="flex items-center space-x-2 text-slate-600">
                                <MessageSquare className="text-emerald-600" size={20} />
                                <span className="font-medium">Respuesta en 24hs</span>
                            </div>
                            <a href="https://www.instagram.com/bourderweb/" target='_blank' rel='noopener noreferrer'>
                                <div className="flex items-center space-x-2 text-slate-600">
                                    <Instagram className="text-emerald-600" size={20} />
                                    <span className="font-medium">Instagram</span>
                                </div>
                            </a>
                            <a href={waLink} target="_blank" rel="noopener noreferrer">
                                <div className="flex items-center space-x-2 text-slate-600">
                                    <MessageCircle className="text-emerald-600" size={20} />
                                    <span className="font-medium">WhatsApp</span>
                                </div>
                            </a>

                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Contact;