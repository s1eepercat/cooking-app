import React from 'react';

const Start = ({ startCooking, pauseInitiate, unpauseInitiate, state }) => {

    if (state.started === false) {
        return (
            <button
                onClick={startCooking}
            >Start!</button>
    
        );
    } else if (state.started === true && state.paused === false) {
        return (
            <button
                onClick={pauseInitiate}
            >Pause!</button> 
        );
    } else if (state.started === true && state.paused === true) {
        return (
            <button
                onClick={unpauseInitiate}
            >Continue!</button> 
        );
    }

}

export default Start;