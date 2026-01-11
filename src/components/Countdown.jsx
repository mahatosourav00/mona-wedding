import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    function calculateTimeLeft() {
        const difference = +new Date('2026-02-06T00:00:00') - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return timeLeft;
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearTimeout(timer);
    });

    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {
        timerComponents.push(
            <div key={interval} style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                margin: '0 1rem'
            }}>
                <span style={{
                    fontSize: '1.5rem',
                    fontFamily: 'var(--font-heading)',
                    color: 'var(--color-gold)',
                    fontWeight: 'bold'
                }}>
                    {timeLeft[interval] || '0'}
                </span>
                <span style={{
                    textTransform: 'uppercase',
                    fontSize: '0.6rem',
                    letterSpacing: '1px',
                    color: 'rgba(255,255,255,0.8)'
                }}>
                    {interval}
                </span>
            </div>
        );
    });

    return (
        <motion.div
            className="countdown-wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            {timerComponents.length ? timerComponents : <span>Time to Celebrate!</span>}
        </motion.div>
    );
};

export default Countdown;
