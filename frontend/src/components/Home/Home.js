import React from "react";
import { Jumbotron, Container } from "reactstrap";
import "./Home.css";
import logo from "./Logo.png";
import AboutSection from "../About/aboutSection";
import Services from "../Services/Services";
import Client from "../testimonials/Client";
function Home() {
  return (
    <>
      <div className='hero'>
        <Jumbotron fluid className='main d-flex align-items-center text-center'>
          <Container fluid className='mx-1'>
            <img src={logo} className='logo' alt='Epoch Zero' />
            <h1 className='display-4 d-inline'>epoch zero</h1>
            <p className='lead '>All starts from here</p>
          </Container>
        </Jumbotron>
        <AboutSection />
        <Services />
        <div>
          <Client />
        </div>
      </div>
    </>
  );
}

export default Home;
