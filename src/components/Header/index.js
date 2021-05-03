import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logOut } from '../../redux-store/actions';
import { useHistory } from 'react-router';
import ModalAuth from '../ModalAuth';
import ModalCart from '../ModalCart';
import Portal from '../Portal';

const Header = ({ userData, dispatch }) => {

    const [isLogInModal, setIsLogInModal] = useState(false);
    const [isBasketModal, setIsBasketModal] = useState(false);
    const history = useHistory();
    const { login } = userData;

    const handleLogInModal = () => {
        setIsLogInModal(!isLogInModal);
    }

    const handlBasketModal = () => {
        setIsBasketModal(!isBasketModal);
    }


    const handleLogOut = () => {
        dispatch(logOut());
        history.push('/');
    }

    return (
        <div className="container">
            <header className="header">
                <Link to="/" className="logo">
                    <img src={require('./../../assets/img/icon/logo.svg').default} alt="Logo"/>
                </Link>
                <label className="address">
                    <input type="text" className="input input-address" placeholder="Адрес доставки"/>
                </label>
                <div className="buttons">
                    {login && <span className="user-name">{login}</span>}

                    {!login && <button className="button button-primary button-auth" onClick={handleLogInModal}>
                        <span className="button-auth-svg"></span>
                        <span className="button-text">Войти</span>
                    </button>}

                    {login && <><button className="button button-cart" onClick={handlBasketModal}>
                        <span className="button-cart-svg"></span>
                        <span className="button-text">Корзина</span>
                    </button>
                    <button className="button button-primary button-out" onClick={handleLogOut}>
                        <span className="button-text">Выйти</span>
                        <span className="button-out-svg"></span>
                    </button></>}

                </div>
            </header>
            {isLogInModal && 
                <Portal>
                    <ModalAuth onClose={handleLogInModal} />
                </Portal>}
            {isBasketModal && <Portal>
                    <ModalCart onClose={handlBasketModal} login={login}/>
                </Portal>}
                
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        userData: state
    }
}

const WrappedMainComponent = connect(mapStateToProps)(Header);

export default WrappedMainComponent;