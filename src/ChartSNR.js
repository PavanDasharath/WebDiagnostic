import React, { useState, useEffect } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { useData } from './DataContext';
import Title from './Title';
import { Paper } from '@mui/material';

function ChartSNR() {
  const jsonData = useData();
  const [chartData, setChartData] = useState([]);
  const [legendState, setLegendState] = useState({});
  const keysToPlot = [
    'GSNR',
    'L1BSNR',
    'L1DSNR',
    'P0SNR',
    'P1SNR',
    'P2SNR',
    'P3SNR',
  ];

  useEffect(() => {
    if (jsonData) {
      const jsonnewstring = jsonData;

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
  }, [jsonData, chartData]);

  const handleLegendClick = e => {
    const dataKey = e.dataKey;
    setLegendState(prevState => ({
      ...prevState,
      [dataKey]: !prevState[dataKey],
    }));
  };

  const formatXAxisTick = tickItem => {
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
        <Title align="center">SNR</Title>
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
              tick={{
                fontSize: 12,
                tickFormatter: value => value.toFixed(2),
              }}
              allowDataOverflow={true}
            />
            <Tooltip contentStyle={{ fontSize: '10px' }} />
            {keysToPlot.map((key, index) => (
              <Line
                key={key}
                type="basis"
                dataKey={key}
                name={key}
                stroke={
                  ['red', 'green', 'blue', 'yellow', 'pink', 'orange'][index]
                }
                activeDot={{ r: 4 }}
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

export default ChartSNR;
