import React, { useEffect } from "react";
import { Jumbotron, Container } from "reactstrap";
import "./Home.css";
import logo from "./Logo.png";
import AboutSection from "../About/aboutSection";
import Services from "../Services/Services";
import Client from "../testimonials/Client";
import Aos from "aos";
import "aos/dist/aos.css";
function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className='hero'>
        <Jumbotron fluid className='main d-flex align-items-center text-center'>
          <Container fluid className='mx-1'>
            <img src={logo} className='logo' alt='Epoch Zero' />
            <h1 className='display-4 d-inline' data-aos='fade-zoom-in'>
              epoch zero
            </h1>
            <p className='lead ' data-aos='fade-left'>
              All starts from here
            </p>
          </Container>
        </Jumbotron>
        <AboutSection />
        <Services />
        <div className='bg-blank justify-content-center d-flex'>
          <Client />
        </div>
      </div>
    </>
  );
}

export default Home;
