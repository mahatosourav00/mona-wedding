import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../content';
import { Video } from 'lucide-react';

const Gallery = () => {
    const { gallery } = weddingData;

    return (
        <section id="gallery" className="section" style={{ backgroundColor: 'var(--color-bg)' }}>
            <div className="text-center" style={{ marginBottom: '3rem' }}>
                <h2>Captures</h2>
                <p className="text-gold">Moments frozen in time</p>
            </div>

            {/* Photo Grid */}
            {/* Photo Grid */}
            {gallery.photos.length > 0 ? (
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: '1.5rem',
                    marginBottom: '4rem'
                }}>
                    {gallery.photos.map((url, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.02 }}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            style={{
                                height: '300px',
                                overflow: 'hidden',
                                borderRadius: '8px',
                                boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                            }}
                        >
                            <img
                                src={url}
                                alt={`Capture ${index + 1}`}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </motion.div>
                    ))}
                </div>
            ) : (
                <div className="text-center" style={{
                    padding: '3rem',
                    marginBottom: '4rem',
                    backgroundColor: 'var(--color-card-bg)',
                    borderRadius: '12px',
                    border: '1px dashed var(--color-text)',
                    opacity: 0.9
                }}>
                    <p style={{ fontSize: '1.2rem', fontFamily: 'var(--font-heading)', marginBottom: '1rem' }}>
                        {gallery.googleDrive ? "View Our Photo Album" : "Gallery Coming Soon"}
                    </p>

                    {gallery.googleDrive ? (
                        <a
                            href={gallery.googleDrive}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'inline-block',
                                padding: '0.8rem 2rem',
                                backgroundColor: 'var(--color-gold)',
                                color: 'var(--color-dark)',
                                textDecoration: 'none',
                                borderRadius: '50px',
                                fontWeight: 'bold',
                                transition: 'transform 0.2s ease',
                                boxShadow: '0 4px 15px rgba(197, 160, 89, 0.3)'
                            }}
                            onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
                            onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
                        >
                            Open Gallery Folder
                        </a>
                    ) : (
                        <p>We will update this section with beautiful moments after the events.</p>
                    )}
                </div>
            )}

            {/* Video Section */}
            <div className="text-center">
                <h3>Pre-wedding Film</h3>
                <div style={{
                    maxWidth: '800px',
                    height: '400px',
                    margin: '2rem auto',
                    backgroundColor: 'var(--color-card-bg)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '12px',
                    border: '2px dashed var(--color-gold)',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    {gallery.videoLink ? (
                        <iframe
                            width="100%"
                            height="100%"
                            src={gallery.videoLink}
                            title="Pre-wedding Video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    ) : (
                        <div style={{ color: 'var(--color-text)', opacity: 0.7, padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Video size={48} style={{ marginBottom: '1rem', color: 'var(--color-gold)' }} />
                            <p style={{ fontSize: '1.2rem' }}>{gallery.videoPlaceholderText}</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
