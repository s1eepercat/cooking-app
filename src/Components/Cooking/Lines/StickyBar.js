import React from 'react';

const StickyBar = ({ recipe, timers }) => {

    if (timers) {
        const recipeLength = timers.length;
        let barArray = [];

        for (let i = 0; i < recipeLength; i++) {
            barArray.push(
                <div className='sticky-container' key={i}>
                    <span className='sticky-item'>{recipe[i].food}</span>
                    <span className='sticky-item'>{recipe[i].action}</span>
                    <span className='sticky-item'>{recipe[i].time}</span>
                </div>
            )
        }

        return barArray;
    }
}

export default StickyBar;