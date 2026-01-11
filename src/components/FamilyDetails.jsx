import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FamilyDetails = () => {
    return (
        <section className="section" style={{ backgroundColor: 'var(--color-bg)' }}>
            <div className="text-center" style={{ marginBottom: '4rem' }}>
                <h2>Family & Details</h2>
                <p>With the blessings of our parents and families</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
                {/* Bride's Side */}
                <div>
                    <h3 className="text-center text-gold" style={{ marginBottom: '2rem' }}>Bride's Side</h3>
                    <DetailDropdown title="Father's Name" content="Mr. [Bride Father Name]" />
                    <DetailDropdown title="Mother's Name" content="Mrs. [Bride Mother Name]" />
                    <DetailDropdown title="Address" content="[Bride's Family Address Line 1], [City], [State]" />
                </div>

                {/* Groom's Side */}
                <div>
                    <h3 className="text-center text-gold" style={{ marginBottom: '2rem' }}>Groom's Side</h3>
                    <DetailDropdown title="Father's Name" content="Mr. [Groom Father Name]" />
                    <DetailDropdown title="Mother's Name" content="Mrs. [Groom Mother Name]" />
                    <DetailDropdown title="Address" content="[Groom's Family Address Line 1], [City], [State]" />
                </div>
            </div>
        </section>
    );
};

const DetailDropdown = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div style={{ marginBottom: '1rem', borderBottom: '1px solid #ddd' }}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '1rem 0',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    fontSize: '1.1rem',
                    fontFamily: 'var(--font-heading)'
                }}
            >
                {title}
                {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ overflow: 'hidden' }}
                    >
                        <div style={{ paddingBottom: '1.5rem', color: '#666' }}>
                            {content}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default FamilyDetails;
