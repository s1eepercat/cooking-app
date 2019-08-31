import React from 'react';

const Start = ({ cookingStart }) => {
    return (
        <button
            className='pa3'
            style={{
                width: '200px',
            }}
            onClick={cookingStart}
        > Ready to cook!</button >
    );
}

export default Start;