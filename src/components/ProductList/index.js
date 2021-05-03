import React from 'react';
import { useParams } from 'react-router';
import useData from '../../custom-hooks/useData';
import ProductCard from '../ProductCard';

const ProductList = () => {

    const { products } = useParams();
    const productList = useData(products);
    const minPrice = Math.min.apply(null, productList?.data.map(el => el.price));

    return (
        <section className="menu">
            <div className="section-heading">
                <h2 className="section-title restaurant-title">{productList?.partnerName}</h2>
                <div className="card-info">
                    <div className="rating">
                        4.5Е
                    </div>
                    <div className="price">От {minPrice} UAH</div>
                    <div className="category">{productList?.category}</div>
                </div>
            </div>
            <div className="cards cards-menu">
                {productList?.data.map(restaurant => {
                    const { id } = restaurant;
                    return <ProductCard key={id} {...restaurant} />
                })}
            </div>
        </section>
    )
}

export default ProductList;