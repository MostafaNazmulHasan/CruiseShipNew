import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card } from 'react-bootstrap';
import './ServiceDetails.css'
const ServiceDetails = (props) => {
    console.log(props);
    const {title, description, imageUrl} = props.service;
    return (
        <div className="col-md-4">
            <div className="serviceDetails">
                <Card className="serviceCard mt-4 p-2 " style={{ width: '18rem'}}>
                    <Card.Img className="productImage m-auto img-fluid" style={{ height: '4rem', width: '4rem' }} variant="top" src={imageUrl} />
                    <Card.Body>
                        <Card.Title className="productTitle">{title}</Card.Title>
                        <br />
                        <Card.Text className="productPrice">
                            <p>{description}</p>
                        </Card.Text>
                        <Button className="readMoreBtn">Read More</Button>
                    </Card.Body>
                </Card>
            </div>
           
        </div>
    );
};

export default ServiceDetails;