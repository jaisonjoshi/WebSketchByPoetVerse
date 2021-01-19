import React from 'react';
import Client from './Client';
import './projectsection.css';

function Projectsection() {
    return (
        <div className="projectSection">
            <div className="container">
                <div className="row mb-3">
                    <div className="col-12">
                    <h1 className="text-center "> Latest Projects</h1>
                    </div>
                </div>
                <div className="row">
                    <Client />
                </div>
            </div>
    
            
        </div>
    )
}

export default Projectsection;
