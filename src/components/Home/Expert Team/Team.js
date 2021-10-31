import React from 'react';
import TeamDetails from '../TeamDetails/TeamDetails'
import Member1 from '../../../Images/Member1.jpg'
import Member2 from '../../../Images/Member2.jpg'
import Member3 from '../../../Images/Member3.jpg'
import './Team.css'
const teamData = [
    {
        name: 'Ismail Alex',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit deleniti quo ab reprehenderit nulla enim, maxime nam dicta odio consequatur.',
        img: Member1
    },
    {
        name: 'Jack ',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit deleniti quo ab reprehenderit nulla enim, maxime nam dicta odio consequatur.',
        img: Member2
    },
    {
        name: 'Bravo',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit deleniti quo ab reprehenderit nulla enim, maxime nam dicta odio consequatur.',
        img: Member3
    }
]
const team = () => {
    return (
        <div className="team">
            <div className="container">
                <div className="col-md-8">
                    <div className="text-center">
                        <h1>Our Expert team</h1>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">

                    {
                        teamData.map(team => <TeamDetails team={team}> </TeamDetails>)
                    }

                </div>
            </div>
        </div>
    );
};

export default team;