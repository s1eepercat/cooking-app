import React from 'react';

const Start = ({ cookingStart }) => {
    return (
        <button
            className='pa3'
            style={{
                width: '200px',
            }}
            onClick={cookingStart}
        > Start</button >
    );
}

export default Start;