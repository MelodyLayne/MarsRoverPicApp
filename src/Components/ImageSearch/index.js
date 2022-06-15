import React from 'react';
import { useState } from 'react'
import './ImageSearch.css'
import Rovers from './rover'
import Rover from '../Rover'


const date = new Date()
const [year, month, day ] = [date.getUTCFullYear(),date.getMonth()+1, date.getUTCDate()-3 ]

export default function ImageSearch(props) {

    const [rovers, setRover] = useState(Object.keys(Rovers))
    const [roverMessage, setRoverMessage] =useState('Pick a Rover')
    const [dates, setStartDate] = useState([year, month, day])
    const [endDate, setEndDate] = useState([year, month, day])
    const [roverSelected, setRoverSelected] = useState(false)

    const handleRover = (e) => {
        setRover(rovers.filter(rover => e === rover))
        setRoverMessage('Reset Rovers')
        setRoverSelected(true)
        setStartDate(props.landing_date)
        setEndDate(endDate.join('-'))
        console.log(e, dates.join('-'))
    };

    const resetRovers = (e) => {
        e.target = setRover(Object.keys(Rovers))
        setRoverMessage('Pick a Rover')
        setRoverSelected(false)
    }

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
                    <div className='date-select'>
                                       <h4>Pick a Day</h4>
                    <input id='date' type='date'
                    // min={} max={}
                    date={props.date} />
                    </div>
                <button className='rover-button' onClick={props.onClick}>Get Images</button>
            </section>}
        </div>
        </>
    );
};
