import React from 'react';
import Food from './Food';
import Action from './Action';
import Time from './Time';

const Line = ({ state }) => {

    if (state.done === false) {
        return (
            <div className='flex'>
                <div className="pa3 w-33 tc">
                    <Food state={state} line={state.currentLine - 1} />
                </div>

                <div className="pa3 w-33 tc">
                    <Action state={state} line={state.currentLine - 1} />
                </div>

                <div className="pa3 w-33 tc">
                    <Time state={state} line={state.currentLine - 1} />
                </div>
            </div>
        );
    } else {
        return <h1>Everything is done!</h1>
    }
}

export default Line;



