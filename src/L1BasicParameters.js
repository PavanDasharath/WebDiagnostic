import React, { useState, useEffect } from 'react';
import { Card, CardContent, Grid, TextField } from '@mui/material';
import Title from './Title';
import { useData } from './DataContext';

const L1BasicParametersCard = () => {
  const jsonData = useData();

  const [l1bbasicparamtersvalues, setL1BBasicParamtersValues] = useState({
    L1bVersion: '',
    L1bPreambleReducedCarriers: '',
    L1bPaprReduction: '',
    L1bL1detailSizeInBytes: '',
    L1bFrameLengthMode: '',
    L1bL1DetailContentTag: '',
    L1bFrameLength: '',
    L1bL1detailFecType: '',
  });

  const [l1dbasicparamtersvalues, setL1DBasicParamtersValues] = useState({
    L1dNumRf: '',
    L1dVersion: '',
    L1dDate: '',
    L1dTime: '',
  });

  useEffect(() => {
    if (jsonData && jsonData.l1b) {
      const l1basicparameterData = jsonData.l1b;
      setL1BBasicParamtersValues({
        L1bVersion: Number(l1basicparameterData.L1bVersion).toFixed() || '',
        L1bPreambleReducedCarriers:
          Number(l1basicparameterData.L1bPreambleReducedCarriers).toFixed() ||
          '',
        L1bPaprReduction:
          Number(l1basicparameterData.L1bPaprReduction).toFixed() || '',
        L1bL1detailSizeInBytes:
          Number(l1basicparameterData.L1bL1detailSizeInBytes).toFixed() || '',
        L1bFrameLengthMode:
          Number(l1basicparameterData.L1bFrameLengthMode).toFixed() || '',
        L1dSfPlpFecType: l1basicparameterData.L1dSfPlpFecType || '',
        L1bL1DetailContentTag:
          Number(l1basicparameterData.L1bL1DetailContentTag).toFixed() || '',
        L1bFrameLength:
          Number(l1basicparameterData.L1bFrameLength).toFixed() || '',
        L1bL1detailFecType:
          Number(l1basicparameterData.L1bL1detailFecType).toFixed() || '',
      });
    }
  }, [jsonData]);

  useEffect(() => {
    if (jsonData && jsonData.l1d.l1dGlobalParamsStr) {
      const l1dasicparameterData = jsonData.l1d.l1dGlobalParamsStr;
      setL1DBasicParamtersValues({
        L1dNumRf: Number(l1dasicparameterData.L1dNumRf).toFixed() || '',
        L1dVersion: Number(l1dasicparameterData.L1dVersion).toFixed() || '',
        L1dDate: l1dasicparameterData.L1dDate || '',
        L1dTime: l1dasicparameterData.L1dTime || '',
      });
    }
  }, [jsonData]);

  return (
    <React.Fragment>
      <Title>L1 Basic Parameters</Title>
      <Card sx={{ width: '100%', marginBottom: '1rem' }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                label="L1-B Version"
                fullWidth
                size="small"
                value={l1bbasicparamtersvalues.L1bVersion}
                onChange={e => {
                  const value = e.target.value;
                  if (!isNaN(value) && Number(value) >= 0) {
                    setL1BBasicParamtersValues(value);
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
                label="Preamable Card Read"
                fullWidth
                size="small"
                value={l1bbasicparamtersvalues.L1bPreambleReducedCarriers}
                onChange={e => {
                  const value = e.target.value;
                  if (!isNaN(value) && Number(value) >= 0) {
                    setL1BBasicParamtersValues(value);
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
                label="PAPR"
                fullWidth
                size="small"
                value={l1bbasicparamtersvalues.L1bPaprReduction}
                onChange={e => {
                  const value = e.target.value;
                  if (!isNaN(value) && Number(value) >= 0) {
                    setL1BBasicParamtersValues(value);
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
                label="L1-D Size"
                fullWidth
                size="small"
                value={l1bbasicparamtersvalues.L1bL1detailSizeInBytes}
                onChange={e => {
                  const value = e.target.value;
                  if (!isNaN(value) && Number(value) >= 0) {
                    setL1BBasicParamtersValues(value);
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
                label="Frame Len Mode"
                fullWidth
                size="small"
                value={l1bbasicparamtersvalues.L1bFrameLengthMode}
                onChange={e => {
                  const value = e.target.value;
                  if (!isNaN(value) && Number(value) >= 0) {
                    setL1BBasicParamtersValues(value);
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
                label="L1D Content Tag"
                fullWidth
                size="small"
                value={l1bbasicparamtersvalues.L1bL1DetailContentTag}
                onChange={e => {
                  const value = e.target.value;
                  if (!isNaN(value) && Number(value) >= 0) {
                    setL1BBasicParamtersValues(value);
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
                label="Frame Len"
                fullWidth
                size="small"
                value={l1bbasicparamtersvalues.L1bFrameLength}
                onChange={e => {
                  const value = e.target.value;
                  if (!isNaN(value) && Number(value) >= 0) {
                    setL1BBasicParamtersValues(value);
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
                label="L1d FEC"
                fullWidth
                size="small"
                value={l1bbasicparamtersvalues.L1bL1detailFecType}
                onChange={e => {
                  const value = e.target.value;
                  if (!isNaN(value) && Number(value) >= 0) {
                    setL1BBasicParamtersValues(value);
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
                label="Num Symbols"
                fullWidth
                size="small"
                value={l1dbasicparamtersvalues.L1dNumRf}
                onChange={e => {
                  const value = e.target.value;
                  if (!isNaN(value) && Number(value) >= 0) {
                    setL1DBasicParamtersValues(value);
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
                label="L1D Version"
                fullWidth
                size="small"
                value={l1dbasicparamtersvalues.L1dVersion}
                onChange={e => {
                  const value = e.target.value;
                  if (!isNaN(value) && Number(value) >= 0) {
                    setL1DBasicParamtersValues(value);
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
                label="L1 Date"
                fullWidth
                size="small"
                value={l1dbasicparamtersvalues.L1dDate}
                onChange={e => {
                  const value = e.target.value;
                  //if (!isNaN(value) && Number(value) >= 0) {
                  setL1DBasicParamtersValues(value);
                  //}
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
                label="L1D Time"
                fullWidth
                size="small"
                value={l1dbasicparamtersvalues.L1dTime}
                onChange={e => {
                  const value = e.target.value;
                  //if (!isNaN(value) && Number(value) >= 0) {
                  setL1DBasicParamtersValues(value);
                  //}
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

export default L1BasicParametersCard;
