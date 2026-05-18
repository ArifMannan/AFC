"use client";

import React from 'react';
import { FaUsers, FaGraduationCap, FaHandsHelping, FaFutbol } from 'react-icons/fa';
import Image from 'next/image';

const aboutImages = [
    '/static/images/about-us/about-1.jpeg',
    '/static/images/about-us/about-2.jpg',
    '/static/images/about-us/about-3.jpg',
    null // placeholder for experience badge slot
];

const Aboutus = () => (
    <section className="section about">
        <div className="container">
            <div className="row align-items-center">

                {/* LEFT: Multiple about images + 18+ badge */}
                <div className="col-lg-6 mb-5 mb-lg-0">
                    <div className="row gx-2 about__thumb-wrapper">
                        {aboutImages.map((src, idx) => (
                            <div key={idx} className="col-6 mb-2 position-relative d-flex justify-content-center align-items-center">
                                {src ? (
                                    <Image
                                        src={src}
                                        alt={`About ${idx + 1}`}
                                        width={350}
                                        height={300}
                                        className="rounded-3 w-100 h-auto"
                                        objectFit="cover"
                                    />
                                ) : (
                                    <div className="experience-badge placeholder-badge">
                                        <div className="badge-icon">18+</div>
                                        <p className="mt-2 mb-0 text-white small text-center">Years of Experience</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* RIGHT: Text + icons */}
                <div className="col-lg-6">
                    <h5 className="text-success">About us</h5>
                    <h4 className="fw-bold mb-3">
                        We Are A Multi-Faceted Social & Sports Club Committed To Community Empowerment
                    </h4>
                    <p className="mb-4">
                        Adarsha Futanta Club promotes excellence through sports, scholarships, community service,
                        and our club magazine. We’re dedicated to empowering youth and the underprivileged through opportunity,
                        education, and media.
                    </p>

                    <div className="about__features mb-4">
                        {[{
                            icon: <FaUsers size={36} color="#0e7a31" />,
                            title: 'Community Leadership',
                            text: 'Inspiring social progress through youth and volunteer-driven initiatives.'
                        }, {
                            icon: <FaGraduationCap size={36} color="#0e7a31" />,
                            title: 'Educational Support',
                            text: 'Encouraging academic excellence through scholarships and competitions.'
                        }, {
                            icon: <FaHandsHelping size={36} color="#0e7a31" />,
                            title: 'Youth Empowerment',
                            text: 'Fostering leadership and confidence in students through community engagement.'
                        }, {
                            icon: <FaFutbol size={36} color="#0e7a31" />,
                            title: 'Sports & Fitness',
                            text: 'Promoting health, teamwork, and discipline through regular sports activities.'
                        }].map((f, i) => (
                            <div key={i} className="d-flex mb-3">
                                <div className="me-3">{f.icon}</div>
                                <div>
                                    <h6 className="mb-1">{f.title}</h6>
                                    <p className="mb-0 text-muted">{f.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <a href="/about" className="btn btn-success">
                        Read More
                    </a>
                </div>

            </div>
        </div>

        <style jsx>{`
      .about__thumb-wrapper {
        position: relative;
      }
      .experience-badge {
        position: absolute;
        bottom: 40px;
        left: 50%;
        transform: translateX(-50%);
        background: #e53e3e;
        padding: 3rem 1rem;
        border-radius: 50%;
        box-shadow: 0 8px 20px rgba(0,0,0,0.15);
        text-align: center;
      }
      .badge-icon {
        font-size: 1.5rem;
        font-weight: bold;
        color: #fff;
      }
    `}</style>
    </section>
);

export default Aboutus;
