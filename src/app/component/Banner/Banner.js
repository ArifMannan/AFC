"use client";
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
// import required modules
import { Autoplay, Pagination, Navigation, FreeMode, Parallax } from 'swiper/modules';

const Banner = () => {
    return (
        <div>
            <section className='banner-section'>
                <Swiper
                    style={{
                        '--swiper-navigation-color': 'white',
                        '--swiper-pagination-color': 'white',
                    }}
                    speed={600}
                    parallax={true}
                    spaceBetween={10}
                    centeredSlides={true}
                    loop={true}
                    effect={'fade'}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Parallax, Pagination, Navigation, EffectFade, FreeMode]}
                    className="mySwiper swipe-card"
                >
                    <SwiperSlide>
                        <div className="slide" style={{ backgroundImage: "url(/static/images/test.jpeg)" }}>
                            <div className="banner-content" data-swiper-parallax="-300">
                                <span className="pretitle">Welcome To Our club</span>
                                <h1 className="banner-heading">Destination for world
                                    Cricket News</h1>
                                <a
                                    className="cmn-button cmn-button--secondary text-light"
                                    href="sign-in"
                                >
                                    See more
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide" style={{ backgroundImage: "url(/static/images/banner/banner0.jpeg)" }}>
                            <div className="banner-content" data-swiper-parallax="-300">
                                <span className="pretitle">Welcome To Our club</span>
                                <h1 className="banner-heading">Destination for world
                                    Cricket News</h1>
                                <a
                                    className="cmn-button cmn-button--secondary text-light"
                                    href="sign-in"
                                >
                                    See more
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide" style={{ backgroundImage: "url(/static/images/banner/b1.jpeg)" }}>
                            <div className="banner-content" data-swiper-parallax="-300">
                                <span className="pretitle">Welcome To Our club</span>
                                <h1 className="banner-heading">Scholarship Award Presentation Ceremony 2022</h1>
                                <a
                                    className="cmn-button cmn-button--secondary text-light"
                                    href="sign-in"
                                >
                                    See more
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>

            </section>

        </div>
    );
};

export default Banner;