import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-block">
                    <Link to="/" className="logo footer-logo">
                        <img src={require('../../assets/img/icon/logo.svg').default} alt="logo" />
                    </Link>
                        
                    <nav className="footer-nav">
                        <Link to="/" className="footer-link">Ресторанам</Link>
                        <Link to="/" className="footer-link">Курьерам</Link>
                        <Link to="/" className="footer-link">Пресс-центр</Link>
                        <Link to="/" className="footer-link">Контакты</Link>
                    </nav>
                    <div className="social-links">
                        <a href="http://instagram.com" target="blank" className="social-link"><img src={require('../../assets/img/social/instagram.svg').default} alt="instagram"/></a>
                        <a href="http://facebook.com" target="blank" className="social-link"><img src={require('../../assets/img/social/fb.svg').default} alt="facebook"/></a>
                        <a href="http://vk.com" target="blank" className="social-link"><img src={require('../../assets/img/social/vk.svg').default} alt="vk"/></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;