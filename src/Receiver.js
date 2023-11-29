import React, { useState, useEffect } from 'react';
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
  IconButton,
  InputAdornment,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import Title from './Title';
import { useData } from './DataContext';

const ReceiverForm = () => {
  const [frequency, setFrequency] = useState(0);
  const [rfLevel, setRFLevel] = useState('');
  const [region, setRegion] = useState('US');
  const [board, setBoard] = useState('EVB3000');
  const [bandwidth, setBandwidth] = useState('6MHz');
  const [standard, setStandard] = useState('Atsc3_6MHz');

  const jsonData = useData();

  useEffect(() => {
    if (jsonData) {
      setFrequency(parseInt(jsonData.frequency, 10) || 0);
      setRFLevel(parseInt(jsonData.rfLevel, 10).toFixed(2) || '');
    }
  }, [jsonData]);

  const handleIncrement = () => setFrequency(frequency + 1);

  const handleDecrement = () => {
    if (frequency > 0) {
      setFrequency(frequency - 1);
    }
  };

  const handleSubmit = () => {
    // Handle form submission logic
  };

  return (
    <React.Fragment>
      <Title>Receiver</Title>
      <Card>
        <CardContent>
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4} md={6}>
                <FormControl fullWidth size="small">
                  <InputLabel shrink htmlFor="board-label">
                    Board
                  </InputLabel>
                  <Select
                    name="board"
                    id="board"
                    value={board}
                    onChange={e => setBoard(e.target.value)}
                    inputProps={{ id: 'board-label' }}
                    style={{ marginTop: '16px' }}
                  >
                    <MenuItem value="EVB3000">EVB3000</MenuItem>
                    <MenuItem value="Silisa">Silica</MenuItem>
                    <MenuItem value="Yoga">Yoga</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth size="small">
                  <InputLabel shrink htmlFor="bandwidth-label">
                    Bandwidth
                  </InputLabel>
                  <Select
                    name="bandwidth"
                    id="bandwidth"
                    value={bandwidth}
                    onChange={e => setBandwidth(e.target.value)}
                    inputProps={{ id: 'bandwidth-label' }}
                    style={{ marginTop: '16px' }}
                  >
                    <MenuItem value="6MHz">6MHz</MenuItem>
                    <MenuItem value="8MHz">8MHz</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth size="small">
                  <InputLabel shrink htmlFor="region-label">
                    Region
                  </InputLabel>
                  <Select
                    name="region"
                    id="region"
                    value={region}
                    onChange={e => setRegion(e.target.value)}
                    inputProps={{ id: 'region-label' }}
                    style={{ marginTop: '16px' }} // Adjust styling as needed
                  >
                    <MenuItem value="US">US</MenuItem>
                    <MenuItem value="South Korea">South Korea</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              {/* Continue with the rest of the form fields */}
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth size="small">
                  <InputLabel shrink htmlFor="standard-label">
                    Standard
                  </InputLabel>
                  <Select
                    name="standard"
                    id="standard"
                    value={standard}
                    onChange={e => setStandard(e.target.value)}
                    inputProps={{ id: 'standard-label' }}
                    style={{ marginTop: '16px' }}
                  >
                    <MenuItem value="Atsc3_6MHz">Atsc3_6MHz</MenuItem>
                    <MenuItem value="Atsc3_8MHz">Atsc3_8MHz</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
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
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleIncrement}
                          style={{ padding: 5 }}
                        >
                          <AddIcon style={{ fontSize: 20 }} />
                        </IconButton>
                        <IconButton
                          onClick={handleDecrement}
                          style={{ padding: 5 }}
                        >
                          <RemoveIcon style={{ fontSize: 20 }} />
                        </IconButton>
                      </InputAdornment>
                    ),
                    style: { backgroundColor: 'white' },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="R/F Level"
                  name="rf_level"
                  fullWidth
                  size="small"
                  value={rfLevel}
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
