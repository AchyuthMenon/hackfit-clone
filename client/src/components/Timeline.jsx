import React from 'react';
import { motion } from 'framer-motion';

const Timeline = () => {
  const schedule = [
    { date: 'MARCH 6', events: [{ time: '10:00 AM', title: 'Registration' }, { time: '02:00 PM', title: 'Inauguration' }, { time: '04:00 PM', title: 'Hacking Starts' }] },
    { date: 'MARCH 7', events: [{ time: '10:00 AM', title: 'Workshop / Talk' }, { time: '03:00 PM', title: 'Judging Round 1' }] },
    { date: 'MARCH 8', events: [{ time: '08:00 AM', title: 'Final Hacking Hour' }, { time: '11:00 AM', title: 'Presentations' }, { time: '03:30 PM', title: 'Closing Ceremony' }] },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '3rem', color: 'var(--primary-cyan)', marginBottom: '3rem' }}>EVENT TIMELINE</h2>
      
      <div style={{ position: 'relative', width: '100%', paddingLeft: '2rem' }}>
        {/* Vertical line representation */}
        <div style={{ position: 'absolute', top: 0, bottom: 0, left: '2rem', width: '2px', backgroundColor: 'var(--primary-cyan)', opacity: 0.5 }}></div>

        {schedule.map((day, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            style={{ marginBottom: '3rem', position: 'relative', zIndex: 10 }}
          >
            <div style={{ position: 'absolute', left: '-2.4rem', top: '0.2rem', width: '1rem', height: '1rem', borderRadius: '50%', backgroundColor: 'var(--primary-lime)', boxShadow: '0 0 10px var(--primary-lime)' }}></div>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--text-white)', marginBottom: '1rem' }}>{day.date}</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {day.events.map((event, eIdx) => (
                <div key={eIdx} className="glass-panel" style={{ padding: '1rem', borderLeft: '4px solid var(--primary-lime)' }}>
                  <div style={{ color: 'var(--primary-cyan)', fontWeight: 'bold' }}>{event.time}</div>
                  <div style={{ color: 'var(--text-gray)' }}>{event.title}</div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
