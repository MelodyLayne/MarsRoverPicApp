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
                const randomImages = []
                for (let i = 0; i < 25; i++) {
                    randomImages.push(Math.floor(Math.random() * num))
                }
                const imagesArray = []
                randomImages.forEach(n => {
                    imagesArray.push(res.data.photos[n].img_src)
                })
                console.log(imagesArray)
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
                for (let i = 0; i < 25; i++) {
                    images.push(Math.floor(Math.random() * num))
                }
                images.forEach(n => {
                    imagesArray.push(res.data.photos[n].img_src)
                })
                console.log(res.data)
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
                <div key={marsPics.id}>
                    <Rover
                        imagesArray={props.img_src}
                    />
                </div>
            </div>
            <div>
                <button onClick={onClick}>Get New Images</button>
            </div>
        </>
    );
}
