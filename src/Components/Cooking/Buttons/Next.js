import React from "react";

const Next = ({ gotoNextLine, state }) => {
    return <button
        className={`next ${(!state.started || state.done) ? 'grey' : ''}`}
        onClick={gotoNextLine}
    >Next</button>
}

export default Next;