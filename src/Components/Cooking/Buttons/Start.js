import React from 'react';

const Start = ({ startCooking, pauseInitiate, unpauseInitiate, state }) => {

    if (!state.started) {
        return (
            <button
                className={`start ${(state.done) ? 'grey' : ''}`}
                onClick={startCooking}
            >Start!</button>

        );
    } else if (state.started && !state.paused) {
        return (
            <button
                className={`start ${(state.done) ? 'grey' : ''}`}
                onClick={pauseInitiate}
            >Pause!</button>
        );
    } else if (state.started && state.paused) {
        return (
            <button
                className={`start ${(state.done) ? 'grey' : ''}`}
                onClick={unpauseInitiate}
            >Continue!</button>
        );
    }

}

export default Start;