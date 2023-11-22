import React from 'react';
import { Grid, Paper, TextField } from '@mui/material';
import TextBox from './TextBox';
// import Graph from './Graph';

function ContainerComponent() {
  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          {/* <div className="container">
            <TextBox label="Value 1" />
            <TextBox label="Value 2" />
          </div> */}
          <TextField defaultValue="Small" />
        </Grid>
        <Grid item xs={6}>
          <div className="container">
            <TextBox label="Value 1" />
            <TextBox label="Value 2" />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="container">
            <TextBox label="Value 1" />
            <TextBox label="Value 2" />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="container">
            <TextBox label="Value 1" />
            <TextBox label="Value 2" />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="container">
            <TextBox label="Value 1" />
            <TextBox label="Value 2" />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="container">
            <TextBox label="Value 1" />
            <TextBox label="Value 2" />
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default ContainerComponent;
