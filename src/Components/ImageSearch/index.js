import React from 'react';
import { useState } from 'react'
import './ImageSearch.css'
import Rovers from './rover'


const date = new Date()
const [year, month, day ] = [date.getUTCFullYear(),date.getMonth()+1, date.getUTCDate()-3 ]
const endDay = [year, month, day]

export default function ImageSearch(props) {

    const [rovers, setRover] = useState(Object.keys(Rovers))
    const [roverMessage, setRoverMessage] =useState('Pick a Rover')
    const [dates, setStartDate] = useState(Object.values(Rovers).landing_date)
    const [endDate, setEndDate] = useState(endDay.join('-'))
    const [roverSelected, setRoverSelected] = useState(false)

    const handleRover = (e) => {
        setRover(rovers.filter(rover => e === rover))
        setRoverMessage('Reset Rovers')
        setRoverSelected(true)
        setStartDate(dates)
        // setEndDate(endDate.join('-'))
        console.log(e, dates, endDate)
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
                     min={dates}
                    max={endDate}
                  />
                    </div>
                <button className='rover-button' onClick={props.onClick}>Get Images</button>
            </section>}
        </div>
        </>
    );
};
