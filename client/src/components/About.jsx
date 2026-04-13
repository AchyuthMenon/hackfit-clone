import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '4rem', flexWrap: 'wrap' }}>
      <div style={{ flex: 1, minWidth: '300px' }}>
        <h2 style={{ fontSize: '4rem', color: 'transparent', WebkitTextStroke: '1px var(--text-gray)', opacity: 0.5, margin: 0 }}>ABOUT HACKFIT</h2>
        <h3 style={{ fontSize: '2rem', color: 'var(--primary-lime)', margin: '1rem 0' }}>Build bold. Sleep later.</h3>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color: 'var(--text-gray)' }}>
          HackFit is a national-level hackathon organized by the Department of Computer Science and Engineering, FISAT, in collaboration with FISAT Horizon Club, ACM Student Chapter FISAT, and FISAT Free Software Cell.
        </p>
      </div>
      
      <motion.div 
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="glass-panel" 
        style={{ flex: 1, minWidth: '300px', padding: '1rem', fontFamily: 'var(--font-mono)' }}
      >
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ef4444' }}></div>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#eab308' }}></div>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#22c55e' }}></div>
        </div>
        <div style={{ color: '#22c55e', marginBottom: '0.5rem' }}>[ OK ] Booting HackFit sequence...</div>
        <div style={{ color: '#22c55e', marginBottom: '0.5rem' }}>[ OK ] Loading dependencies...</div>
        <div style={{ color: 'var(--text-gray)', marginBottom: '0.5rem' }}>&gt; Initializing systems...</div>
        <div style={{ width: '100%', height: '4px', backgroundColor: '#333', marginTop: '1rem' }}>
          <motion.div 
            initial={{ width: 0 }} 
            whileInView={{ width: '100%' }} 
            transition={{ duration: 2 }}
            style={{ height: '100%', backgroundColor: 'var(--primary-lime)' }}
          ></motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
