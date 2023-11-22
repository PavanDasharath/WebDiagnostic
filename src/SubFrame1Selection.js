import React, { useState, useEffect } from 'react';
import { Card, CardContent, Grid, TextField } from '@mui/material';
import Title from './Title';
import { useData } from './DataContext';
//import { set } from 'mongoose';

const SubFrame1SelectionCard = () => {
  const jsonData = useData();

  const [sfparams1Values, setSFParams1Values] = useState({
    L1dSfMimo: '',
    L1dSfSbsFirst: '',
    L1dSfMiso: '',
    L1dSfSbsLast: '',
    L1dSfFftSize: '',
    L1dSfNumOfdmSym: '',
    L1dSfReducedCarriers: '',
    L1dSfFreqInterleaver: '',
    L1dSfGi: '',
    L1dSfMultiplex: '',
    L1dSfScatPilotPattern: '',
    L1dSfSbsNullCells: '',
    L1dSfScatPilotBoost: '',
  });

  useEffect(() => {
    if (jsonData && jsonData.l1d.sfParams1) {
      const sfparams1Data = jsonData.l1d.sfParams1;
      setSFParams1Values({
        L1dSfMimo: Number(sfparams1Data.L1dSfMimo).toFixed() || '',
        L1dSfSbsFirst: Number(sfparams1Data.L1dSfSbsFirst).toFixed() || '',
        L1dSfMiso: Number(sfparams1Data.L1dSfMiso).toFixed() || '',
        L1dSfSbsLast: Number(sfparams1Data.L1dSfSbsLast).toFixed() || '',
        L1dSfFftSize: sfparams1Data.L1dSfFftSize || '',
        L1dSfNumOfdmSym: Number(sfparams1Data.L1dSfNumOfdmSym).toFixed() || '',
        L1dSfReducedCarriers:
          Number(sfparams1Data.L1dSfReducedCarriers).toFixed() || '',
        L1dSfFreqInterleaver:
          Number(sfparams1Data.L1dSfFreqInterleaver).toFixed() || '',
        L1dSfGi: sfparams1Data.L1dSfGi || '',
        L1dSfMultiplex: Number(sfparams1Data.L1dSfMultiplex).toFixed() || '',
        L1dSfScatPilotPattern: sfparams1Data.L1dSfScatPilotPattern || '',
        L1dSfSbsNullCells:
          Number(sfparams1Data.L1dSfSbsNullCells).toFixed() || '',
        L1dSfScatPilotBoost:
          Number(sfparams1Data.L1dSfScatPilotBoost).toFixed() || '',
      });
    }
  }, [jsonData]);

  return (
    <React.Fragment>
      <Title>Sub Frame Selection 1</Title>
      <Card sx={{ width: '100%', marginBottom: '1rem' }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                label="SF1 MIMO"
                fullWidth
                size="small"
                value={sfparams1Values.L1dSfMimo}
                onChange={e => {
                  const value = e.target.value;
                  if (!isNaN(value) && Number(value) >= 0) {
                    setSFParams1Values(value);
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
                label="SF1 SBS First"
                fullWidth
                size="small"
                value={sfparams1Values.L1dSfSbsFirst}
                onChange={e => {
                  const value = e.target.value;
                  if (!isNaN(value) && Number(value) >= 0) {
                    setSFParams1Values(value);
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
                label="SF1 MISO"
                fullWidth
                size="small"
                value={sfparams1Values.L1dSfMiso}
                onChange={e => {
                  const value = e.target.value;
                  if (!isNaN(value) && Number(value) >= 0) {
                    setSFParams1Values(value);
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
                label="SF1 SBS Last"
                fullWidth
                size="small"
                value={sfparams1Values.L1dSfSbsLast}
                onChange={e => {
                  const value = e.target.value;
                  if (!isNaN(value) && Number(value) >= 0) {
                    setSFParams1Values(value);
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
                label="SF1 FFT-Size"
                fullWidth
                size="small"
                value={sfparams1Values.L1dSfFftSize}
                onChange={e => {
                  const value = e.target.value;
                  if (!isNaN(value) && Number(value) >= 0) {
                    setSFParams1Values(value);
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
                label="SF1 Num Symbols"
                fullWidth
                size="small"
                value={sfparams1Values.L1dSfNumOfdmSym}
                onChange={e => {
                  const value = e.target.value;
                  if (!isNaN(value) && Number(value) >= 0) {
                    setSFParams1Values(value);
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
                label="SF1 Carrier Reduct"
                fullWidth
                size="small"
                value={sfparams1Values.L1dSfReducedCarriers}
                onChange={e => {
                  const value = e.target.value;
                  if (!isNaN(value) && Number(value) >= 0) {
                    setSFParams1Values(value);
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
                label="SF1 Frequency IL"
                fullWidth
                size="small"
                value={sfparams1Values.L1dSfFreqInterleaver}
                onChange={e => {
                  const value = e.target.value;
                  if (!isNaN(value) && Number(value) >= 0) {
                    setSFParams1Values(value);
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
                label="SF1 Guard Interval"
                fullWidth
                size="small"
                value={sfparams1Values.L1dSfGi}
                onChange={e => {
                  const value = e.target.value;
                  if (!isNaN(value) && Number(value) >= 0) {
                    setSFParams1Values(value);
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
                label="SF1 Multiplex"
                fullWidth
                size="small"
                value={sfparams1Values.L1dSfMultiplex}
                onChange={e => {
                  const value = e.target.value;
                  if (!isNaN(value) && Number(value) >= 0) {
                    setSFParams1Values(value);
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
                label="SF1 Pilot Pattern"
                fullWidth
                size="small"
                value={sfparams1Values.L1dSfScatPilotPattern}
                onChange={e => {
                  const value = e.target.value;
                  if (!isNaN(value) && Number(value) >= 0) {
                    setSFParams1Values(value);
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
                label="SF1 Null Cells"
                fullWidth
                size="small"
                value={sfparams1Values.L1dSfSbsNullCells}
                onChange={e => {
                  const value = e.target.value;
                  if (!isNaN(value) && Number(value) >= 0) {
                    setSFParams1Values(value);
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
                label="SF1 Pilot Boost"
                fullWidth
                size="small"
                value={sfparams1Values.L1dSfScatPilotBoost}
                onChange={e => {
                  const value = e.target.value;
                  if (!isNaN(value) && Number(value) >= 0) {
                    setSFParams1Values(value);
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

export default SubFrame1SelectionCard;
