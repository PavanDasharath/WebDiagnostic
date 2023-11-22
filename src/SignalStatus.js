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
      const extraData = jsonData.extra;

      setExtraValues({
        rfLock: extraData.rfLock || '',
        l1bLock: extraData.l1bLock || '',
        l1dLock: extraData.l1dLock || '',
        plp0Lock: extraData.plp0Lock || '',
        plp1Lock: extraData.plp1Lock || '',
        plp2Lock: extraData.plp2Lock || '',
        plp3Lock: extraData.plp3Lock || '',
        resyncCount: Number(extraData.resyncCount).toFixed() || '',
        tunerRssi: Number(extraData.tunerRssi).toFixed() || '',
      });
    }
  }, [jsonData]);

  return (
    <React.Fragment>
      <Title>Signal Status</Title>
      <Card sx={{ width: '100%', marginBottom: '1rem' }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                label="RF Lock"
                fullWidth
                size="small"
                value={extraValues.rfLock}
                onChange={e => {
                  const value = e.target.value;
                  if (!isNaN(value) && Number(value) >= 0) {
                    setExtraValues(value);
                  }
                }}
                InputProps={{
                  readOnly: true,
                  style: {
                    backgroundColor: 'White',
                    marginBottom: '0px',
                  },
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="L1B Lock"
                fullWidth
                size="small"
                value={extraValues.l1bLock}
                onChange={e => {
                  const value = e.target.value;
                  if (!isNaN(value) && Number(value) >= 0) {
                    setExtraValues(value);
                  }
                }}
                InputProps={{
                  readOnly: true,
                  style: {
                    backgroundColor: 'White',
                    marginBottom: '0px',
                  },
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="L1D Lock"
                fullWidth
                size="small"
                value={extraValues.l1dLock}
                onChange={e => {
                  const value = e.target.value;
                  if (!isNaN(value) && Number(value) >= 0) {
                    setExtraValues(value);
                  }
                }}
                InputProps={{
                  readOnly: true,
                  style: {
                    backgroundColor: 'White',
                    marginBottom: '0px',
                  },
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="PLP0 Lock"
                fullWidth
                size="small"
                value={extraValues.plp0Lock}
                onChange={e => {
                  const value = e.target.value;
                  if (!isNaN(value) && Number(value) >= 0) {
                    setExtraValues(value);
                  }
                }}
                InputProps={{
                  readOnly: true,
                  style: {
                    backgroundColor: 'White',
                    marginBottom: '0px',
                  },
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="PLP1 Lock"
                fullWidth
                size="small"
                value={extraValues.plp1Lock}
                onChange={e => {
                  const value = e.target.value;
                  if (!isNaN(value) && Number(value) >= 0) {
                    setExtraValues(value);
                  }
                }}
                InputProps={{
                  readOnly: true,
                  style: {
                    backgroundColor: 'White',
                    marginBottom: '0px',
                  },
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="PLP2 Lock"
                fullWidth
                size="small"
                value={extraValues.plp2Lock}
                onChange={e => {
                  const value = e.target.value;
                  if (!isNaN(value) && Number(value) >= 0) {
                    setExtraValues(value);
                  }
                }}
                InputProps={{
                  readOnly: true,
                  style: {
                    backgroundColor: 'White',
                    marginBottom: '0px',
                  },
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="PLP3 Lock"
                fullWidth
                size="small"
                value={extraValues.plp3Lock}
                onChange={e => {
                  const value = e.target.value;
                  if (!isNaN(value) && Number(value) >= 0) {
                    setExtraValues(value);
                  }
                }}
                InputProps={{
                  readOnly: true,
                  style: {
                    backgroundColor: 'White',
                    marginBottom: '0px',
                  },
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Relock Count"
                fullWidth
                size="small"
                value={extraValues.resyncCount}
                onChange={e => {
                  const value = e.target.value;
                  if (!isNaN(value) && Number(value) >= 0) {
                    setExtraValues(value);
                  }
                }}
                InputProps={{
                  readOnly: true,
                  style: {
                    backgroundColor: 'White',
                    marginBottom: '0px',
                  },
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="RSSI"
                fullWidth
                size="small"
                value={extraValues.tunerRssi}
                onChange={e => {
                  const value = e.target.value;
                  if (!isNaN(value) && Number(value) >= 0) {
                    setExtraValues(value);
                  }
                }}
                InputProps={{
                  readOnly: true,

                  style: {
                    backgroundColor: 'White',
                    marginBottom: '0px',
                  },
                }}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};

export default SignalStatusCard;
