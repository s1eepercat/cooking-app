import React from "react";

const Food = ({ state, line }) => {
    // let line = state.currentLine - 1;

    if (line >= 0) {
        return (
            (state.recipe[line].food === undefined) ?
                <h1>Nothing here</h1> :
                <h1>{state.recipe[line].food}</h1>
        )
    } else {
       return <h1>---</h1> 
    }

}

export default Food;