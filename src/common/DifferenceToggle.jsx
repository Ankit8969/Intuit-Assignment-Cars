// src/components/DifferenceToggle.js
import React from 'react';
import { SHOW_ALL_FEATURES,SHOW_DIFFERENCE_FEATURES } from '../utils/cars_constants';

const DifferenceToggle = ({ onToggle, showDifferences }) => {
    return (
        <button onClick={onToggle}>
            {showDifferences ? {SHOW_DIFFERENCE_FEATURES} : {SHOW_ALL_FEATURES}}
        </button>
    );
};

export default DifferenceToggle;
