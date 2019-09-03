import React from 'react';

const Start = ({ cookingStart }) => {
    return (
        <button
            className='start'
            style={{
                width: '200px',
            }}
            onClick={cookingStart}
        > Cook!</button >
    );
}

export default Start;