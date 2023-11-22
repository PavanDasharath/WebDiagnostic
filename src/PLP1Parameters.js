import React, { useState, useEffect } from 'react';
import { Card, CardContent, Grid, TextField } from '@mui/material';
import Title from './Title';
import { useData } from './DataContext';

const PLP1ParametersCard = () => {
  const jsonData = useData();

  const [plp1Values, setPlp1Values] = useState({
    L1dSfPlpModType: '',
    L1dPlpFecBlockStartOffset: '',
    L1dSfPlpCoderate: '',
    L1dSfPlpSize: '',
    L1dSfPlpTiMode: '',
    L1dSfPlpFecType: '',
    L1dSfPlpChBondedRfid: '',
    L1dSfPlpLls_Flag: '',
    L1dSfPlpNumSubslices: '',
    L1dSfPlpLayer: '',
    L1dSfPlpSubslicesInterval: '',
    L1dSfPlpType: '',
  });

  const [plp1SummaryValues, setPlp1SummaryValues] = useState({
    NumFecFramePlp1: '',
    NumFrameErrPlp1: '',
  });

  useEffect(() => {
    if (jsonData && jsonData.l1d.plp1) {
      const plp1Data = jsonData.l1d.plp1;
      setPlp1Values({
        L1dSfPlpModType: plp1Data.L1dSfPlpModType || '',
        L1dPlpFecBlockStartOffset:
          Number(plp1Data.L1dPlpFecBlockStartOffset).toFixed() || '',
        L1dSfPlpCoderate: plp1Data.L1dSfPlpCoderate || '',
        L1dSfPlpSize: Number(plp1Data.L1dSfPlpSize).toFixed() || '',
        L1dSfPlpTiMode: plp1Data.L1dSfPlpTiMode || '',
        L1dSfPlpFecType: plp1Data.L1dSfPlpFecType || '',
        L1dSfPlpChBondedRfid:
          Number(plp1Data.L1dSfPlpChBondedRfid).toFixed() || '',
        L1dSfPlpLls_Flag: Number(plp1Data.L1dSfPlpLls_Flag).toFixed() || '',
        L1dSfPlpNumSubslices:
          Number(plp1Data.L1dSfPlpNumSubslices).toFixed() || '',
        L1dSfPlpLayer: Number(plp1Data.L1dSfPlpLayer).toFixed() || '',
        L1dSfPlpSubslicesInterval:
          Number(plp1Data.L1dSfPlpSubslicesInterval).toFixed() || '',
        L1dSfPlpType: Number(plp1Data.L1dSfPlpType).toFixed() || '',
      });
    }
  }, [jsonData]);

  useEffect(() => {
    if (jsonData && jsonData.perf) {
      const plp1SummaryData = jsonData.perf;
      setPlp1SummaryValues({
        NumFecFramePlp1:
          Number(plp1SummaryData.NumFecFramePlp1).toFixed() || '',
        NumFrameErrPlp1:
          Number(plp1SummaryData.NumFrameErrPlp1).toFixed() || '',
      });
    }
  }, [jsonData]);

  return (
    <React.Fragment>
      <Title>PLP 1 Parameters</Title>
      <Card sx={{ width: '100%', marginBottom: '1rem' }}>
        {/* <CardHeader title="Bootstrap Parameters" /> */}
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                label="Modulation"
                size="small"
                fullWidth
                value={plp1Values.L1dSfPlpModType}
                onChange={e => {
                  const value = e.target.value;
                  if (!isNaN(value) && Number(value) >= 0) {
                    setPlp1Values(value);
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
                label="Start"
                fullWidth
                size="small"
                value={plp1Values.L1dPlpFecBlockStartOffset}
                onChange={e => {
                  const value = e.target.value;
                  if (!isNaN(value) && Number(value) >= 0) {
                    setPlp1Values(value);
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
                label="Coderate"
                fullWidth
                size="small"
                value={plp1Values.L1dSfPlpCoderate}
                onChange={e => {
                  const value = e.target.value;
                  if (!isNaN(value) && Number(value) >= 0) {
                    setPlp1Values(value);
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
                label="Size"
                fullWidth
                size="small"
                value={plp1Values.L1dSfPlpSize}
                onChange={e => {
                  const value = e.target.value;
                  if (!isNaN(value) && Number(value) >= 0) {
                    setPlp1Values(value);
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
                label="TI Mode"
                fullWidth
                size="small"
                value={plp1Values.L1dSfPlpTiMode}
                onChange={e => {
                  const value = e.target.value;
                  if (!isNaN(value) && Number(value) >= 0) {
                    setPlp1Values(value);
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
                label="FEC Types"
                fullWidth
                size="small"
                value={plp1Values.L1dSfPlpFecType}
                onChange={e => {
                  const value = e.target.value;
                  if (!isNaN(value) && Number(value) >= 0) {
                    setPlp1Values(value);
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
                label="Bonded RF ID"
                fullWidth
                size="small"
                value={plp1Values.L1dSfPlpChBondedRfid}
                onChange={e => {
                  const value = e.target.value;
                  if (!isNaN(value) && Number(value) >= 0) {
                    setPlp1Values(value);
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
                label="LLS"
                size="small"
                fullWidth
                value={plp1Values.L1dSfPlpLls_Flag}
                onChange={e => {
                  const value = e.target.value;
                  if (!isNaN(value) && Number(value) >= 0) {
                    setPlp1Values(value);
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
                label="Nim SubSlices"
                fullWidth
                size="small"
                value={plp1Values.L1dSfPlpNumSubslices}
                onChange={e => {
                  const value = e.target.value;
                  if (!isNaN(value) && Number(value) >= 0) {
                    setPlp1Values(value);
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
                label="Layer"
                fullWidth
                size="small"
                value={plp1Values.L1dSfPlpLayer}
                onChange={e => {
                  const value = e.target.value;
                  if (!isNaN(value) && Number(value) >= 0) {
                    setPlp1Values(value);
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
                label="SubSlice Interval"
                fullWidth
                size="small"
                value={plp1Values.L1dSfPlpSubslicesInterval}
                onChange={e => {
                  const value = e.target.value;
                  if (!isNaN(value) && Number(value) >= 0) {
                    setPlp1Values(value);
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
                label="Type"
                fullWidth
                size="small"
                value={plp1Values.L1dSfPlpType}
                onChange={e => {
                  const value = e.target.value;
                  if (!isNaN(value) && Number(value) >= 0) {
                    setPlp1Values(value);
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
                label="FEC-Block Count"
                fullWidth
                size="small"
                value={plp1SummaryValues.NumFecFramePlp1}
                onChange={e => {
                  const value = e.target.value;
                  if (!isNaN(value) && Number(value) >= 0) {
                    setPlp1SummaryValues(value);
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
                label="FEC-Block Error"
                fullWidth
                size="small"
                value={plp1SummaryValues.NumFrameErrPlp1}
                onChange={e => {
                  const value = e.target.value;
                  if (!isNaN(value) && Number(value) >= 0) {
                    setPlp1SummaryValues(value);
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

export default PLP1ParametersCard;
