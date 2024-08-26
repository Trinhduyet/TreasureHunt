import React, { useState } from 'react';
import MatrixInput from './components/MatrixInput';
import MatrixDisplay from './components/MatrixDisplay';
import FuelCalculationResult from './components/FuelCalculationResult';
import { calculateMinimumFuel } from './services/apiTreasureHunt';
import { Container, Box } from '@mui/material';

const App = () => {
    const [matrixData, setMatrixData] = useState(null);
    const [result, setResult] = useState(null);

    const handleMatrixSubmit = async (data) => {
        setMatrixData(data.matrix);
        try {
            const fuelResult = await calculateMinimumFuel(data);
            setResult(fuelResult);
        } catch (error) {
            console.error('Error calculating fuel:', error);
        }
    };

    return (
        <Container>
            <Box my={4}>
                <MatrixInput onSubmit={handleMatrixSubmit} />
            </Box>
            {matrixData && (
                <Box my={4}>
                    <MatrixDisplay matrix={matrixData} />
                </Box>
            )}
            {result && (
                <Box my={4}>
                    <FuelCalculationResult result={result} />
                </Box>
            )}
        </Container>
    );
};

export default App;
