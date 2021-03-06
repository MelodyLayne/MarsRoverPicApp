import React from 'react';
import '../Mars/Mars.css'

export default function Rover(props) {
    const { imagesArray } = props
    let images = []
    let date

    for (let index in imagesArray) {
        const image = imagesArray[index].image
        const camera = imagesArray[index].camera
        const rover = imagesArray[index].rover
        date = imagesArray[index].date

        if (images.indexOf(imagesArray[index].image) === -1) {
            images.push([image, camera, rover])
        }
    }
    console.log()
    const imageTotal = imagesArray.length

    return (
        <div className='image' >
            <p>{imageTotal} images were captured on {date} </p>
            {images.map((image, id) =>
                <figure key={id}>
                    <img src={image[0]}  alt='Visuals from mars' />
                    <figcaption>Image captured by the {image[1]} on the {image[2]} rover </figcaption>
                </figure>
            )}
        </div>
        );
};
