import React from "react";

const Timer = ({ makeTimer, state }) => {

    return <button
        className={`timer ${(!state.started || state.onBreak || state.done) || (state.recipe[state.currentLine - 1].time === undefined) || (state.recipe[state.currentLine - 1].time > 5000) ? 'grey' : ''}`}
        onClick={makeTimer}
    >Timer</button>
}

export default Timer;