import React from 'react';
import logo from '/logoBourderVerde.svg'
import { Instagram, MessageCircle } from 'lucide-react';

const Footer = () => {

    const phone = import.meta.env.VITE_PHONE; // sin +, sin espacios
    const msg = 'Hola Bourder Web, quiero consultar sobre un proyecto';
    const waLink = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;

    return (
        <footer className="bg-slate-800 text-white py-12 px-4">
            <div className="container mx-auto">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <img
                            src={logo}
                            alt="Bourder Web Logo"
                            className="h-20 mb-4 rounded-lg"
                        />
                        <p className="text-slate-400">
                            Desarrollo web a medida y software propio para profesionalizar tu negocio.
                        </p>
                    </div>

                    <div>
                        <span className="font-bold text-lg mb-4 block">Servicios</span>
                        <ul className="space-y-2 text-slate-400">
                            <li>
                                <a href="https://info-turnos.bourderweb.com.ar" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
                                    Bourder Turnos (reservas para clubes)
                                </a>
                            </li>
                            <li>Desarrollo Frontend y Backend</li>
                            <li>Diseño Web</li>
                            <li>Agentes de IA</li>
                            <li>Automatizaciones</li>
                            <li>Consultoría Técnica</li>
                        </ul>
                    </div>

                    <div>
                        <span className="font-bold text-lg mb-4 block">Contacto</span>
                        <ul className="space-y-2 text-slate-400">
                            <li>Leonardo Bourlot</li>
                            <li>Mariela Derudder</li>
                            <li>contacto@bourderweb.com</li>
                            <li>
                                <a href="https://www.instagram.com/bourderweb/" target='_blank' rel='noopener noreferrer' className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
                                    <Instagram size={18} />
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a href={waLink} target='_blank' rel='noopener noreferrer' className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
                                    <MessageCircle size={18} />
                                    WhatsApp
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 text-center">
                    <p className="text-slate-400">
                        © {new Date().getFullYear()} Bourder Web — Desarrollo web y software para clubes deportivos.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
