"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Header = () => {
    const [openCollapsed, setOpenCollapsed] = useState(false)
    const [headerClass, setHeaderClass] = useState('false');

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight) {
                setHeaderClass('header-active');
            } else {
                setHeaderClass('false');
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div>
            <header className={`header ${headerClass}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <nav className="nav">
                                <div className="nav__content">
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
                                    <div>
                                        <h5 className={headerClass === 'false' ? 'text-light' : 'project-color'}>Adarsha Futanta Club</h5>

                                    </div>
                                    <div className={`nav__menu ${openCollapsed ? "nav__menu-active" : "false"}`}>
                                        <div className="nav__menu-logo d-flex d-xl-none">
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
                                            <div>
                                                <h6 className='project-color'>Adarsha Futanta Club</h6>
                                            </div>

                                            <button onClick={() => setOpenCollapsed(false)} className="nav__menu-close bg-transparent">
                                                <i className="fa-solid fa-xmark" />
                                            </button>
                                        </div>

                                        <ul className="nav__menu-items">
                                            <li className="nav__menu-item nav__menu-item--dropdown">
                                                <a
                                                    className="nav__menu-link"
                                                    href="URL:void(0)"
                                                >
                                                    Home
                                                </a>
                                            </li>
                                            <li className="nav__menu-item nav__menu-item--dropdown">
                                                <a
                                                    className="nav__menu-link "
                                                    href="URL:void(0)"
                                                >
                                                    About Us
                                                </a>
                                                {/* <ul className="nav__dropdown false">
                                                    <li>
                                                        <a
                                                            className="nav__dropdown-item hide-nav"
                                                            href="facility"
                                                        >
                                                            Facility
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="nav__dropdown-item hide-nav"
                                                            href="facility%20%281%29/%5Bid%5D"
                                                        >
                                                            Facility Details
                                                        </a>
                                                    </li>
                                                </ul> */}
                                            </li>
                                            <li className="nav__menu-item nav__menu-item--dropdown">
                                                <a
                                                    className="nav__menu-link false"
                                                    href="URL:void(0)"
                                                >
                                                    Our teams
                                                </a>
                                                {/* <ul className="nav__dropdown false">
                                                    <li>
                                                        <a
                                                            className="nav__dropdown-item hide-nav"
                                                            href="facility"
                                                        >
                                                            Facility
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="nav__dropdown-item hide-nav"
                                                            href="facility%20%281%29/%5Bid%5D"
                                                        >
                                                            Facility Details
                                                        </a>
                                                    </li>
                                                </ul> */}
                                            </li>


                                            <li className="nav__menu-item nav__menu-item--dropdown">
                                                <a
                                                    className="nav__menu-link "
                                                    href="URL:void(0)"
                                                >
                                                    Our Blogs
                                                </a>
                                                {/* <ul className="nav__dropdown false">
                                                    <li>
                                                        <a
                                                            className="nav__dropdown-item hide-nav"
                                                            href="about"
                                                        >
                                                            About Us
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="nav__dropdown-item hide-nav"
                                                            href="pricing"
                                                        >
                                                            Pricing Plan
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="nav__dropdown-item hide-nav"
                                                            href="event"
                                                        >
                                                            Event
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="nav__dropdown-item hide-nav" href="faq">
                                                            FAQ
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="nav__dropdown-item hide-nav"
                                                            href="gallery"
                                                        >
                                                            Gallery
                                                        </a>
                                                    </li>
                                                    <li className="nav__menu-link-child">
                                                        <a
                                                            className="nav__dropdown-item nav__menu-link--dropdown nav__menu-link-childr"
                                                            href="URL:void(0)"
                                                        >
                                                            Blog
                                                        </a>
                                                        <ul className="nav__dropdown-child false">
                                                            <li>
                                                                <a
                                                                    className="nav__dropdown-item hide-nav"
                                                                    href="blog"
                                                                >
                                                                    Blog Grid
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="nav__dropdown-item hide-nav"
                                                                    href="blog%20%281%29/list"
                                                                >
                                                                    {" "}
                                                                    Blog List
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="nav__dropdown-item hide-nav"
                                                                    href="blog%20%281%29/%5Bid%5D"
                                                                >
                                                                    Blog Details
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="nav__dropdown-item hide-nav"
                                                            href="contact-us"
                                                        >
                                                            Contact Us
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="nav__dropdown-item hide-nav"
                                                            href="join-club"
                                                        >
                                                            Join Club
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="nav__dropdown-item hide-nav"
                                                            href="support"
                                                        >
                                                            Support
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="nav__dropdown-item hide-nav"
                                                            href="privacy-policy"
                                                        >
                                                            Privacy Policy
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="nav__dropdown-item hide-nav"
                                                            href="/404"
                                                        >
                                                            Error
                                                        </a>
                                                    </li>
                                                </ul> */}
                                            </li>
                                            <li className="nav__menu-item d-block d-md-none">
                                                <Link className='cmn-button cmn-button--secondary' href="/admin">
                                                    Sign In
                                                </Link>



                                                <a className="cmn-button cmn-button--frist" >
                                                    Sign Up
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="social">
                                            <a href="index.htm">
                                                <i className="fa-brands fa-facebook-f" />
                                            </a>
                                            <a href="index.htm">
                                                <i className="fa-brands fa-twitter" />
                                            </a>
                                            <a href="index.htm">
                                                <i className="fa-brands fa-linkedin-in" />
                                            </a>
                                            <a href="index.htm">
                                                <i className="fa-brands fa-square-instagram" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="nav__uncollapsed">

                                        <div className="nav__uncollapsed-item d-none d-md-flex">
                                            <Link className='cmn-button cmn-button--secondary' href="/admin">
                                                Sign In
                                            </Link>
                                            <a className="cmn-button cmn-button--frist">
                                                Sign Up
                                            </a>
                                        </div>
                                        {/* onClick={()=>setOpenCollapsed(true)}  */}
                                        <button onClick={() => setOpenCollapsed(true)} className="nav__bar d-block d-xl-none">
                                            <span className="icon-bar top-bar" />
                                            <span className="icon-bar middle-bar" />
                                            <span className="icon-bar bottom-bar" />
                                        </button>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className={`backdrop ${openCollapsed ? "backdrop-active" : "false"}`} />
            </header>
        </div>
    );
};

export default Header;