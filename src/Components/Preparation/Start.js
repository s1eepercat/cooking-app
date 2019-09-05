import React from 'react';

const Start = ({ cookingStart }) => {
    return (
        <button
            className='cook'
            onClick={cookingStart}
        > Cook!</button >
    );
}

export default Start;