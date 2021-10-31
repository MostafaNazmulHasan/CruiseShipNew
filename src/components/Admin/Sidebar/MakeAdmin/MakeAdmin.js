import React from 'react';
import './MakeAdmin.css'
const MakeAdmin = () => {
    return (
        <div className="makeAdminPage">
            <div className="container">
                <h1 className="text-center">Make Admin</h1>
                <hr/>
                <br/>
                <br/>
                <br/>
                <form>
                    <div className="col-md-12 d-flex ">
                        <div className="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                        </div>
                        <div className="submitBtn">
                            <button type="submit" className="addBtn">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MakeAdmin;