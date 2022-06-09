import React from 'react';
import { useState } from 'react'
import './ImageSearch.css'
import Rover from './rover'

const cameraList = []
console.log(Object.values(Rover.Opportunity.cameras))
export default function ImageSearch(props) {

    const [rovers, setRover] = useState(Object.keys(Rover))
    const [cameras, setCamera] = useState(cameraList)
    const [date, setDate] = useState(Date)
    const [roverSelected, setRoverSelected] =useState(false)

    const handleRover = (e) => {
        setRover(rovers.filter(rover => e === rover))
        setRoverSelected(true)
    };

    const handleCamera = (e) => {
        setCamera(cameras.filter(camera => e === camera))
        console.log(setCamera())
    };

    return (
        <>
            <div>
                <section className='title'>
                    <h4>Pick a Rover</h4>
                    <div className='rover-select'>
                        {rovers.map((rover, idx) => {
                            return (
                                <div className='rover' rover={props.rover} key={idx} onClick={() => handleRover(rover)}>{rover}</div>
                                )
                        })}
                    </div>
            </section>
            {roverSelected && <section className='cameras'>
                    <div className='camera-select'>
                    <h4>Pick a Camera</h4>
                        {cameras.map((camera, idx) => {
                            return (
                                <div className='camera' key={idx} onClick={() => handleCamera(camera)}>{camera}</div>
                            )
                        })}
                </div>
                    <h4>Pick a Day</h4>
                    <input id='date' type='date' date={props.date} />
            </section>}
            <button className='rover-button'>Get Images</button>
        </div>
        </>
    );
};
