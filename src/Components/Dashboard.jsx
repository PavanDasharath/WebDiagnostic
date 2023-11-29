// import * as React from 'react';
import React, { useState } from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
// import NotificationsIcon from '@mui/icons-material/Notifications';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';
import { DataProvider, useData } from '../DataContext';
import Receiver from './../Receiver';
import SignalStatus from './../SignalStatus';
import BootstrapParametersCard from '../BootstrapParameters';
import L1BasicParametersCard from '../L1BasicParameters';
import SubFrame0Selection from '../SubFrame0Selection';
import SubFrame1Selection from '../SubFrame1Selection';
import SubFrame2Selection from '../SubFrame2Selection';
import SubFrame3Selection from '../SubFrame3Selection';
import PLP0Parameters from '../PLP0Parameters';
import PLP1Parameters from '../PLP1Parameters';
import PLP2Parameters from '../PLP2Parameters';
import PLP3Parameters from '../PLP3Parameters';
import ChartCBR from '../ChartCBR';
import ChartSNR from '../ChartSNR';
import ChartSBR from '../ChartSBR';
import ChartFER from '../ChartFER';
import ChartBER from '../ChartBER';

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © iTAS Innovations Pvt Ltd'}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

const AppBar = styled(MuiAppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
}));

export default function Dashboard() {
  // State variables to track start and stop states
  const [isRunning, setIsRunning] = React.useState(false);

  const data = useData();
  const [stopApiCall, setStopApiCall] = useState(false);

  const stopProcess = async () => {
    if (stopApiCall) {
      try {
        const stopProcessEndpoint = 'http://127.0.0.1:5000/stop_activity';
        await fetch(stopProcessEndpoint, { method: 'POST' });
        console.log('Stop process API called');
      } catch (error) {
        console.error('Error stopping process:', error);
      }
    }
  };

  // Function to handle the start action
  const handleStart = () => {
    // Make API call or perform start action
    console.log('Start action triggered');
    setIsRunning(true);
  };

  // Function to handle the stop action
  const handleStop = () => {
    // Make API call or perform stop action
    //postData();
    stopProcess();
    console.log('Stop action triggered');
    setIsRunning(false);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="absolute">
        <Toolbar>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            Web Diagnostic Application
          </Typography>
          {/* <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton> */}
          {/* Start and Stop Icons */}
          <IconButton
            color="inherit"
            onClick={handleStart}
            disabled={isRunning}
          >
            <PlayArrowIcon />
          </IconButton>
          <IconButton
            color="inherit"
            onClick={handleStop}
            disabled={!isRunning}
          >
            <StopIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container sx={{ marginTop: '64px', marginBottom: '32px' }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Paper sx={{ p: 2, height: '100%' }}>
              <DataProvider>
                <Receiver />
              </DataProvider>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper sx={{ p: 2, height: '100%' }}>
              <DataProvider>
                <SignalStatus />
              </DataProvider>
            </Paper>
          </Grid>
          {/* Add other Grid items here */}
          <Grid item xs={12} sm={6} md={4}>
            <Paper sx={{ p: 2, height: '100%' }}>
              <DataProvider>
                <BootstrapParametersCard />
              </DataProvider>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper sx={{ p: 2, height: '100%' }}>
              <DataProvider>
                <L1BasicParametersCard />
              </DataProvider>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper sx={{ p: 2, height: '100%' }}>
              <DataProvider>
                <SubFrame0Selection />
              </DataProvider>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper sx={{ p: 2, height: '100%' }}>
              <DataProvider>
                <SubFrame1Selection />
              </DataProvider>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper sx={{ p: 2, height: '100%' }}>
              <DataProvider>
                <SubFrame2Selection />
              </DataProvider>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper sx={{ p: 2, height: '100%' }}>
              <DataProvider>
                <SubFrame3Selection />
              </DataProvider>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper sx={{ p: 2, height: '100%' }}>
              <DataProvider>
                <PLP0Parameters />
              </DataProvider>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper sx={{ p: 2, height: '100%' }}>
              <DataProvider>
                <PLP1Parameters />
              </DataProvider>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper sx={{ p: 2, height: '100%' }}>
              <DataProvider>
                <PLP2Parameters />
              </DataProvider>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper sx={{ p: 2, height: '100%' }}>
              <DataProvider>
                <PLP3Parameters />
              </DataProvider>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: '500px',
                width: '100%',
              }}
            >
              <DataProvider>
                <ChartSNR />
              </DataProvider>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Paper
              sx={{
                p: 0,
                display: 'flex',
                flexDirection: 'column',
                height: '400px',
                width: '100%',
              }}
            >
              <DataProvider>
                <ChartFER />
              </DataProvider>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Paper
              sx={{
                p: 0,
                display: 'flex',
                flexDirection: 'column',
                height: '400px',
                width: '100%',
              }}
            >
              <DataProvider>
                <ChartBER />
              </DataProvider>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Paper
              sx={{
                p: 0,
                display: 'flex',
                flexDirection: 'column',
                height: '400px',
                width: '100%',
              }}
            >
              <DataProvider>
                <ChartCBR />
              </DataProvider>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Paper
              sx={{
                p: 0,
                display: 'flex',
                flexDirection: 'column',
                height: '400px',
                width: '100%',
              }}
            >
              <DataProvider>
                <ChartSBR />
              </DataProvider>
            </Paper>
          </Grid>{' '}
          {/* <Grid item xs={12} sm={6} md={4}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: '200px',
                width: '100%',
              }}
            >
              <DataProvider>
                <Chart />
              </DataProvider>
            </Paper>
          </Grid> */}
          {/* Add more Grid items here */}
        </Grid>
      </Container>
      {/* Add other components here */}
      <Container sx={{ marginTop: '16px', marginBottom: '32px' }}>
        <Typography variant="body2" color="text.secondary" align="center">
          {'  '}
        </Typography>
        <Copyright sx={{ pt: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
