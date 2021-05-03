import React from 'react';
import { connect } from 'react-redux';

const ProductCard = ({ id, description, image, name, price, userData }) => {

    const src = require(`../../assets/${image}`).default;

    const { login } = userData;

    const handleAddToBasket = () => {

        const loginStorageData = localStorage.getItem(login);

        const data = [{
            id,
            title: name,
            cost: price,
            count: 1
        }];

        if(!!loginStorageData) {
            const allData = JSON.parse(loginStorageData);
            const isSameProduct = !!allData.find(item => item.id === id);
            if(isSameProduct) {
                allData.forEach(item => {
                    if(item.id === id) {
                        item.count = item.count + 1;
                    }
                });
                localStorage.setItem(login, JSON.stringify(allData));
            } else {
                const newData = allData.concat([...data]);
                localStorage.setItem(login, JSON.stringify(newData));
            }
        } else {
            if(login) {
                localStorage.setItem(login, JSON.stringify(data));
            }
        }

    }

    return (
        <li className="card card-restaurant">
            <img src={src} alt={image} className="card-image"/>
            <div className="card-text">
                <div className="card-heading">
                    <h3 className="card-title card-title-reg">{name}</h3>
                </div>
                <div className="card-info">
                    <div className="ingredients">{description}</div>
                </div>
                <div className="card-buttons">
                    <button className="button button-primary button-add-cart" onClick={handleAddToBasket}>
                        <span className="button-card-text">В корзину</span>
                        <span className="button-cart-svg"></span>
                    </button>
                    <strong className="card-price-bold card-price">{price} UAH</strong>
                </div>
            </div>
        </li>
    )
}

const mapStateToProps = (state) => {
    return {
        userData: state
    }
}

const WrappedMainComponent = connect(mapStateToProps)(ProductCard);

export default WrappedMainComponent;