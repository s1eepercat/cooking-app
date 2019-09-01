import React from 'react';

const Debug = ({ state }) => {
    return (
        <div style={{ border: "1px solid red", backgroundColor: 'gray' }}>
            <p>current Line: {state.currentLine}</p>
            <p>totalLines: {state.totalLines}</p>
            <p>started: {state.started.toString()}</p>
            <p>paused: {state.paused.toString()}</p>
            <p>nextLine: {state.nextLine.toString()}</p>
        </div>

    )
}

export default Debug;