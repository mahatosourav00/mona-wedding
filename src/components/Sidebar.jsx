import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Image, Sun, Moon } from 'lucide-react';

const Sidebar = ({ theme, toggleTheme }) => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navItems = [
        { id: 'hero', label: 'Home', icon: <Heart size={20} /> },
        { id: 'gallery', label: 'Captures', icon: <Image size={20} /> },
    ];

    return (
        <motion.aside
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            className="sidebar"
            style={{
                height: '100vh',
                position: 'sticky',
                top: 0,
                backgroundColor: 'var(--color-sidebar)',
                color: 'var(--color-sidebar-text)',
                padding: '2rem 1rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 100,
                transition: 'background-color 0.3s ease'
            }}
        >
            <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
                <div style={{
                    fontSize: '2rem',
                    fontFamily: 'var(--font-heading)',
                    color: 'var(--color-gold)',
                    lineHeight: '1'
                }}>
                    M<br />&<br />P
                </div>
            </div>

            <nav style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%' }}>
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        style={{
                            background: 'transparent',
                            border: 'none',
                            color: 'var(--color-sidebar-text)',
                            opacity: 0.7,
                            cursor: 'pointer',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '0.5rem',
                            transition: 'all 0.3s ease',
                            fontSize: '0.8rem',
                            textTransform: 'uppercase',
                            letterSpacing: '1px'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.opacity = '1';
                            e.target.style.color = 'var(--color-gold)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.opacity = '0.7';
                            e.target.style.color = 'var(--color-sidebar-text)';
                        }}
                    >
                        {item.icon}
                        <span style={{ display: 'none', md: { display: 'block' } }}>{item.label}</span>
                    </button>
                ))}

                {/* Theme Toggle */}
                <button
                    onClick={toggleTheme}
                    style={{
                        background: 'transparent',
                        border: 'none',
                        color: 'var(--color-sidebar-text)',
                        cursor: 'pointer',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '0.5rem',
                        transition: 'all 0.3s ease',
                        marginTop: '1rem',
                        opacity: 0.7
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.opacity = '1';
                        e.target.style.color = 'var(--color-gold)';
                    }}
                    onMouseLeave={(e) => e.target.style.opacity = '0.7'}
                    title="Toggle Theme"
                >
                    {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                </button>

            </nav>

            <div style={{ marginTop: 'auto', writingMode: 'vertical-rl', transform: 'rotate(180deg)', letterSpacing: '2px', fontSize: '0.8rem', color: 'var(--color-sidebar-text)', opacity: 0.5 }}>
                Est. 2026
            </div>
        </motion.aside>
    );
};

export default Sidebar;
