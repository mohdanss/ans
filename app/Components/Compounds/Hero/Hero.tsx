"use client";
import React from "react";
import "./Hero.styles.css";

type Props = {};

const Hero = (props: Props) => {
    return (
        <section
            aria-label="hero section fro introductory content"
            role="banner"
            id="hero"
        >
            <div className="hero-content" role="note">
                <div className="timeline">
                    <div className="container container-left left">
                        <div className="content content-left">
                            <h2>I am a</h2>
                        </div>
                    </div>
                    <div className="container right">
                        <div className="content content-right">
                            <h1>Software Engineer<span className="_">_</span></h1>
                            <h3>entrepreneurship - tech - design - data science</h3>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
