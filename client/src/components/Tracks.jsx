import React from 'react';
import { motion } from 'framer-motion';

const Tracks = () => {
  const tracks = [
    { title: 'Bridging the Skill Gap in the Age of AI', description: 'As artificial intelligence reshapes the job market, there is a pressing need for platforms that enable individuals to transition into future-ready careers. Develop innovative, scalable AI-driven solutions that personalize learning pathways, automate real-time skill assessments, and intelligently connect learners seamlessly with evolving industry demands.' },
    { title: 'Sustainable Tech for a Greener Tomorrow', description: 'With global emissions at critical thresholds, developers must find ways to optimize resource usage. Create technologically advanced applications that monitor carbon footprints, optimize renewable energy grids, enforce smart waste management, or incentivize sustainable consumption habits across enterprise applications and consumer dashboards.' },
    { title: 'Open Innovation', description: 'Not all groundbreaking ideas fit neatly into a predefined box. Do you have a wild, paradigm-shifting concept? Build something completely untamed that tackles an obscure or pervasive problem using any combination of hardware, IoT, web3 architectures, or traditional software stacks. The only limit is your technical audacity.' }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', maxWidth: '1000px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '3rem', color: 'var(--text-white)', marginBottom: '3rem' }}>TRACKS & THEMES</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', width: '100%' }}>
        {tracks.map((track, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ scale: 1.02, borderColor: 'var(--primary-cyan)' }}
            className="glass-panel" 
            style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', borderTop: '4px solid var(--primary-cyan)', transition: 'border-color 0.3s' }}
          >
            <h3 style={{ color: 'var(--primary-lime)', fontSize: '1.5rem' }}>{track.title}</h3>
            <p style={{ color: 'var(--text-gray)', lineHeight: '1.6' }}>{track.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Tracks;
