import React from 'react';

const Overview = () => {
    return (
        <div>
            <div className="overview section section--space-top">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-10 col-xxl-9 order-last order-xl-first">
                            <div
                                className="overview__inner wow fadeInUp"
                                data-wow-duration="0.4s"
                            >
                                <div className="row section__row">
                                    <div className="col-sm-6 col-lg-3 section__col">
                                        <div className="overview__inner-card">
                                            <div className="overview__inner-card__icon">
                                                <img className='w-75' src="/static/images/cricket.png" alt="" />
                                            </div>
                                            <div className="overview__inner-card__content">
                                                <h5>
                                                    <a href="training-details">Sports</a>
                                                </h5>
                                                <p className="secondary-text">
                                                    Lorem Ipsum is simply dummy text
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-3 section__col">
                                        <div className="overview__inner-card">
                                            <div className="overview__inner-card__icon">
                                                <img className='w-75' src="/static/images/graduation-cap.png" alt="" />
                                            </div>
                                            <div className="overview__inner-card__content">
                                                <h5>
                                                    <a href="training-details">Scolarship</a>
                                                </h5>
                                                <p className="secondary-text">
                                                    Lorem Ipsum is simply dummy text
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-3 section__col">
                                        <div className="overview__inner-card">
                                            <div className="overview__inner-card__icon">
                                                <img className='w-75' src="/static/images/charity.png" alt="" />
                                            </div>
                                            <div className="overview__inner-card__content">
                                                <h5>
                                                    <a href="training-details">Charity</a>
                                                </h5>
                                                <p className="secondary-text">
                                                    Lorem Ipsum is simply dummy text
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-3 section__col">
                                        <div className="overview__inner-card">
                                            <div className="overview__inner-card__icon">
                                                <img className='w-75' src="/static/images/magazine.png" alt="" />
                                            </div>
                                            <div className="overview__inner-card__content">
                                                <h5>
                                                    <a href="training-details">Magazine</a>
                                                </h5>
                                                <p className="secondary-text">
                                                    Lorem Ipsum is simply dummy text
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-xxl-3 d-none d-xl-block">
                            <div className="overview__thumb text-center">
                                <img
                                    className=''
                                    alt="Image"
                                    loading="lazy"
                                    width={182}
                                    height={175}
                                    decoding="async"
                                    data-nimg={1}

                                    src="/static/images/football.png"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Overview;