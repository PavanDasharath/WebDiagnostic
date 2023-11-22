import React from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
} from '@mui/material';

import Title from './Title';
import { useData } from './DataContext';
import { useState, useEffect } from 'react';

const ReceiverForm = () => {
  const handleSubmit = () => {
    // Handle form submission logic
  };

  const jsonData = useData();
  const [frequency, setFrequency] = useState('');
  const [rflevel, setRFLevel] = useState('');
  useEffect(() => {
    if (jsonData) {
      const jsonStr = jsonData;
      const validJsonStr = jsonStr.replace(/'/g, '"');
      const jsonnewstring = JSON.parse(validJsonStr);

      setFrequency(Number(jsonnewstring.frequency_).toFixed(4) || '');
      setRFLevel(Number(jsonnewstring.rf_level_).toFixed(4) || '');
    }
  }, [jsonData]);

  return (
    <React.Fragment>
      <Title>Receiver</Title>
      <Card>
        <CardContent>
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4} md={6}>
                <FormControl fullWidth size="small">
                  <InputLabel>Board</InputLabel>
                  <Select name="board" id="board">
                    <MenuItem value="EVB3000">EVB3000</MenuItem>
                    <MenuItem value="Silisa">Silica</MenuItem>
                    <MenuItem value="Yoga">Yoga</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth size="small">
                  <InputLabel>Bandwidth</InputLabel>
                  <Select name="bandwidth" id="bandwith">
                    <MenuItem value="6MHz">6MHz</MenuItem>
                    <MenuItem value="8MHz">8MHz</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth size="small">
                  <InputLabel>Region</InputLabel>
                  <Select name="region" id="region">
                    <MenuItem value="US">US</MenuItem>
                    <MenuItem value="South Korea">South Korea</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              {/* Continue with the rest of the form fields */}
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Frequency"
                  name="fname"
                  fullWidth
                  size="small"
                  value={frequency}
                  onChange={e => {
                    const value = e.target.value;
                    if (!isNaN(value) && Number(value) >= 0) {
                      setFrequency(value);
                    }
                  }}
                  InputProps={{
                    readOnly: true,
                    style: { backgroundColor: 'white' },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth size="small">
                  <InputLabel>Standard</InputLabel>
                  <Select name="standard" id="standard">
                    <MenuItem value="Atsc3_6MHz">Atsc3_6MHz</MenuItem>
                    <MenuItem value="Atsc3_8MHz">Atsc3_8MHz</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="R/F Level"
                  name="rf_level"
                  fullWidth
                  size="small"
                  value={rflevel}
                  onChange={e => {
                    const value = e.target.value;
                    if (!isNaN(value) && Number(value) >= 0) {
                      setRFLevel(value);
                    }
                  }}
                  InputProps={{
                    readOnly: true,
                    style: { backgroundColor: 'white' },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};

export default ReceiverForm;
