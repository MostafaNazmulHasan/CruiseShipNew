import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Sidebar from "../Admin/Sidebar/Sidebar"
import AddServices from '../Admin/Sidebar/AddServices/AddServices'
import MakeAdmin from '../Admin/Sidebar/MakeAdmin/MakeAdmin'
import ManageService from '../Admin/Sidebar/ManageService/ManageService'
import './Admin.css'
const Admin = () => {
    return (
        <div className="adminPage">
            <div className="row">
                <Router>
                    <div className="col-md-5">
                        <Sidebar />
                    </div>
                    <Switch>
                        <div className="col-md-6">
                            <Route exact path="/admin">
                                <AddServices />
                            </Route>
                            <Route path="/admin/makeAdmin">
                                <MakeAdmin />
                            </Route>
                            <Route path="/admin/manageService">
                                <ManageService />
                            </Route>
                            <Route path="/admin/addService">
                                <AddServices />
                            </Route>
                        </div>
                    </Switch>
                </Router>
            </div>
        </div>
    );
};

export default Admin;