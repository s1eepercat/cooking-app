import React from "react";

const Food = ({ state, line }) => {
    // let line = state.currentLine - 1;

    if (line >= 0) {
        return (
            (state.recipe[line].food === undefined) ?
                <p>No product</p> :
                <p>{state.recipe[line].food}</p>
        )
    } else {
        return <p></p>
    }

}

export default Food;