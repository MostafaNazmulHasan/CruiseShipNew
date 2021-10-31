import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card } from 'react-bootstrap';

const teamDetails = ({ team }) => {
    return (
        <div className="col-md-4 text-center "> 
        <Card className='teamDetails' style={{ width: '18rem', padding: '5px' }}>
            <Card.Img variant="top" style={{ height: '50%', width:'100%'}}src={team.img}/>
            <Card.Body>
                <Card.Title>{team.name}</Card.Title>
                <Card.Text>
                    {team.description}
                </Card.Text>
                <Button className="btn btn-primary" variant="primary">Read More</Button>
            </Card.Body>
        </Card>
        </div>
    );
};

export default teamDetails;