import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../content';

const OurStory = () => {
    const { story } = weddingData;

    return (
        <section id="story" className="section" style={{ backgroundColor: 'var(--color-card-bg)' }}>
            <div className="container text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>{story.title}</h2>
                    <div style={{
                        maxWidth: '700px',
                        margin: '0 auto',
                        fontSize: '1.2rem',
                        lineHeight: '1.8',
                        color: 'var(--color-card-text)',
                        opacity: 0.9
                    }}>
                        {story.text}
                    </div>
                    <div style={{ marginTop: '3rem', fontSize: '2rem', color: 'var(--color-gold)', fontFamily: 'var(--font-heading)' }}>
                        ~ Since 2026 ~
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default OurStory;
