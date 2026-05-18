// components/ScholarshipResults.jsx
"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const results = [
    {
        year: 2024,
        subtitle: "Class Eight for both School & Madrasa",
        image: "/static/images/scholarship-result/result-2024.jpg",
    },
    {
        year: 2023,
        subtitle: "Class Eight for both School & Madrasa",
        image: "/static/images/scholarship-result/result-2023.jpg",
    },
    {
        year: 2022,
        subtitle: "Class Eight for both School & Madrasa",
        image: "/static/images/scholarship-result/result-2022.jpg",
    },
    {
        year: 2019,
        subtitle: "Class Eight for both School & Madrasa",
        image: "/static/images/scholarship-result/result-2019.jpg",
    },
];

export default function ScholarshipResults() {
    const [openIndex, setOpenIndex] = useState(null);

    // Unlock main page scroll even when modal is open:
    useEffect(() => {
        document.body.style.overflow = 'auto';
    }, []);

    return (
        <div className="container py-5">
            <h3 className="text-center mb-5 fw-bold text-success">Scholarship Exam Results</h3>
            <div className="row g-4">
                {results.map((r, i) => (
                    <div key={r.year} className="col-md-6">
                        <div
                            className="card h-100 shadow-sm"
                            onClick={() => setOpenIndex(i)}
                            style={{ cursor: 'pointer' }}
                        >
                            <div className="card-body">
                                <h5 className="card-title">
                                    Adarsha Futanta Club Scholarship Examination {r.year}
                                </h5>
                                <p className="text-muted">{r.subtitle}</p>
                                <button className="btn btn-success">View Full Result</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {openIndex !== null && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
                    onClick={() => setOpenIndex(null)}
                >
                    <div
                        className="bg-white rounded-lg shadow-lg w-11/12 max-w-4xl max-h-[90vh] overflow-hidden"
                        onClick={e => e.stopPropagation()}
                    >
                        {/* HEADER */}
                        <div className="px-4 py-2 border-b flex justify-between items-center">
                            <h3 className="m-0">
                                Scholarship Exam {results[openIndex].year}
                            </h3>
                            <button
                                onClick={() => setOpenIndex(null)}
                                className="text-2xl leading-none"
                            >
                                &times;
                            </button>
                        </div>

                        {/* BODY (scrollable) */}
                        <div className="overflow-y-auto" style={{ maxHeight: 'calc(90vh - 60px)' }}>
                            <Image
                                src={results[openIndex].image}
                                alt={`Result ${results[openIndex].year}`}
                                width={1000}
                                height={1500}
                                style={{ objectFit: 'contain', width: '100%' }}
                            />
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
        /* No changes to page scroll */
        /* Card hover */
        .card:hover { transform: translateY(-5px); transition: transform .2s; }

        /* Modal overlay dims background */
        .fixed { /* util */ }
      `}</style>
        </div>
    );
}
