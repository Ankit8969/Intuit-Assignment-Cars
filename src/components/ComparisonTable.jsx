// src/components/ComparisonTable.js
import React from 'react';

const ComparisonTable = ({ cars, showDifferences }) => {
    if (cars.length < 2) return null;

    // Extract features from the first car
    const features = Object.keys(cars[0].features);

    const featureRows = features.map(feature => {
        const values = cars.map(car => car.features[feature]);
        const showRow = showDifferences ? new Set(values).size > 1 : true;

        return (
            showRow && (
                <tr key={feature}>
                    <td>{feature}</td>
                    {cars.map(car => (
                        <td key={car.id}>
                            {car.features[feature]}
                        </td>
                    ))}
                </tr>
            )
        );
    });

    return (
        <table>
            <thead>
                <tr>
                    <th>Feature</th>
                    {cars.map(car => (
                        <th key={car.id}>{car.name}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {featureRows}
            </tbody>
        </table>
    );
};

export default ComparisonTable;
