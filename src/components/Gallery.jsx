import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

const galleryItems = [
  {
    id: 1,
    title: 'The Perfect Pour',
    tag: 'Craft',
    image: 'https://images.unsplash.com/photo-1497515114629-f71d768fd07c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    title: 'Artisan Micro-Roasting',
    tag: 'Roast',
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    title: 'Cozy Morning Vibes',
    tag: 'Space',
    image: 'https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    title: 'Premium Selected Beans',
    tag: 'Harvest',
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=800&q=80'
  }
];

const Gallery = () => {
  const [activeImage, setActiveImage] = useState(null);

  const openLightbox = (item) => {
    setActiveImage(item);
  };

  const closeLightbox = () => {
    setActiveImage(null);
  };

  return (
    <section id="gallery">
      <div className="section-header">
        <span className="section-badge">Visual Craft</span>
        <h2 className="section-title">Café Gallery</h2>
        <p className="section-subtitle">
          Step into our warm space and take a glimpse at our barista crafting process, cozy corners, and daily roasted beans.
        </p>
      </div>

      <div className="gallery-grid">
        {galleryItems.map((item) => (
          <div 
            className="gallery-item" 
            key={item.id}
            onClick={() => openLightbox(item)}
          >
            <img 
              src={item.image} 
              alt={item.title} 
              className="gallery-img"
              loading="lazy"
            />
            <div className="gallery-overlay">
              <ZoomIn size={24} style={{ marginBottom: '10px' }} />
              <h3 className="gallery-title">{item.title}</h3>
              <span className="gallery-tag">{item.tag}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal overlay */}
      {activeImage && (
        <div className="lightbox-modal" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox} aria-label="Close lightbox">
              <X size={32} />
            </button>
            <img 
              src={activeImage.image} 
              alt={activeImage.title} 
              className="lightbox-img" 
            />
            <p className="lightbox-caption">{activeImage.title}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
