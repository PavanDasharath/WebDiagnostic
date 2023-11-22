import React from 'react';
import { TextField } from '@mui/material';

function TextBox({ label }) {
  return (
    <TextField label={label} variant="outlined" fullWidth margin="normal" />
  );
}

export default TextBox;
