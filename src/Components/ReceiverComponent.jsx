import React, { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
  FormGroup,
} from '@mui/material';
import { useData } from './DataContext';
import Title from './Title';

function ReceiverComponent() {
  // const jsonData = useData();
  // const [frequency, setFrequency] = useState('');
  // const [rflevel, setRFLevel] = useState('');
  // // const [papr, setPapr] = useState('');
  // const [l1dsize, setL1DSize] = useState('');
  // const [framelenmode, setFrameLenMode] = useState('');
  // const [l1dcontenttag, setL1DContentTag] = useState('');

  return (
    <React.Fragment>
      <Card sx={{ maxWidth: 200 }}>
        <Title>L1BasicParameters</Title>
        <CardContent xs={6} md={9}>
          <FormGroup>
            <FormControl>
              <InputLabel htmlFor="board">Board</InputLabel>
              <Select
                label="Board"
                id="board"
                style={{ minHeight: '10px', minWidth: '50px' }}
              >
                <MenuItem value="EVB3000">EVB3000</MenuItem>
                <MenuItem value="Silica">Silica</MenuItem>
                <MenuItem value="Yoga">Yoga</MenuItem>
              </Select>
            </FormControl>
            <br />
            <br />

            <FormControl>
              <InputLabel htmlFor="Standard" xs={6}>
                Standard
              </InputLabel>
              <Select
                label="Standard"
                id="standard"
                style={{ minHeight: '20px', minWidth: '100px' }}
              >
                <MenuItem value="6MHz">6MHz</MenuItem>
                <MenuItem value="8MHz">8MHz</MenuItem>
              </Select>
            </FormControl>
          </FormGroup>
          <br />
          {/* Add other form controls similarly */}
          {/* ... */}
          <Button variant="outlined" onClick={updateParams}>
            Submit
          </Button>
        </CardContent>
      </Card>
    </React.Fragment>
  );
}

function updateParams() {
  // Define your logic here for updating parameters
}

export default ReceiverComponent;
