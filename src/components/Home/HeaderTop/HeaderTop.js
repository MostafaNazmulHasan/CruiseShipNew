import React from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { FaTwitter, FaFacebook, FaYoutube } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';
import { MdEmail } from "@react-icons/all-files/md/MdEmail";
import './HeaderTop.css'
const HeaderTop = () => {
    return (
        <div className="header-top">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="top-left">
                            <p>Best services in the world</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="top-right">
                            <FiPhoneCall /> {' '}  <span className='me-5'>01865236086</span> 
                            <MdEmail /> {' '} <span className='me-5'>mostafanazmulhasan@gmail.com</span>
                            <span className='me-4'><FaTwitter/></span> 
                            <span className='me-4'><GrInstagram/></span> 
                            <span className='me-4'><FaFacebook/></span> 
                            <span className='me-4'><FaYoutube/></span>                                                      
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderTop;