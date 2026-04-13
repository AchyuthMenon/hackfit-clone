import React, { useState } from 'react';
import { motion } from 'framer-motion';
import RegistrationModal from './RegistrationModal';

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <nav style={{ position: 'fixed', top: 0, width: '100%', zIndex: 50, background: 'linear-gradient(to bottom, rgba(0,0,0,0.9), transparent)', padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ color: 'var(--primary-lime)', fontSize: '2rem', fontWeight: 'bold', fontFamily: 'var(--font-heading)' }}>
        HACKFIT
      </div>
      <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
        {['HOME', 'ABOUT', 'SCHEDULE', 'PRIZES', 'TRACKS', 'FAQ', 'CONTACT'].map((item) => (
          <li key={item}>
            <a href={`#${item.toLowerCase()}`} style={{ color: 'var(--text-white)', fontWeight: 'bold', transition: '0.3s' }}
               onMouseOver={(e) => { e.target.style.color = '#000'; e.target.style.backgroundColor = 'var(--primary-lime)'; e.target.style.padding = '0.2rem 0.5rem'; e.target.style.borderRadius = '4px'; }}
               onMouseOut={(e) => { e.target.style.color = 'var(--text-white)'; e.target.style.backgroundColor = 'transparent'; e.target.style.padding = '0'; }}>
              {item}
            </a>
          </li>
        ))}
      </ul>
      <button 
        onClick={() => setIsModalOpen(true)}
        style={{ background: 'transparent', border: '2px solid var(--primary-lime)', color: 'var(--primary-lime)', padding: '0.5rem 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', transition: '0.3s' }}
        onMouseOver={(e) => { e.target.style.boxShadow = '0 0 10px var(--primary-lime)'; }}
        onMouseOut={(e) => { e.target.style.boxShadow = 'none'; }}>
        REGISTER NOW <span style={{ transform: 'rotate(45deg)' }}>↗</span>
      </button>
      <RegistrationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </nav>
  );
};

export default Navbar;
