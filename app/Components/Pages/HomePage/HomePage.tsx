import React from 'react';
import './HomePage.styles.css';
import Navbar from '../../Compounds/Navbar/Navbar';

type Props = {};

const HomePage = (props: Props) => {
    return (
        <main role="main" aria-label="main content">
            <Navbar />
        </main>
    )
}

export default HomePage;