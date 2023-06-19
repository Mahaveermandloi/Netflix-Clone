import React from 'react';
import "../index.css"; // Import the CSS file for styling
import Section1 from './Section1';
import Section2 from './Section2';
import FAQ from './FAQ';
import Footer from './Footer';

const Home = () => {
    return (
        <>
            <Section1 />
            <Section2 />
            <FAQ />
            <Footer />

        </>);
}

export default Home;
