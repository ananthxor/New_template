import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-col">
                        <h3 className="footer-logo">NewsFlow.</h3>
                        <p className="footer-desc">
                            Your trusted source for global news, technology updates, and lifestyle trends.
                            Delivered with precision and style.
                        </p>
                    </div>
                    <div className="footer-col">
                        <h4 className="footer-heading">Categories</h4>
                        <ul className="footer-links">
                            <li><a href="#">World</a></li>
                            <li><a href="#">Business</a></li>
                            <li><a href="#">Tech</a></li>
                            <li><a href="#">Science</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4 className="footer-heading">Company</h4>
                        <ul className="footer-links">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Service</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4 className="footer-heading">Connect</h4>
                        <ul className="footer-links">
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">LinkedIn</a></li>
                            <li><a href="#">Instagram</a></li>
                            <li><a href="#">Facebook</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} NewsFlow Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
