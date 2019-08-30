import React from 'react';


const Lines = ({ lines }) => {

    let lineArray = []

    for (let i = 1; i < lines + 1; i++) {
        lineArray.push
            (
                <div className={`line ${i}`} key={i}>
                    <input placeholder="food" />
                    <input placeholder="action" />
                    <input placeholder="time" />
                </div>
            )
    }

    return lineArray
}

export default Lines;