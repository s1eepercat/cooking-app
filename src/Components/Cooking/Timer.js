import React from "react";

const Timer = ({ makeTimer }) => {
    return <button
        onClick={makeTimer}
    >Timer</button>
}

export default Timer;