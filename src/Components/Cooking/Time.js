import React from "react";

const Time = ({ state }) => {
    let line = state.currentLine - 1;

    return (
        (state.recipe[line].time === undefined) ?
            <h1>Not set</h1> :
            <h1>{state.recipe[line].time}</h1>
    )
}

export default Time;