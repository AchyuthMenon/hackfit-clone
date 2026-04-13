import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', width: '100%' }}>
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        style={{ position: 'relative' }}
      >
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(34,211,238,0.2) 0%, transparent 70%)', filter: 'blur(3xl)', zIndex: -1 }}></div>
        <h1 style={{ fontSize: '6rem', margin: 0, lineHeight: 1 }}>
          <span style={{ color: 'var(--primary-lime)' }} className="text-glow-lime">HACK</span>
          <span style={{ color: 'var(--primary-cyan)' }} className="text-glow-cyan">FIT</span>
          <span style={{ color: 'var(--primary-lime)' }} className="text-glow-lime"> 4.0</span>
        </h1>
        <h2 style={{ fontSize: '1.5rem', marginTop: '1rem', fontFamily: 'var(--font-mono)', letterSpacing: '4px', color: 'var(--text-gray)' }}>
          36 HOUR NATIONAL LEVEL HACKATHON
        </h2>
        <p style={{ marginTop: '0.5rem', fontSize: '1.2rem', fontWeight: 'bold' }}>Code &bull; Collaborate &bull; Compete</p>
      </motion.div>

      <div style={{ display: 'flex', gap: '2rem', marginTop: '4rem' }}>
        <motion.div whileHover={{ scale: 1.05 }} className="glass-panel" style={{ padding: '2rem', textAlign: 'center', minWidth: '200px' }}>
          <div style={{ color: 'var(--text-gray)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>PRIZE POOL</div>
          <div style={{ color: 'var(--primary-lime)', fontSize: '2.5rem', fontWeight: 'bold' }} className="text-glow-lime">₹ 60K</div>
        </motion.div>
        
        <motion.div whileHover={{ scale: 1.05 }} className="glass-panel" style={{ padding: '2rem', textAlign: 'center', minWidth: '200px' }}>
          <div style={{ color: 'var(--text-gray)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>DATES</div>
          <div style={{ color: 'var(--primary-cyan)', fontSize: '2.5rem', fontWeight: 'bold' }} className="text-glow-cyan">6&bull;7&bull;8 MAR</div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
