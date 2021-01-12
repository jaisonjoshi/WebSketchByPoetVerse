import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import './Home.css';
import logo from './Logo.png';

function Home() {
    return (
       <>
        <div className="hero">
            <Jumbotron fluid className="main d-flex align-items-center text-center">
                <Container fluid className="mx-1">
                    <img src={logo} className="logo" /><h1 className="display-4 d-inline">epoch zero</h1>
                    <p className="lead ">All starts from here</p>
                </Container>
            </Jumbotron>
        </div>
       
       </>
    )
}

export default Home
