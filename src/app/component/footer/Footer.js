import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <div className="container">
                    <div className="row section__row">
                        <div className="col-md-6 col-lg-4 col-xl-3 section__col">
                            <div className="footer__single">
                                {/* <a className="footer__single-logo" href="index.htm">
                                    <img
                                        alt="Logo"
                                        loading="lazy"
                                        width={200}
                                        height={56}
                                        decoding="async"
                                        data-nimg={1}
                                        style={{ color: "transparent" }}
                                        srcSet="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-light.12a03acd.png&w=256&q=75"
                                        src="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-light.12a03acd.png&w=640&q=75"
                                    />
                                </a> */}
                                <div className="d-flex align-items-center">
                                    <div className="nav__logo">
                                        <a href="/">
                                            <img
                                                alt="Logo"
                                                loading="lazy"
                                                width={50}
                                                height={70}
                                                decoding="async"
                                                data-nimg={1}
                                                style={{ color: "transparent" }}
                                                className='project-logo'

                                                src="/static/images/logo.jpeg"
                                            />
                                        </a>
                                    </div>
                                    <div className=' ps-2'>
                                        <h5 className="text-light">Adarsha Futanta Club</h5>
                                        <p className="text-light">Together for a Brighter Future.</p>
                                    </div>
                                </div>
                                <div className="footer__single-content">
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry. Lorem Ipsum has been the industry...
                                    </p>
                                    <div className="social justify-content-start">
                                        <a href="index.htm">
                                            <i className="fa-brands fa-facebook-f" />
                                        </a>
                                        <a href="index.htm">
                                            <i className="fa-brands fa-twitter" />
                                        </a>
                                        <a href="index.htm">
                                            <i className="fa-brands fa-square-instagram" />
                                        </a>
                                        <a href="index.htm">
                                            <i className="fa-brands fa-linkedin-in" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-2 col-xl-3 section__col">
                            <div className="footer__single">
                                <h5>Quick Links</h5>
                                <div className="footer__single-content">
                                    <ul>
                                        <li>
                                            <a href="index.htm">Home</a>
                                        </li>
                                        <li>
                                            <a href="about">About Us</a>
                                        </li>
                                        <li>
                                            <a href="facility">Facility</a>
                                        </li>
                                        <li>
                                            <a href="shop">Shop</a>
                                        </li>
                                        <li>
                                            <a href="contact-us">Contact</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-xl-3 section__col">
                            <div className="footer__single">
                                <h5>Address</h5>
                                <div className="footer__single-content">
                                    <div className="footer__single-content__group">
                                        <p>(480) 555-0103</p>
                                        <p>(406) 555-0120</p>
                                    </div>
                                    <div className="footer__single-content__group">
                                        <p>deanna.curtis@example.com</p>
                                        <p>debra.holt@example.com</p>
                                    </div>
                                    <div className="footer__single-content__group">
                                        <p>285 Great North Road, Grey Lynn, Auckland 1021</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-xl-3 section__col">
                            <h5>Newsletter</h5>
                            <div className="footer__single">
                                <div className="footer__single-content">
                                    <p>
                                        Subscribe our newsletter to get our latest update &amp; news{" "}
                                    </p>
                                    <form action="#" method="post" name="newsletterForm">
                                        <div className="newsletter">
                                            <input
                                                type="email"
                                                name="news-mail"
                                                id="newsMail"
                                                placeholder="Your email address"
                                                required=""
                                            />
                                            <button type="submit">
                                                <i className="golftio-paper-plane" />
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-12">
                            <div className="copyright">
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <p>
                                            Copyright © <span id="copyYear" /> 2025 Adarsha Futanta Club. All Rights
                                            Reserved{/* */}{" "}
                                        </p>
                                    </div>
                                    <div className="col-lg-6">
                                        <ul>
                                            <li>
                                                <a href="support">Support</a>
                                            </li>
                                            <li>
                                                <a href="terms-conditions">Terms of Use</a>
                                            </li>
                                            <li>
                                                <a href="privacy-policy">Privacy Policy</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;