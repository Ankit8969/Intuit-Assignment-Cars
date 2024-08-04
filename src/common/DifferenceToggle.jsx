// src/components/DifferenceToggle.js
import React from 'react';

const DifferenceToggle = ({ onToggle, showDifferences }) => {
    return (
        <button onClick={onToggle}>
            {showDifferences ? 'Show All Features' : 'Show Differences Only'}
        </button>
    );
};

export default DifferenceToggle;
