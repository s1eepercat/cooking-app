import React from "react";

const Action = ({ state, line }) => {
    // let line = state.currentLine - 1;

    if (line >= 0) {
        return (
            (state.recipe[line].action === undefined) ?
                <h1>Nothing here</h1> :
                <h1>{state.recipe[line].action}</h1>
        )
    } else {
        return <h1>---</h1>
    }
}

export default Action;