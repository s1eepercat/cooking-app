import React from 'react';

const StickyBar = ({ state }) => {

    const secondsToHour = (sec) => {
        sec = Number(sec);
        var h = Math.floor(sec / 3600);
        var m = Math.floor(sec % 3600 / 60);
        var s = Math.floor(sec % 3600 % 60);

        var hDisplay = (h < 10) ? '0' + h : h;
        var mDisplay = (m < 10) ? '0' + m : m;
        var sDisplay = (s < 10) ? '0' + s : s;
        return hDisplay + ' : ' + mDisplay + ' : ' + sDisplay;
    }

    const recipeLength = state.recipe.length;
    let barArray = [];

    for (let i = 0; i < recipeLength; i++) {
        if (state.recipe[i].timer && state.recipe[i].timer > 0) {
            barArray.push(
                <div className='sticky-container' key={i}>
                    <span className='sticky-item'>{state.recipe[i].food}</span>
                    <span className='sticky-item'>{state.recipe[i].action}</span>
                    <span className='sticky-item'>{secondsToHour(state.recipe[i].timer)}</span>
                </div >
            )
        } else if (state.recipe[i].timer <= 0) {
            barArray.push(
                <div className='sticky-container blue' key={i}>
                    <span className='sticky-item'>{state.recipe[i].food}</span>
                    <span className='sticky-item'>{state.recipe[i].action}</span>
                    <span className='sticky-item'>is done!</span>
                </div>
            )
        }
    }

    return barArray;

}

export default StickyBar;