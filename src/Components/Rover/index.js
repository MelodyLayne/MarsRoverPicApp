import React from 'react';


export default function Rover(props) {
    const { img_src, camera, imagesArray } = props;
    console.log(img_src, camera, imagesArray)
    return (
        <div>
            {props.imagesArray?.map(image => <img src={image} alt='Visuals from mars' />)}

        </div>
        );
};
