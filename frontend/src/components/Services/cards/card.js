import React, { useEffect } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import "./card.css";
import Aos from "aos";
import "aos/dist/aos.css";
function Cards(props) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div
      className='col-md-6 mx-4 mx-lg-0 col-lg-4 d-flex'
      data-aos='fade-zoom-in'
    >
      <Card className='card-bg box'>
        <div className='clsimg'>
          <CardImg
            top
            width='100%'
            src={props.items.src}
            alt='Card image cap'
            className='clsimg'
          />
        </div>
        <CardBody style={{ paddingTop: "0" }}>
          <div className='icon-area mb-3'>
            <i className={props.items.icon} />
          </div>
          <CardTitle
            tag='h5'
            className='text-center'
            style={{ marginTop: "-50px" }}
          >
            {props.items.title}
          </CardTitle>
          <CardText className='text-muted '>{props.items.cardText}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

export default Cards;
