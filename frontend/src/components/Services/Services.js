import React from 'react';
import './Services.css';
import cloud from './cloud.jpg';
import ui from './ui.jpg';
import web from './web.jpg';
import marketing from './marketing.jpg';
import ecommerce from './ecommerce.jpg';
import software from './software.jpg';
import support from './support.jpg';
import app from './app.jpg';


import Cards from './cards/card';
  
const myitems = [
    {
        id : 1,
        src : cloud,
        title : "Cloud Services",
        cardText : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        icon : "fa fa-cloud"
    },
    {
        id : 2,
        src : ui,
        title : "UI/UX Design",
        cardText : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        icon : "fa fa-envira"
    },
    {
        id : 3,
        src : web,
        title : "Web Development",
        cardText : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        icon : "fa fa-desktop"
    },
    {
        id : 4,
        src : app,
        title : "Application Development",
        cardText : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        icon : "fa fa-mobile"
    },
    {
        id : 5,
        src : support,
        title : "Maintenance and Support Services",
        cardText : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        icon : "fa fa-headphones"
    },
    {
        id : 6,
        src : software,
        title : "Software Development",
        cardText : "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        icon : "fa fa-terminal"
    },
    {
        id : 7,
        src : marketing,
        title : "Digital Marketing",
        cardText : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        icon : "fa fa-comments-o"
    },
    {
        id : 8,
        src : ecommerce,
        title : "E-commerce Development",
        cardText : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        icon : "fa fa-credit-card"
    },
    

]
const myitem = myitems.map((item)=>{
    return(
        <Cards key={item.id} items={item} />
    );
});


function Services() {
    return (
        <div className="services">
            <div className="container row-content">
               <div className="row">
                   <div className="col-12">
                   <h1 className=" text-center">Services</h1>
                   </div>
               </div>
               <div className="row mt-4 d-flex justify-content-center ">
                   
                   {myitem}
            
               
                </div> 
            </div>
        </div>
    )
}

export default Services
