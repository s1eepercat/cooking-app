import React from 'react';
import Next from './Next';
import Timer from './Timer';

const Options = () => {
    return (
        <div className=" flex">
            <div className="pa3 w-50 tr">
                <Next />
            </div>

            <div className="pa3 w-50 tl">
                <Timer />
            </div>
        </div>
    );
}

export default Options;