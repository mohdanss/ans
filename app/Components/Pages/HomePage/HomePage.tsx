import React from 'react';
import './HomePage.styles.css';
import Navbar from '../../Compounds/Navbar/Navbar';
import Hero from '../../Compounds/Hero/Hero';
import About from '../../Compounds/About/About';
import Footer from '../../Compounds/Footer/Footer';
import { ParallaxProvider } from 'react-scroll-parallax';
import AnimatedCursor from "react-animated-cursor";

type Props = {};

const HomePage = (props: Props) => {
    return (
        <ParallaxProvider>
            <AnimatedCursor
                color='9,9,9'
                innerSize={8}
                outerSize={24}
                innerScale={1}
                outerScale={1.7}
                outerAlpha={0}
                outerStyle={{
                    border: '2px solid #999'
                }}
                innerStyle={{
                    backgroundColor: '#999'
                }}
            />
            <main role="main" aria-label="main content">
                <Navbar />
                <Hero />
                <About />
                <Footer />
            </main>
        </ParallaxProvider>
    )
}

export default HomePage;