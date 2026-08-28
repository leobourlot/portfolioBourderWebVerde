import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './components/Header';
import Hero from './components/Hero';
import Turnos from './components/Turnos';
import About from './components/About';
import Skills from './components/Skills';
import AIAgents from './components/AIAgents';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { Toaster } from './components/ui/toaster';


function App() {
    return (
        <>
            <Helmet>
                <title>Bourder Web | Desarrollo Web y Software de Turnos para Clubes — Entre Ríos</title>
                <meta name="description" content="Bourder Web: agencia de desarrollo web y creadores de Bourder Turnos, el software de reservas para clubes de pádel, tenis, fútbol y básquet. Webs a medida, agentes de IA y 30 días de prueba gratis en Turnos." />
            </Helmet>
            <div className="min-h-screen ">
                <Header />
                <Hero />
                <Turnos />
                <About />
                <Skills />
                <AIAgents />
                <Portfolio />
                <Contact />
                <Footer />
                <Toaster />
                <WhatsAppButton />
            </div>
        </>
    );
}

export default App;
