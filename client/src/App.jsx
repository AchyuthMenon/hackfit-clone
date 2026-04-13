import React, { useEffect, useRef } from 'react';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import Prizes from './components/Prizes';
import Tracks from './components/Tracks';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

function App() {
  const vantaRef = useRef(null);

  useEffect(() => {
    let vantaEffect;
    if (window.VANTA) {
      vantaEffect = window.VANTA.NET({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x22D3EE,
        backgroundColor: 0x000000,
        points: 10.00,
        maxDistance: 20.00,
        spacing: 18.00
      });
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return (
    <div className="app-container" ref={vantaRef} style={{ minHeight: '100vh', width: '100vw', position: 'relative' }}>
      <Toaster position="top-center" toastOptions={{ style: { background: '#111', color: '#fff', border: '1px solid var(--primary-lime)' } }} />
      <div className="bg-scanlines"></div>
      <Navbar />
      <main>
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="schedule"><Timeline /></section>
        <section id="prizes"><Prizes /></section>
        <section id="tracks"><Tracks /></section>
        <section id="faq"><FAQ /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
