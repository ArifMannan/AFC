"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
    '/static/images/gallery/img-0.jpeg',
    '/static/images/gallery/img-1.jpg',
    '/static/images/gallery/img-2.jpg',
    '/static/images/gallery/img-3.jpg',
    '/static/images/gallery/img-4.jpg',
    '/static/images/gallery/img-5.jpg',
    '/static/images/gallery/img-6.jpg',
    '/static/images/gallery/img-7.jpg',
    '/static/images/gallery/img-8.jpg',
    '/static/images/gallery/img-9.jpg',
    '/static/images/gallery/img-10.jpg',
    '/static/images/gallery/img-11.jpg',
    '/static/images/gallery/img-12.jpg',
    '/static/images/gallery/img-13.jpg',
    '/static/images/gallery/img-14.jpg',
    '/static/images/gallery/img-15.jpg',
    '/static/images/gallery/img-17.jpg',
    '/static/images/gallery/img-18.jpg',
    '/static/images/gallery/img-19.jpg',
    '/static/images/gallery/img-20.jpg',
    '/static/images/gallery/img-21.jpg',
];

const PhotoGallery = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    // prevent background scroll
    useEffect(() => {
        document.body.style.overflow = modalOpen ? 'hidden' : 'auto';
    }, [modalOpen]);

    const openModal = (idx) => {
        setCurrentIndex(idx);
        setModalOpen(true);
    };
    const closeModal = () => setModalOpen(false);
    const prevImage = () => setCurrentIndex((i) => (i - 1 + images.length) % images.length);
    const nextImage = () => setCurrentIndex((i) => (i + 1) % images.length);

    return (
        <div className="container py-5">
            <h3 className="text-center mb-5 text-success animate-fade-in fw-bold">Our Photo Gallery</h3>
            <div className="grid-gallery">
                {images.map((src, idx) => (
                    <button
                        key={idx}
                        type="button"
                        className="thumb animate-zoom-in"
                        onClick={() => openModal(idx)}
                    >
                        <Image src={src} alt={`Photo ${idx + 1}`} fill style={{ objectFit: 'cover' }} />
                    </button>
                ))}
            </div>

            {modalOpen && (
                <div className="modal-overlay animate-fade-in" onClick={closeModal}>
                    <div className="modal-content animate-slide-up" onClick={(e) => e.stopPropagation()}>
                        <button className="nav prev" onClick={prevImage}>&larr;</button>
                        <div className="modal-image-wrapper">
                            <Image
                                src={images[currentIndex]}
                                alt={`Photo ${currentIndex + 1}`}
                                width={800}
                                height={600}
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
                        <button className="nav next" onClick={nextImage}>&rarr;</button>
                        <button className="close" onClick={closeModal}>&times;</button>
                    </div>
                </div>
            )}

            <style jsx>{`
        .grid-gallery {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
          gap: 1.5rem;
        }
        .thumb {
          position: relative;
          width: 100%;
          padding-top: 75%;
          overflow: hidden;
          border-radius: 16px;
          box-shadow: 0 6px 20px rgba(0,0,0,0.1);
          cursor: pointer;
          border: none;
          background: #fff;
        }
        .thumb:hover {
          transform: scale(1.03);
          box-shadow: 0 12px 30px rgba(0,0,0,0.15);
        }
        .modal-overlay {
          position: fixed;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background: rgba(0,0,0,0.8);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        .modal-content {
          position: relative;
          max-width: 90%;
          max-height: 90vh;
          display: flex;
          align-items: center;
          gap: 1rem;
          background: transparent;
        }
        .modal-image-wrapper {
          flex-shrink: 0;
          animation: zoomIn 0.4s ease;
          max-height: 80vh;
          overflow: auto;
        }
        .modal-image-wrapper img {
          display: block;
          height: auto;
          max-height: 80vh;
        }
        .modal-image-wrapper {
          flex-shrink: 0;
          animation: zoomIn 0.4s ease;
        }
        .nav {
          background: #48bb78;
          border: none;
          color: #fff;
          font-size: 2.5rem;
          padding: 0.5rem 1rem;
          cursor: pointer;
          border-radius: 8px;
          transition: background 0.3s;
        }
        .nav:hover {
          background: #2f855a;
        }
        .close {
          position: absolute;
          top: -15px;
          right: -15px;
          background: #fff;
          border: none;
          font-size: 2.5rem;
          line-height: 1;
          padding: 0.2rem 0.5rem;
          cursor: pointer;
          border-radius: 50%;
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
          transition: transform 0.2s;
        }
        .close:hover {
          transform: scale(1.1);
        }
        @keyframes fadeIn {
          from { opacity: 0; } to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(30px); opacity: 0; } to { transform: translateY(0); opacity: 1; }
        }
        @keyframes zoomIn {
          from { transform: scale(0.8); opacity: 0; } to { transform: scale(1); opacity: 1; }
        }
        .animate-fade-in { animation: fadeIn 0.5s ease forwards; }
        .animate-slide-up { animation: slideUp 0.4s ease forwards; }
        .animate-zoom-in { animation: zoomIn 0.4s ease forwards; }
      `}</style>
        </div>
    );
};

export default PhotoGallery;
