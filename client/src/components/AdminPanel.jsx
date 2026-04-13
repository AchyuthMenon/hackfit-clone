import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Users, LogOut, RefreshCcw, Search, ExternalLink } from 'lucide-react';
import toast from 'react-hot-toast';

const AdminPanel = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [registrations, setRegistrations] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedTrack, setSelectedTrack] = useState('All');

    // Check if previously authenticated in this session
    useEffect(() => {
        const savedPass = sessionStorage.getItem('admin_pass');
        if (savedPass) {
            handleLogin(null, savedPass);
        }
    }, []);

    const handleLogin = async (e, passOverride = null) => {
        if (e) e.preventDefault();
        const passToUse = passOverride || password;
        
        setLoading(true);
        try {
            // Flexible detection for local testing (localhost or 127.0.0.1)
            const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
            const API_BASE = isLocal ? 'http://localhost:5000' : 'https://hackfit-clone.onrender.com';
                
            const response = await axios.get(`${API_BASE}/api/admin/registrations`, {
                headers: { 'Authorization': passToUse }
            });

            if (response.data.success) {
                setRegistrations(response.data.data);
                setIsAuthenticated(true);
                sessionStorage.setItem('admin_pass', passToUse);
                toast.success('Admin access granted');
            }
        } catch (error) {
            console.error(error);
            toast.error(error.response?.data?.message || 'Access denied');
            sessionStorage.removeItem('admin_pass');
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        setPassword('');
        sessionStorage.removeItem('admin_pass');
        toast.success('Logged out');
    };

    const filteredTeams = registrations.filter(team => {
        const query = searchQuery.toLowerCase();
        const matchesSearch = (team.teamName?.toLowerCase().includes(query)) || 
                              (team.leaderName?.toLowerCase().includes(query));
        
        const matchesTrack = selectedTrack === 'All' || team.track === selectedTrack;
        
        return matchesSearch && matchesTrack;
    });

    if (!isAuthenticated) {
        return (
            <div style={containerStyle}>
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="glass-panel" 
                    style={loginBoxStyle}
                >
                    <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                        <Shield size={48} color="var(--primary-lime)" style={{ marginBottom: '1rem' }} />
                        <h2 style={{ color: 'var(--primary-lime)', letterSpacing: '2px' }}>ADMIN NEXUS</h2>
                        <p style={{ color: 'var(--text-white)', opacity: 0.6 }}>Restricted access. Enter passcode.</p>
                    </div>
                    
                    <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <input 
                            type="password" 
                            placeholder="Terminal Passcode" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={inputStyle}
                            autoFocus
                        />
                        <button 
                            type="submit" 
                            disabled={loading}
                            style={{ 
                                ...buttonStyle, 
                                background: 'var(--primary-lime)', 
                                color: '#000', 
                                cursor: loading ? 'not-allowed' : 'pointer',
                                opacity: loading ? 0.7 : 1
                            }}
                        >
                            {loading ? 'AUTHENTICATING...' : 'ACCESS DASHBOARD'}
                        </button>
                    </form>
                    
                    <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
                        <a href="/" style={{ color: 'var(--primary-cyan)', textDecoration: 'none', fontSize: '0.9rem' }}>← Return to Main Site</a>
                    </div>
                </motion.div>
            </div>
        );
    }

    return (
        <div style={containerStyle}>
            <div style={dashboardWrapperStyle}>
                {/* Header */}
                <header style={headerStyle}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <Shield size={32} color="var(--primary-lime)" />
                        <h2 style={{ color: 'var(--primary-lime)', margin: 0 }}>COMMAND CENTER</h2>
                    </div>
                    
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                        <button onClick={() => handleLogin(null, sessionStorage.getItem('admin_pass'))} style={iconButtonStyle} title="Refresh Data">
                            <RefreshCcw size={20} />
                        </button>
                        <button onClick={handleLogout} style={{ ...iconButtonStyle, color: '#ff4444' }} title="Logout">
                            <LogOut size={20} />
                        </button>
                    </div>
                </header>

                {/* Stats */}
                <div style={statsContainerStyle}>
                    <div className="glass-panel" style={statCardStyle}>
                        <Users size={24} color="var(--primary-cyan)" />
                        <div>
                            <div style={statLabelStyle}>TOTAL TEAMS</div>
                            <div style={statValueStyle}>{registrations.length}</div>
                        </div>
                    </div>
                    <div className="glass-panel" style={statCardStyle}>
                        <ExternalLink size={24} color="var(--primary-lime)" />
                        <div>
                            <div style={statLabelStyle}>PARTICIPANTS</div>
                            <div style={statValueStyle}>
                                {registrations.reduce((acc, curr) => acc + (curr.members?.length || 0), 0) + registrations.length}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Filters */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
                        {['All', 'AI', 'Sustainability', 'Open'].map(track => (
                            <button 
                                key={track}
                                onClick={() => setSelectedTrack(track)}
                                style={{
                                    ...filterButtonStyle,
                                    background: selectedTrack === track ? 'rgba(34, 211, 238, 0.2)' : 'rgba(255,255,255,0.05)',
                                    borderColor: selectedTrack === track ? 'var(--primary-cyan)' : 'rgba(255,255,255,0.1)',
                                    color: selectedTrack === track ? 'var(--primary-cyan)' : 'var(--text-white)'
                                }}
                            >
                                {track.toUpperCase()}
                            </button>
                        ))}
                    </div>

                    {/* Search Bar */}
                    <div style={searchWrapperStyle}>
                        <Search size={20} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', opacity: 0.5 }} />
                        <input 
                            type="text" 
                            placeholder="Filter by Team or Leader name..." 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            style={searchInputStyle}
                        />
                    </div>
                </div>

                {/* Data Table */}
                <div className="glass-panel" style={{ overflowX: 'auto', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <table style={tableStyle}>
                        <thead>
                            <tr style={tableHeaderRowStyle}>
                                <th>TEAM NAME</th>
                                <th>LEADER</th>
                                <th>TRACK</th>
                                <th>COLLEGE</th>
                                <th>MEMBERS</th>
                                <th>CONTACT</th>
                            </tr>
                        </thead>
                        <tbody>
                            <AnimatePresence>
                                {filteredTeams.map((team, idx) => (
                                    <motion.tr 
                                        key={team._id} 
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.05 }}
                                        style={tableRowStyle}
                                    >
                                        <td style={{ color: 'var(--primary-lime)', fontWeight: 'bold' }}>{team.teamName}</td>
                                        <td>{team.leaderName}</td>
                                        <td style={{ fontSize: '0.85rem', color: 'var(--primary-cyan)' }}>{team.track}</td>
                                        <td style={{ fontSize: '0.85rem', opacity: 0.7 }}>{team.college}</td>
                                        <td>
                                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                                                {team.members.map((m, i) => (
                                                    <span key={i} style={memberTagStyle}>{m}</span>
                                                ))}
                                                {team.members.length === 0 && <span style={{ opacity: 0.3 }}>Solo</span>}
                                            </div>
                                        </td>
                                        <td>
                                            <div style={{ fontSize: '0.8rem' }}>
                                                <div>{team.email}</div>
                                                <div style={{ opacity: 0.6 }}>{team.phone}</div>
                                            </div>
                                        </td>
                                    </motion.tr>
                                ))}
                            </AnimatePresence>
                        </tbody>
                    </table>
                    {filteredTeams.length === 0 && (
                        <div style={{ padding: '3rem', textAlign: 'center', opacity: 0.5 }}>
                            No entries found.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

// Styles
const containerStyle = {
    padding: '2rem',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    zIndex: 10
};

const loginBoxStyle = {
    width: '100%',
    maxWidth: '400px',
    padding: '3rem',
    marginTop: '10vh'
};

const dashboardWrapperStyle = {
    width: '100%',
    maxWidth: '1200px',
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
};

const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 0'
};

const statsContainerStyle = {
    display: 'flex',
    gap: '1.5rem',
    flexWrap: 'wrap'
};

const statCardStyle = {
    flex: '1',
    minWidth: '200px',
    padding: '1.5rem',
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem'
};

const statLabelStyle = {
    fontSize: '0.75rem',
    letterSpacing: '2px',
    opacity: 0.6,
    marginBottom: '0.5rem'
};

const statValueStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: 'white'
};

const inputStyle = {
    padding: '1rem',
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '4px',
    color: 'white',
    outline: 'none focus:border-var(--primary-lime)'
};

const buttonStyle = {
    padding: '1rem',
    border: 'none',
    borderRadius: '4px',
    fontWeight: 'bold',
    transition: 'all 0.2s',
    letterSpacing: '1px'
};

const iconButtonStyle = {
    background: 'transparent',
    border: '1px solid rgba(255,255,255,0.1)',
    color: 'white',
    padding: '0.5rem',
    borderRadius: '4px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
};

const filterButtonStyle = {
    padding: '0.6rem 1.2rem',
    border: '1px solid',
    borderRadius: '4px',
    fontSize: '0.8rem',
    fontWeight: 'bold',
    letterSpacing: '1px',
    cursor: 'pointer',
    transition: 'all 0.2s ease'
};

const searchWrapperStyle = {
    position: 'relative',
    width: '100%'
};

const searchInputStyle = {
    width: '100%',
    padding: '1rem 1rem 1rem 3rem',
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '4px',
    color: 'white',
    outline: 'none'
};

const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    textAlign: 'left'
};

const tableHeaderRowStyle = {
    borderBottom: '1px solid rgba(255,255,255,0.1)',
    fontSize: '0.8rem',
    color: 'var(--primary-cyan)',
    letterSpacing: '1px'
};

const tableRowStyle = {
    borderBottom: '1px solid rgba(255,255,255,0.05)',
    transition: 'background 0.2s'
};

const memberTagStyle = {
    padding: '2px 8px',
    background: 'rgba(255,255,255,0.1)',
    borderRadius: '12px',
    fontSize: '0.75rem',
    whiteSpace: 'nowrap'
};

export default AdminPanel;
