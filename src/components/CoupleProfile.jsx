import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const CoupleProfile = () => {
    return (
        <section id="couple" className="section" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center"
                style={{ marginBottom: '4rem' }}
            >
                <h2>The Happy Couple</h2>
                <p className="text-gold" style={{ fontSize: '1.2rem' }}>Meant to be together</p>
            </motion.div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', alignItems: 'start' }}>
                {/* Bride Profile */}
                <ProfileCard
                    role="The Bride"
                    name="Monalisha"
                    image="https://images.unsplash.com/photo-1546804784-896d0dca3805?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    side="Bride's Side"
                    details={[
                        { title: "Father", content: "Mr. Shubhendu Mahapatra" },
                        { title: "Mother", content: "Mrs. Monorama Mahapatra" },
                        { title: "Address", content: "Ramaidih, Puncha, Purulia" }
                    ]}
                />

                {/* Groom Profile */}
                <ProfileCard
                    role="The Groom"
                    name="Prakash"
                    image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    side="Groom's Side"
                    details={[
                        { title: "Father", content: "Mr. Swarup Pati" },
                        { title: "Mother", content: "Mrs. Jabarani Pati" },
                        { title: "Address", content: "Rakhera, Hura, Purulia" }
                    ]}
                />
            </div>
        </section>
    );
};

const ProfileCard = ({ role, name, image, side, details }) => {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
            style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '2px', // Minimal premium border radius
                boxShadow: '0 20px 40px rgba(0,0,0,0.05)'
            }}
        >
            <div style={{ height: '300px', marginBottom: '1.5rem', overflow: 'hidden' }}>
                <img src={image} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            <div className="text-center" style={{ marginBottom: '2rem' }}>
                <span style={{
                    display: 'block',
                    fontSize: '0.8rem',
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    color: 'var(--color-gold)',
                    marginBottom: '0.5rem'
                }}>
                    {role}
                </span>
                <h3 style={{ fontSize: '2.5rem', margin: 0 }}>{name}</h3>
            </div>

            <div style={{ borderTop: '1px solid #eee', paddingTop: '1.5rem' }}>
                <h4 style={{ fontSize: '1rem', marginBottom: '1rem' }}>{side} Details</h4>
                {details.map((detail, idx) => (
                    <DetailDropdown key={idx} title={detail.title} content={detail.content} />
                ))}
            </div>
        </motion.div>
    );
};

const DetailDropdown = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div style={{ borderBottom: '1px solid #f5f5f5' }}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '0.8rem 0',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    fontSize: '0.95rem',
                    color: '#555',
                    fontFamily: 'var(--font-body)'
                }}
                onMouseEnter={(e) => e.target.style.color = 'var(--color-gold)'}
                onMouseLeave={(e) => e.target.style.color = '#555'}
            >
                {title}
                {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        style={{ overflow: 'hidden' }}
                    >
                        <div style={{ paddingBottom: '1rem', paddingLeft: '0.5rem', fontSize: '0.9rem', color: '#888' }}>
                            {content}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default CoupleProfile;
