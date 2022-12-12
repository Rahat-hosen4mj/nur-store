import React from 'react';
import playStore from '../../assets/images/play-store.png';
import appStore from '../../assets/images/app-store.png';
import logo from '../../assets/images/logo-white.png';

const Footer = () => {
    return (
        <div class="footer">
        <div class="container">
            <div class="row">
                <div class="footer-col-1">
                    <h3>Download Our App</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <div class="app-logo">
                        <img src={playStore} alt="" />
                        <img src={appStore} alt="" />
                    </div>
                </div>
                <div class="footer-col-2">
                    <img src={logo} alt="" />
                    <p>Lorem ipsum dolor, sit amet adipisicing.</p>
                </div>
                <div class="footer-col-3">
                    <h3>Useful Links</h3>
                    <ul>
                        <li>Coupons</li>
                        <li>Return</li>
                        <li>Poliecy</li>
                        <li>Join Affliate</li>
                    </ul>
                </div>
                <div class="footer-col-4">
                    <h3>Follow Us</h3>
                    <ul>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Youtube</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p class="copyright">Inspired from easy Tutorial</p>
        </div>
    </div>
    );
};

export default Footer;