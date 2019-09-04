import React from "react";

const Time = ({ state, line }) => {

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

    if (line >= 0) {
        return (
            (state.recipe[line].time === undefined) ?
                <p>Time is not set</p> :
                <p>{(state.started === false) ? (secondsToHour(state.recipe[line].time * 60)) : (
                    (state.currentLineSeconds !== 0) ?
                        (secondsToHour(state.currentLineSeconds)) : (secondsToHour(state.recipe[line].time * 60))
                )}</p>
        )
    } else {
        return <p>---</p>
    }
}

export default Time;