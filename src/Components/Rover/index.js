import React from 'react';


export default function Rover(props) {
    const { img_src, camera } = props;
     console.log(img_src, camera)
    return (
        <div>
            {/* {props.imagesArray.forEach(image => image)}*/}
            <img src={props.img_src} alt='Visuals from mars' />
        </div>
        );
};
