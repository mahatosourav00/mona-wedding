import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Countdown from './Countdown';
import { weddingData } from '../content';

const Hero = () => {
    const { hero, couple } = weddingData;

    return (
        <section id="hero" style={{
            position: 'relative',
            minHeight: '100vh',
            overflow: 'hidden',
            background: 'var(--color-dark)'
        }}>

            {/* Background Image & Overlay */}
            <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
                <img
                    src={hero.headerImage}
                    alt="Background"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center 55%'
                    }}
                />
                {/* Gradient: Darker at bottom/sides, lighter in center for faces */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'radial-gradient(circle at center 40%, transparent 20%, rgba(0,0,0,0.6) 100%)'
                }} />
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, transparent 30%, rgba(0,0,0,0.8) 100%)'
                }} />
            </div>

            {/* Content Container */}
            <div className="hero-content-wrapper" style={{
                position: 'relative',
                zIndex: 1,
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '2rem',
                color: 'white'
            }}>

                {/* Top: Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-center"
                    style={{ marginTop: '1rem' }}
                >
                    <p style={{
                        fontSize: '1.5rem',
                        fontFamily: 'var(--font-heading)',
                        fontStyle: 'italic',
                        color: 'white',
                        fontWeight: 'bold',
                        letterSpacing: '5px',
                        marginBottom: '0.8rem',
                        textShadow: '0 2px 4px rgba(0,0,0,0.6), 0 0 15px rgba(197, 160, 89, 0.4)'
                    }}>
                        {hero.saveTheDateText}
                    </p>
                    <h1 style={{
                        fontSize: 'clamp(3rem, 6vw, 5rem)',
                        margin: 0,
                        lineHeight: '1',
                        color: '#fff',
                        fontFamily: 'var(--font-heading)',
                        textShadow: '0 4px 10px rgba(0,0,0,0.5)'
                    }}>
                        {hero.brideName} <span style={{ color: 'var(--color-gold)', fontSize: '0.6em', verticalAlign: 'middle' }}>&</span> {hero.groomName}
                    </h1>
                </motion.div>

                {/* Middle: Split Layout (Wings) */}
                <div className="hero-split-layout" style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center', // Center vertically in space
                    flexGrow: 1,
                    width: '100%',
                    maxWidth: '1400px', // Prevent too wide on large screens
                    margin: '0 auto',
                    gap: '2rem'
                }}>
                    {/* Left Wing: Bride */}
                    <div className="side-panel left" style={{ width: '100%', maxWidth: '350px' }}>
                        <CoupleToggle
                            label="The Bride"
                            details={couple.bride.details}
                            align="left"
                        />
                    </div>

                    {/* Right Wing: Groom */}
                    <div className="side-panel right" style={{ width: '100%', maxWidth: '350px' }}>
                        <CoupleToggle
                            label="The Groom"
                            details={couple.groom.details}
                            align="right"
                        />
                    </div>
                </div>

                {/* Bottom: Countdown (Highlighted) */}
                <div style={{ paddingBottom: '3rem', width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="hero-countdown-container"
                        style={{
                            background: 'rgba(255, 255, 255, 0.1)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            borderRadius: '20px',
                            padding: '1.5rem 3rem',
                            boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
                        }}
                    >
                        <div className="countdown-wrapper" style={{ transform: 'scale(1.2)' }}>
                            <Countdown />
                        </div>
                        <p style={{
                            textAlign: 'center',
                            fontSize: '0.9rem',
                            marginTop: '1.2rem',
                            letterSpacing: '2px',
                            textTransform: 'uppercase',
                            color: 'var(--color-gold)'
                        }}>
                            Days Until Forever
                        </p>
                    </motion.div>
                </div>
            </div>

        </section>
    );
};

const CoupleToggle = ({ label, details, align = 'left' }) => {
    const [isOpen, setIsOpen] = useState(false);
    const isLeft = align === 'left';

    return (
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: isLeft ? 'flex-start' : 'flex-end' }}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    background: 'transparent',
                    border: 'none',
                    // Dynamic Border Side
                    borderLeft: isLeft ? (isOpen ? '4px solid var(--color-gold)' : '4px solid rgba(255,255,255,0.3)') : 'none',
                    borderRight: !isLeft ? (isOpen ? '4px solid var(--color-gold)' : '4px solid rgba(255,255,255,0.3)') : 'none',

                    color: isOpen ? 'var(--color-gold)' : 'white',
                    padding: '0.8rem 1.5rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: isLeft ? 'flex-start' : 'flex-end',
                    gap: '1rem',
                    width: '100%',
                    fontSize: '1.4rem',
                    fontFamily: 'var(--font-heading)',
                    letterSpacing: '1px',
                    transition: 'all 0.3s ease',
                    textAlign: isLeft ? 'left' : 'right',
                    textShadow: '0 2px 4px rgba(0,0,0,0.8)'
                }}
            >
                {/* Order changes based on alignment */}
                {isLeft ? (
                    <>
                        {label} {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </>
                ) : (
                    <>
                        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />} {label}
                    </>
                )}
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0, x: isLeft ? -20 : 20 }}
                        animate={{ opacity: 1, height: 'auto', x: 0 }}
                        exit={{ opacity: 0, height: 0, x: isLeft ? -20 : 20 }}
                        transition={{ duration: 0.3 }}
                        style={{ overflow: 'hidden', width: '100%' }}
                    >
                        <div style={{
                            padding: '1rem 1.5rem',
                            color: 'rgba(255,255,255,0.9)',
                            fontSize: '1rem',
                            fontWeight: '300',
                            // Dynamic Border for content
                            borderLeft: isLeft ? '1px solid rgba(255,255,255,0.1)' : 'none',
                            borderRight: !isLeft ? '1px solid rgba(255,255,255,0.1)' : 'none',
                            marginLeft: isLeft ? '2px' : 0,
                            marginRight: !isLeft ? '2px' : 0,
                            background: 'linear-gradient(to bottom, rgba(0,0,0,0.4), transparent)',
                            marginTop: '0.5rem',
                            textAlign: isLeft ? 'left' : 'right'
                        }}>
                            {Object.entries(details).map(([key, value]) => (
                                <div key={key} style={{ marginBottom: '0.8rem' }}>
                                    <span style={{ color: 'var(--color-gold)', display: 'block', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{key}</span>
                                    {value}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Hero;
