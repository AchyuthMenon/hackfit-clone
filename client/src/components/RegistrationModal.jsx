import React, { useState } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';

const RegistrationModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    teamName: '',
    leaderName: '',
    email: '',
    phone: '',
    track: '',
    college: '',
    members: ''
  });
  const [status, setStatus] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const toastId = toast.loading('Submitting Registration...');
    try {
      const payload = { ...formData, members: formData.members.split(',').map(m => m.trim()).filter(m => m) };
      const response = await axios.post('https://hackfit-clone.onrender.com/api/register', payload);
      if (response.data.success) {
        toast.success('Registration successful! Welcome to HackFit.', { id: toastId });
        setTimeout(() => {
          onClose();
        }, 2000);
      }
    } catch (error) {
      console.error(error);
      const data = error.response?.data;
      const errorMessage = data?.message || 'Registration failed. Please try again.';
      const detailedError = data?.error ? ` (${data.error})` : '';
      toast.error(`${errorMessage}${detailedError}`, { id: toastId });
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.8)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        onClick={onClose}
      >
        <motion.div
          initial={{ y: 50, scale: 0.9 }}
          animate={{ y: 0, scale: 1 }}
          exit={{ y: 50, scale: 0.9 }}
          onClick={(e) => e.stopPropagation()}
          className="glass-panel"
          style={{ padding: '2rem', width: '90%', maxWidth: '600px', maxHeight: '90vh', overflowY: 'auto', position: 'relative' }}
        >
          <button
            onClick={onClose}
            style={{ position: 'absolute', top: '10px', right: '15px', background: 'transparent', border: 'none', color: 'var(--text-white)', fontSize: '1.5rem' }}
          >&times;</button>

          <h2 style={{ color: 'var(--primary-lime)', marginBottom: '1.5rem', textAlign: 'center' }}>REGISTER TEAM</h2>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <input type="text" placeholder="Team Name" required value={formData.teamName} onChange={(e) => setFormData({ ...formData, teamName: e.target.value })} style={inputStyle} />
            <input type="text" placeholder="Leader Name" required value={formData.leaderName} onChange={(e) => setFormData({ ...formData, leaderName: e.target.value })} style={inputStyle} />
            <input type="email" placeholder="Leader Email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} style={inputStyle} />
            <input type="tel" placeholder="Leader Phone" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} style={inputStyle} />

            <select required value={formData.track} onChange={(e) => setFormData({ ...formData, track: e.target.value })} style={inputStyle}>
              <option value="" disabled style={{ background: '#111', color: '#fff' }}>Select Track</option>
              <option value="AI" style={{ background: '#111', color: '#fff' }}>Bridging the Skill Gap in the Age of AI</option>
              <option value="Sustainability" style={{ background: '#111', color: '#fff' }}>Sustainable Tech for a Greener Tomorrow</option>
              <option value="Open" style={{ background: '#111', color: '#fff' }}>Open Innovation</option>
            </select>

            <input type="text" placeholder="College/Institution" required value={formData.college} onChange={(e) => setFormData({ ...formData, college: e.target.value })} style={inputStyle} />
            <textarea placeholder="Team Members (comma separated)" rows="3" value={formData.members} onChange={(e) => setFormData({ ...formData, members: e.target.value })} style={{ ...inputStyle, resize: 'vertical' }}></textarea>

            <button type="submit" style={{ padding: '1rem', background: 'var(--primary-lime)', border: 'none', fontWeight: 'bold', borderRadius: '4px', marginTop: '1rem', color: '#000' }}>
              SUBMIT REGISTRATION
            </button>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const inputStyle = {
  padding: '1rem',
  background: 'rgba(255,255,255,0.05)',
  color: 'white',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: '4px'
};

export default RegistrationModal;
