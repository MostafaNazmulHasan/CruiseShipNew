import Button from '@restart/ui/esm/Button';
import React from 'react';
import './WelcomeSection.css'
const WelcomeSection = () => {
    return (
        <div className="WelcomeSection">
            <div className="container">
                <div className="col-md-10 ">
                    <h5>Welcome To Cruise Ship</h5>
                    <h1>We Provide Best Services</h1>
                    <div className="contactButton d-flex justify-content-center">
                        <Button className='contactbtn'>Contact Us</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WelcomeSection;