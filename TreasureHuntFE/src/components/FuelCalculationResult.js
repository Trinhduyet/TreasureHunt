import React from 'react';
import { Typography } from '@mui/material';

const FuelCalculationResult = ({ result }) => {
    return (
        <div>
            <Typography variant="h5">Treasure Hunt Output: </Typography>
            <Typography variant="body1">{result}</Typography>
        </div>
    );
};

export default FuelCalculationResult;
