import React, { useState, useEffect } from 'react';
import { Card, CardContent, Grid, TextField } from '@mui/material';
import Title from './Title';
import { useData } from './DataContext';

const BootstrapParametersCard = () => {
  const jsonData = useData();

  const [bsrValues, setBsrValues] = useState({
    Bsr0MajVer: '',
    Bsr0MinVer: '',
    Bsr1EAWakeup1: '',
    Bsr1EAWakeup2: '',
    Bsr1MinTimeToNxt: '',
    Bsr1SysBw: '',
    Bsr2Coeff: '',
    Bsr3PreambleStr: '',
  });

  useEffect(() => {
    if (jsonData && jsonData.bsr) {
      const bsrData = jsonData.bsr;
      setBsrValues({
        Bsr0MajVer: Number(bsrData.Bsr0MajVer).toFixed() || '',
        Bsr0MinVer: Number(bsrData.Bsr0MinVer).toFixed() || '',
        Bsr1EAWakeup1: Number(bsrData.Bsr1EAWakeup1).toFixed() || '',
        Bsr1EAWakeup2: Number(bsrData.Bsr1EAWakeup2).toFixed() || '',
        Bsr1MinTimeToNxt: Number(bsrData.Bsr1MinTimeToNxt).toFixed() || '',
        Bsr1SysBw: bsrData.Bsr1SysBw || '',
        Bsr2Coeff: Number(bsrData.Bsr2Coeff).toFixed() || '',
        Bsr3PreambleStr: Number(bsrData.Bsr3PreambleStr).toFixed() || '',
      });
    }
  }, [jsonData]);

  return (
    <React.Fragment>
      <Title>Bootstrap Parameters</Title>
      <Card sx={{ width: '100%', marginBottom: '1rem' }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                label="Major Version"
                fullWidth
                size="small"
                value={bsrValues.Bsr0MajVer}
                onChange={e => {
                  const value = e.target.value;
                  if (!isNaN(value) && Number(value) >= 0) {
                    setBsrValues(value);
                  }
                }}
                InputProps={{
                  readOnly: true,
                  disableUnderline: true,
                  style: {
                    backgroundColor: 'white',
                    marginBottom: '0',
                  },
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Minor Version"
                fullWidth
                size="small"
                value={bsrValues.Bsr0MinVer}
                onChange={e => {
                  const value = e.target.value;
                  if (!isNaN(value) && Number(value) >= 0) {
                    setBsrValues(value);
                  }
                }}
                InputProps={{
                  readOnly: true,
                  disableUnderline: true,
                  style: {
                    backgroundColor: 'White',
                    marginBottom: '0',
                  },
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="EAS Wakeup 1"
                fullWidth
                size="small"
                value={bsrValues.Bsr1EAWakeup1}
                onChange={e => {
                  const value = e.target.value;
                  if (!isNaN(value) && Number(value) >= 0) {
                    setBsrValues(value);
                  }
                }}
                InputProps={{
                  readOnly: true,
                  disableUnderline: true,
                  style: {
                    backgroundColor: 'White',
                    marginBottom: '0',
                  },
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="EAS Wakeup2"
                fullWidth
                size="small"
                value={bsrValues.Bsr1EAWakeup2}
                onChange={e => {
                  const value = e.target.value;
                  if (!isNaN(value) && Number(value) >= 0) {
                    setBsrValues(value);
                  }
                }}
                InputProps={{
                  readOnly: true,
                  disableUnderline: true,
                  style: {
                    backgroundColor: 'White',
                    marginBottom: '0',
                  },
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="BandWidth"
                fullWidth
                size="small"
                value={bsrValues.Bsr1SysBw}
                onChange={e => {
                  const value = e.target.value;
                  if (!isNaN(value) && Number(value) >= 0) {
                    setBsrValues(value);
                  }
                }}
                InputProps={{
                  readOnly: true,
                  disableUnderline: true,
                  style: {
                    backgroundColor: 'White',
                    marginBottom: '0',
                  },
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Min Wake time to next"
                fullWidth
                size="small"
                value={bsrValues.Bsr1MinTimeToNxt}
                onChange={e => {
                  const value = e.target.value;
                  if (!isNaN(value) && Number(value) >= 0) {
                    setBsrValues(value);
                  }
                }}
                InputProps={{
                  readOnly: true,
                  disableUnderline: true,
                  style: {
                    backgroundColor: 'White',
                    marginBottom: '0',
                  },
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="BSR Coeff"
                fullWidth
                size="small"
                value={bsrValues.Bsr2Coeff}
                onChange={e => {
                  const value = e.target.value;
                  if (!isNaN(value) && Number(value) >= 0) {
                    setBsrValues(value);
                  }
                }}
                InputProps={{
                  readOnly: true,
                  disableUnderline: true,
                  style: {
                    backgroundColor: 'White',
                    marginBottom: '0',
                  },
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Premable Strcuture"
                fullWidth
                size="small"
                value={bsrValues.Bsr3PreambleStr}
                onChange={e => {
                  const value = e.target.value;
                  if (!isNaN(value) && Number(value) >= 0) {
                    setBsrValues(value);
                  }
                }}
                InputProps={{
                  readOnly: true,
                  disableUnderline: true,
                  style: {
                    backgroundColor: 'White',
                    marginBottom: '0',
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

export default BootstrapParametersCard;
