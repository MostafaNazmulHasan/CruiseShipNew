import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Team from '../Expert Team/Team';
import Footer from '../Footer/Footer';
import Services from '../Services/Services';
import WelcomeSection from '../WelcomeSection/WelcomeSection';
import './Home.css'
const Home = () => {
    return (
        <div id="home">
            <WelcomeSection></WelcomeSection>
            <About></About>
            <Services></Services>
            <Team></Team>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;