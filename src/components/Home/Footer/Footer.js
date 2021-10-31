import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
    return (
        <div className="Footer">
            <div className="footer">
                <span>Copyright &copy; {(new Date().getFullYear())} All Rights Reserved By <Link to="/">Cruise Ship</Link></span>
            </div>
        </div>
    );
};

export default Footer;