import React from 'react';
import { Container, Typography } from '@mui/material';
import { Bar } from 'react-chartjs-2';

const GSNRChart = () => {
  const chartData = {
    labels: [
      '2023-08-01T00:00:00',
      '2023-08-01T01:00:00',
      '2023-08-01T02:00:00',
    ], // Provide your datetime labels here
    datasets: [
      {
        label: 'G SNR',
        data: [5, 8, 6], // Provide your G SNR data points here
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      // Add other datasets similarly
    ],
  };

  const chartOptions = {
    scales: {
      x: {
        type: 'time', // Use 'time' for datetime x-axis
        time: {
          unit: 'hour', // Specify your desired time unit
          tooltipFormat: 'll HH:mm:ss', // Format for tooltip
        },
        title: {
          display: true,
          text: 'Datetime',
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'SNR',
        },
      },
    },
    plugins: {
      legend: {
        position: 'right',
      },
    },
  };

  return (
    <Container>
      <Typography variant="h4">SNR Chart</Typography>
      <Bar data={chartData} options={chartOptions} />
    </Container>
  );
};

export default GSNRChart;
