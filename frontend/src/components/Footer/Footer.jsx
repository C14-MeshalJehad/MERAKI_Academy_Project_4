import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'; 

const Footer = () => {
    return (
        <footer className="text-center text-white" style={{ backgroundColor: "#000" }}>
            <div className="container p-4 pb-0">
                <section className="mb-4">
                    <a
                        className="btn text-white btn-floating m-1"
                        style={{ backgroundColor: "#3b5998" }}
                        href="#!"
                        role="button"
                    >
                        <i className="fab fa-facebook-f"></i>
                    </a>

                    <a
                        className="btn text-white btn-floating m-1"
                        style={{ backgroundColor: "#55acee" }}
                        href="#!"
                        role="button"
                    >
                        <i className="fab fa-twitter"></i>
                    </a>

                    <a
                        className="btn text-white btn-floating m-1"
                        style={{ backgroundColor: "#dd4b39" }}
                        href="#!"
                        role="button"
                    >
                        <i className="fab fa-google"></i>
                    </a>

                    <a
                        className="btn text-white btn-floating m-1"
                        style={{ backgroundColor: "#ac2bac" }}
                        href="#!"
                        role="button"
                    >
                        <i className="fab fa-instagram"></i>
                    </a>

                    <a
                        className="btn text-white btn-floating m-1"
                        style={{ backgroundColor: "#0082ca" }}
                        href="#!"
                        role="button"
                    >
                        <i className="fab fa-linkedin-in"></i>
                    </a>

                    <a
                        className="btn text-white btn-floating m-1"
                        style={{ backgroundColor: "#333333" }}
                        href="#!"
                        role="button"
                    >
                        <i className="fab fa-github"></i>
                    </a>
                </section>
            </div>

            <div
                className="text-center p-3"
                style={{ backgroundColor: "#111" }}
            >
                © 2020 Copyright:
                <a className="text-white fw-bold" href="https://www.instagram.com/meshaljehad_/">IMMORTAL</a>
            </div>
        </footer>
    );
};

export default Footer;
