import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle
  } from 'reactstrap';
  import './card.css';

function Cards(props) {
    return (
        <div className="col-md-6 mx-4 mx-lg-0 col-lg-4 d-flex">
            <Card className="card-bg box">
            <div className="clsimg">
                <CardImg top width="100%" src={props.items.src} alt="Card image cap" className="clsimg" />
            </div>
            <CardBody style={{paddingTop:"0"}}>
                <div className="icon-area mb-3"><i className={props.items.icon} /></div>
                <CardTitle tag="h5" className="text-center" style={{marginTop:"-50px"}}>{props.items.title}</CardTitle>
                <CardText className="text-muted ">{props.items.cardText}</CardText>
            </CardBody>
        </Card> 
        </div>               
    )
}

export default Cards;
