
const notFoundPage = () => {
    return (
        <div>
            <section className="section error wow fadeInUp">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-sm-10 col-xl-8">
                            <div className="error__inner">
                                {/* <img
                                    alt="Error"
                                    loading="lazy"
                                    width={742}
                                    height={694}
                                    decoding="async"
                                    data-nimg={1}
                                    src="/static/image/"
                                    style={{}}
                                /> */}
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="error__inner-content text-center">
                                <h2>Oops! Page Not Found</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                                <div className="section__cta">
                                    <a className="cmn-button" href="/">
                                        Back to home
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default notFoundPage;