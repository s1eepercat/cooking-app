import React from 'react';

const Plus = ({ addLines }) => {
    return (
        <button
            className='pa3'
            style={{
                width: '200px',
            }}
            onClick={addLines}
        > + </button >
    );
}

export default Plus;