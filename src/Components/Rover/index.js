import React from 'react';
import '../Mars/Mars.css'

export default function Rover(props) {

    return (
        <div className='image' >
            {props.imagesArray?.map((image, id )=> <img src={image} key={id}  alt='Visuals from mars' />)}

        </div>
        );
};
