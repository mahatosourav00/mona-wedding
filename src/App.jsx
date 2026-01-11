import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ImportantDates from './components/ImportantDates';
import OurStory from './components/OurStory';
import Gallery from './components/Gallery';

function App() {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <div className="app-container">
            <Navbar theme={theme} toggleTheme={toggleTheme} />
            <Hero />
            <ImportantDates />
            <OurStory />
            <Gallery />

            <footer className="text-center" style={{ padding: '4rem 2rem', backgroundColor: 'var(--color-card-bg)', color: 'var(--color-text)', borderTop: '1px solid rgba(0,0,0,0.1)' }}>
                <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', color: 'var(--color-gold)' }}>Monalisha & Prakash</p>
                <p style={{ opacity: 0.6 }}>© 2026. Forever Begins Here.</p>
            </footer>
        </div>
    );
}

export default App;
