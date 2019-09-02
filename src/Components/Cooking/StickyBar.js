import React from 'react';

const StickyBar = ({ recipe, timers }) => {

    if (timers) {
        const recipeLength = timers.length;
        let barArray = [];

        for (let i = 0; i < recipeLength; i++) {
            barArray.push(
                <div key={i}>
                    <span>{recipe[i].food}</span>
                    <span>{recipe[i].action}</span>
                    <span>{recipe[i].time}</span>
                </div>
            )
        }
        return barArray;
    }
}

export default StickyBar;