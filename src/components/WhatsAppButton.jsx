import React from 'react';
import { MessageCircle } from 'lucide-react';
import whatsappIcon from '/whatsappIcon.svg'


const WhatsAppButton = () => {
    const phone = import.meta.env.VITE_PHONE;
    const msg = 'Hola Bourder Web, quiero consultar sobre un proyecto';
    const waLink = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;

    return (
        <a 
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50 flex items-center gap-2"
            aria-label="Contactar por WhatsApp"
        >
            <whatsappIcon size={24} />            
        </a>
    );
};

export default WhatsAppButton;