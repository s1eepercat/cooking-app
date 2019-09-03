import React from 'react';

const Plus = ({ addLines }) => {
    return (
        <button
            className='plus'
            style={{
                width: '200px',
            }}
            onClick={addLines}
        > Add line </button >
    );
}

export default Plus;