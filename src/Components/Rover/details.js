import React from 'react';




const Details = (props) => {
    return (
            <p>
                This image was captured by the {props.rover} rover from the {props.camera} on{' '}
                {props.earthDate}
            </p>
    );
};

export default Details;
