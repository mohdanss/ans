import React from "react";
import "./About.styles.css";
import AboutCodeSection from "./AboutCodeSection/AboutCodeSection";
import { Parallax } from "react-scroll-parallax";
import AboutResponsiveDesign from "./AboutResponsiveDesign/AboutResponsiveDesign";

type Props = {};

const About = (props: Props) => {
    const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const isDesktop = screenWidth > 600;

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
                        {isDesktop ? (
                            <Parallax
                                translateX={['100px', '0px']}
                                opacity={[0.8, 1]}
                                easing="easeInQuad"
                            >
                                <div className="content content-right">
                                    <h1>About me</h1>
                                    <section className="about-me-code-section" aria-label="about me code section">
                                        <AboutCodeSection />
                                    </section>
                                </div>
                            </Parallax>
                        ) : (
                            <div className="content content-right">
                                <h1>About me</h1>
                                <section className="about-me-responsive-section" aria-label="about me code section">
                                    <AboutResponsiveDesign />
                                </section>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section >
    )
};

export default About;