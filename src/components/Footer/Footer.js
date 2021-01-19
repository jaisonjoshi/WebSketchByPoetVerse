import React from "react";
import { Link } from "react-router-dom";
import logo from "./Logo.png";
import "./Footer.css";
import { Button } from "reactstrap";
function Footer() {
  return (
    <div className='footer'>
      <div className='container footer-container mb-4'>
        <div className='row'>
          <div className='col-12 col-md-6 col-lg-4 '>
            <div className='text-center footer-logo-content'>
              <img src={logo} className='logo mb-3' />
              <h3>
                <b>epoch</b> zero
              </h3>
              <h5>All starts here</h5>
              <ul className='footer-social mt-4'>
                <li>
                  <i className='footer-link fa fa-facebook' />
                </li>
                <li>
                  <i className='footer-link fa fa-instagram' />
                </li>

                <li>
                  <i className='footer-link fa fa-twitter' />
                </li>

                <li>
                  <i className='footer-link fa fa-youtube' />
                </li>
              </ul>
            </div>
          </div>
          <div className='col-12 col-md-6 col-lg-4 mt-4 mt-sm-0 d-flex flex-column'>
            <h5 className='mb-3'>Site Map</h5>
            <ul className='footer-social' style={{ flexDirection: "column" }}>
              <Link to='/'>
                <li className='footer-navlink'>Home</li>
              </Link>
              <Link to='/about'>
                {" "}
                <li className='footer-navlink'>About</li>
              </Link>
              <Link to='/services'>
                <li className='footer-navlink'>Services</li>
              </Link>
              <Link to='/projects'>
                <li className='footer-navlink'>Projects</li>
              </Link>
              <Link to='/contact'>
                <li className='footer-navlink'>Contact Us</li>
              </Link>
            </ul>
          </div>
          <div className='col-12 col-lg-4  mt-4 mt-sm-0'>
            <div className='row mt-4 mt-lg-0 d-flex'>
              <div className='col-12 col-sm-6 col-md-12'>
                <h5 className='mb-3'>Connect with us</h5>
                <span className='footer-navlink'>
                  <i className='fa fa-whatsapp' /> 9595959595
                  <br />
                </span>
                <span className='footer-navlink'>
                  <i className='fa fa-envelope' /> loremipsum@email.com{" "}
                </span>
              </div>
              <div className='col-12 col-md-6 col-lg-12'>
                <h5 className='my-0 mb-3 mb-md-0 my-md-3'>Subscribe to us</h5>
                <form>
                  <input type='email' placeholder='mail@email.com'></input>
                  <Button color='btn-block  btn-primary ml-2 mb-1'>
                    <i
                      class='footer-link fa fa-paper-plane'
                      style={{ color: "white" }}
                    ></i>
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className='copy text-center text-muted'>
        &copy; Desined and developed by epoch zero. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
