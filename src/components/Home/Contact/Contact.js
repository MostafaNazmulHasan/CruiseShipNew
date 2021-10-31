import Button from '@restart/ui/esm/Button';
import React from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import './Contact.css'
const Contact = () => {
    return (
        <div className="contactForm">
            <div className="container">
                <>
                    <h3 className="text-center mb-5">Contact Us</h3>
                    <div className="d-flex">
                        <FloatingLabel controlId="floatingFirstName" label="First Name" className="mb-3 FirstName">
                            <Form.Control type="name" placeholder="First Name" />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingLastName" label="Last Name" className="mb-3 LastName">
                            <Form.Control type="name" placeholder="Last Name" />
                        </FloatingLabel>
                    </div>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                        className="mb-3"
                    >
                        <Form.Control type="email" placeholder="name@example.com" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPhoneNumber" label="Phone Number" className="mb-3">
                        <Form.Control type="number" placeholder="Phone Number" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingTextarea2" label="Message" className="mb-5">
                        <Form.Control
                            as="textarea"
                            placeholder="Write a message"
                            style={{ height: '100px' }}
                        />
                    </FloatingLabel>
                    <Button variant="primary" class="submitButton"type="submit">
                        Submit
                    </Button>
                </>
            </div>
        </div>
    );
};

export default Contact;