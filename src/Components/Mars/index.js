import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_KEY } from '../../Constants/.keys';
import Rover from '../Rover';
import Details from '../Rover/details';
import Header from './header';
import ImageSearch from '../ImageSearch';
import './Mars.css'

export default function Mars() {
    const [marsPics, setMarsPics] = useState([]);

    const onClick = (e) => {
        e.preventDefault();
        axios
            .get(
                `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2022-02-15&camera=mast&api_key=${API_KEY}`
            )
            .then((res) => {
                const num = res.data.photos.length;
                const randomImages = []
                for (let i = 0; i < 5; i++) {
                    randomImages.push(Math.floor(Math.random() * num))
                }
                const imagesArray = []
                randomImages.forEach(n => {
                    imagesArray.push(res.data.photos[n])
                })
                console.log(imagesArray)
                return setMarsPics(imagesArray);
            })
            .catch((err) => console.error(err));
    };

    useEffect(() => {
        axios
            .get(
                `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2022-02-15&camera=mast&api_key=${API_KEY}`
            )
            .then((res) => {
                const num = res.data.photos.length;
                const randomImages = []
                for (let i = 0; i < 5; i++) {
                    randomImages.push(Math.floor(Math.random() * num))
                }
                const imagesArray = []
                randomImages.forEach(n => {
                    imagesArray.push(res.data.photos[n].img_src)
                })
                return setMarsPics(imagesArray);
            })
            .catch((err) => console.error(err));
        }, []);
    return (
        <>
            <div className='hubble'>
                <Header />
                <ImageSearch />
                {marsPics.rover && (
                    <Details
                        rover={marsPics.rover.name}
                        camera={marsPics.camera.full_name}
                        earthDate={marsPics.earth_date}
                    />
                )}
                <Rover picture={
                    marsPics.forEach(image => image)
                } key={marsPics.id} />
            </div>
            <div>
                <button onClick={onClick}>Get New Images</button>
            </div>
        </>
    );
}
