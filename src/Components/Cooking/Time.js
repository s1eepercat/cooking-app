import React from "react";

const Time = ({ state, line }) => {
    // let line = state.currentLine - 1;

    if (line >= 0) {
        return (
            (state.recipe[line].time === undefined) ?
                <h1>Nothing here</h1> :
                <h1>{state.recipe[line].time}</h1>
        )
    } else {
        return <h1>---</h1>
    }
}

export default Time;