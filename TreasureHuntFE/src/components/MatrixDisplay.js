import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const MatrixDisplay = ({ matrix }) => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        {matrix[0] && matrix[0].map((_, colIndex) => (
                            <TableCell key={colIndex}>Col {colIndex + 1}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {matrix.map((row, rowIndex) => (
                        <TableRow key={rowIndex}>
                            {row.map((cell, colIndex) => (
                                <TableCell key={colIndex}>{cell}</TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default MatrixDisplay;
