import React from 'react';
import './aboutSection.css';

import abtimg from './aboutimg.jpg';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

function AboutSection() {
    return (
        <div>
             <div className="about">
                <div className="container py-4 ">
                   <div class="row ">
                   <div className="co-12 col-md-6 d-flex align-items-center">
                        <container fluid className="row">
                            <div className="col-12 text-center text-md-left">
                                <h2 className="hb pl-3 mb-3 d-inline-block d-md-block">About Us</h2>
                            </div>
                            <div className="col-12">
                                <p className="pl-3 text-muted text-center text-md-left text-md-left"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, ex voluptates officiis accusamus
                                        esse,
                                        provident dolorum officia fugit cum cupiditate voluptatibus necessitatibus nihil, rem architecto
                                        magnam ipsum
                                        odit? Et, perferendis!</p>
                            </div>
                            <div className="col-12 text-center text-md-left"  style={{zIndex:"999"}}>
                                <Button outline className=" text-white btn-ellipse ml-3 " >Explore</Button>
                            </div>
                        </container>

                    </div>
                    <div className="col-12 col-md-6 d-flex align-items-center">
                        <div className="img mt-md-0 d-flex justify-content-center  justify-content-md-end pr-md-4">
                            <img src={abtimg} className="img-fluid" />
                        </div>
                    </div>
                   </div>
                   
                </div>
                <div className="container row-content">
                    <div className="row">
                        <div className="col-12 col-md-6 d-flex justify-content-center">
                            <Card body className="text-center my-card">
                                <CardTitle tag="h5" className="zindex">Mission</CardTitle>
                                <CardText className="zindex" style={{color:"rgb(158 158 158)"}}>With supporting text below as a natural lead-in to additional content. With supporting text below as a natural lead-in to additional content.</CardText>
                                
                            </Card>
                        </div>
                        <div className="col-12 col-md-6 mt-3 mt-md-0 d-flex justify-content-center">
                            <Card body className="text-center my-card">
                                <CardTitle className="zindex" tag="h5">Vision</CardTitle>
                                <CardText className="zindex" style={{color:"rgb(158 158 158)"}}>With supporting text below as a natural lead-in to additional content.</CardText>
                               
                            </Card>
                            
                        </div>
                    </div>
                </div>
                <div className="container row-content">
                    <div className="row">
                        <div className="col-6 col-md-3 text-center d-flex flex-column justify-content-end"><h1>7+</h1><span className="text-muted">Years of Experience</span><hr/></div>
                        <div className="col-6 col-md-3 text-center d-flex flex-column justify-content-end"><h1>200+</h1><span className="text-muted">Projects</span><hr/></div>
                        <div className="mt-3 mt-md-0 col-6 col-md-3 text-center d-flex flex-column justify-content-end"><h1>100+</h1><span className="text-muted">Clients</span><hr/></div>
                        <div className="mt-3 mt-md-0 col-6 col-md-3 text-center d-flex flex-column justify-content-end "><h1>80+</h1><span className="text-muted">Offshore Work Commitments</span><hr/></div>
                    </div> 
                </div>
                

            </div>
        </div>
    )
}

export default AboutSection
