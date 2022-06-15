import React from 'react';
import './Rover.css'

export default function Rover(props) {

    return (
        <div className='image'>
            {props.imagesArray?.map((image, id )=> <img src={image} key={id} id='mars-pic' alt='Visuals from mars' />)}

        </div>
        );
};
