import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { RiDeleteBin6Line } from "@react-icons/all-files/ri/RiDeleteBin6Line";
import { Table } from 'react-bootstrap';
import './ManageService.css'
const ManageService = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(`https://frozen-peak-28944.herokuapp.com/services`)
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);
    console.log(data);
    const handleDelete = (id) => {
        fetch(`https://frozen-peak-28944.herokuapp.com/deleteService/${id}`, {
            method: "DELETE",
        }).then(() => {
            fetch(`https://frozen-peak-28944.herokuapp.com/services`)
                .then((res) => res.json())
                .then((data) => setData(data));
        });
    };
    return (
        <div className="manageServicePage">
            <h1>Manage Service</h1>
            <div className="container">

                <Table style={{ color: 'white' }} className="table" variant="darkblue">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {data.map(data =>
                        <tbody>
                            <tr>
                                <td>{data.title}</td>
                                <td>{data.description}</td>
                                <td>{data.price}</td>
                                <td>{
                                    <div className="manageServiceIcon">
                                        <img
                                            src={data.imageUrl}
                                            width="80"
                                            height="60"
                                            className="img-fluid"
                                            alt="pc"
                                        />
                                    </div>
                                }</td>
                                <td>
                                    <Button onClick={() => handleDelete(data._id)} className="deleteBtn"><RiDeleteBin6Line /></Button>
                                </td>
                            </tr>

                        </tbody>
                    )}
                </Table>
            </div>
        </div>
    );
};

export default ManageService;