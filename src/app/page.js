
import styles from "./page.module.css";
import Header from "./component/Header/Header";
import Banner from "./component/Banner/Banner";
import Overview from "./component/Banner/Overview";
import Footer from "./component/footer/Footer";
import AboutUs from "./component/Aboutus/AboutUs.js";
import Teammap from "./component/team/Teammap";
import TeamNetwork from "./component/team/TeamNetwork";


export default function Home() {
  return (
    <main className={styles}>
      <div className="main-wrapper" id="app"> <div id="__next">
        <Header></Header>
        <Banner></Banner>
        <Overview></Overview>
        <AboutUs></AboutUs>
        <TeamNetwork></TeamNetwork>
        <Teammap></Teammap>
        <section className="section club">
          <div className="container">
            <div className="row section__row">
              <div className="col-lg-6 section__col">
                <div className="section__content">
                  <h5 className="section__content-sub-title">Club View</h5>
                  <h2 className="section__content-title">
                    Play and enjoy our club for free
                  </h2>
                  <p className="section__content-text">
                    We offer a lot of courses of varying difficulty and beautiful
                    scenery that golfers of all skill levels can enjoy. You will
                    learn golf from professionals with our competent and experienced
                    staff. You will have a great fun with our magnificent
                    illuminated field.
                  </p>
                  <div className="section__content-inner">
                    <ul>
                      <li>
                        <i className="golftio-pin-checked" />
                        300+ Golf Competitions
                      </li>
                      <li>
                        <i className="golftio-pin-checked" />
                        Proficient on Golf
                      </li>
                      <li>
                        <i className="golftio-pin-checked" />
                        Amateur Championships
                      </li>
                      <li>
                        <i className="golftio-pin-checked" />
                        Individual Support{/* */}{" "}
                      </li>
                    </ul>
                  </div>
                  <div className="section__content-cta">
                    <a className="cmn-button" href="join-club">
                      Join Our Club
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-xl-5 offset-xl-1 section__col d-none d-lg-block">
                <div className="club__thumb wow fadeInUp" data-wow-duration="0.4s">
                  <img
                    alt="Image"
                    loading="lazy"
                    width={672}
                    height={656}
                    decoding="async"
                    data-nimg={1}
                    className="unset"
                    style={{ color: "transparent" }}
                    srcSet="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fclub-thumb.7bb8d84b.png&w=750&q=75"
                    src="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fclub-thumb.7bb8d84b.png&w=1920&q=75"
                  />
                  <div className="club__thumb-experience">
                    <h3>
                      <span>30 +</span>
                    </h3>
                    <p>
                      Years <br /> of experience
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="section training wow fadeInUp" data-wow-duration="0.4s">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7">
                <div className="section__header">
                  <h5 className="section__header-sub-title">Trainings</h5>
                  <h2 className="section__header-title">
                    Our professional golf training
                  </h2>
                  <p>
                    AFC Sports Club is a golf club with a history that goes back
                    to XX century. From a cricket club to soccer tournaments,
                  </p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-sm-10 col-md-12">
                <div
                  className="slick-slider training__slider slick-initialized"
                  dir="ltr"
                >
                  <div className="slick-list" style={{ padding: "0px 0px" }}>
                    <div
                      className="slick-track"
                      style={{
                        width: "533.3333333333334%",
                        left: "-100.00000000000001%"
                      }}
                    >
                      <div
                        data-index={-4}
                        tabIndex={-1}
                        className="slick-slide slick-cloned"
                        aria-hidden="true"
                        style={{ width: "6.25%" }}
                      >
                        <div>
                          <div className="training__slider-single">
                            <div className="training__slider-single__thumb">
                              <a href="training-details">
                                <img
                                  alt="Image"
                                  loading="lazy"
                                  width={396}
                                  height={286}
                                  decoding="async"
                                  data-nimg={1}
                                  style={{ color: "transparent" }}
                                  srcSet="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgrip.dd84baf0.png&w=640&q=75"
                                  src="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgrip.dd84baf0.png&w=828&q=75"
                                />
                              </a>
                              <div className="training__slider-single__thumb-small">
                                <i className="golftio-shot-down" />
                              </div>
                            </div>
                            <div className="training__slider-single__content">
                              <h5>
                                <a href="training-details">Correct Grip</a>
                              </h5>
                              <p className="secondary-text">
                                We teach you how to get the right body position in
                                the strokes. You can contact us for any question you
                                may have about this course.
                              </p>
                              <a
                                className="cmn-button cmn-button--secondary"
                                href="training-details"
                              >
                                View more
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={-3}
                        tabIndex={-1}
                        className="slick-slide slick-cloned"
                        aria-hidden="true"
                        style={{ width: "6.25%" }}
                      >
                        <div>
                          <div className="training__slider-single">
                            <div className="training__slider-single__thumb">
                              <a href="training-details">
                                <img
                                  alt="Image"
                                  loading="lazy"
                                  width={396}
                                  height={287}
                                  decoding="async"
                                  data-nimg={1}
                                  style={{ color: "transparent" }}
                                  srcSet="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fthree.6dad72bc.png&w=640&q=75"
                                  src="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fthree.6dad72bc.png&w=828&q=75"
                                />
                              </a>
                              <div className="training__slider-single__thumb-small">
                                <i className="golftio-shot-down" />
                              </div>
                            </div>
                            <div className="training__slider-single__content">
                              <h5>
                                <a href="training-details">Chip Shot</a>
                              </h5>
                              <p className="secondary-text">
                                We teach you how to get the right body position in
                                the strokes. You can contact us for any question you
                                may have about this course.
                              </p>
                              <a
                                className="cmn-button cmn-button--secondary"
                                href="training-details"
                              >
                                View more
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={-2}
                        tabIndex={-1}
                        className="slick-slide slick-cloned"
                        aria-hidden="true"
                        style={{ width: "6.25%" }}
                      >
                        <div>
                          <div className="training__slider-single">
                            <div className="training__slider-single__thumb">
                              <a href="training-details">
                                <img
                                  alt="Image"
                                  loading="lazy"
                                  width={396}
                                  height={286}
                                  decoding="async"
                                  data-nimg={1}
                                  style={{ color: "transparent" }}
                                  srcSet="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fshot.062dea52.png&w=640&q=75"
                                  src="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fshot.062dea52.png&w=828&q=75"
                                />
                              </a>
                              <div className="training__slider-single__thumb-small">
                                <i className="golftio-shot-down" />
                              </div>
                            </div>
                            <div className="training__slider-single__content">
                              <h5>
                                <a href="training-details">Putt Shot</a>
                              </h5>
                              <p className="secondary-text">
                                We teach you how to get the right body position in
                                the strokes. You can contact us for any question you
                                may have about this course.
                              </p>
                              <a
                                className="cmn-button cmn-button--secondary"
                                href="training-details"
                              >
                                View more
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={-1}
                        tabIndex={-1}
                        className="slick-slide slick-active slick-cloned"
                        aria-hidden="false"
                        style={{ width: "6.25%" }}
                      >
                        <div>
                          <div className="training__slider-single">
                            <div className="training__slider-single__thumb">
                              <a href="training-details">
                                <img
                                  alt="Image"
                                  loading="lazy"
                                  width={396}
                                  height={286}
                                  decoding="async"
                                  data-nimg={1}
                                  style={{ color: "transparent" }}
                                  srcSet="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftypes.5c894b57.png&w=640&q=75"
                                  src="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftypes.5c894b57.png&w=828&q=75"
                                />
                              </a>
                              <div className="training__slider-single__thumb-small">
                                <i className="golftio-shot-down" />
                              </div>
                            </div>
                            <div className="training__slider-single__content">
                              <h5>
                                <a href="training-details">Grip Types</a>
                              </h5>
                              <p className="secondary-text">
                                We teach you how to get the right body position in
                                the strokes. You can contact us for any question you
                                may have about this course.
                              </p>
                              <a
                                className="cmn-button cmn-button--secondary"
                                href="training-details"
                              >
                                View more
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={0}
                        className="slick-slide slick-active slick-center slick-current"
                        tabIndex={-1}
                        aria-hidden="false"
                        style={{ outline: "none", width: "6.25%" }}
                      >
                        <div>
                          <div className="training__slider-single">
                            <div className="training__slider-single__thumb">
                              <a href="training-details">
                                <img
                                  alt="Image"
                                  loading="lazy"
                                  width={396}
                                  height={287}
                                  decoding="async"
                                  data-nimg={1}
                                  style={{ color: "transparent" }}
                                  srcSet="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fone.7620098c.png&w=640&q=75"
                                  src="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fone.7620098c.png&w=828&q=75"
                                />
                              </a>
                              <div className="training__slider-single__thumb-small">
                                <i className="golftio-shot-down" />
                              </div>
                            </div>
                            <div className="training__slider-single__content">
                              <h5>
                                <a href="training-details">Body Position</a>
                              </h5>
                              <p className="secondary-text">
                                We teach you how to get the right body position in
                                the strokes. You can contact us for any question you
                                may have about this course.
                              </p>
                              <a
                                className="cmn-button cmn-button--secondary"
                                href="training-details"
                              >
                                View more
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={1}
                        className="slick-slide slick-active"
                        tabIndex={-1}
                        aria-hidden="false"
                        style={{ outline: "none", width: "6.25%" }}
                      >
                        <div>
                          <div className="training__slider-single">
                            <div className="training__slider-single__thumb">
                              <a href="training-details">
                                <img
                                  alt="Image"
                                  loading="lazy"
                                  width={396}
                                  height={287}
                                  decoding="async"
                                  data-nimg={1}
                                  style={{ color: "transparent" }}
                                  srcSet="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftwo.2ffa600a.png&w=640&q=75"
                                  src="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftwo.2ffa600a.png&w=828&q=75"
                                />
                              </a>
                              <div className="training__slider-single__thumb-small">
                                <i className="golftio-shot-down" />
                              </div>
                            </div>
                            <div className="training__slider-single__content">
                              <h5>
                                <a href="training-details">Body Rotation</a>
                              </h5>
                              <p className="secondary-text">
                                We teach you how to get the right body position in
                                the strokes. You can contact us for any question you
                                may have about this course.
                              </p>
                              <a
                                className="cmn-button cmn-button--secondary"
                                href="training-details"
                              >
                                View more
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={2}
                        className="slick-slide"
                        tabIndex={-1}
                        aria-hidden="true"
                        style={{ outline: "none", width: "6.25%" }}
                      >
                        <div>
                          <div className="training__slider-single">
                            <div className="training__slider-single__thumb">
                              <a href="training-details">
                                <img
                                  alt="Image"
                                  loading="lazy"
                                  width={396}
                                  height={286}
                                  decoding="async"
                                  data-nimg={1}
                                  style={{ color: "transparent" }}
                                  srcSet="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgrip.dd84baf0.png&w=640&q=75"
                                  src="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgrip.dd84baf0.png&w=828&q=75"
                                />
                              </a>
                              <div className="training__slider-single__thumb-small">
                                <i className="golftio-shot-down" />
                              </div>
                            </div>
                            <div className="training__slider-single__content">
                              <h5>
                                <a href="training-details">Correct Grip</a>
                              </h5>
                              <p className="secondary-text">
                                We teach you how to get the right body position in
                                the strokes. You can contact us for any question you
                                may have about this course.
                              </p>
                              <a
                                className="cmn-button cmn-button--secondary"
                                href="training-details"
                              >
                                View more
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={3}
                        className="slick-slide"
                        tabIndex={-1}
                        aria-hidden="true"
                        style={{ outline: "none", width: "6.25%" }}
                      >
                        <div>
                          <div className="training__slider-single">
                            <div className="training__slider-single__thumb">
                              <a href="training-details">
                                <img
                                  alt="Image"
                                  loading="lazy"
                                  width={396}
                                  height={287}
                                  decoding="async"
                                  data-nimg={1}
                                  style={{ color: "transparent" }}
                                  srcSet="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fthree.6dad72bc.png&w=640&q=75"
                                  src="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fthree.6dad72bc.png&w=828&q=75"
                                />
                              </a>
                              <div className="training__slider-single__thumb-small">
                                <i className="golftio-shot-down" />
                              </div>
                            </div>
                            <div className="training__slider-single__content">
                              <h5>
                                <a href="training-details">Chip Shot</a>
                              </h5>
                              <p className="secondary-text">
                                We teach you how to get the right body position in
                                the strokes. You can contact us for any question you
                                may have about this course.
                              </p>
                              <a
                                className="cmn-button cmn-button--secondary"
                                href="training-details"
                              >
                                View more
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={4}
                        className="slick-slide"
                        tabIndex={-1}
                        aria-hidden="true"
                        style={{ outline: "none", width: "6.25%" }}
                      >
                        <div>
                          <div className="training__slider-single">
                            <div className="training__slider-single__thumb">
                              <a href="training-details">
                                <img
                                  alt="Image"
                                  loading="lazy"
                                  width={396}
                                  height={286}
                                  decoding="async"
                                  data-nimg={1}
                                  style={{ color: "transparent" }}
                                  srcSet="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fshot.062dea52.png&w=640&q=75"
                                  src="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fshot.062dea52.png&w=828&q=75"
                                />
                              </a>
                              <div className="training__slider-single__thumb-small">
                                <i className="golftio-shot-down" />
                              </div>
                            </div>
                            <div className="training__slider-single__content">
                              <h5>
                                <a href="training-details">Putt Shot</a>
                              </h5>
                              <p className="secondary-text">
                                We teach you how to get the right body position in
                                the strokes. You can contact us for any question you
                                may have about this course.
                              </p>
                              <a
                                className="cmn-button cmn-button--secondary"
                                href="training-details"
                              >
                                View more
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={5}
                        className="slick-slide"
                        tabIndex={-1}
                        aria-hidden="true"
                        style={{ outline: "none", width: "6.25%" }}
                      >
                        <div>
                          <div className="training__slider-single">
                            <div className="training__slider-single__thumb">
                              <a href="training-details">
                                <img
                                  alt="Image"
                                  loading="lazy"
                                  width={396}
                                  height={286}
                                  decoding="async"
                                  data-nimg={1}
                                  style={{ color: "transparent" }}
                                  srcSet="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftypes.5c894b57.png&w=640&q=75"
                                  src="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftypes.5c894b57.png&w=828&q=75"
                                />
                              </a>
                              <div className="training__slider-single__thumb-small">
                                <i className="golftio-shot-down" />
                              </div>
                            </div>
                            <div className="training__slider-single__content">
                              <h5>
                                <a href="training-details">Grip Types</a>
                              </h5>
                              <p className="secondary-text">
                                We teach you how to get the right body position in
                                the strokes. You can contact us for any question you
                                may have about this course.
                              </p>
                              <a
                                className="cmn-button cmn-button--secondary"
                                href="training-details"
                              >
                                View more
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={6}
                        tabIndex={-1}
                        className="slick-slide slick-center slick-cloned"
                        aria-hidden="true"
                        style={{ width: "6.25%" }}
                      >
                        <div>
                          <div className="training__slider-single">
                            <div className="training__slider-single__thumb">
                              <a href="training-details">
                                <img
                                  alt="Image"
                                  loading="lazy"
                                  width={396}
                                  height={287}
                                  decoding="async"
                                  data-nimg={1}
                                  style={{ color: "transparent" }}
                                  srcSet="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fone.7620098c.png&w=640&q=75"
                                  src="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fone.7620098c.png&w=828&q=75"
                                />
                              </a>
                              <div className="training__slider-single__thumb-small">
                                <i className="golftio-shot-down" />
                              </div>
                            </div>
                            <div className="training__slider-single__content">
                              <h5>
                                <a href="training-details">Body Position</a>
                              </h5>
                              <p className="secondary-text">
                                We teach you how to get the right body position in
                                the strokes. You can contact us for any question you
                                may have about this course.
                              </p>
                              <a
                                className="cmn-button cmn-button--secondary"
                                href="training-details"
                              >
                                View more
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={7}
                        tabIndex={-1}
                        className="slick-slide slick-cloned"
                        aria-hidden="true"
                        style={{ width: "6.25%" }}
                      >
                        <div>
                          <div className="training__slider-single">
                            <div className="training__slider-single__thumb">
                              <a href="training-details">
                                <img
                                  alt="Image"
                                  loading="lazy"
                                  width={396}
                                  height={287}
                                  decoding="async"
                                  data-nimg={1}
                                  style={{ color: "transparent" }}
                                  srcSet="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftwo.2ffa600a.png&w=640&q=75"
                                  src="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftwo.2ffa600a.png&w=828&q=75"
                                />
                              </a>
                              <div className="training__slider-single__thumb-small">
                                <i className="golftio-shot-down" />
                              </div>
                            </div>
                            <div className="training__slider-single__content">
                              <h5>
                                <a href="training-details">Body Rotation</a>
                              </h5>
                              <p className="secondary-text">
                                We teach you how to get the right body position in
                                the strokes. You can contact us for any question you
                                may have about this course.
                              </p>
                              <a
                                className="cmn-button cmn-button--secondary"
                                href="training-details"
                              >
                                View more
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={8}
                        tabIndex={-1}
                        className="slick-slide slick-cloned"
                        aria-hidden="true"
                        style={{ width: "6.25%" }}
                      >
                        <div>
                          <div className="training__slider-single">
                            <div className="training__slider-single__thumb">
                              <a href="training-details">
                                <img
                                  alt="Image"
                                  loading="lazy"
                                  width={396}
                                  height={286}
                                  decoding="async"
                                  data-nimg={1}
                                  style={{ color: "transparent" }}
                                  srcSet="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgrip.dd84baf0.png&w=640&q=75"
                                  src="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgrip.dd84baf0.png&w=828&q=75"
                                />
                              </a>
                              <div className="training__slider-single__thumb-small">
                                <i className="golftio-shot-down" />
                              </div>
                            </div>
                            <div className="training__slider-single__content">
                              <h5>
                                <a href="training-details">Correct Grip</a>
                              </h5>
                              <p className="secondary-text">
                                We teach you how to get the right body position in
                                the strokes. You can contact us for any question you
                                may have about this course.
                              </p>
                              <a
                                className="cmn-button cmn-button--secondary"
                                href="training-details"
                              >
                                View more
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={9}
                        tabIndex={-1}
                        className="slick-slide slick-cloned"
                        aria-hidden="true"
                        style={{ width: "6.25%" }}
                      >
                        <div>
                          <div className="training__slider-single">
                            <div className="training__slider-single__thumb">
                              <a href="training-details">
                                <img
                                  alt="Image"
                                  loading="lazy"
                                  width={396}
                                  height={287}
                                  decoding="async"
                                  data-nimg={1}
                                  style={{ color: "transparent" }}
                                  srcSet="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fthree.6dad72bc.png&w=640&q=75"
                                  src="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fthree.6dad72bc.png&w=828&q=75"
                                />
                              </a>
                              <div className="training__slider-single__thumb-small">
                                <i className="golftio-shot-down" />
                              </div>
                            </div>
                            <div className="training__slider-single__content">
                              <h5>
                                <a href="training-details">Chip Shot</a>
                              </h5>
                              <p className="secondary-text">
                                We teach you how to get the right body position in
                                the strokes. You can contact us for any question you
                                may have about this course.
                              </p>
                              <a
                                className="cmn-button cmn-button--secondary"
                                href="training-details"
                              >
                                View more
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={10}
                        tabIndex={-1}
                        className="slick-slide slick-cloned"
                        aria-hidden="true"
                        style={{ width: "6.25%" }}
                      >
                        <div>
                          <div className="training__slider-single">
                            <div className="training__slider-single__thumb">
                              <a href="training-details">
                                <img
                                  alt="Image"
                                  loading="lazy"
                                  width={396}
                                  height={286}
                                  decoding="async"
                                  data-nimg={1}
                                  style={{ color: "transparent" }}
                                  srcSet="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fshot.062dea52.png&w=640&q=75"
                                  src="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fshot.062dea52.png&w=828&q=75"
                                />
                              </a>
                              <div className="training__slider-single__thumb-small">
                                <i className="golftio-shot-down" />
                              </div>
                            </div>
                            <div className="training__slider-single__content">
                              <h5>
                                <a href="training-details">Putt Shot</a>
                              </h5>
                              <p className="secondary-text">
                                We teach you how to get the right body position in
                                the strokes. You can contact us for any question you
                                may have about this course.
                              </p>
                              <a
                                className="cmn-button cmn-button--secondary"
                                href="training-details"
                              >
                                View more
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={11}
                        tabIndex={-1}
                        className="slick-slide slick-cloned"
                        aria-hidden="true"
                        style={{ width: "6.25%" }}
                      >
                        <div>
                          <div className="training__slider-single">
                            <div className="training__slider-single__thumb">
                              <a href="training-details">
                                <img
                                  alt="Image"
                                  loading="lazy"
                                  width={396}
                                  height={286}
                                  decoding="async"
                                  data-nimg={1}
                                  style={{ color: "transparent" }}
                                  srcSet="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftypes.5c894b57.png&w=640&q=75"
                                  src="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftypes.5c894b57.png&w=828&q=75"
                                />
                              </a>
                              <div className="training__slider-single__thumb-small">
                                <i className="golftio-shot-down" />
                              </div>
                            </div>
                            <div className="training__slider-single__content">
                              <h5>
                                <a href="training-details">Grip Types</a>
                              </h5>
                              <p className="secondary-text">
                                We teach you how to get the right body position in
                                the strokes. You can contact us for any question you
                                may have about this course.
                              </p>
                              <a
                                className="cmn-button cmn-button--secondary"
                                href="training-details"
                              >
                                View more
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="slider-navigation ">
                  <button className="next-training cmn-button cmn-button--secondary">
                    <i className="fa-solid fa-angle-left" />
                  </button>
                  <button className="prev-training cmn-button cmn-button--secondary">
                    <i className="fa-solid fa-angle-right" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <section className="section counter">
          <div className="container">
            <div className="row section__row">
              <div className="col-sm-6 col-lg-3 section__col">
                <div className="counter__card">
                  <div className="counter__card-thumb">
                    <i className="golftio-users" />
                  </div>
                  <div className="counter__card-content">
                    <h2>
                      <span>850 +</span>
                    </h2>
                    <p className="primary-text">Active Member</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3 section__col">
                <div className="counter__card">
                  <div className="counter__card-thumb">
                    <i className="golftio-shot-ground" />
                  </div>
                  <div className="counter__card-content">
                    <h2>
                      <span>70 +</span>
                    </h2>
                    <p className="primary-text">Professional Trainer</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3 section__col">
                <div className="counter__card">
                  <div className="counter__card-thumb">
                    <i className="golftio-trophy" />
                  </div>
                  <div className="counter__card-content">
                    <h2>
                      <span>50 +</span>
                    </h2>
                    <p className="primary-text">Award Winning</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3 section__col">
                <div className="counter__card">
                  <div className="counter__card-thumb">
                    <i className="golftio-user-shield" />
                  </div>
                  <div className="counter__card-content">
                    <h2>
                      <span>60 +</span>
                    </h2>
                    <p className="primary-text">Available Field</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="section pricing wow fadeInUp" data-wow-duration="0.4s">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-sm-10 col-lg-6 col-xl-7">
                <div className="section__header">
                  <h5 className="section__header-sub-title">Pricing Plan</h5>
                  <h2 className="section__header-title">
                    Exclusive offer Choose our offer now
                  </h2>
                  <p>
                    AFC Sports Club is a golf club with a history that goes back
                    to XX century. From a cricket club to soccer tournaments,
                  </p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center section__row">
              <div className="col-sm-10 col-md-6 col-lg-4 section__col">
                <div className="pricing__card ">
                  <div className="pricing__card-head">
                    <h2>
                      <span className="primary-text">$</span>59
                      <span className="primary-text">/Mo</span>
                    </h2>
                    <h5>Junior</h5>
                    <p className="secondary-text">Persons aged 18 and under.</p>
                    <div className="pricing__card-head__thumb">
                      <i className="golftio-shot-down" />
                    </div>
                  </div>
                  <div className="pricing__card-body">
                    <ul>
                      <li className="secondary-text">
                        <i className="golftio-pin-checked" />
                        Weekday
                      </li>
                      <li className="secondary-text">
                        <i className="golftio-pin-checked" />9 hole course
                      </li>
                      <li className="secondary-text">
                        <i className="golftio-pin-checked" />
                        10% Discount
                      </li>
                      <li className="secondary-text">
                        <i className="golftio-pin-checked" />
                        One-time free training
                      </li>
                      <li className="secondary-text">
                        <i className="golftio-pin-checked" />
                        100 free balls per day
                      </li>
                      <li className="secondary-text">
                        <i className="golftio-pin-checked" />
                        Course and facility access
                      </li>
                    </ul>
                  </div>
                  <div className="pricing__card-cta">
                    <a className="cmn-button " href="join-club">
                      Get Membership
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-10 col-md-6 col-lg-4 section__col">
                <div className="pricing__card ">
                  <div className="pricing__card-head">
                    <h2>
                      <span className="primary-text">$</span>99
                      <span className="primary-text">/Mo</span>
                    </h2>
                    <h5>Intermediate</h5>
                    <p className="secondary-text">For adults over 25 years.</p>
                    <div className="pricing__card-head__thumb">
                      <i className="golftio-shot-upper" />
                    </div>
                  </div>
                  <div className="pricing__card-body">
                    <ul>
                      <li className="secondary-text">
                        <i className="golftio-pin-checked" />
                        Weekend Seasonal
                      </li>
                      <li className="secondary-text">
                        <i className="golftio-pin-checked" />
                        18 hole course
                      </li>
                      <li className="secondary-text">
                        <i className="golftio-pin-checked" />
                        15% Discount
                      </li>
                      <li className="secondary-text">
                        <i className="golftio-pin-checked" />
                        3+ free training
                      </li>
                      <li className="secondary-text">
                        <i className="golftio-pin-checked" />
                        200 free balls per day
                      </li>
                      <li className="secondary-text">
                        <i className="golftio-pin-checked" />
                        Course and facility access
                      </li>
                    </ul>
                  </div>
                  <div className="pricing__card-cta">
                    <a className="cmn-button " href="join-club">
                      Get Membership
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-10 col-md-6 col-lg-4 section__col">
                <div className="pricing__card ">
                  <div className="pricing__card-head">
                    <h2>
                      <span className="primary-text">$</span>199
                      <span className="primary-text">/Mo</span>
                    </h2>
                    <h5>Professional</h5>
                    <p className="secondary-text">For adults over 30+ years.</p>
                    <div className="pricing__card-head__thumb">
                      <i className="golftio-shot-ground" />
                    </div>
                  </div>
                  <div className="pricing__card-body">
                    <ul>
                      <li className="secondary-text">
                        <i className="golftio-pin-checked" />
                        Weekday
                      </li>
                      <li className="secondary-text">
                        <i className="golftio-pin-checked" />
                        30 hole course
                      </li>
                      <li className="secondary-text">
                        <i className="golftio-pin-checked" />
                        30% Discount
                      </li>
                      <li className="secondary-text">
                        <i className="golftio-pin-checked" />
                        5+ free training
                      </li>
                      <li className="secondary-text">
                        <i className="golftio-pin-checked" />
                        500 free balls per day
                      </li>
                      <li className="secondary-text">
                        <i className="golftio-pin-checked" />
                        Course and facility access
                      </li>
                    </ul>
                  </div>
                  <div className="pricing__card-cta">
                    <a className="cmn-button " href="join-club">
                      Get Membership
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* <section
          className="section testimonial wow fadeInUp"
          data-wow-duration="0.4s"
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7">
                <div className="section__header">
                  <h5 className="section__header-sub-title">Testimonial</h5>
                  <h2 className="section__header-title">
                    Our Members Thinking About Us
                  </h2>
                  <p>
                    AFC Sports Club is a golf club with a history that goes back
                    to XX century. From a cricket club to soccer tournaments,
                  </p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-sm-10 col-md-12">
                <div
                  className="slick-slider testimonial__slider slick-initialized"
                  dir="ltr"
                >
                  <div className="slick-list" style={{ padding: "0px 0px" }}>
                    <div
                      className="slick-track"
                      style={{
                        width: "533.3333333333334%",
                        left: "-100.00000000000001%"
                      }}
                    >
                      <div
                        data-index={-4}
                        tabIndex={-1}
                        className="slick-slide slick-cloned"
                        aria-hidden="true"
                        style={{ width: "6.25%" }}
                      >
                        <div>
                          <div className="testimonial__slider-card">
                            <div className="testimonial__slider-card__body">
                              <div className="testimonial__slider-card__body-review">
                                <i className="golftio-star" />
                                <i className="golftio-star" />
                                <i className="golftio-star" />
                                <i className="golftio-star" />
                                <i className="golftio-star" />
                              </div>
                              <p>
                                Our professional team will make sure that you find
                                the right course and the best trainer to receive
                                maximum efficiency. All our trainers are
                                professional golf players with the highest...
                              </p>
                            </div>
                            <div className="testimonial__slider-card__author">
                              <div className="testimonial__slider-card__author-thumb">
                                <img
                                  alt="Image"
                                  loading="lazy"
                                  width={61}
                                  height={61}
                                  decoding="async"
                                  data-nimg={1}
                                  style={{ color: "transparent" }}
                                  srcSet="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fthree.5ddef509.png&w=64&q=75"
                                  src="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fthree.5ddef509.png&w=128&q=75"
                                />
                              </div>
                              <div className="testimonial__slider-card__author-info">
                                <h6>Brad Hogds</h6>
                                <p className="secondary-text">Junior Player</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={-3}
                        tabIndex={-1}
                        className="slick-slide slick-cloned"
                        aria-hidden="true"
                        style={{ width: "6.25%" }}
                      >
                        <div>
                          <div className="testimonial__slider-card">
                            <div className="testimonial__slider-card__body">
                              <div className="testimonial__slider-card__body-review">
                                <i className="golftio-star" />
                                <i className="golftio-star" />
                                <i className="golftio-star" />
                                <i className="golftio-star" />
                                <i className="golftio-star" />
                              </div>
                              <p>
                                Our professional team will make sure that you find
                                the right course and the best trainer to receive
                                maximum efficiency. All our trainers are
                                professional golf players with the highest...
                              </p>
                            </div>
                            <div className="testimonial__slider-card__author">
                              <div className="testimonial__slider-card__author-thumb">
                                <img
                                  alt="Image"
                                  loading="lazy"
                                  width={61}
                                  height={61}
                                  decoding="async"
                                  data-nimg={1}
                                  style={{ color: "transparent" }}
                                  srcSet="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fone.ac67711b.png&w=64&q=75"
                                  src="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fone.ac67711b.png&w=128&q=75"
                                />
                              </div>
                              <div className="testimonial__slider-card__author-info">
                                <h6>Jenelia suza</h6>
                                <p className="secondary-text">Student</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={-2}
                        tabIndex={-1}
                        className="slick-slide slick-cloned"
                        aria-hidden="true"
                        style={{ width: "6.25%" }}
                      >
                        <div>
                          <div className="testimonial__slider-card">
                            <div className="testimonial__slider-card__body">
                              <div className="testimonial__slider-card__body-review">
                                <i className="golftio-star" />
                                <i className="golftio-star" />
                                <i className="golftio-star" />
                                <i className="golftio-star" />
                                <i className="golftio-star" />
                              </div>
                              <p>
                                Our professional team will make sure that you find
                                the right course and the best trainer to receive
                                maximum efficiency. All our trainers are
                                professional golf players with the highest...
                              </p>
                            </div>
                            <div className="testimonial__slider-card__author">
                              <div className="testimonial__slider-card__author-thumb">
                                <img
                                  alt="Image"
                                  loading="lazy"
                                  width={61}
                                  height={61}
                                  decoding="async"
                                  data-nimg={1}
                                  style={{ color: "transparent" }}
                                  srcSet="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftwo.64a079c9.png&w=64&q=75"
                                  src="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftwo.64a079c9.png&w=128&q=75"
                                />
                              </div>
                              <div className="testimonial__slider-card__author-info">
                                <h6>Sarika Paleccha</h6>
                                <p className="secondary-text">Player</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={-1}
                        tabIndex={-1}
                        className="slick-slide slick-active slick-cloned"
                        aria-hidden="false"
                        style={{ width: "6.25%" }}
                      >
                        <div>
                          <div className="testimonial__slider-card">
                            <div className="testimonial__slider-card__body">
                              <div className="testimonial__slider-card__body-review">
                                <i className="golftio-star" />
                                <i className="golftio-star" />
                                <i className="golftio-star" />
                                <i className="golftio-star" />
                                <i className="golftio-star" />
                              </div>
                              <p>
                                Our professional team will make sure that you find
                                the right course and the best trainer to receive
                                maximum efficiency. All our trainers are
                                professional golf players with the highest...
                              </p>
                            </div>
                            <div className="testimonial__slider-card__author">
                              <div className="testimonial__slider-card__author-thumb">
                                <img
                                  alt="Image"
                                  loading="lazy"
                                  width={61}
                                  height={61}
                                  decoding="async"
                                  data-nimg={1}
                                  style={{ color: "transparent" }}
                                  srcSet="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fthree.5ddef509.png&w=64&q=75"
                                  src="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fthree.5ddef509.png&w=128&q=75"
                                />
                              </div>
                              <div className="testimonial__slider-card__author-info">
                                <h6>Brad Hogds</h6>
                                <p className="secondary-text">Junior Player</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={0}
                        className="slick-slide slick-active slick-center slick-current"
                        tabIndex={-1}
                        aria-hidden="false"
                        style={{ outline: "none", width: "6.25%" }}
                      >
                        <div>
                          <div className="testimonial__slider-card">
                            <div className="testimonial__slider-card__body">
                              <div className="testimonial__slider-card__body-review">
                                <i className="golftio-star" />
                                <i className="golftio-star" />
                                <i className="golftio-star" />
                                <i className="golftio-star" />
                                <i className="golftio-star" />
                              </div>
                              <p>
                                Our professional team will make sure that you find
                                the right course and the best trainer to receive
                                maximum efficiency. All our trainers are
                                professional golf players with the highest...
                              </p>
                            </div>
                            <div className="testimonial__slider-card__author">
                              <div className="testimonial__slider-card__author-thumb">
                                <img
                                  alt="Image"
                                  loading="lazy"
                                  width={61}
                                  height={61}
                                  decoding="async"
                                  data-nimg={1}
                                  style={{ color: "transparent" }}
                                  srcSet="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fone.ac67711b.png&w=64&q=75"
                                  src="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fone.ac67711b.png&w=128&q=75"
                                />
                              </div>
                              <div className="testimonial__slider-card__author-info">
                                <h6>Jenelia suza</h6>
                                <p className="secondary-text">Student</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={1}
                        className="slick-slide slick-active"
                        tabIndex={-1}
                        aria-hidden="false"
                        style={{ outline: "none", width: "6.25%" }}
                      >
                        <div>
                          <div className="testimonial__slider-card">
                            <div className="testimonial__slider-card__body">
                              <div className="testimonial__slider-card__body-review">
                                <i className="golftio-star" />
                                <i className="golftio-star" />
                                <i className="golftio-star" />
                                <i className="golftio-star" />
                                <i className="golftio-star" />
                              </div>
                              <p>
                                Our professional team will make sure that you find
                                the right course and the best trainer to receive
                                maximum efficiency. All our trainers are
                                professional golf players with the highest...
                              </p>
                            </div>
                            <div className="testimonial__slider-card__author">
                              <div className="testimonial__slider-card__author-thumb">
                                <img
                                  alt="Image"
                                  loading="lazy"
                                  width={61}
                                  height={61}
                                  decoding="async"
                                  data-nimg={1}
                                  style={{ color: "transparent" }}
                                  srcSet="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftwo.64a079c9.png&w=64&q=75"
                                  src="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftwo.64a079c9.png&w=128&q=75"
                                />
                              </div>
                              <div className="testimonial__slider-card__author-info">
                                <h6>Sarika Paleccha</h6>
                                <p className="secondary-text">Player</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={2}
                        className="slick-slide"
                        tabIndex={-1}
                        aria-hidden="true"
                        style={{ outline: "none", width: "6.25%" }}
                      >
                        <div>
                          <div className="testimonial__slider-card">
                            <div className="testimonial__slider-card__body">
                              <div className="testimonial__slider-card__body-review">
                                <i className="golftio-star" />
                                <i className="golftio-star" />
                                <i className="golftio-star" />
                                <i className="golftio-star" />
                                <i className="golftio-star" />
                              </div>
                              <p>
                                Our professional team will make sure that you find
                                the right course and the best trainer to receive
                                maximum efficiency. All our trainers are
                                professional golf players with the highest...
                              </p>
                            </div>
                            <div className="testimonial__slider-card__author">
                              <div className="testimonial__slider-card__author-thumb">
                                <img
                                  alt="Image"
                                  loading="lazy"
                                  width={61}
                                  height={61}
                                  decoding="async"
                                  data-nimg={1}
                                  style={{ color: "transparent" }}
                                  srcSet="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fthree.5ddef509.png&w=64&q=75"
                                  src="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fthree.5ddef509.png&w=128&q=75"
                                />
                              </div>
                              <div className="testimonial__slider-card__author-info">
                                <h6>Brad Hogds</h6>
                                <p className="secondary-text">Junior Player</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={3}
                        className="slick-slide"
                        tabIndex={-1}
                        aria-hidden="true"
                        style={{ outline: "none", width: "6.25%" }}
                      >
                        <div>
                          <div className="testimonial__slider-card">
                            <div className="testimonial__slider-card__body">
                              <div className="testimonial__slider-card__body-review">
                                <i className="golftio-star" />
                                <i className="golftio-star" />
                                <i className="golftio-star" />
                                <i className="golftio-star" />
                                <i className="golftio-star" />
                              </div>
                              <p>
                                Our professional team will make sure that you find
                                the right course and the best trainer to receive
                                maximum efficiency. All our trainers are
                                professional golf players with the highest...
                              </p>
                            </div>
                            <div className="testimonial__slider-card__author">
                              <div className="testimonial__slider-card__author-thumb">
                                <img
                                  alt="Image"
                                  loading="lazy"
                                  width={61}
                                  height={61}
                                  decoding="async"
                                  data-nimg={1}
                                  style={{ color: "transparent" }}
                                  srcSet="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fone.ac67711b.png&w=64&q=75"
                                  src="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fone.ac67711b.png&w=128&q=75"
                                />
                              </div>
                              <div className="testimonial__slider-card__author-info">
                                <h6>Jenelia suza</h6>
                                <p className="secondary-text">Student</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={4}
                        className="slick-slide"
                        tabIndex={-1}
                        aria-hidden="true"
                        style={{ outline: "none", width: "6.25%" }}
                      >
                        <div>
                          <div className="testimonial__slider-card">
                            <div className="testimonial__slider-card__body">
                              <div className="testimonial__slider-card__body-review">
                                <i className="golftio-star" />
                                <i className="golftio-star" />
                                <i className="golftio-star" />
                                <i className="golftio-star" />
                                <i className="golftio-star" />
                              </div>
                              <p>
                                Our professional team will make sure that you find
                                the right course and the best trainer to receive
                                maximum efficiency. All our trainers are
                                professional golf players with the highest...
                              </p>
                            </div>
                            <div className="testimonial__slider-card__author">
                              <div className="testimonial__slider-card__author-thumb">
                                <img
                                  alt="Image"
                                  loading="lazy"
                                  width={61}
                                  height={61}
                                  decoding="async"
                                  data-nimg={1}
                                  style={{ color: "transparent" }}
                                  srcSet="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftwo.64a079c9.png&w=64&q=75"
                                  src="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftwo.64a079c9.png&w=128&q=75"
                                />
                              </div>
                              <div className="testimonial__slider-card__author-info">
                                <h6>Sarika Paleccha</h6>
                                <p className="secondary-text">Player</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={5}
                        className="slick-slide"
                        tabIndex={-1}
                        aria-hidden="true"
                        style={{ outline: "none", width: "6.25%" }}
                      >
                        <div>
                          <div className="testimonial__slider-card">
                            <div className="testimonial__slider-card__body">
                              <div className="testimonial__slider-card__body-review">
                                <i className="golftio-star" />
                                <i className="golftio-star" />
                                <i className="golftio-star" />
                                <i className="golftio-star" />
                                <i className="golftio-star" />
                              </div>
                              <p>
                                Our professional team will make sure that you find
                                the right course and the best trainer to receive
                                maximum efficiency. All our trainers are
                                professional golf players with the highest...
                              </p>
                            </div>
                            <div className="testimonial__slider-card__author">
                              <div className="testimonial__slider-card__author-thumb">
                                <img
                                  alt="Image"
                                  loading="lazy"
                                  width={61}
                                  height={61}
                                  decoding="async"
                                  data-nimg={1}
                                  style={{ color: "transparent" }}
                                  srcSet="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fthree.5ddef509.png&w=64&q=75"
                                  src="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fthree.5ddef509.png&w=128&q=75"
                                />
                              </div>
                              <div className="testimonial__slider-card__author-info">
                                <h6>Brad Hogds</h6>
                                <p className="secondary-text">Junior Player</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={6}
                        tabIndex={-1}
                        className="slick-slide slick-center slick-cloned"
                        aria-hidden="true"
                        style={{ width: "6.25%" }}
                      >
                        <div>
                          <div className="testimonial__slider-card">
                            <div className="testimonial__slider-card__body">
                              <div className="testimonial__slider-card__body-review">
                                <i className="golftio-star" />
                                <i className="golftio-star" />
                                <i className="golftio-star" />
                                <i className="golftio-star" />
                                <i className="golftio-star" />
                              </div>
                              <p>
                                Our professional team will make sure that you find
                                the right course and the best trainer to receive
                                maximum efficiency. All our trainers are
                                professional golf players with the highest...
                              </p>
                            </div>
                            <div className="testimonial__slider-card__author">
                              <div className="testimonial__slider-card__author-thumb">
                                <img
                                  alt="Image"
                                  loading="lazy"
                                  width={61}
                                  height={61}
                                  decoding="async"
                                  data-nimg={1}
                                  style={{ color: "transparent" }}
                                  srcSet="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fone.ac67711b.png&w=64&q=75"
                                  src="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fone.ac67711b.png&w=128&q=75"
                                />
                              </div>
                              <div className="testimonial__slider-card__author-info">
                                <h6>Jenelia suza</h6>
                                <p className="secondary-text">Student</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={7}
                        tabIndex={-1}
                        className="slick-slide slick-cloned"
                        aria-hidden="true"
                        style={{ width: "6.25%" }}
                      >
                        <div>
                          <div className="testimonial__slider-card">
                            <div className="testimonial__slider-card__body">
                              <div className="testimonial__slider-card__body-review">
                                <i className="golftio-star" />
                                <i className="golftio-star" />
                                <i className="golftio-star" />
                                <i className="golftio-star" />
                                <i className="golftio-star" />
                              </div>
                              <p>
                                Our professional team will make sure that you find
                                the right course and the best trainer to receive
                                maximum efficiency. All our trainers are
                                professional golf players with the highest...
                              </p>
                            </div>
                            <div className="testimonial__slider-card__author">
                              <div className="testimonial__slider-card__author-thumb">
                                <img
                                  alt="Image"
                                  loading="lazy"
                                  width={61}
                                  height={61}
                                  decoding="async"
                                  data-nimg={1}
                                  style={{ color: "transparent" }}
                                  srcSet="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftwo.64a079c9.png&w=64&q=75"
                                  src="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftwo.64a079c9.png&w=128&q=75"
                                />
                              </div>
                              <div className="testimonial__slider-card__author-info">
                                <h6>Sarika Paleccha</h6>
                                <p className="secondary-text">Player</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={8}
                        tabIndex={-1}
                        className="slick-slide slick-cloned"
                        aria-hidden="true"
                        style={{ width: "6.25%" }}
                      >
                        <div>
                          <div className="testimonial__slider-card">
                            <div className="testimonial__slider-card__body">
                              <div className="testimonial__slider-card__body-review">
                                <i className="golftio-star" />
                                <i className="golftio-star" />
                                <i className="golftio-star" />
                                <i className="golftio-star" />
                                <i className="golftio-star" />
                              </div>
                              <p>
                                Our professional team will make sure that you find
                                the right course and the best trainer to receive
                                maximum efficiency. All our trainers are
                                professional golf players with the highest...
                              </p>
                            </div>
                            <div className="testimonial__slider-card__author">
                              <div className="testimonial__slider-card__author-thumb">
                                <img
                                  alt="Image"
                                  loading="lazy"
                                  width={61}
                                  height={61}
                                  decoding="async"
                                  data-nimg={1}
                                  style={{ color: "transparent" }}
                                  srcSet="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fthree.5ddef509.png&w=64&q=75"
                                  src="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fthree.5ddef509.png&w=128&q=75"
                                />
                              </div>
                              <div className="testimonial__slider-card__author-info">
                                <h6>Brad Hogds</h6>
                                <p className="secondary-text">Junior Player</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={9}
                        tabIndex={-1}
                        className="slick-slide slick-cloned"
                        aria-hidden="true"
                        style={{ width: "6.25%" }}
                      >
                        <div>
                          <div className="testimonial__slider-card">
                            <div className="testimonial__slider-card__body">
                              <div className="testimonial__slider-card__body-review">
                                <i className="golftio-star" />
                                <i className="golftio-star" />
                                <i className="golftio-star" />
                                <i className="golftio-star" />
                                <i className="golftio-star" />
                              </div>
                              <p>
                                Our professional team will make sure that you find
                                the right course and the best trainer to receive
                                maximum efficiency. All our trainers are
                                professional golf players with the highest...
                              </p>
                            </div>
                            <div className="testimonial__slider-card__author">
                              <div className="testimonial__slider-card__author-thumb">
                                <img
                                  alt="Image"
                                  loading="lazy"
                                  width={61}
                                  height={61}
                                  decoding="async"
                                  data-nimg={1}
                                  style={{ color: "transparent" }}
                                  srcSet="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fone.ac67711b.png&w=64&q=75"
                                  src="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fone.ac67711b.png&w=128&q=75"
                                />
                              </div>
                              <div className="testimonial__slider-card__author-info">
                                <h6>Jenelia suza</h6>
                                <p className="secondary-text">Student</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={10}
                        tabIndex={-1}
                        className="slick-slide slick-cloned"
                        aria-hidden="true"
                        style={{ width: "6.25%" }}
                      >
                        <div>
                          <div className="testimonial__slider-card">
                            <div className="testimonial__slider-card__body">
                              <div className="testimonial__slider-card__body-review">
                                <i className="golftio-star" />
                                <i className="golftio-star" />
                                <i className="golftio-star" />
                                <i className="golftio-star" />
                                <i className="golftio-star" />
                              </div>
                              <p>
                                Our professional team will make sure that you find
                                the right course and the best trainer to receive
                                maximum efficiency. All our trainers are
                                professional golf players with the highest...
                              </p>
                            </div>
                            <div className="testimonial__slider-card__author">
                              <div className="testimonial__slider-card__author-thumb">
                                <img
                                  alt="Image"
                                  loading="lazy"
                                  width={61}
                                  height={61}
                                  decoding="async"
                                  data-nimg={1}
                                  style={{ color: "transparent" }}
                                  srcSet="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftwo.64a079c9.png&w=64&q=75"
                                  src="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftwo.64a079c9.png&w=128&q=75"
                                />
                              </div>
                              <div className="testimonial__slider-card__author-info">
                                <h6>Sarika Paleccha</h6>
                                <p className="secondary-text">Player</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={11}
                        tabIndex={-1}
                        className="slick-slide slick-cloned"
                        aria-hidden="true"
                        style={{ width: "6.25%" }}
                      >
                        <div>
                          <div className="testimonial__slider-card">
                            <div className="testimonial__slider-card__body">
                              <div className="testimonial__slider-card__body-review">
                                <i className="golftio-star" />
                                <i className="golftio-star" />
                                <i className="golftio-star" />
                                <i className="golftio-star" />
                                <i className="golftio-star" />
                              </div>
                              <p>
                                Our professional team will make sure that you find
                                the right course and the best trainer to receive
                                maximum efficiency. All our trainers are
                                professional golf players with the highest...
                              </p>
                            </div>
                            <div className="testimonial__slider-card__author">
                              <div className="testimonial__slider-card__author-thumb">
                                <img
                                  alt="Image"
                                  loading="lazy"
                                  width={61}
                                  height={61}
                                  decoding="async"
                                  data-nimg={1}
                                  style={{ color: "transparent" }}
                                  srcSet="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fthree.5ddef509.png&w=64&q=75"
                                  src="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fthree.5ddef509.png&w=128&q=75"
                                />
                              </div>
                              <div className="testimonial__slider-card__author-info">
                                <h6>Brad Hogds</h6>
                                <p className="secondary-text">Junior Player</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="slider-navigation ">
                  <button className="next-training cmn-button cmn-button--secondary">
                    <i className="fa-solid fa-angle-left" />
                  </button>
                  <button className="prev-training cmn-button cmn-button--secondary">
                    <i className="fa-solid fa-angle-right" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* <section className="section team wow fadeInUp" data-wow-duration="0.4s">
          <div className="container">
            <div className="row section__row align-items-center">
              <div className="col-lg-6 col-xl-6 section__col">
                <div
                  className="slick-slider team__slider slick-initialized"
                  dir="ltr"
                >
                  <div className="slick-list" style={{ padding: "0px 0px" }}>
                    <div
                      className="slick-track"
                      style={{ width: "950%", left: "-125.00000000000003%" }}
                    >
                      <div
                        data-index={-3}
                        tabIndex={-1}
                        className="slick-slide slick-cloned"
                        aria-hidden="true"
                        style={{ width: "5.2631578947368425%" }}
                      >
                        <div>
                          <div className="team__slider-card">
                            <div className="team__slider-card__thumb">
                              <img
                                alt="Team"
                                loading="lazy"
                                width={286}
                                height={204}
                                decoding="async"
                                data-nimg={1}
                                style={{ color: "transparent" }}
                                srcSet="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftwo.afca2b86.png&w=384&q=75"
                                src="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftwo.afca2b86.png&w=640&q=75"
                              />
                            </div>
                            <div className="team__slider-card__content">
                              <h5>Mariah Tal</h5>
                              <p className="secondary-text">Golfer</p>
                              <div className="social justify-content-center">
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
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={-2}
                        tabIndex={-1}
                        className="slick-slide slick-cloned"
                        aria-hidden="true"
                        style={{ width: "5.2631578947368425%" }}
                      >
                        <div>
                          <div className="team__slider-card">
                            <div className="team__slider-card__thumb">
                              <img
                                alt="Team"
                                loading="lazy"
                                width={286}
                                height={203}
                                decoding="async"
                                data-nimg={1}
                                style={{ color: "transparent" }}
                                srcSet="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fthree.cb0b21ea.png&w=384&q=75"
                                src="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fthree.cb0b21ea.png&w=640&q=75"
                              />
                            </div>
                            <div className="team__slider-card__content">
                              <h5>Robert Fox</h5>
                              <p className="secondary-text">Golfer</p>
                              <div className="social justify-content-center">
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
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={-1}
                        tabIndex={-1}
                        className="slick-slide slick-active slick-cloned"
                        aria-hidden="false"
                        style={{ width: "5.2631578947368425%" }}
                      >
                        <div>
                          <div className="team__slider-card">
                            <div className="team__slider-card__thumb">
                              <img
                                alt="Team"
                                loading="lazy"
                                width={286}
                                height={203}
                                decoding="async"
                                data-nimg={1}
                                style={{ color: "transparent" }}
                                srcSet="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffour.aea6eb2e.png&w=384&q=75"
                                src="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffour.aea6eb2e.png&w=640&q=75"
                              />
                            </div>
                            <div className="team__slider-card__content">
                              <h5>Andrea Reed</h5>
                              <p className="secondary-text">Golfer</p>
                              <div className="social justify-content-center">
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
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={0}
                        className="slick-slide slick-active slick-center slick-current"
                        tabIndex={-1}
                        aria-hidden="false"
                        style={{ outline: "none", width: "5.2631578947368425%" }}
                      >
                        <div>
                          <div className="team__slider-card">
                            <div className="team__slider-card__thumb">
                              <img
                                alt="Team"
                                loading="lazy"
                                width={286}
                                height={204}
                                decoding="async"
                                data-nimg={1}
                                style={{ color: "transparent" }}
                                srcSet="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fone.5b0a2930.png&w=384&q=75"
                                src="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fone.5b0a2930.png&w=640&q=75"
                              />
                            </div>
                            <div className="team__slider-card__content">
                              <h5>Jerome Bell</h5>
                              <p className="secondary-text">Golfer</p>
                              <div className="social justify-content-center">
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
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={1}
                        className="slick-slide slick-active"
                        tabIndex={-1}
                        aria-hidden="false"
                        style={{ outline: "none", width: "5.2631578947368425%" }}
                      >
                        <div>
                          <div className="team__slider-card">
                            <div className="team__slider-card__thumb">
                              <img
                                alt="Team"
                                loading="lazy"
                                width={286}
                                height={204}
                                decoding="async"
                                data-nimg={1}
                                style={{ color: "transparent" }}
                                srcSet="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftwo.afca2b86.png&w=384&q=75"
                                src="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftwo.afca2b86.png&w=640&q=75"
                              />
                            </div>
                            <div className="team__slider-card__content">
                              <h5>Mariah Tal</h5>
                              <p className="secondary-text">Golfer</p>
                              <div className="social justify-content-center">
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
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={2}
                        className="slick-slide"
                        tabIndex={-1}
                        aria-hidden="true"
                        style={{ outline: "none", width: "5.2631578947368425%" }}
                      >
                        <div>
                          <div className="team__slider-card">
                            <div className="team__slider-card__thumb">
                              <img
                                alt="Team"
                                loading="lazy"
                                width={286}
                                height={203}
                                decoding="async"
                                data-nimg={1}
                                style={{ color: "transparent" }}
                                srcSet="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fthree.cb0b21ea.png&w=384&q=75"
                                src="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fthree.cb0b21ea.png&w=640&q=75"
                              />
                            </div>
                            <div className="team__slider-card__content">
                              <h5>Robert Fox</h5>
                              <p className="secondary-text">Golfer</p>
                              <div className="social justify-content-center">
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
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={3}
                        className="slick-slide"
                        tabIndex={-1}
                        aria-hidden="true"
                        style={{ outline: "none", width: "5.2631578947368425%" }}
                      >
                        <div>
                          <div className="team__slider-card">
                            <div className="team__slider-card__thumb">
                              <img
                                alt="Team"
                                loading="lazy"
                                width={286}
                                height={203}
                                decoding="async"
                                data-nimg={1}
                                style={{ color: "transparent" }}
                                srcSet="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffour.aea6eb2e.png&w=384&q=75"
                                src="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffour.aea6eb2e.png&w=640&q=75"
                              />
                            </div>
                            <div className="team__slider-card__content">
                              <h5>Andrea Reed</h5>
                              <p className="secondary-text">Golfer</p>
                              <div className="social justify-content-center">
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
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={4}
                        className="slick-slide"
                        tabIndex={-1}
                        aria-hidden="true"
                        style={{ outline: "none", width: "5.2631578947368425%" }}
                      >
                        <div>
                          <div className="team__slider-card">
                            <div className="team__slider-card__thumb">
                              <img
                                alt="Team"
                                loading="lazy"
                                width={286}
                                height={204}
                                decoding="async"
                                data-nimg={1}
                                style={{ color: "transparent" }}
                                srcSet="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fone.5b0a2930.png&w=384&q=75"
                                src="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fone.5b0a2930.png&w=640&q=75"
                              />
                            </div>
                            <div className="team__slider-card__content">
                              <h5>Jerome Bell</h5>
                              <p className="secondary-text">Golfer</p>
                              <div className="social justify-content-center">
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
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={5}
                        className="slick-slide"
                        tabIndex={-1}
                        aria-hidden="true"
                        style={{ outline: "none", width: "5.2631578947368425%" }}
                      >
                        <div>
                          <div className="team__slider-card">
                            <div className="team__slider-card__thumb">
                              <img
                                alt="Team"
                                loading="lazy"
                                width={286}
                                height={204}
                                decoding="async"
                                data-nimg={1}
                                style={{ color: "transparent" }}
                                srcSet="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftwo.afca2b86.png&w=384&q=75"
                                src="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftwo.afca2b86.png&w=640&q=75"
                              />
                            </div>
                            <div className="team__slider-card__content">
                              <h5>Mariah Tal</h5>
                              <p className="secondary-text">Golfer</p>
                              <div className="social justify-content-center">
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
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={6}
                        className="slick-slide"
                        tabIndex={-1}
                        aria-hidden="true"
                        style={{ outline: "none", width: "5.2631578947368425%" }}
                      >
                        <div>
                          <div className="team__slider-card">
                            <div className="team__slider-card__thumb">
                              <img
                                alt="Team"
                                loading="lazy"
                                width={286}
                                height={203}
                                decoding="async"
                                data-nimg={1}
                                style={{ color: "transparent" }}
                                srcSet="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fthree.cb0b21ea.png&w=384&q=75"
                                src="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fthree.cb0b21ea.png&w=640&q=75"
                              />
                            </div>
                            <div className="team__slider-card__content">
                              <h5>Robert Fox</h5>
                              <p className="secondary-text">Golfer</p>
                              <div className="social justify-content-center">
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
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={7}
                        className="slick-slide"
                        tabIndex={-1}
                        aria-hidden="true"
                        style={{ outline: "none", width: "5.2631578947368425%" }}
                      >
                        <div>
                          <div className="team__slider-card">
                            <div className="team__slider-card__thumb">
                              <img
                                alt="Team"
                                loading="lazy"
                                width={286}
                                height={203}
                                decoding="async"
                                data-nimg={1}
                                style={{ color: "transparent" }}
                                srcSet="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffour.aea6eb2e.png&w=384&q=75"
                                src="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffour.aea6eb2e.png&w=640&q=75"
                              />
                            </div>
                            <div className="team__slider-card__content">
                              <h5>Andrea Reed</h5>
                              <p className="secondary-text">Golfer</p>
                              <div className="social justify-content-center">
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
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={8}
                        tabIndex={-1}
                        className="slick-slide slick-center slick-cloned"
                        aria-hidden="true"
                        style={{ width: "5.2631578947368425%" }}
                      >
                        <div>
                          <div className="team__slider-card">
                            <div className="team__slider-card__thumb">
                              <img
                                alt="Team"
                                loading="lazy"
                                width={286}
                                height={204}
                                decoding="async"
                                data-nimg={1}
                                style={{ color: "transparent" }}
                                srcSet="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fone.5b0a2930.png&w=384&q=75"
                                src="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fone.5b0a2930.png&w=640&q=75"
                              />
                            </div>
                            <div className="team__slider-card__content">
                              <h5>Jerome Bell</h5>
                              <p className="secondary-text">Golfer</p>
                              <div className="social justify-content-center">
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
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={9}
                        tabIndex={-1}
                        className="slick-slide slick-cloned"
                        aria-hidden="true"
                        style={{ width: "5.2631578947368425%" }}
                      >
                        <div>
                          <div className="team__slider-card">
                            <div className="team__slider-card__thumb">
                              <img
                                alt="Team"
                                loading="lazy"
                                width={286}
                                height={204}
                                decoding="async"
                                data-nimg={1}
                                style={{ color: "transparent" }}
                                srcSet="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftwo.afca2b86.png&w=384&q=75"
                                src="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftwo.afca2b86.png&w=640&q=75"
                              />
                            </div>
                            <div className="team__slider-card__content">
                              <h5>Mariah Tal</h5>
                              <p className="secondary-text">Golfer</p>
                              <div className="social justify-content-center">
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
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={10}
                        tabIndex={-1}
                        className="slick-slide slick-cloned"
                        aria-hidden="true"
                        style={{ width: "5.2631578947368425%" }}
                      >
                        <div>
                          <div className="team__slider-card">
                            <div className="team__slider-card__thumb">
                              <img
                                alt="Team"
                                loading="lazy"
                                width={286}
                                height={203}
                                decoding="async"
                                data-nimg={1}
                                style={{ color: "transparent" }}
                                srcSet="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fthree.cb0b21ea.png&w=384&q=75"
                                src="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fthree.cb0b21ea.png&w=640&q=75"
                              />
                            </div>
                            <div className="team__slider-card__content">
                              <h5>Robert Fox</h5>
                              <p className="secondary-text">Golfer</p>
                              <div className="social justify-content-center">
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
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={11}
                        tabIndex={-1}
                        className="slick-slide slick-cloned"
                        aria-hidden="true"
                        style={{ width: "5.2631578947368425%" }}
                      >
                        <div>
                          <div className="team__slider-card">
                            <div className="team__slider-card__thumb">
                              <img
                                alt="Team"
                                loading="lazy"
                                width={286}
                                height={203}
                                decoding="async"
                                data-nimg={1}
                                style={{ color: "transparent" }}
                                srcSet="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffour.aea6eb2e.png&w=384&q=75"
                                src="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffour.aea6eb2e.png&w=640&q=75"
                              />
                            </div>
                            <div className="team__slider-card__content">
                              <h5>Andrea Reed</h5>
                              <p className="secondary-text">Golfer</p>
                              <div className="social justify-content-center">
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
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={12}
                        tabIndex={-1}
                        className="slick-slide slick-cloned"
                        aria-hidden="true"
                        style={{ width: "5.2631578947368425%" }}
                      >
                        <div>
                          <div className="team__slider-card">
                            <div className="team__slider-card__thumb">
                              <img
                                alt="Team"
                                loading="lazy"
                                width={286}
                                height={204}
                                decoding="async"
                                data-nimg={1}
                                style={{ color: "transparent" }}
                                srcSet="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fone.5b0a2930.png&w=384&q=75"
                                src="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fone.5b0a2930.png&w=640&q=75"
                              />
                            </div>
                            <div className="team__slider-card__content">
                              <h5>Jerome Bell</h5>
                              <p className="secondary-text">Golfer</p>
                              <div className="social justify-content-center">
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
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={13}
                        tabIndex={-1}
                        className="slick-slide slick-cloned"
                        aria-hidden="true"
                        style={{ width: "5.2631578947368425%" }}
                      >
                        <div>
                          <div className="team__slider-card">
                            <div className="team__slider-card__thumb">
                              <img
                                alt="Team"
                                loading="lazy"
                                width={286}
                                height={204}
                                decoding="async"
                                data-nimg={1}
                                style={{ color: "transparent" }}
                                srcSet="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftwo.afca2b86.png&w=384&q=75"
                                src="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftwo.afca2b86.png&w=640&q=75"
                              />
                            </div>
                            <div className="team__slider-card__content">
                              <h5>Mariah Tal</h5>
                              <p className="secondary-text">Golfer</p>
                              <div className="social justify-content-center">
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
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={14}
                        tabIndex={-1}
                        className="slick-slide slick-cloned"
                        aria-hidden="true"
                        style={{ width: "5.2631578947368425%" }}
                      >
                        <div>
                          <div className="team__slider-card">
                            <div className="team__slider-card__thumb">
                              <img
                                alt="Team"
                                loading="lazy"
                                width={286}
                                height={203}
                                decoding="async"
                                data-nimg={1}
                                style={{ color: "transparent" }}
                                srcSet="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fthree.cb0b21ea.png&w=384&q=75"
                                src="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fthree.cb0b21ea.png&w=640&q=75"
                              />
                            </div>
                            <div className="team__slider-card__content">
                              <h5>Robert Fox</h5>
                              <p className="secondary-text">Golfer</p>
                              <div className="social justify-content-center">
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
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={15}
                        tabIndex={-1}
                        className="slick-slide slick-cloned"
                        aria-hidden="true"
                        style={{ width: "5.2631578947368425%" }}
                      >
                        <div>
                          <div className="team__slider-card">
                            <div className="team__slider-card__thumb">
                              <img
                                alt="Team"
                                loading="lazy"
                                width={286}
                                height={203}
                                decoding="async"
                                data-nimg={1}
                                style={{ color: "transparent" }}
                                srcSet="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffour.aea6eb2e.png&w=384&q=75"
                                src="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffour.aea6eb2e.png&w=640&q=75"
                              />
                            </div>
                            <div className="team__slider-card__content">
                              <h5>Andrea Reed</h5>
                              <p className="secondary-text">Golfer</p>
                              <div className="social justify-content-center">
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
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="slider-navigation justify-content-start">
                      <button className="next-training cmn-button cmn-button--secondary">
                        <i className="fa-solid fa-angle-left" />
                      </button>
                      <button className="prev-training cmn-button cmn-button--secondary">
                        <i className="fa-solid fa-angle-right" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-xl-5 offset-xl-1 order-first order-lg-last section__col">
                <div className="section__content">
                  <h5 className="section__content-sub-title">Our Team</h5>
                  <h2 className="section__content-title">Meet Our Experts</h2>
                  <p className="section__content-text">
                    Our professional team will make sure that you find the right
                    course and the best trainer to receive maximum efficiency. All
                    our trainers are professional golf players with the highest...
                  </p>
                  <div className="section__content-inner">
                    <ul>
                      <li>
                        <i className="golftio-pin-checked" />
                        5-15+ years experience
                      </li>
                      <li>
                        <i className="golftio-pin-checked" />
                        Get our best adviser
                      </li>
                      <li>
                        <i className="golftio-pin-checked" />
                        Get our best trainers
                      </li>
                      <li>
                        <i className="golftio-pin-checked" />
                        Individual Support
                      </li>
                    </ul>
                  </div>
                  <div className="section__content-cta">
                    <a className="cmn-button" href="about">
                      About Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <section className="section join-club ">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="section__content">
                  <h5 className="section__content-sub-title">Join Club</h5>
                  <h2 className="section__content-title">Join our club</h2>
                  <div className="join-club__form">
                    <form action="#" method="post" name="joinClubForm">
                      <div className="input-group">
                        <div className="input-single">
                          <input
                            type="text"
                            name="user-name"
                            id="userName"
                            required=""
                            placeholder="Your Name *"
                          />
                        </div>
                        <div className="input-single">
                          <input
                            type="text"
                            name="user-phone"
                            id="userPhone"
                            required=""
                            placeholder="Your Phone *"
                          />
                        </div>
                      </div>
                      <div className="input-group">
                        <div className="input-single">
                          <input
                            type="email"
                            name="user-email"
                            id="userEmail"
                            required=""
                            placeholder="Your Email *"
                          />
                        </div>
                        <div className="input-single">
                          <input
                            type="text"
                            name="user-url"
                            id="userUrl"
                            placeholder="Website URL "
                          />
                        </div>
                      </div>
                      <div className="input-single">
                        <textarea
                          name="user-message"
                          id="userMessage"
                          placeholder="Message"
                          defaultValue={""}
                        />
                      </div>
                      <button type="submit" className="cmn-button">
                        Submit Now
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="sponsor wow fadeInUp" data-wow-duration="0.4s">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div
                  className="slick-slider sponsor__inner slick-initialized"
                  dir="ltr"
                >
                  <div className="slick-list" style={{ padding: "0px 0px" }}>
                    <div
                      className="slick-track"
                      style={{
                        width: "457.14285714285717%",
                        left: "-71.42857142857144%"
                      }}
                    >
                      <div
                        data-index={-8}
                        tabIndex={-1}
                        className="slick-slide slick-cloned"
                        aria-hidden="true"
                        style={{ width: "3.125%" }}
                      >
                        <div>
                          <div
                            className="sponsor__inner-card"
                            tabIndex={-1}
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <img
                              alt="Sponsor"
                              loading="lazy"
                              width={161}
                              height={65}
                              decoding="async"
                              data-nimg={1}
                              style={{ color: "transparent" }}
                              srcSet="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffive.dfefec21.png&w=256&q=75"
                              src="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffive.dfefec21.png&w=384&q=75"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={-7}
                        tabIndex={-1}
                        className="slick-slide slick-cloned"
                        aria-hidden="true"
                        style={{ width: "3.125%" }}
                      >
                        <div>
                          <div
                            className="sponsor__inner-card"
                            tabIndex={-1}
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <img
                              alt="Sponsor"
                              loading="lazy"
                              width={161}
                              height={65}
                              decoding="async"
                              data-nimg={1}
                              style={{ color: "transparent" }}
                              srcSet="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsix.e8ab7e72.png&w=256&q=75"
                              src="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsix.e8ab7e72.png&w=384&q=75"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={-6}
                        tabIndex={-1}
                        className="slick-slide slick-cloned"
                        aria-hidden="true"
                        style={{ width: "3.125%" }}
                      >
                        <div>
                          <div
                            className="sponsor__inner-card"
                            tabIndex={-1}
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <img
                              alt="Sponsor"
                              loading="lazy"
                              width={161}
                              height={65}
                              decoding="async"
                              data-nimg={1}
                              style={{ color: "transparent" }}
                              srcSet="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fone.a6555a56.png&w=256&q=75"
                              src="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fone.a6555a56.png&w=384&q=75"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={-5}
                        tabIndex={-1}
                        className="slick-slide slick-cloned"
                        aria-hidden="true"
                        style={{ width: "3.125%" }}
                      >
                        <div>
                          <div
                            className="sponsor__inner-card"
                            tabIndex={-1}
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <img
                              alt="Sponsor"
                              loading="lazy"
                              width={161}
                              height={65}
                              decoding="async"
                              data-nimg={1}
                              style={{ color: "transparent" }}
                              srcSet="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftwo.85268115.png&w=256&q=75"
                              src="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftwo.85268115.png&w=384&q=75"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={-4}
                        tabIndex={-1}
                        className="slick-slide slick-cloned"
                        aria-hidden="true"
                        style={{ width: "3.125%" }}
                      >
                        <div>
                          <div
                            className="sponsor__inner-card"
                            tabIndex={-1}
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <img
                              alt="Sponsor"
                              loading="lazy"
                              width={161}
                              height={65}
                              decoding="async"
                              data-nimg={1}
                              style={{ color: "transparent" }}
                              srcSet="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fthree.3f6d1763.png&w=256&q=75"
                              src="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fthree.3f6d1763.png&w=384&q=75"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={-3}
                        tabIndex={-1}
                        className="slick-slide slick-active slick-cloned"
                        aria-hidden="false"
                        style={{ width: "3.125%" }}
                      >
                        <div>
                          <div
                            className="sponsor__inner-card"
                            tabIndex={-1}
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <img
                              alt="Sponsor"
                              loading="lazy"
                              width={162}
                              height={65}
                              decoding="async"
                              data-nimg={1}
                              style={{ color: "transparent" }}
                              srcSet="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffour.e4fd00f8.png&w=256&q=75"
                              src="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffour.e4fd00f8.png&w=384&q=75"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={-2}
                        tabIndex={-1}
                        className="slick-slide slick-active slick-cloned"
                        aria-hidden="false"
                        style={{ width: "3.125%" }}
                      >
                        <div>
                          <div
                            className="sponsor__inner-card"
                            tabIndex={-1}
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <img
                              alt="Sponsor"
                              loading="lazy"
                              width={161}
                              height={65}
                              decoding="async"
                              data-nimg={1}
                              style={{ color: "transparent" }}
                              srcSet="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffive.dfefec21.png&w=256&q=75"
                              src="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffive.dfefec21.png&w=384&q=75"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={-1}
                        tabIndex={-1}
                        className="slick-slide slick-active slick-cloned"
                        aria-hidden="false"
                        style={{ width: "3.125%" }}
                      >
                        <div>
                          <div
                            className="sponsor__inner-card"
                            tabIndex={-1}
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <img
                              alt="Sponsor"
                              loading="lazy"
                              width={161}
                              height={65}
                              decoding="async"
                              data-nimg={1}
                              style={{ color: "transparent" }}
                              srcSet="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsix.e8ab7e72.png&w=256&q=75"
                              src="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsix.e8ab7e72.png&w=384&q=75"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={0}
                        className="slick-slide slick-active slick-center slick-current"
                        tabIndex={-1}
                        aria-hidden="false"
                        style={{ outline: "none", width: "3.125%" }}
                      >
                        <div>
                          <div
                            className="sponsor__inner-card"
                            tabIndex={-1}
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <img
                              alt="Sponsor"
                              loading="lazy"
                              width={161}
                              height={65}
                              decoding="async"
                              data-nimg={1}
                              style={{ color: "transparent" }}
                              srcSet="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fone.a6555a56.png&w=256&q=75"
                              src="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fone.a6555a56.png&w=384&q=75"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={1}
                        className="slick-slide slick-active"
                        tabIndex={-1}
                        aria-hidden="false"
                        style={{ outline: "none", width: "3.125%" }}
                      >
                        <div>
                          <div
                            className="sponsor__inner-card"
                            tabIndex={-1}
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <img
                              alt="Sponsor"
                              loading="lazy"
                              width={161}
                              height={65}
                              decoding="async"
                              data-nimg={1}
                              style={{ color: "transparent" }}
                              srcSet="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftwo.85268115.png&w=256&q=75"
                              src="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftwo.85268115.png&w=384&q=75"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={2}
                        className="slick-slide slick-active"
                        tabIndex={-1}
                        aria-hidden="false"
                        style={{ outline: "none", width: "3.125%" }}
                      >
                        <div>
                          <div
                            className="sponsor__inner-card"
                            tabIndex={-1}
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <img
                              alt="Sponsor"
                              loading="lazy"
                              width={161}
                              height={65}
                              decoding="async"
                              data-nimg={1}
                              style={{ color: "transparent" }}
                              srcSet="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fthree.3f6d1763.png&w=256&q=75"
                              src="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fthree.3f6d1763.png&w=384&q=75"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={3}
                        className="slick-slide slick-active"
                        tabIndex={-1}
                        aria-hidden="false"
                        style={{ outline: "none", width: "3.125%" }}
                      >
                        <div>
                          <div
                            className="sponsor__inner-card"
                            tabIndex={-1}
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <img
                              alt="Sponsor"
                              loading="lazy"
                              width={162}
                              height={65}
                              decoding="async"
                              data-nimg={1}
                              style={{ color: "transparent" }}
                              srcSet="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffour.e4fd00f8.png&w=256&q=75"
                              src="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffour.e4fd00f8.png&w=384&q=75"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={4}
                        className="slick-slide"
                        tabIndex={-1}
                        aria-hidden="true"
                        style={{ outline: "none", width: "3.125%" }}
                      >
                        <div>
                          <div
                            className="sponsor__inner-card"
                            tabIndex={-1}
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <img
                              alt="Sponsor"
                              loading="lazy"
                              width={161}
                              height={65}
                              decoding="async"
                              data-nimg={1}
                              style={{ color: "transparent" }}
                              srcSet="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffive.dfefec21.png&w=256&q=75"
                              src="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffive.dfefec21.png&w=384&q=75"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={5}
                        className="slick-slide"
                        tabIndex={-1}
                        aria-hidden="true"
                        style={{ outline: "none", width: "3.125%" }}
                      >
                        <div>
                          <div
                            className="sponsor__inner-card"
                            tabIndex={-1}
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <img
                              alt="Sponsor"
                              loading="lazy"
                              width={161}
                              height={65}
                              decoding="async"
                              data-nimg={1}
                              style={{ color: "transparent" }}
                              srcSet="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsix.e8ab7e72.png&w=256&q=75"
                              src="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsix.e8ab7e72.png&w=384&q=75"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={6}
                        className="slick-slide"
                        tabIndex={-1}
                        aria-hidden="true"
                        style={{ outline: "none", width: "3.125%" }}
                      >
                        <div>
                          <div
                            className="sponsor__inner-card"
                            tabIndex={-1}
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <img
                              alt="Sponsor"
                              loading="lazy"
                              width={161}
                              height={65}
                              decoding="async"
                              data-nimg={1}
                              style={{ color: "transparent" }}
                              srcSet="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fone.a6555a56.png&w=256&q=75"
                              src="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fone.a6555a56.png&w=384&q=75"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={7}
                        className="slick-slide"
                        tabIndex={-1}
                        aria-hidden="true"
                        style={{ outline: "none", width: "3.125%" }}
                      >
                        <div>
                          <div
                            className="sponsor__inner-card"
                            tabIndex={-1}
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <img
                              alt="Sponsor"
                              loading="lazy"
                              width={161}
                              height={65}
                              decoding="async"
                              data-nimg={1}
                              style={{ color: "transparent" }}
                              srcSet="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftwo.85268115.png&w=256&q=75"
                              src="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftwo.85268115.png&w=384&q=75"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={8}
                        className="slick-slide"
                        tabIndex={-1}
                        aria-hidden="true"
                        style={{ outline: "none", width: "3.125%" }}
                      >
                        <div>
                          <div
                            className="sponsor__inner-card"
                            tabIndex={-1}
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <img
                              alt="Sponsor"
                              loading="lazy"
                              width={161}
                              height={65}
                              decoding="async"
                              data-nimg={1}
                              style={{ color: "transparent" }}
                              srcSet="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fthree.3f6d1763.png&w=256&q=75"
                              src="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fthree.3f6d1763.png&w=384&q=75"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={9}
                        className="slick-slide"
                        tabIndex={-1}
                        aria-hidden="true"
                        style={{ outline: "none", width: "3.125%" }}
                      >
                        <div>
                          <div
                            className="sponsor__inner-card"
                            tabIndex={-1}
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <img
                              alt="Sponsor"
                              loading="lazy"
                              width={162}
                              height={65}
                              decoding="async"
                              data-nimg={1}
                              style={{ color: "transparent" }}
                              srcSet="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffour.e4fd00f8.png&w=256&q=75"
                              src="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffour.e4fd00f8.png&w=384&q=75"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={10}
                        className="slick-slide"
                        tabIndex={-1}
                        aria-hidden="true"
                        style={{ outline: "none", width: "3.125%" }}
                      >
                        <div>
                          <div
                            className="sponsor__inner-card"
                            tabIndex={-1}
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <img
                              alt="Sponsor"
                              loading="lazy"
                              width={161}
                              height={65}
                              decoding="async"
                              data-nimg={1}
                              style={{ color: "transparent" }}
                              srcSet="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffive.dfefec21.png&w=256&q=75"
                              src="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffive.dfefec21.png&w=384&q=75"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={11}
                        className="slick-slide"
                        tabIndex={-1}
                        aria-hidden="true"
                        style={{ outline: "none", width: "3.125%" }}
                      >
                        <div>
                          <div
                            className="sponsor__inner-card"
                            tabIndex={-1}
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <img
                              alt="Sponsor"
                              loading="lazy"
                              width={161}
                              height={65}
                              decoding="async"
                              data-nimg={1}
                              style={{ color: "transparent" }}
                              srcSet="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsix.e8ab7e72.png&w=256&q=75"
                              src="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsix.e8ab7e72.png&w=384&q=75"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={12}
                        tabIndex={-1}
                        className="slick-slide slick-center slick-cloned"
                        aria-hidden="true"
                        style={{ width: "3.125%" }}
                      >
                        <div>
                          <div
                            className="sponsor__inner-card"
                            tabIndex={-1}
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <img
                              alt="Sponsor"
                              loading="lazy"
                              width={161}
                              height={65}
                              decoding="async"
                              data-nimg={1}
                              style={{ color: "transparent" }}
                              srcSet="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fone.a6555a56.png&w=256&q=75"
                              src="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fone.a6555a56.png&w=384&q=75"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={13}
                        tabIndex={-1}
                        className="slick-slide slick-cloned"
                        aria-hidden="true"
                        style={{ width: "3.125%" }}
                      >
                        <div>
                          <div
                            className="sponsor__inner-card"
                            tabIndex={-1}
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <img
                              alt="Sponsor"
                              loading="lazy"
                              width={161}
                              height={65}
                              decoding="async"
                              data-nimg={1}
                              style={{ color: "transparent" }}
                              srcSet="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftwo.85268115.png&w=256&q=75"
                              src="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftwo.85268115.png&w=384&q=75"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={14}
                        tabIndex={-1}
                        className="slick-slide slick-cloned"
                        aria-hidden="true"
                        style={{ width: "3.125%" }}
                      >
                        <div>
                          <div
                            className="sponsor__inner-card"
                            tabIndex={-1}
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <img
                              alt="Sponsor"
                              loading="lazy"
                              width={161}
                              height={65}
                              decoding="async"
                              data-nimg={1}
                              style={{ color: "transparent" }}
                              srcSet="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fthree.3f6d1763.png&w=256&q=75"
                              src="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fthree.3f6d1763.png&w=384&q=75"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={15}
                        tabIndex={-1}
                        className="slick-slide slick-cloned"
                        aria-hidden="true"
                        style={{ width: "3.125%" }}
                      >
                        <div>
                          <div
                            className="sponsor__inner-card"
                            tabIndex={-1}
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <img
                              alt="Sponsor"
                              loading="lazy"
                              width={162}
                              height={65}
                              decoding="async"
                              data-nimg={1}
                              style={{ color: "transparent" }}
                              srcSet="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffour.e4fd00f8.png&w=256&q=75"
                              src="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffour.e4fd00f8.png&w=384&q=75"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={16}
                        tabIndex={-1}
                        className="slick-slide slick-cloned"
                        aria-hidden="true"
                        style={{ width: "3.125%" }}
                      >
                        <div>
                          <div
                            className="sponsor__inner-card"
                            tabIndex={-1}
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <img
                              alt="Sponsor"
                              loading="lazy"
                              width={161}
                              height={65}
                              decoding="async"
                              data-nimg={1}
                              style={{ color: "transparent" }}
                              srcSet="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffive.dfefec21.png&w=256&q=75"
                              src="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffive.dfefec21.png&w=384&q=75"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={17}
                        tabIndex={-1}
                        className="slick-slide slick-cloned"
                        aria-hidden="true"
                        style={{ width: "3.125%" }}
                      >
                        <div>
                          <div
                            className="sponsor__inner-card"
                            tabIndex={-1}
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <img
                              alt="Sponsor"
                              loading="lazy"
                              width={161}
                              height={65}
                              decoding="async"
                              data-nimg={1}
                              style={{ color: "transparent" }}
                              srcSet="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsix.e8ab7e72.png&w=256&q=75"
                              src="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsix.e8ab7e72.png&w=384&q=75"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={18}
                        tabIndex={-1}
                        className="slick-slide slick-cloned"
                        aria-hidden="true"
                        style={{ width: "3.125%" }}
                      >
                        <div>
                          <div
                            className="sponsor__inner-card"
                            tabIndex={-1}
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <img
                              alt="Sponsor"
                              loading="lazy"
                              width={161}
                              height={65}
                              decoding="async"
                              data-nimg={1}
                              style={{ color: "transparent" }}
                              srcSet="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fone.a6555a56.png&w=256&q=75"
                              src="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fone.a6555a56.png&w=384&q=75"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={19}
                        tabIndex={-1}
                        className="slick-slide slick-cloned"
                        aria-hidden="true"
                        style={{ width: "3.125%" }}
                      >
                        <div>
                          <div
                            className="sponsor__inner-card"
                            tabIndex={-1}
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <img
                              alt="Sponsor"
                              loading="lazy"
                              width={161}
                              height={65}
                              decoding="async"
                              data-nimg={1}
                              style={{ color: "transparent" }}
                              srcSet="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftwo.85268115.png&w=256&q=75"
                              src="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftwo.85268115.png&w=384&q=75"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={20}
                        tabIndex={-1}
                        className="slick-slide slick-cloned"
                        aria-hidden="true"
                        style={{ width: "3.125%" }}
                      >
                        <div>
                          <div
                            className="sponsor__inner-card"
                            tabIndex={-1}
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <img
                              alt="Sponsor"
                              loading="lazy"
                              width={161}
                              height={65}
                              decoding="async"
                              data-nimg={1}
                              style={{ color: "transparent" }}
                              srcSet="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fthree.3f6d1763.png&w=256&q=75"
                              src="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fthree.3f6d1763.png&w=384&q=75"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={21}
                        tabIndex={-1}
                        className="slick-slide slick-cloned"
                        aria-hidden="true"
                        style={{ width: "3.125%" }}
                      >
                        <div>
                          <div
                            className="sponsor__inner-card"
                            tabIndex={-1}
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <img
                              alt="Sponsor"
                              loading="lazy"
                              width={162}
                              height={65}
                              decoding="async"
                              data-nimg={1}
                              style={{ color: "transparent" }}
                              srcSet="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffour.e4fd00f8.png&w=256&q=75"
                              src="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffour.e4fd00f8.png&w=384&q=75"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={22}
                        tabIndex={-1}
                        className="slick-slide slick-cloned"
                        aria-hidden="true"
                        style={{ width: "3.125%" }}
                      >
                        <div>
                          <div
                            className="sponsor__inner-card"
                            tabIndex={-1}
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <img
                              alt="Sponsor"
                              loading="lazy"
                              width={161}
                              height={65}
                              decoding="async"
                              data-nimg={1}
                              style={{ color: "transparent" }}
                              srcSet="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffive.dfefec21.png&w=256&q=75"
                              src="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffive.dfefec21.png&w=384&q=75"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        data-index={23}
                        tabIndex={-1}
                        className="slick-slide slick-cloned"
                        aria-hidden="true"
                        style={{ width: "3.125%" }}
                      >
                        <div>
                          <div
                            className="sponsor__inner-card"
                            tabIndex={-1}
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <img
                              alt="Sponsor"
                              loading="lazy"
                              width={161}
                              height={65}
                              decoding="async"
                              data-nimg={1}
                              style={{ color: "transparent" }}
                              srcSet="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsix.e8ab7e72.png&w=256&q=75"
                              src="https://golftio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsix.e8ab7e72.png&w=384&q=75"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
        <button type="button" className="scrollToTop false">
          <i className="fa-solid fa-arrow-up" />
        </button>
      </div></div>


    </main>
  );
}
