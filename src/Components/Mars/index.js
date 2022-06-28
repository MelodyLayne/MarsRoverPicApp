import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_KEY } from '../../APIdataJSONS/.keys';
import Rover from '../Rover';
// import Details from '../Rover/details';
import Header from './header';
// import ImageSearch from '../ImageSearch';
import './Mars.css'

let today = new Date()
let roverList = ['Perseverance', 'Opportunity', 'Curiousity', 'Spirit']


export default function Mars(props) {
    const [marsPics, setMarsPics] = useState([]);
    const [rovers, setRover] = useState(roverList)
    const [roverMessage, setRoverMessage] = useState('Pick a Rover')
    const [dates, setStartDate] = useState(today)
    const [endDate, setEndDate] = useState(today)
    const [roverSelected, setRoverSelected] = useState(false)
    const [date, setDate] = useState(today)

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

    const handleRover = (e) => {
        setRover(rovers.filter(rover => e === rover))
        setRoverMessage('Reset Rovers')
        setRoverSelected(true)

        axios
            .get(`https://api.nasa.gov/mars-photos/api/v1/manifests/${e.toLowerCase()}/?api_key=${API_KEY}`)
            .then((res) => {
                setStartDate(res.data.photo_manifest.landing_date)
                setEndDate(res.data.photo_manifest.max_date)
                console.log(res.data)
            })
            .catch((err) => console.error(err))

    };
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


    const resetRovers = (e) => {
        e.target = setRover(roverList)
        setRoverMessage('Pick a Rover')
        setRoverSelected(false)
    }

    const datePicker = (e) => {
        let dateChoice = e.target.value
        setDate(dateChoice)
        console.log(dateChoice)
    }


    return (
        <>
            <div>
                <Header />
            </div>
            <div className='hubble'>
                <div>
                    <section className='title'>
                        <h4 onClick={resetRovers}>{roverMessage}</h4>
                        <div className='rover-select'>
                            {rovers.map((rover, idx) => {
                                return (
                                    <div className='rover' key={idx} onClick={() => handleRover(rover)}>{rover}</div>
                                )
                            })}
                        </div>
                    </section>
                    {roverSelected && <section className='date'>
                        <form className='date-select'>
                            <h4>Pick a Day</h4>
                            <input
                                id='date'
                                type='date'
                                min={dates}
                                max={endDate}
                                value={date}
                                onChange={datePicker}
                            />
                        </form>
                        <button className='rover-button' onClick={getRoverPics}>Get Images</button>
                    </section>}
                </div>
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
