import React, { useState } from 'react';
import Button from '@restart/ui/esm/Button';
import axios from 'axios';

import { FloatingLabel, Form } from 'react-bootstrap';
import './AddServices.css'
const AddServices = () => {
    const [message, setMessage] = useState("");
    const [image, setImage] = useState(null);
    const [values, setValues] = useState({
        title: "",
        description: "",
        price: ""
    });

    const handleChange = (e) => {
        const value = { ...values };
        value[e.target.name] = e.target.value;
        setValues(value);
      };
      const handleSubmit = (e) => {
        const inputData = { ...values };
        inputData.imageUrl = image;
        fetch(`https://frozen-peak-28944.herokuapp.com/addService`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(inputData),
        })
          .then((result) => {
            console.log(result);
            setMessage("Service added Successfully !");
          })
          .catch((err) => {
            console.log(err);
          });
          e.preventDefault();
      };
    
    const handleImage = (e) => {
        const imageData = new FormData();
        imageData.set("key", "13f47358ce60e3350ff899d9e922c7e2");
        imageData.append("image", e.target.files[0]);
        axios.post(`https://api.imgbb.com/1/upload`, imageData).then((result) => {
            setImage(result.data.data.display_url);
        });
    };

    return (
        <div className="AddService">
            <div className="container">
                <h3 className="text-center" style={{ color: 'white' }}>Add Service</h3>
                <hr />
                <form className="addService" onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col">
                            <FloatingLabel controlId="floatingServiceTitle" label="Service Title" className="mb-3 Service Title">
                                <Form.Control type="text" name="title" placeholder="Service Title" onChange={handleChange}  required />
                            </FloatingLabel>
                        </div>
                        <div className="col" >
                            <Form.Group controlId="formFile" className="mb-3">
                                <Form.Label style={{ color: 'white' }}>Upload Your Image</Form.Label>
                                <Form.Control type="file" onChange={handleImage}  required/>
                            </Form.Group>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <FloatingLabel controlId="floatingTextarea2" label="Message" className="mb-5">
                                <Form.Control
                                    as="textarea"
                                    name="description"
                                    onChange={handleChange}
                                    placeholder="Write a message"
                                    style={{ height: '100px' }}
                                />
                            </FloatingLabel>
                        </div>
                        <div className="col">
                            <FloatingLabel controlId="floatingPrice" label="Price" className="mb-3">
                                <Form.Control type="number" name="price" placeholder="Price" onChange={handleChange} required />
                            </FloatingLabel>
                        </div>
                    </div>
                    <Button variant="primary" class="submitButton" type="submit">
                        Submit
                    </Button>
                </form>
            </div>
        </div>
    );

};

export default AddServices;