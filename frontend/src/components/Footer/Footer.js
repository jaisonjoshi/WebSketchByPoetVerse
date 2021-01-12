import React from 'react';
import logo from './Logo.png';
import './Footer.css';
import { FaFacebook,FaInstagram,FaYoutube, FaTwitter }  from "react-icons/fa";
function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-4 text-center">
                        <img src={logo} className="logo mb-3" />
                        <h3><b>epoch</b> zero</h3>
                        <h5>All starts here</h5>
                        <ul className="footer-social mt-4">
                            <li><FaFacebook className="footer-link "/></li>
                            <li><FaInstagram className="footer-link"/></li>

                            <li><FaYoutube className="footer-link"/></li>

                            <li><FaTwitter className="footer-link"/></li>

                        </ul>
                    </div>
                    <div className="col-4">
                        
                    </div>
                    <div className="col-4">
                        
                    </div>
                </div>
               
            </div>
            <hr/>
        </div>
    )
}

export default Footer
