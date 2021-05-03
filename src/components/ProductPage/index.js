import React from 'react';
import ProductList from '../ProductList';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

const ProductPage = ({ userData }) => {

    if(!userData.login) {
        return <Redirect to="/error-product-list" />
    }
    
    return (
        <>
            <ProductList />
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        userData: state
    }
}

const WrappedMainComponent = connect(mapStateToProps)(ProductPage);
export default WrappedMainComponent;