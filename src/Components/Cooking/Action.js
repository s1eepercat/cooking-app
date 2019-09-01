import React from "react";

const Action = ({ state }) => {
    let line = state.currentLine - 1;

    return (
        (state.recipe[line].action === undefined) ?
            <h1>Nothing here</h1> :
            <h1>{state.recipe[line].action}</h1>
    )
}

export default Action;