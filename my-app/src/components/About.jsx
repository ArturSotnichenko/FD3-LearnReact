import React from 'react';
import { NavLink } from 'react-router-dom';

const About = () => {
    return (
        <div>
            
            <div className="container py-5 my-5">
                <div className="row">
                 <div className="col-md-6">
                    <h1 className='text-primary fw-bold mb-4'> About Us </h1>
                    <p className="lead mb-4">
                    Apple conducts business ethically, honestly, and in full compliance with the law. We believe 
                    that how we conduct ourselves is as critical to Apple’s success as making the best products in the world. Our Business Conduct and Compliance policies are foundational to how we do business and how we put our values into practice every day.
                    Our Business Conduct Policy sets out our ethical requirements for our employees. Each of our employees must certify that they have read and understand the policy when they join Apple, and again each year. Violations of the policy are taken seriously and may result in
                     disciplinary action, up to and including termination of employment.
                    </p>
                    <NavLink to='/contact' 
                    className='btn btn-outline-primary px-3'>Contact Us</NavLink>
                 </div>
                 <div className="col-md-6 d-flex justify-content-center ">
                    <img src='/assets/images/about.jpg' alt='About Us' height="400px" width='400px'/>
                 </div>
                </div>
            </div>
        </div>
    );
};

export default About;