import React from 'react';
import './Services.css';
import { FaCloud, FaEnvira, FaLaptopCode, FaMobileAlt, FaMicrosoft, FaMapMarkedAlt, FaMoneyCheckAlt } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";


function Services() {
    return (
        <div className="services">
            <div className="container row-content">
               <div className="row">
                   <div className="col-12">
                   <h1 className=" text-center">Services</h1>
                   </div>
               </div>
               <div className="row mt-4 d-flex justify-content-center">
                   <div className="col-12 box box-1">
                       <div className="row">
                           <div className="col-2 d-flex justify-content-center align-items-center">
                               <div className="icon-area text-center">
                                   <FaCloud className="icon" />
                               </div>
                               
                           </div>
                           <div className="col-10">
                                   <h2 className="pl-3">Cloud Services</h2>
                                   <p className="text-muted pl-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
been the industry's standard dummy text ever since the 1500s.</p>
                               </div>
                       </div>
                   </div>
                   <div className="col-12 box box-2 ">
                       <div className="row">
                           
                           <div className="col-10">
                                   <h2 className="pl-3">UI/UX Design</h2>
                                   <p className="text-muted pl-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
been the industry's standard dummy text ever since the 1500s, when an unknown printer took
a galley of type and scrambled it to make a type specimen book.</p>
                               </div>
                               <div className="col-2 d-flex justify-content-center align-items-center">
                               <div className="icon-area text-center">
                                   <FaEnvira className="icon" />
                               </div>
                               
                           </div>
                       </div>
                   </div>
                   <div className="col-12 box box-1">
                       <div className="row">
                           <div className="col-2 d-flex justify-content-center align-items-center">
                               <div className="icon-area text-center">
                                   <FaLaptopCode className="icon" />
                               </div>
                               
                           </div>
                           <div className="col-10">
                                   <h2 className="pl-3">Web Development</h2>
                                   <p className="text-muted pl-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
been the industry's standard dummy text ever since the 1500s.</p>
                               </div>
                       </div>
                   </div>
                   <div className="col-12 box box-2">
                       <div className="row">
                           
                           <div className="col-10">
                                   <h2 className="pl-3">Application Development</h2>
                                   <p className="text-muted pl-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
been the industry's standard dummy text ever since the 1500s, when an unknown printer took
a galley of type and scrambled it to make a type specimen book.</p>
                               </div>
                               <div className="col-2 d-flex justify-content-center align-items-center">
                               <div className="icon-area text-center">
                                   <FaMobileAlt className="icon" />
                               </div>
                               
                           </div>
                       </div>
                   </div>
                   <div className="col-12 box box-1">
                       <div className="row">
                           <div className="col-2 d-flex justify-content-center align-items-center">
                               <div className="icon-area text-center">
                                   <BiSupport className="icon" />
                               </div>
                               
                           </div>
                           <div className="col-10">
                                   <h2 className="pl-3">Maintenance and Support Services</h2>
                                   <p className="text-muted pl-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
been the industry's standard dummy text ever since the 1500s.</p>
                               </div>
                       </div>
                   </div>
                   <div className="col-12 box box-2">
                       <div className="row">
                           
                           <div className="col-10">
                                   <h2 className="pl-3">Software Development</h2>
                                   <p className="text-muted pl-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                               </div>
                               <div className="col-2 d-flex justify-content-center align-items-center">
                               <div className="icon-area text-center">
                                   <FaMicrosoft className="icon" />
                               </div>
                               
                           </div>
                       </div>
                   </div>
                   <div className="col-12 box box-1">
                       <div className="row">
                           <div className="col-2 d-flex justify-content-center align-items-center">
                               <div className="icon-area text-center">
                                   <FaMapMarkedAlt className="icon" />
                               </div>
                               
                           </div>
                           <div className="col-10">
                                   <h2 className="pl-3">Digital Marketing</h2>
                                   <p className="text-muted pl-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
been the industry's standard dummy text ever since the 1500s.</p>
                               </div>
                       </div>
                   </div>
                   <div className="col-12 box box-2">
                       <div className="row">
                          
                           <div className="col-10">
                                   <h2 className="pl-3">E-commerce Development</h2>
                                   <p className="text-muted pl-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
been the industry's standard dummy text ever since the 1500s, when an unknown printer took
a galley of type and scrambled it to make a type specimen book.</p>
                               </div>
                               <div className="col-2 d-flex justify-content-center align-items-center">
                               <div className="icon-area text-center">
                                   <FaMoneyCheckAlt className="icon" />
                               </div>
                               
                           </div>
                       </div>
                   </div>
               </div>
            </div> 
        </div>
    )
}

export default Services
