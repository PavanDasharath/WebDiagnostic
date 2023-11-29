import React, { useState, useEffect } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { useData } from './DataContext';
import Title from './Title';
import { Paper } from '@mui/material';

function ChartSBR() {
  const jsonData = useData();
  const [chartData, setChartData] = useState([]);
  const keysToPlot = ['P0SBR', 'P1SBR', 'P2SBR', 'P3SBR'];
  const [legendState, setLegendState] = useState(() => {
    // Set initial visibility of legend items
    const initialLegendState = {};
    keysToPlot.forEach((key, index) => {
      initialLegendState[key] = index === 0; // Set to true for the first item, false for others
    });
    return initialLegendState;
  }); // To manage legend visibility

  useEffect(() => {
    if (jsonData) {
      //const jsonStr = jsonData;
      //const validJsonStr = jsonStr.replace(/'/g, '"');
      const jsonnewstring = jsonData; //JSON.parse(validJsonStr);

      // Function to get the current time in the desired format
      const getCurrentTime = () => {
        const currentTime = new Date();
        const hours = currentTime.getHours().toString().padStart(2, '0');
        const minutes = currentTime.getMinutes().toString().padStart(2, '0');
        const seconds = currentTime.getSeconds().toString().padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
      };

      // Create a function to add new data points
      const addDataPoint = () => {
        const formattedTime = getCurrentTime();
        const newDataPoint = { time: formattedTime };

        keysToPlot.forEach(key => {
          newDataPoint[key] = jsonnewstring[key];
        });

        // Update the chartData state with the new data point
        setChartData(prevData => [...prevData, newDataPoint]);

        // Remove the first data point if there are more than 100 data points
        if (chartData.length >= 100) {
          setChartData(prevData => prevData.slice(1));
        }
      };

      // Update the data every 10 milliseconds
      const intervalId = setInterval(addDataPoint, 1000);

      // Clean up the interval when the component unmounts
      return () => clearInterval(intervalId);
    }
  }, [jsonData, chartData]); // Include chartData as a dependency

  // Function to toggle the visibility of a line
  const handleLegendClick = e => {
    const dataKey = e.dataKey;
    setLegendState(prevState => ({
      ...prevState,
      [dataKey]: !prevState[dataKey], // Toggle visibility
    }));
  };

  const formatXAxisTick = tickItem => {
    // Assuming tickItem is in the format "hh:mm:ss"
    const [hours, minutes, seconds] = tickItem.split(':');
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <React.Fragment>
      <Paper
        sx={{
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          width: '100%',
        }}
      >
        <Title align="center">SBR</Title>
        <ResponsiveContainer>
          <LineChart
            data={chartData}
            margin={{
              top: 2,
              right: 2,
              bottom: 2,
              left: 2,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="time"
              tick={{ fontSize: 12 }}
              interval={'preserveStartEnd'}
              tickFormatter={formatXAxisTick}
            />
            <YAxis
              //domain={[0, 48]} // Set the domain to display from 0 to 48
              tick={{
                //values: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48],
                fontSize: 12,
                tickFormatter: value => value.toFixed(10),
              }}
            />

            <Tooltip contentStyle={{ fontSize: '10px' }} />
            {keysToPlot.map((key, index) => (
              <Line
                key={key}
                type="basis"
                dataKey={key}
                name={key}
                activeDot={{ r: 4 }}
                stroke={['red', 'green', 'blue', 'yellow'][index]}
                hide={!legendState[key]} // Show or  Hide line based on legendState
              />
            ))}
            <Legend
              onClick={handleLegendClick}
              wrapperStyle={{ fontSize: '10px' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </Paper>
    </React.Fragment>
  );
}

export default ChartSBR;
