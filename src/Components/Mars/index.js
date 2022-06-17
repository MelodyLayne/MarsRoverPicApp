import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_KEY } from '../../APIdataJSONS/.keys';
import Rover from '../Rover';
import Details from '../Rover/details';
import Header from './header';
import ImageSearch from '../ImageSearch';
import './Mars.css'

export default function Mars(props) {
    const [marsPics, setMarsPics] = useState([]);

    const onClick = (e) => {
        e.preventDefault();
        axios
            .get(
                `https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/photos?earth_date=2022-6-6&api_key=${API_KEY}`
            )
            .then((res) => {
                const num = res.data.photos.length;
                const images = []
                for (let i = 0; images.length < 25; i++) {
                    let photo = Math.floor(Math.random() * num)
                    if (images.indexOf(photo) === -1)
                        images.push(photo)
                }
                const imagesArray = []
                 images.forEach(n => {
                     imagesArray.push(res.data.photos[n].img_src)
                    })
                return setMarsPics(imagesArray);
            })
            .catch((err) => console.error(err));
    };

    useEffect(() => {
        axios
            .get(
                `https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/photos?navcam_left&earth_date=2022-6-6&api_key=${API_KEY}`
            )
            .then((res) => {
                const num = res.data.photos.length;
                const images = []
                const imagesArray = []
                for (let i = 0; images.length < 25; i++) {
                    let photo = Math.floor(Math.random() * num)
                    if (images.indexOf(photo) === -1)
                    images.push(photo)
                }
                images.forEach(n => {
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
                        rover={props.rover}
                        camera={props.camera}
                        earthDate={props.date}
                    />
                )}
            </div>
                <div className='images' key={marsPics.id}>
                    <Rover
                        imagesArray={marsPics}
                    />
                </div>
            <div>
                <button onClick={onClick}>Get New Images</button>
            </div>
        </>
    );
}
