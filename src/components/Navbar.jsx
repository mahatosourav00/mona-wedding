import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { weddingData } from '../content';

const Navbar = ({ theme, toggleTheme }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    const navLinks = [
        { id: 'hero', label: 'Home' },
        { id: 'dates', label: 'Dates' },
        { id: 'story', label: 'Story' },
        { id: 'gallery', label: 'Gallery' },
    ];

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    // Dynamic styles based on scroll and theme
    const navbarBg = scrolled ? 'var(--color-bg)' : 'transparent';
    const navbarTextColor = scrolled ? 'var(--color-text)' : 'white';
    const navbarShadow = scrolled ? '0 2px 10px rgba(0,0,0,0.1)' : 'none';

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            backgroundColor: navbarBg,
            padding: scrolled ? '0.8rem 2rem' : '1.5rem 2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            boxShadow: navbarShadow,
            transition: 'all 0.3s ease',
            color: navbarTextColor
        }}>
            <div
                style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 'bold', cursor: 'pointer', color: navbarTextColor }}
                onClick={() => scrollToSection('hero')}
            >
                {weddingData.hero.brideName.charAt(0)} & {weddingData.hero.groomName.charAt(0)}
            </div>

            {/* Desktop Menu */}
            <div className="desktop-menu" style={{ display: 'none', md: { display: 'flex' }, gap: '2rem', alignItems: 'center' }}>
                {navLinks.map((link) => (
                    <button
                        key={link.id}
                        onClick={() => scrollToSection(link.id)}
                        style={{
                            background: 'none',
                            border: 'none',
                            fontSize: '1rem',
                            color: navbarTextColor,
                            cursor: 'pointer',
                            fontFamily: 'var(--font-heading)',
                            textTransform: 'uppercase',
                            letterSpacing: '1px'
                        }}
                    >
                        {link.label}
                    </button>
                ))}
                <ThemeToggle theme={theme} toggleTheme={toggleTheme} color={navbarTextColor} />
            </div>

            {/* Mobile Toggle */}
            <div className="mobile-menu-btn" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <ThemeToggle theme={theme} toggleTheme={toggleTheme} color={navbarTextColor} />
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    style={{ background: 'none', border: 'none', color: navbarTextColor, cursor: 'pointer' }}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        style={{
                            position: 'absolute',
                            top: '100%',
                            left: 0,
                            right: 0,
                            backgroundColor: 'var(--color-bg)',
                            padding: '2rem',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1.5rem',
                            boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                            borderTop: '1px solid rgba(0,0,0,0.05)'
                        }}
                    >
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => scrollToSection(link.id)}
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    fontSize: '1.2rem',
                                    color: 'var(--color-text)', // Always theme text color in mobile menu
                                    cursor: 'pointer',
                                    textAlign: 'left',
                                    fontFamily: 'var(--font-heading)'
                                }}
                            >
                                {link.label}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
        @media (min-width: 768px) {
          .desktop-menu { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
        }
        @media (max-width: 767px) {
           .desktop-menu { display: none !important; }
        }
      `}</style>
        </nav>
    );
};

const ThemeToggle = ({ theme, toggleTheme, color }) => (
    <button onClick={toggleTheme} style={{ background: 'none', border: 'none', cursor: 'pointer', color: color, display: 'flex', alignItems: 'center' }}>
        {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
    </button>
);

export default Navbar;
