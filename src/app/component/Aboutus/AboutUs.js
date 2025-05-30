import React from 'react';
import { FaUsers, FaGraduationCap, FaHandsHelping, FaFutbol } from 'react-icons/fa';

const Aboutus = () => {
    return (
        <section className="section about">
            <div className="container">
                <div className="row section__row align-items-center">
                    <div className="col-lg-6 col-xl-5 section__col order-last order-lg-first">
                        <div
                            className="about__thumb dir-rtl wow fadeInUp"
                            data-wow-duration="0.4s"
                        >
                            <img
                                alt="Image"
                                loading="lazy"
                                width={700}
                                height={732}
                                decoding="async"
                                data-nimg={1}
                                className="unset"
                                style={{ color: "transparent" }}
                                srcSet="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout-thumb.1fde792b.png&w=750&q=75"
                                src="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout-thumb.1fde792b.png&w=1920&q=75"
                            />
                            <div className="about__experience">
                                <div className="about__experience-thumb">
                                    <i className="golftio-ball" />
                                </div>
                                <h3>
                                    <span>30 +</span>
                                </h3>
                                <p>Years of experience</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-6 offset-xl-1 section__col">
                        <div className="section__content">
                            <h5 className="section__content-sub-title">About us</h5>
                            <h2 className="section__content-title">
                                We Are A Multi-Faceted Social & Sports Club Committed To Community Empowerment
                            </h2>
                            <p className="section__content-text">
                                Adarsha Futanta Club promotes excellence through sports, scholarships, community service, and our club magazine. We’re dedicated to empowering youth and the underprivileged through opportunity, education, and media.
                            </p>
                            <div className="about__section-inner">
                                <div className="about__section-inner__single">
                                    <div className="about__section-inner__single-thumb">
                                        <FaUsers size={40} color="#0e7a31" />
                                    </div>
                                    <div className="about__section-inner__single-content">
                                        <h5>Community Leadership</h5>
                                        <p className="secondary-text">
                                            Inspiring social progress through youth and volunteer-driven initiatives.
                                        </p>
                                    </div>
                                </div>

                                <div className="about__section-inner__single">
                                    <div className="about__section-inner__single-thumb">
                                        <FaGraduationCap size={40} color="#0e7a31" />
                                    </div>
                                    <div className="about__section-inner__single-content">
                                        <h5>Educational Support</h5>
                                        <p className="secondary-text">
                                            Encouraging academic excellence through scholarships and competitions.
                                        </p>
                                    </div>
                                </div>

                                <div className="about__section-inner__single">
                                    <div className="about__section-inner__single-thumb">
                                        <FaHandsHelping size={40} color="#0e7a31" />
                                    </div>
                                    <div className="about__section-inner__single-content">
                                        <h5>Youth Empowerment</h5>
                                        <p className="secondary-text">
                                            Fostering leadership and confidence in students through community engagement.
                                        </p>
                                    </div>
                                </div>

                                <div className="about__section-inner__single">
                                    <div className="about__section-inner__single-thumb">
                                        <FaFutbol size={40} color="#0e7a31" />
                                    </div>
                                    <div className="about__section-inner__single-content">
                                        <h5>Sports & Fitness</h5>
                                        <p className="secondary-text">
                                            Promoting health, teamwork, and discipline through regular sports activities.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="section__content-cta">
                                <a className="cmn-button text-light" href="about">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Aboutus;