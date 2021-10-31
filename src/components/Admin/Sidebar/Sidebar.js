import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AiOutlineUserAdd } from "@react-icons/all-files/ai/AiOutlineUserAdd";
import { IoIosAddCircleOutline } from "@react-icons/all-files/io/IoIosAddCircleOutline";
import { BiEdit } from "@react-icons/all-files/bi/BiEdit";

import './Sidebar.css'
const Sidebar = () => {
    return (
        <div className='sidebar'>
            <ListGroup>
                <ListGroup.Item as={Link} to='/admin/addService' >
                   <IoIosAddCircleOutline/> Add Service
                </ListGroup.Item>
                <ListGroup.Item as={Link} to='/admin/makeAdmin' >
                <AiOutlineUserAdd/> Make Admin
                </ListGroup.Item>
                <ListGroup.Item as={Link} to='/admin/manageService'>
                   <BiEdit/> Manage Service
                </ListGroup.Item>
            </ListGroup>
        </div>
    );
};

export default Sidebar;