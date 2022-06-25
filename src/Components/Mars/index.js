import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_KEY } from '../../APIdataJSONS/.keys';
import Rover from '../Rover';
// import Details from '../Rover/details';
import Header from './header';
import ImageSearch from '../ImageSearch';
import './Mars.css'

export default function Mars(props) {
    const { rovers, date } = props
    const [marsPics, setMarsPics] = useState([]);

    useEffect(() => {
        axios
            .get(
                `https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/photos?sol=1&api_key=${API_KEY}`
            )
            .then((res) => {
                const num = res.data.photos.length;
                const images = []
                const imagesArray = []
                for (let i = 0; images.length < num; i++) {
                    let photo = i
                    images.push(photo)
                }
                images.forEach(n => {
                    imagesArray.push(res.data.photos[n].img_src)
                })
                return setMarsPics(imagesArray);
            })
            .catch((err) => console.error(err));
    }, []);

    const getRoverPics = (e) => {
        e.preventDefault()
        axios
            .get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rovers}/photos?earth_date=${date}&api_key=${API_KEY}`)
            .then((res) => {
                const num = res.data.photos.length;
                const images = []
                const imagesArray = []
                console.log(res.data.photos)
                for (let i = 0; i < num; i++) {
                    let photo = i
                    images.push(photo)
                }
                images.forEach(n => {
                    imagesArray.push(res.data.photos[n].img_src)
                    })
                console.log(imagesArray)
                return setMarsPics(imagesArray);
            })
            .catch((err) => console.error(err));
    }

    const getNewDay = (e) => {
        let nextDay = 1
        axios
            .get(
            `https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/photos?sol=${nextDay}&api_key=${API_KEY}`
            )
            .then((res) => {
                const num = res.data.photos.length;
                const images = []
                const imagesArray = []
                console.log(res.data.photos)
                for (let i = 0; i < num; i++) {
                    let photo = i
                    images.push(photo)
                }
                images.forEach(n => {
                    imagesArray.push(res.data.photos[n].img_src)
                })
               setMarsPics(imagesArray);
            })
            .then(
                nextDay++
            )
            .catch((err) => console.error(err));
        console.log(nextDay)
    };


    return (
        <>
            <div>
                <Header />
            </div>
            <div className='hubble'>
                <ImageSearch
                    getRoverPics={getRoverPics}
                    rover={props.rovers}
                    date={props.date}
                />
            </div>
            <div className='images'>
                    <Rover
                        imagesArray={marsPics}
                    />
                </div>
            <div>
                <button onClick={getNewDay}>Get New Images</button>
            </div>
        </>
    );
}
