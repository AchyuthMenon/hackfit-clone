import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
  const faqs = [
    { question: 'Who can register for HackFit 2026?', answer: 'HackFit is open exclusively to undergraduate and postgraduate students currently enrolled in recognized colleges or universities. Participants must carry a valid student ID. Mixed teams across different colleges are welcome, provided all members are eligible students and ready to build on-site.' },
    { question: 'What tracks are in the 2026 edition?', answer: 'Tracks are given in the tracks section' },
    { question: 'How large can each squad be?', answer: 'Teams can have two to five members.' },
    { question: 'What support is available on-site?', answer: '24/7 mentor pods, food and refreshments, sleep bays, and power buffers are available.' },
    { question: 'How are projects judged?', answer: 'Panels score for fit to the original idea, impact, technical execution, resilience, and storytelling. Finals evaluation will done by industry professionals.' }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '3rem', color: 'var(--text-white)', marginBottom: '3rem' }}>FAQ MATRIX</h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="glass-panel"
            style={{ padding: '1.5rem', cursor: 'pointer', borderLeft: '4px solid var(--primary-lime)', overflow: 'hidden' }}
            onClick={() => toggleAccordion(idx)}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ color: 'var(--primary-cyan)', fontSize: '1.2rem', margin: 0, paddingRight: '1rem' }}>{faq.question}</h3>
              <span style={{ color: 'var(--primary-lime)', fontWeight: 'bold', fontSize: '1.5rem' }}>
                {activeIndex === idx ? '-' : '+'}
              </span>
            </div>

            <AnimatePresence>
              {activeIndex === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0, marginTop: 0 }}
                  animate={{ height: 'auto', opacity: 1, marginTop: '1rem' }}
                  exit={{ height: 0, opacity: 0, marginTop: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p style={{ color: 'var(--text-gray)', lineHeight: '1.6', margin: 0 }}>{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
