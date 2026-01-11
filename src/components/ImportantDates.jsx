import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { weddingData } from '../content';

const ImportantDates = () => {
    const { dates } = weddingData;

    return (
        <section id="dates" className="section" style={{ backgroundColor: 'var(--color-bg)' }}>
            <div className="text-center" style={{ marginBottom: '4rem' }}>
                <h2>Important Dates</h2>
                <p className="text-gold">Mark your calendars for our special days</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                <EventCard event={dates.wedding} delay={0.2} />
                <EventCard event={dates.reception} delay={0.4} />
            </div>
        </section>
    );
};

const EventCard = ({ event, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.6 }}
        style={{
            backgroundColor: 'var(--color-card-bg)',
            color: 'var(--color-card-text)',
            padding: '2.5rem',
            borderRadius: '8px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
            textAlign: 'center',
            border: '1px solid rgba(0,0,0,0.05)'
        }}
    >
        <div style={{ color: 'var(--color-gold)', marginBottom: '1.5rem' }}>
            <Calendar size={40} />
        </div>
        <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>{event.title}</h3>
        <div style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1rem' }}>{event.date}</div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', color: 'var(--color-text)', opacity: 0.8 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                <Clock size={16} />
                <span>{event.time}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                <MapPin size={16} />
                <span>{event.venue}</span>
            </div>
        </div>

        <a
            href={event.mapLink}
            style={{
                display: 'inline-block',
                marginTop: '2rem',
                textDecoration: 'none',
                color: 'var(--color-gold)',
                border: '1px solid var(--color-gold)',
                padding: '0.5rem 1.5rem',
                borderRadius: '25px',
                fontSize: '0.9rem',
                transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => { e.target.style.background = 'var(--color-gold)'; e.target.style.color = 'var(--color-dark)'; }}
            onMouseLeave={(e) => { e.target.style.background = 'transparent'; e.target.style.color = 'var(--color-gold)'; }}
        >
            View Map
        </a>
    </motion.div>
);

export default ImportantDates;
