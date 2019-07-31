import React, { Component } from 'react';
import Title from './Title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

class Services extends Component {
    state ={
        services: [
            {
            icon: <FaCocktail />,
            title: "Free Cocktails",
            info:
                "Unlimited cocktails for adults"
            },
            {
                icon: <FaHiking />,
                title: "Hiking",
                info:
                    "Daily Hiking till you stay for free"
            },
            {
                icon: <FaShuttleVan />,
                title: "shuttle",
                info:
                    "Free shuttle service"
            },
            {
                icon: <FaBeer />,
                title: "Free Beer",
                info:
                    "Free Beer for Adults "
            }
        ]
    };
    render() {
        return (
            <section className="services">
                <Title title="Services" />
                <div className="services-center">
                {this.state.services.map((item, index) => {
                    return (
                        <article key={index} className="service">
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                        </article>
                    )
                })}
                </div>
            </section>
        )
    }
}

export default Services;