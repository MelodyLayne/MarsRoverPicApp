import React from 'react';
import { useState } from 'react'
import './ImageSearch.css'
import Rover from './rover'

//extracting the names of the rovers from the parent Rover object to use in the ImageSearch component.
//input typeofdate
const roverList = []
for (const keys in Rover) {
    let roverNames = Rover[keys]
    roverList.push(roverNames.roverName)
}

export default function ImageSearch(props) {
    const [rovers, setRover] = useState(roverList)
    const [roverSelected, setRoverSelected] =useState(false)

    const handleRover = (e) => {
        setRover(rovers.filter(rover => e === rover))
        setRoverSelected(true)
    }

    return (
        <div className='rover-select'>
            <h4>Pick a Rover</h4>
            <section className='title'>
                {rovers.map((rover, idx) => {
                    return (
                        <div className='rover' key={idx} onClick={()=>handleRover(rover)}>{rover}</div>
                        )
                    })}
            </section>
            {roverSelected && <section className='cameras'>
                <div id='cameras'>
                    <h4>Pick a Camera</h4>
                </div>
                    <h4>Pick a Day</h4>
                    <input id='date' type='date'/>
            </section>}
            <button className='rover-button'>Get Images</button>
        </div>
    );
};
