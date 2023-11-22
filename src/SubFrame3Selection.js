import React, { useState, useEffect } from 'react';
import { Card, CardContent, Grid, TextField } from '@mui/material';
import Title from './Title';
import { useData } from './DataContext';

const SubFrame3SelectionCard = () => {
  const jsonData = useData();

  const [sfparams3Values, setSFParams3Values] = useState({
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
    if (jsonData && jsonData.l1d.sfParams3) {
      const sfparams3Data = jsonData.l1d.sfParams3;
      setSFParams3Values({
        L1dSfMimo: Number(sfparams3Data.L1dSfMimo).toFixed() || '',
        L1dSfSbsFirst: Number(sfparams3Data.L1dSfSbsFirst).toFixed() || '',
        L1dSfMiso: Number(sfparams3Data.L1dSfMiso).toFixed() || '',
        L1dSfSbsLast: Number(sfparams3Data.L1dSfSbsLast).toFixed() || '',
        L1dSfFftSize: sfparams3Data.L1dSfFftSize || '',
        L1dSfNumOfdmSym: Number(sfparams3Data.L1dSfNumOfdmSym).toFixed() || '',
        L1dSfReducedCarriers:
          Number(sfparams3Data.L1dSfReducedCarriers).toFixed() || '',
        L1dSfFreqInterleaver:
          Number(sfparams3Data.L1dSfFreqInterleaver).toFixed() || '',
        L1dSfGi: sfparams3Data.L1dSfGi || '',
        L1dSfMultiplex: Number(sfparams3Data.L1dSfMultiplex).toFixed() || '',
        L1dSfScatPilotPattern: sfparams3Data.L1dSfScatPilotPattern || '',
        L1dSfSbsNullCells:
          Number(sfparams3Data.L1dSfSbsNullCells).toFixed() || '',
        L1dSfScatPilotBoost:
          Number(sfparams3Data.L1dSfScatPilotBoost).toFixed() || '',
      });
    }
  }, [jsonData]);

  return (
    <React.Fragment>
      <Title>Sub Frame Selection 3</Title>
      <Card sx={{ width: '100%', marginBottom: '1rem' }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                label="SF3 MIMO"
                fullWidth
                size="small"
                value={sfparams3Values.L1dSfMimo}
                onChange={e => {
                  const value = e.target.value;
                  if (!isNaN(value) && Number(value) >= 0) {
                    setSFParams3Values(value);
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
                label="SF3 SBS First"
                fullWidth
                size="small"
                value={sfparams3Values.L1dSfSbsFirst}
                onChange={e => {
                  const value = e.target.value;
                  if (!isNaN(value) && Number(value) >= 0) {
                    setSFParams3Values(value);
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
                label="SF3 MISO"
                fullWidth
                size="small"
                value={sfparams3Values.L1dSfMiso}
                onChange={e => {
                  const value = e.target.value;
                  if (!isNaN(value) && Number(value) >= 0) {
                    setSFParams3Values(value);
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
                label="SF3 SBS Last"
                fullWidth
                size="small"
                value={sfparams3Values.L1dSfSbsLast}
                onChange={e => {
                  const value = e.target.value;
                  if (!isNaN(value) && Number(value) >= 0) {
                    setSFParams3Values(value);
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
                label="SF3 FFT-Size"
                fullWidth
                size="small"
                value={sfparams3Values.L1dSfFftSize}
                onChange={e => {
                  const value = e.target.value;
                  if (!isNaN(value) && Number(value) >= 0) {
                    setSFParams3Values(value);
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
                label="SF3 Num Symbols"
                fullWidth
                size="small"
                value={sfparams3Values.L1dSfNumOfdmSym}
                onChange={e => {
                  const value = e.target.value;
                  if (!isNaN(value) && Number(value) >= 0) {
                    setSFParams3Values(value);
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
                label="SF3 Carrier Reduct"
                fullWidth
                size="small"
                value={sfparams3Values.L1dSfReducedCarriers}
                onChange={e => {
                  const value = e.target.value;
                  if (!isNaN(value) && Number(value) >= 0) {
                    setSFParams3Values(value);
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
                label="SF3 Frequency IL"
                fullWidth
                size="small"
                value={sfparams3Values.L1dSfFreqInterleaver}
                onChange={e => {
                  const value = e.target.value;
                  if (!isNaN(value) && Number(value) >= 0) {
                    setSFParams3Values(value);
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
                label="SF3 Guard Interval"
                fullWidth
                size="small"
                value={sfparams3Values.L1dSfGi}
                onChange={e => {
                  const value = e.target.value;
                  if (!isNaN(value) && Number(value) >= 0) {
                    setSFParams3Values(value);
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
                label="SF3 Multiplex"
                fullWidth
                size="small"
                value={sfparams3Values.L1dSfMultiplex}
                onChange={e => {
                  const value = e.target.value;
                  if (!isNaN(value) && Number(value) >= 0) {
                    setSFParams3Values(value);
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
                label="SF3 Pilot Pattern"
                fullWidth
                size="small"
                value={sfparams3Values.L1dSfScatPilotPattern}
                onChange={e => {
                  const value = e.target.value;
                  if (!isNaN(value) && Number(value) >= 0) {
                    setSFParams3Values(value);
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
                label="SF3 Null Cells"
                fullWidth
                size="small"
                value={sfparams3Values.L1dSfSbsNullCells}
                onChange={e => {
                  const value = e.target.value;
                  if (!isNaN(value) && Number(value) >= 0) {
                    setSFParams3Values(value);
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
                label="SF3 Pilot Boost"
                fullWidth
                size="small"
                value={sfparams3Values.L1dSfScatPilotBoost}
                onChange={e => {
                  const value = e.target.value;
                  if (!isNaN(value) && Number(value) >= 0) {
                    setSFParams3Values(value);
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

export default SubFrame3SelectionCard;
