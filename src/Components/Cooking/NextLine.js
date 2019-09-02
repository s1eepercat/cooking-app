import React from 'react';
import Food from './Food';
import Action from './Action';
import Time from './Time';

const NextLine = ({ state }) => {

    let line = state.currentLine;

    if (state.currentLine < state.totalLines) {
        return (
            <div className='flex'>
                <div className="pa3 w-33 tc">
                    <Food state={state} line={line} />
                </div>

                <div className="pa3 w-33 tc">
                    <Action state={state} line={line} />
                </div>

                <div className="pa3 w-33 tc">
                    <Time state={state} line={line} />
                </div>
            </div>
        );
    } else {
        return <p></p>
    }
}

export default NextLine;