import React from "react";

const Action = ({ state, line }) => {
    // let line = state.currentLine - 1;

    if (line >= 0) {
        return (
            (state.recipe[line].action === undefined) ?
                <p>No action</p> :
                <p>{state.recipe[line].action}</p>
        )
    } else {
        return <p>---</p>
    }
}

export default Action;