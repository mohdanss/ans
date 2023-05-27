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
                            <h3>I <span>design</span> and develop {<Random />}.</h3>
                        </div>
                    </div>
                    <div className="container container-left left">
                        <div className="content content-left">
                            <h2>.</h2>
                        </div>
                    </div>
                    <div className="container right">
                        <div className="content content-right">
                            <h3>entrepreneurship - tech - design - data science</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Random = (props: Props) => {
    const words = [
        "websites",
        "web applications",
        "mobile apps",
        "desktop apps",
        "APIs",
        "databases",
        "softwares",
    ];

    const getRandomWord = () => {
        return words[Math.floor(Math.random() * words.length)];
    }

    const [word, setWord] = React.useState(getRandomWord());

    React.useEffect(() => {
        const interval = setInterval(() => {
            setWord(getRandomWord());
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <span>{word}</span>
    );
};

export default Hero;
