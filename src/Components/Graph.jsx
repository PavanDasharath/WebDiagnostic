import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Sample Data',
      data: [12, 19, 3, 5, 2, 3],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
    },
  ],
};

function Graph() {
  return <Line data={data} />;
}

export default Graph;
