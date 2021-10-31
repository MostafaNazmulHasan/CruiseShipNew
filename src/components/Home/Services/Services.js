import React, { useEffect, useState } from 'react';
import ServiceDetails from '../../Home/ServiceDetails/ServiceDetails';
import './Services.css'
const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://frozen-peak-28944.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                setServices(data);
            })
    }, [])
    return (
        <div className="services">
            <div className="container">
                <h1> Our Services</h1>
                <hr/>
                <div className="row"> 
                    {
                        services.map((service) => <ServiceDetails service={service}></ServiceDetails> )
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;