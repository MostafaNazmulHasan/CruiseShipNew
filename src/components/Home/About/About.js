import Button from '@restart/ui/esm/Button';
import React from 'react';
import AboutImage from '../../../Images/Ship2.jpg'
import './About.css'
const About = () => {
    return (
        <div className="about-section">
            <div className="container">
                <div className="title">
                    <h1>About Us</h1>
                </div>
                <div className="row">
                    <div className="col-md-6 mt-3">
                        <h2>A Few Words About Cruise Ship</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid repellendus voluptates odit quam excepturi natus dolore obcaecati voluptatum in laboriosam. Odio iure numquam harum aspernatur laudantium officia? Consequatur voluptatem quos rerum harum veritatis quo cumque sint magnam repellendus, odit deserunt reiciendis id facere sunt corrupti totam culpa suscipit labore est iure. Laudantium obcaecati minus veritatis ab nemo aspernatur soluta quae, sed numquam aliquam repudiandae provident, sunt sequi doloremque doloribus voluptate animi? Blanditiis libero tempore illum est provident, inventore qui et cum. Eaque, vel perspiciatis. Nam omnis consequuntur quidem odio molestias necessitatibus quos natus? Quo reprehenderit architecto delectus quam necessitatibus quas! A at odio iste sapiente, iusto asperiores.</p>
                        <br/>
                        <Button className='aboutButton'>Read More</Button>
                    </div>
                    <div className="col-md-6">
                        <img src={AboutImage} alt="" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;