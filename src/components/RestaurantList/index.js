import React from 'react';
import useData from '../../custom-hooks/useData';
import Spinner from '../Spinner';
import { useHistory } from 'react-router-dom';

const RestaurantList = () => {

    const data = useData('partners');
    const history = useHistory();

    const handleClick = (products) => {
        history.push(`/restaurant/${products}`);
    }

    if(!data) {
        return <Spinner />
    }

    return (
            <ul className="cards cards-restaurants">
                {data?.map(restaurant => {
                    const { kitchen, image, name, price, products, stars, time_of_delivery} = restaurant;

                    const src = require(`../../assets/${image}`).default;

                    return (<li key={products} className="card card-restaurant" onClick={() => handleClick(products)}>
                                <img src={src} alt={src} className="card-image"/>
                                <div className="card-text">
                                    <div className="card-heading">
                                    <h3 className="card-title">{name}</h3>
                                    <span className="card-tag tag">{time_of_delivery} мин</span>
                                    </div>
                                    <div className="card-info">
                                    <div className="rating">
                                        {stars}
                                    </div>
                                    <div className="price">От {price} UAH</div>
                                    <div className="category">{kitchen}</div>
                                    </div>
                                </div>
                    </li>)
                })}
            </ul>

    )
}

export default RestaurantList;