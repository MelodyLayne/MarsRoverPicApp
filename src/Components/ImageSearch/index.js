import React from 'react';
import { useState } from 'react'
import './ImageSearch.css'
import Rover from './rover'


export default function ImageSearch(props) {

    const [rovers, setRover] = useState(Object.keys(Rover))
    const [roverMessage, setRoverMessage] =useState('Pick a Rover')
    // const [date, setDate] = useState(Date)
    const [roverSelected, setRoverSelected] = useState(false)

    const handleRover = (e) => {
        setRover(rovers.filter(rover => e === rover))
        setRoverMessage('Reset Rovers')
        setRoverSelected(true)
    };

    const resetRovers = (e) => {
        e.target = setRover(Object.keys(Rover))
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
                    <input id='date' type='date' min='2000-01-01' max='2022-01-01'  date={props.date} />
                    </div>
                <button className='rover-button' onClick={props.onClick}>Get Images</button>
            </section>}
        </div>
        </>
    );
};
