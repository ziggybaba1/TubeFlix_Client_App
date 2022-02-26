import { CircularProgress } from '@mui/material'
import React from 'react';
import "./pageloader.scss";

export default function PageLoader({title}) {
    return (
        <div className="loadingSpinner">
        <CircularProgress disableShrink />
        <h3>{title}</h3>
    </div>  
    )
}
