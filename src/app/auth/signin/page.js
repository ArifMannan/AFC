
'use client';

import { signIn, useSession } from "next-auth/react";
import { useState } from "react";
import { useRouter } from 'next/navigation';
const SigninPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await signIn("credentials", {
            redirect: false,
            email,
            password,
        });
        if (!result.error) {
            router.push("/admin"); // Redirect to homepage on successful sign-in
        } else {
            setError("Invalid email or password");
        }
    };

    return (
        <div className="login-bg">
            <section
                className="section section--space-bottom authentication authentication--alt wow fadeInUp "
                data-wow-duration="0.4s"
            >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-xxl-6">
                            <div className="authentication__wrapper">
                                <div className="d-flex justify-content-center align-items-center">
                                    <img
                                        alt="Logo"
                                        loading="lazy"
                                        width={80}
                                        // height={70}

                                        decoding="async"
                                        data-nimg={1}
                                        className='project-logo'
                                        src="/static/images/logo.jpeg"
                                    />
                                    <h4 className="project-color text-center ps-lg-4">Adarsha Futanta Club
                                    </h4>
                                </div>

                                <h6 className="text-center">Welcome back

                                </h6>
                                <form onSubmit={handleSubmit} action="#" method="post">
                                    <div className="input-single">
                                        <label htmlFor="authEmailIn">Enter Your Email ID</label>
                                        <input
                                            type="email"
                                            name="auth-email-in"
                                            id="authEmailIn"
                                            placeholder="Your email ID here"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="input-single">
                                        <label htmlFor="authPassword">Enter Password</label>
                                        <input
                                            type="password"
                                            name="auth-password"
                                            id="authPassword"
                                            placeholder="Enter Your Password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <p className="forget secondary-text">
                                        <a href="contact-us">Forgot Password?</a>
                                    </p>
                                    <div className="section__cta text-start">
                                        <button type="submit" className="cmn-button">
                                            Sign In
                                        </button>
                                    </div>
                                    {error && <p>{error}</p>}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default SigninPage;