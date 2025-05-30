import React from 'react';

const ManualLoading = () => {
    return (
        <div>

            <div id="preloader" className="preloader null">
                <div className="animation-preloader">
                    <div className="spinner" />
                    <p className="text-center mt-3">Loading</p>
                    <h1>testing</h1>
                </div>
                <div className="loader">
                    <div className="row">
                        <div className="col-3 loader-section section-left">
                            <div className="bg" />
                        </div>
                        <div className="col-3 loader-section section-left">
                            <div className="bg" />
                        </div>
                        <div className="col-3 loader-section section-right">
                            <div className="bg" />
                        </div>
                        <div className="col-3 loader-section section-right">
                            <div className="bg" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ManualLoading;