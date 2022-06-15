import React from 'react';



export default function Header() {
    return (
        <div className='header'>
            <h1>Welcome to the NASA Mars Rovers Image Search site!</h1>
            <p>
                When completed, this page will allow you to search from any of the cameras on any of
                the four Mars rovers in the Nasa Database using the NASA API. Currently, 25 random images from the 6th of June, 2022 are what you see.
            </p>
        </div>
    );
};
