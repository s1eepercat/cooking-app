import React from "react";

const Timer = ({ makeTimer, state }) => {
    return <button
        className={`timer ${(!state.started || state.onBreak || state.done) ? 'grey' : ''}`}
        onClick={makeTimer}
    >Timer</button>
}

export default Timer;