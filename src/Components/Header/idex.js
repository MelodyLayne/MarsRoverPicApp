import React from 'react';



export default function Header() {
    return (
        <div className='header'>
            <h1>Welcome to my NASA Mars Rovers Image Search site!</h1>
            <p>
                Search from any of the cameras on any of
                the four Mars rovers in the Nasa Database using the NASA API.
            </p>
            <p>Begin by choosing the rover. Then pick a date from the available service dates for that rover to see all the images captured on that day.</p>
            <p>Some days have hundreds of images, others have as few as one. </p>
            <p>If you want to start over, just click 'Reset Rovers' to begin again.</p>
            <p>The initial images you see are from the latest images sent by the Mars Perserverance Rover</p>
        </div>
    );
};
