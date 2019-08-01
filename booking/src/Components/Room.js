import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import defaultImage from "../Images/default.jpg";
import propTypes from 'prop-types';

class Room extends Component {
    render() {
        const { name, slug, images, price } = this.props.room;
        return (
            <div>
            <article className="room">
                <div className="img-container">
                <img src={images[0] || defaultImage} alt="single room" />
                <div className="price-top">
                <h6>${price}</h6>
                <p>per night</p>
                </div>
                <Link to={`/rooms/${slug}`} className="btn-primary room-link">
                Features
                </Link>
                </div>
                <p className="room-info">{name}</p>
            </article>
            </div>
        )
    }
}

Room.propTypes={
    room: propTypes.shape({
        name: propTypes.string.isRequired,
        slug: propTypes.string.isRequired,
        images: propTypes.arrayOf(propTypes.string).isRequired,
        price: propTypes.number.isRequired
    })
};

export default Room;