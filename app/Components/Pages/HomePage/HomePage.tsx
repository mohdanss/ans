import React from 'react';
import './HomePage.styles.css';
import Navbar from '../../Compounds/Navbar/Navbar';
import Hero from '../../Compounds/Hero/Hero';

type Props = {};

const HomePage = (props: Props) => {
    return (
        <main role="main" aria-label="main content">
            <Navbar />
            <Hero />
        </main>
    )
}

export default HomePage;