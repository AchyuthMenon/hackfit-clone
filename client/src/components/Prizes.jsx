import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Award } from 'lucide-react';

const Prizes = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
      <h2 style={{ fontSize: '3rem', color: 'var(--primary-lime)', marginBottom: '4rem' }}>THE REWARDS</h2>
      
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-end', flexWrap: 'wrap', justifyContent: 'center' }}>
        {/* Silver (2nd Place) */}
        <motion.div whileHover={{ y: -10, boxShadow: '0 0 25px rgba(34, 211, 238, 0.8)' }} className="glass-panel" style={{ padding: '2rem', borderTop: '4px solid var(--primary-cyan)', textAlign: 'center', width: '250px', height: '300px', clipPath: 'polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)', background: 'linear-gradient(45deg, rgba(0,0,0,0.8), rgba(34,211,238,0.1))', boxShadow: '0 0 10px rgba(34, 211, 238, 0.3)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Trophy size={48} color="var(--primary-cyan)" style={{ filter: 'drop-shadow(0 0 10px var(--primary-cyan))', margin: '0 auto 1rem' }} />
          <h3 style={{ color: 'var(--primary-cyan)', letterSpacing: '3px' }}>2ND PRIZE</h3>
          <div style={{ fontSize: '3rem', fontWeight: '900', color: 'var(--text-white)', marginTop: 'auto', letterSpacing: '2px' }} className="text-glow-cyan">₹ 20,000</div>
        </motion.div>

        {/* Gold (1st Place) */}
        <motion.div whileHover={{ y: -10, boxShadow: '0 0 35px rgba(163, 230, 53, 0.9)' }} className="glass-panel" style={{ padding: '3rem 2rem', borderTop: '4px solid var(--primary-lime)', textAlign: 'center', width: '280px', height: '340px', clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)', background: 'linear-gradient(135deg, rgba(0,0,0,0.9), rgba(163, 230, 53, 0.15))', boxShadow: '0 0 15px rgba(163, 230, 53, 0.4)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Trophy size={64} color="var(--primary-lime)" style={{ filter: 'drop-shadow(0 0 15px var(--primary-lime))', margin: '0 auto 1rem' }} />
          <h3 style={{ color: 'var(--primary-lime)', letterSpacing: '4px' }}>1ST PRIZE</h3>
          <div style={{ fontSize: '4rem', fontWeight: '900', color: 'var(--text-white)', marginTop: 'auto', letterSpacing: '3px' }} className="text-glow-lime">₹ 30,000</div>
        </motion.div>

        {/* Bronze (3rd Place) */}
        <motion.div whileHover={{ y: -10, boxShadow: '0 0 25px rgba(234, 179, 8, 0.8)' }} className="glass-panel" style={{ padding: '2rem', borderTop: '4px solid #eab308', textAlign: 'center', width: '250px', height: '280px', clipPath: 'polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)', background: 'linear-gradient(225deg, rgba(0,0,0,0.8), rgba(234, 179, 8, 0.1))', boxShadow: '0 0 10px rgba(234, 179, 8, 0.3)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Trophy size={48} color="#eab308" style={{ filter: 'drop-shadow(0 0 10px #eab308)', margin: '0 auto 1rem' }} />
          <h3 style={{ color: '#eab308', letterSpacing: '3px' }}>3RD PRIZE</h3>
          <div style={{ fontSize: '3rem', fontWeight: '900', color: 'var(--text-white)', marginTop: 'auto', textShadow: '0 0 10px rgba(234, 179, 8, 0.8)', letterSpacing: '2px' }}>₹ 10,000</div>
        </motion.div>
      </div>
    </div>
  );
};

export default Prizes;
