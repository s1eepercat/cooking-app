import React from 'react';


const Lines = ({ lines, fillRecipe }) => {

    let lineArray = []

    for (let i = 1; i < lines + 1; i++) {
        lineArray.push(
            <div id={i} className='preparation-lines' key={i}>
                <div className='input-number'>{i}.</div>
                <input id="food" className='inputs' placeholder="Current product" type="text" onChange={fillRecipe} />
                <input id="action" className='inputs' placeholder="What to do with it?" type="text" onChange={fillRecipe} />
                <input id="time" className='inputs' placeholder="Estimated time in minutes" type="number" onChange={fillRecipe} />
            </div>
        )
    }

    return lineArray
}

export default Lines;