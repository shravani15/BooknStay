import React, {Component } from 'react';
import { Link } from "react-router-dom";
import Hero from '../Components/Hero';
import Banner from '../Components/Banner';
import Services from '../Components/Services';
import FeaturedRooms from '../Components/FeaturedRooms';

class Home extends Component {
    render() {
        return (
            <div>
            <Hero hero ="defaultHero">
            <Banner
            title="luxurious rooms"
            subtitle="deluxe rooms starting from 1500"
            >
            <Link to="/rooms" className="btn-primary">
            our rooms
            </Link>
            </Banner>
            </Hero>
            <Services />
            <FeaturedRooms />
            </div>
        )
    }
}

export default Home;