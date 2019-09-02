import React from 'react';

const StickyBar = ({ recipe, timers }) => {
    console.log(timers);
    const recipeLength = timers.length;
    const barArray = [];

    for (let i = 0; i < recipeLength; i++) {
        barArray.push(
            <div>
                <span>{recipe[i].food}</span>
                <span>{recipe[i].action}</span>
                <span>{recipe[i].time}</span>
            </div>
        )
    }

    return (
        <div style={{ height: "50px", backgroundColor: "yellow", width: "100%", border: "1px solid red" }}>
            <barArray />
        </div>
    );
}

export default StickyBar;