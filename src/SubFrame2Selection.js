import React, { useState, useEffect } from 'react';
import { Card, CardContent, Grid, TextField } from '@mui/material';
import Title from './Title';
import { useData } from './DataContext';

const SubFrame2SelectionCard = () => {
  const jsonData = useData();

  const [sfparams2Values, setSFParams2Values] = useState({
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
    if (jsonData && jsonData.l1d.sfParams2) {
      const sfparams2Data = jsonData.l1d.sfParams2;
      setSFParams2Values({
        L1dSfMimo: Number(sfparams2Data.L1dSfMimo).toFixed() || '',
        L1dSfSbsFirst: Number(sfparams2Data.L1dSfSbsFirst).toFixed() || '',
        L1dSfMiso: Number(sfparams2Data.L1dSfMiso).toFixed() || '',
        L1dSfSbsLast: Number(sfparams2Data.L1dSfSbsLast).toFixed() || '',
        L1dSfFftSize: sfparams2Data.L1dSfFftSize || '',
        L1dSfNumOfdmSym: Number(sfparams2Data.L1dSfNumOfdmSym).toFixed() || '',
        L1dSfReducedCarriers:
          Number(sfparams2Data.L1dSfReducedCarriers).toFixed() || '',
        L1dSfFreqInterleaver:
          Number(sfparams2Data.L1dSfFreqInterleaver).toFixed() || '',
        L1dSfGi: sfparams2Data.L1dSfGi || '',
        L1dSfMultiplex: Number(sfparams2Data.L1dSfMultiplex).toFixed() || '',
        L1dSfScatPilotPattern: sfparams2Data.L1dSfScatPilotPattern || '',
        L1dSfSbsNullCells:
          Number(sfparams2Data.L1dSfSbsNullCells).toFixed() || '',
        L1dSfScatPilotBoost:
          Number(sfparams2Data.L1dSfScatPilotBoost).toFixed() || '',
      });
    }
  }, [jsonData]);

  return (
    <React.Fragment>
      <Title>Sub Frame Selection 2</Title>
      <Card sx={{ width: '100%', marginBottom: '1rem' }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                label="SF2 MIMO"
                fullWidth
                size="small"
                value={sfparams2Values.L1dSfMimo}
                onChange={e => {
                  const value = e.target.value;
                  if (!isNaN(value) && Number(value) >= 0) {
                    setSFParams2Values(value);
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
                label="SF2 SBS First"
                fullWidth
                size="small"
                value={sfparams2Values.L1dSfSbsFirst}
                onChange={e => {
                  const value = e.target.value;
                  if (!isNaN(value) && Number(value) >= 0) {
                    setSFParams2Values(value);
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
                label="SF2 MISO"
                fullWidth
                size="small"
                value={sfparams2Values.L1dSfMiso}
                onChange={e => {
                  const value = e.target.value;
                  if (!isNaN(value) && Number(value) >= 0) {
                    setSFParams2Values(value);
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
                label="SF2 SBS Last"
                fullWidth
                size="small"
                value={sfparams2Values.L1dSfSbsLast}
                onChange={e => {
                  const value = e.target.value;
                  if (!isNaN(value) && Number(value) >= 0) {
                    setSFParams2Values(value);
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
                label="SF2 FFT-Size"
                fullWidth
                size="small"
                value={sfparams2Values.L1dSfFftSize}
                onChange={e => {
                  const value = e.target.value;
                  if (!isNaN(value) && Number(value) >= 0) {
                    setSFParams2Values(value);
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
                label="SF2 Num Symbols"
                fullWidth
                size="small"
                value={sfparams2Values.L1dSfNumOfdmSym}
                onChange={e => {
                  const value = e.target.value;
                  if (!isNaN(value) && Number(value) >= 0) {
                    setSFParams2Values(value);
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
                label="SF2 Carrier Reduct"
                fullWidth
                size="small"
                value={sfparams2Values.L1dSfReducedCarriers}
                onChange={e => {
                  const value = e.target.value;
                  if (!isNaN(value) && Number(value) >= 0) {
                    setSFParams2Values(value);
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
                label="SF2 Frequency IL"
                fullWidth
                size="small"
                value={sfparams2Values.L1dSfFreqInterleaver}
                onChange={e => {
                  const value = e.target.value;
                  if (!isNaN(value) && Number(value) >= 0) {
                    setSFParams2Values(value);
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
                label="SF2 Guard Interval"
                fullWidth
                size="small"
                value={sfparams2Values.L1dSfGi}
                onChange={e => {
                  const value = e.target.value;
                  if (!isNaN(value) && Number(value) >= 0) {
                    setSFParams2Values(value);
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
                label="SF2 Multiplex"
                fullWidth
                size="small"
                value={sfparams2Values.L1dSfMultiplex}
                onChange={e => {
                  const value = e.target.value;
                  if (!isNaN(value) && Number(value) >= 0) {
                    setSFParams2Values(value);
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
                label="SF2 Pilot Pattern"
                fullWidth
                size="small"
                value={sfparams2Values.L1dSfScatPilotPattern}
                onChange={e => {
                  const value = e.target.value;
                  if (!isNaN(value) && Number(value) >= 0) {
                    setSFParams2Values(value);
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
                label="SF2 Null Cells"
                fullWidth
                size="small"
                value={sfparams2Values.L1dSfSbsNullCells}
                onChange={e => {
                  const value = e.target.value;
                  if (!isNaN(value) && Number(value) >= 0) {
                    setSFParams2Values(value);
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
                label="SF2 Pilot Boost"
                fullWidth
                size="small"
                value={sfparams2Values.L1dSfScatPilotBoost}
                onChange={e => {
                  const value = e.target.value;
                  if (!isNaN(value) && Number(value) >= 0) {
                    setSFParams2Values(value);
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

export default SubFrame2SelectionCard;
