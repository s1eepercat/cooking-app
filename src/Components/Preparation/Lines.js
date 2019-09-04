import React from 'react';


const Lines = ({ lines, fillRecipe }) => {

    let lineArray = []

    for (let i = 1; i < lines + 1; i++) {
        lineArray.push(
            <div id={i} className='preparation-lines' key={i}>
                <span className='input-number'>{i}.</span>
                <input id="food" className='inputs mini-input' maxLength="25" placeholder="Current product" type="text" onChange={fillRecipe} />
                <input id="action" className='inputs' maxLength="40" placeholder="What do you do with it?" type="text" onChange={fillRecipe} />
                <input id="time" className='inputs mini-input' min="1" max="300" placeholder="Estimated time in minutes" type="number" onChange={fillRecipe} />
            </div>
        )
    }

    return lineArray
}

export default Lines;