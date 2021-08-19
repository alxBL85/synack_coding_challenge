import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';

const ProgressBar = ({ isLoading = false }) => {
    return  isLoading? <div style={{width: "100%"}} >
    <LinearProgress />
    </div> : <></>;
};

export default ProgressBar;