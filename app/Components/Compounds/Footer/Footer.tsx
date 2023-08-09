import React from "react";
import "./Footer.styles.css";

type Props = {};

const Footer = (props: Props) => {
    return (
        <>
            <section
                aria-label="footer section for detailed information footer the author"
                aria-describedby="footer"
                id="footer"
            >
                <div className="hero-content" role="note">
                    <div className="timeline-footer" aria-label="timeline">
                        <div className="container container-left left">
                            <div className="content content-left">
                                <h2>.</h2>
                            </div>
                        </div>
                        <div className="container right">
                            <div className="content content-right">
                                <h1>fin.</h1>
                                <section className="about-me-footer-section" aria-label="footer me footer section">
                                    <div className="amfs-left">
                                        <p>I am a professional Software Engineer based in Lahore, Pakistan. I love to talk about tech, design and data.</p>
                                    </div>
                                    <div className="amfs-right">
                                        <p>{"Let's connect ;)"}</p>
                                        <ul>
                                            {/* TODO: Add links here */}
                                            <li>Linkedin</li>
                                            <li>Twitter</li>
                                            <li>Github</li>
                                        </ul>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            <div className="footer-bottom">
                <p>Designed and Developed with 🫶.</p>
            </div>
        </>
    )
};

export default Footer;