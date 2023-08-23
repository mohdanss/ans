import React from "react";
import "./About.styles.css";
import AboutCodeSection from "../AboutCodeSection/AboutCodeSection";
import { Parallax } from "react-scroll-parallax";

type Props = {};

const About = (props: Props) => {
    return (
        <section
            aria-label="about section for detailed information about the author"
            aria-describedby="about"
            id="about"
        >
            <div className="hero-content" role="note">
                <div className="timeline-about" aria-label="timeline">
                    <div className="container container-left left">
                        <div className="content content-left">
                            <h2>me?</h2>
                        </div>
                    </div>
                    <div className="container right">
                        <Parallax
                            translateX={['100px', '0px']}
                            opacity={[0.8,1]}
                            easing="easeInQuad"
                        >
                            <div className="content content-right">
                                <h1>About me</h1>
                                <section className="about-me-code-section" aria-label="about me code section">
                                    <AboutCodeSection />
                                </section>
                            </div>
                        </Parallax>
                    </div>
                </div>
            </div>
        </section >
    )
};

export default About;