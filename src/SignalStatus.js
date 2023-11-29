import React, { useState, useEffect } from 'react';
import { Card, CardContent, Grid, TextField } from '@mui/material';
import Title from './Title';
import { useData } from './DataContext';

const SignalStatusCard = () => {
  const jsonData = useData();
  const [extraValues, setExtraValues] = useState({
    rfLock: '',
    l1bLock: '',
    l1dLock: '',
    plp0Lock: '',
    plp1Lock: '',
    plp2Lock: '',
    plp3Lock: '',
    resyncCount: '',
    tunerRssi: '',
  });

  useEffect(() => {
    if (jsonData && jsonData.extra) {
      const {
        rfLock,
        l1bLock,
        l1dLock,
        plp0Lock,
        plp1Lock,
        plp2Lock,
        plp3Lock,
        resyncCount,
        tunerRssi,
      } = jsonData.extra;

      setExtraValues({
        rfLock: rfLock || '',
        l1bLock: l1bLock || '',
        l1dLock: l1dLock || '',
        plp0Lock: plp0Lock || '',
        plp1Lock: plp1Lock || '',
        plp2Lock: plp2Lock || '',
        plp3Lock: plp3Lock || '',
        resyncCount: Number(resyncCount).toFixed() || '',
        tunerRssi: Number(tunerRssi).toFixed() || '',
      });
    }
  }, [jsonData]);

  const handleValueChange = (key, value) => {
    if (!isNaN(value) && Number(value) >= 0) {
      setExtraValues(prevValues => ({
        ...prevValues,
        [key]: value,
      }));
    }
  };

  const generateTextField = (label, key) => (
    <Grid item xs={6} key={key}>
      <TextField
        label={label}
        fullWidth
        size="small"
        value={extraValues[key]}
        onChange={e => handleValueChange(key, e.target.value)}
        InputProps={{
          readOnly: true,
          style: {
            color:
              extraValues[key] === 'Locked'
                ? 'Green'
                : extraValues[key] === 'Unlocked'
                ? 'Red'
                : 'inherit',
            marginBottom: '0px',
          },
        }}
      />
    </Grid>
  );

  return (
    <React.Fragment>
      <Title>Signal Status</Title>
      <Card sx={{ width: '100%', marginBottom: '1rem' }}>
        <CardContent>
          <Grid container spacing={2}>
            {generateTextField('RF Lock', 'rfLock')}
            {generateTextField('L1B Lock', 'l1bLock')}
            {generateTextField('L1D Lock', 'l1dLock')}
            {generateTextField('PLP0 Lock', 'plp0Lock')}
            {generateTextField('PLP1 Lock', 'plp1Lock')}
            {generateTextField('PLP2 Lock', 'plp2Lock')}
            {generateTextField('PLP3 Lock', 'plp3Lock')}
            {generateTextField('Relock Count', 'resyncCount')}
            {generateTextField('RSSI', 'tunerRssi')}
          </Grid>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};

export default SignalStatusCard;
