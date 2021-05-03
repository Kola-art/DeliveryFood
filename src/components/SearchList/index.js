import React, { useState, useEffect } from 'react';
import ProductCard from './../ProductCard';
import firebase from '../../utils/fb-config';
import { v4 } from 'uuid';
import Spinner from '../Spinner';

const SearchList = ({ value }) => {

    const [data, setData] = useState(null);

    useEffect(() => {
        firebase
          .database()
          .ref()
          .once('value')
          .then(snap => setData(snap.val()));
    }, []);

    const allData = data && Object.values(data)
                            .map(product => product.data)
                            .filter(Boolean)
                            .flat(Infinity)
                            .filter(product => product.name.toUpperCase().includes(value.toUpperCase()));

    const isData = allData && allData.length > 0;

    if(!allData) {
        return <Spinner />
    }

    return (<div className="cards cards-menu">
        {isData ? allData.map(card => {
            return <ProductCard key={v4()} {...card} />
        }) : <h2> К сожалению товар не найден</h2>}
    </div>)
}

export default SearchList;