import React from 'react';

const Footer = () => {
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.1)', padding: '3rem 2rem', backgroundColor: 'rgba(0,0,0,0.95)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
      
      <div className="glass-panel" style={{ padding: '1.5rem', maxWidth: '400px', width: '100%', borderTop: '2px solid var(--primary-lime)', textAlign: 'center' }}>
        <h4 style={{ color: 'var(--primary-lime)', fontSize: '1rem', letterSpacing: '2px', marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
          LOCATE US
        </h4>
        <div style={{ color: 'var(--text-white)', fontSize: '0.9rem', lineHeight: '1.5', family: 'var(--font-mono)' }}>
          <p style={{ fontWeight: 'bold', color: 'var(--primary-cyan)', marginBottom: '0.3rem' }}>Federal Institute of Science And Technology (FISAT)</p>
          <p>Hormis Nagar, Mookkannoor,</p>
          <p>Angamaly, Kerala 683577</p>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
          <a href="https://www.instagram.com/fisathorizon?igsh=MTF5aHVsczAxMnp1dw==" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-gray)', transition: '0.3s' }} onMouseOver={(e) => e.target.style.color = 'var(--primary-lime)'} onMouseOut={(e) => e.target.style.color = 'var(--text-gray)'}>Instagram</a>
          <a href="https://www.linkedin.com/company/fisat-horizon/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-gray)', transition: '0.3s' }} onMouseOver={(e) => e.target.style.color = 'var(--primary-lime)'} onMouseOut={(e) => e.target.style.color = 'var(--text-gray)'}>LinkedIn</a>
        </div>
        <p style={{ color: 'var(--text-gray)', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', letterSpacing: '1px' }}>
          © 2024 HACKFIT. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
