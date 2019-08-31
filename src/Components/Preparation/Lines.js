import React from 'react';


const Lines = ({ lines, fillRecipe }) => {

    let lineArray = []

    for (let i = 1; i < lines + 1; i++) {
        lineArray.push(
            <div className={`${i}`} key={i}>
                <input placeholder="food" type="text" onChange={fillRecipe} />
                <input placeholder="action" type="text" onChange={fillRecipe} />
                <input placeholder="time" type="time" onChange={fillRecipe} />
            </div>
        )
    }

    return lineArray
}

export default Lines;