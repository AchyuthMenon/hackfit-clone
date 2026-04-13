import React from 'react';

const Contact = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
      <h2 style={{ fontSize: '3rem', color: 'var(--primary-lime)', marginBottom: '2rem' }}>GET IN TOUCH</h2>

      <div className="glass-panel" style={{ padding: '3rem', width: '100%' }}>
        <h4 style={{ color: 'var(--primary-cyan)', marginBottom: '1.5rem', fontSize: '1.5rem', letterSpacing: '2px' }}>CHIEF ORGANIZERS</h4>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '1.2rem' }}>
          <p style={{ color: 'var(--text-white)' }}>
            <span style={{ fontWeight: 'bold' }}>Hisham Haskar (Chairperson ACM):</span> +91 8078313514
          </p>
          <p style={{ color: 'var(--text-white)' }}>
            <span style={{ fontWeight: 'bold' }}>Abhijay Prakash (Chairperson FHC):</span> +91 7356252747
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
