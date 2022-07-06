import React from 'react';
import '../Mars/Mars.css'

export default function Rover(props) {
    const { imagesArray, rover } = props

    let images = []
    for (let index in imagesArray) {
        const image = imagesArray[index].image
        const camera = imagesArray[index].camera

        if (images.indexOf(imagesArray[index].image) === -1) {
            images.push([image, camera])
        }
    }
    console.log(props.rover)
    const roverName = imagesArray[imagesArray.length-1]
    const imageTotal = imagesArray.length-1

    return (
        <div className='image' >
            <p>{imageTotal} images were captured on the date you chose</p>
            {images.map((image, id) =>
                <figure>
                    <img src={image[0]} key={id} alt='Visuals from mars' />
                    <figcaption>Image captured by the {image[1]} on the {roverName} rover </figcaption>
                </figure>
            )}
        </div>
        );
};
