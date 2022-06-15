import React from 'react';

export default function Details(props){
    const {rover, camera, earthDate} = props
    return (
            <p>
                This image was captured by the {rover} rover from the {camera} on {earthDate}
            </p>
    );
};
