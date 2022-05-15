import React from 'react';
import footer from '../../assets/images/footer.png'

const Footer = () => {
    return (
        <div className='' style={{
            background: `url(${footer})`,
            backgroundSize: 'cover'

        }}>
            <footer className="footer p-10 ">
                <div>
                    <span className="footer-title">SERVICES</span>
                    <a className="link link-hover">Emergancy Checkup</a>
                    <a className="link link-hover">monthly Checkup</a>
                    <a className="link link-hover">Weekly Checkup</a>
                    <a className="link link-hover">Deep Checkup</a>
                </div>
                <div>
                    <span className="footer-title">ORAL HEALTH</span>
                    <a className="link link-hover">Fluoride Treatmet</a>
                    <a className="link link-hover">Cavity Filling</a>
                    <a className="link link-hover">Teeth Whitening</a>
                </div>
                <div>
                    <span className="footer-title">OUR ADDRESS</span>
                    <a className="link link-hover">New York -101010 Hudson</a>
                </div>
            </footer>
            <footer className="footer footer-center p-4 text-base-content">
                <div>
                    <p>Copyright © 2022 - All right reserved </p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;