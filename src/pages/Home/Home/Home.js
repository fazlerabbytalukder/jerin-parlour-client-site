import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import Feature from '../Feature/Feature';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Feature></Feature>
            <Testimonials></Testimonials>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;