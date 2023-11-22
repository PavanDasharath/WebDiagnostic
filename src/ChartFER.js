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

function ChartFER() {
  const jsonData = useData();
  const [chartData, setChartData] = useState([]);
  const [legendState, setLegendState] = useState({}); // To manage legend visibility
  const keysToPlot = ['P0FER', 'P1FER', 'P2FER', 'P3FER', 'L1BFER', 'L1DFER'];

  useEffect(() => {
    if (jsonData) {
      //const jsonStr = jsonData;
      // const validJsonStr = jsonStr.replace(/'/g, '"');
      const jsonnewstring = jsonData; //JSON.parse(validJsonStr);

      const getCurrentTime = () => {
        const currentTime = new Date();
        const hours = currentTime.getHours().toString().padStart(2, '0');
        const minutes = currentTime.getMinutes().toString().padStart(2, '0');
        const seconds = currentTime.getSeconds().toString().padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
      };

      const addDataPoint = () => {
        const formattedTime = getCurrentTime();
        const newDataPoint = { time: formattedTime };

        keysToPlot.forEach(key => {
          newDataPoint[key] = jsonnewstring[key];
        });

        setChartData(prevData => [...prevData, newDataPoint]);

        if (chartData.length >= 10) {
          setChartData(prevData => prevData.slice(1));
        }
      };

      const intervalId = setInterval(addDataPoint, 1000);

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
        <Title align="center">FER</Title>
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
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip contentStyle={{ fontSize: '10px' }} />
            {keysToPlot.map((key, index) => (
              <Line
                key={key}
                type="basis"
                dataKey={key}
                name={key}
                activeDot={{ r: 4 }}
                stroke={
                  ['red', 'green', 'blue', 'yellow', 'pink', 'orange'][index]
                }
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

export default ChartFER;
