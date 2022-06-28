import React from 'react';
import { useState } from 'react'
import './ImageSearch.css'
import axios from 'axios'
import { API_KEY } from '../../APIdataJSONS/.keys'

// let today = new Date()
// let roverList = ['Perseverance', 'Opportunity', 'Curiousity', 'Spirit']

export default function ImageSearch(props) {

    // const [rovers, setRover] = useState(roverList)
    // const [roverMessage, setRoverMessage] = useState('Pick a Rover')
    // const [dates, setStartDate] = useState(today)
    // const [endDate, setEndDate] = useState(today)
    // const [roverSelected, setRoverSelected] = useState(false)
    // const [date, setDate] = useState(today)

    // const handleRover = (e) => {
    //     setRover(rovers.filter(rover => e === rover))
    //     setRoverMessage('Reset Rovers')
    //     setRoverSelected(true)

    //     axios
    //         .get(`https://api.nasa.gov/mars-photos/api/v1/manifests/${e.toLowerCase()}/?api_key=${API_KEY}`)
    //         .then((res) => {
    //             setStartDate(res.data.photo_manifest.landing_date)
    //             setEndDate(res.data.photo_manifest.max_date)
    //             console.log(res.data)
    //         })
    //         .catch((err) => console.error(err))

    // };

    // const resetRovers = (e) => {
    //     e.target = setRover(roverList)
    //     setRoverMessage('Pick a Rover')
    //     setRoverSelected(false)
    // }

    // const datePicker = (e) => {
    //     let dateChoice = e.target.value
    //     setDate(dateChoice)
    //     console.log(dateChoice)
    // }

    return (
        <>
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
                    <button className='rover-button' onClick={props.getRoverPics}>Get Images</button>
            </section>}
        </div>
        </>
    );
};
