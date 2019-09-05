import React from 'react';

const Plus = ({ addLines }) => {
    return (
        <button
            className='plus'
            onClick={addLines}
        > Add line </button >
    );
}

export default Plus;