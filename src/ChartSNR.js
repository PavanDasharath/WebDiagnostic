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
  const keysToPlot = [
    'GSNR',
    'L1BSNR',
    'L1DSNR',
    'P0SNR',
    'P1SNR',
    'P2SNR',
    'P3SNR',
  ];
  const [legendState, setLegendState] = useState(() => {
    // Set initial visibility of legend items
    const initialLegendState = {};
    keysToPlot.forEach((key, index) => {
      initialLegendState[key] = index === 0; // Set to true for the first item, false for others
    });
    return initialLegendState;
  });

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

        if (chartData.length >= 100) {
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
              domain={[-10, 42]}
              tick={{
                values: [-10, -6, 0, 6, 10, 15, 20, 25, 30, 35, 40, 44],
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
                connectNulls={false}
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

/*
///High Charts
import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Title from './Title';
import { Paper } from '@mui/material';

function ChartSNR() {
  const [chartOptions, setChartOptions] = useState({
    title: {
      text: 'SNR',
      align: 'center',
    },
    chart: {
      type: 'line',
      height: '70%', // Set the desired height
    },
    xAxis: {
      type: 'category',
      labels: {
        formatter: function () {
          const [hours, minutes, seconds] = this.value.split(':');
          return `${hours}:${minutes}:${seconds}`;
        },
        style: {
          fontSize: '12px',
        },
      },
    },
    yAxis: {
      title: {
        text: 'SNR',
      },
      min: -10,
      max: 42,
      tickPositions: [-10, -6, 0, 6, 10, 15, 20, 25, 30, 35, 40, 44],
      labels: {
        formatter: function () {
          return this.value.toFixed(2);
        },
        style: {
          fontSize: '12px',
        },
      },
    },
    tooltip: {
      style: {
        fontSize: '10px',
      },
    },
    legend: {
      itemStyle: {
        fontSize: '10px',
      },
    },
    series: [],
  });

  const [chartData, setChartData] = useState([]);
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
    if (chartData.length >= 100) {
      setChartData(prevData => prevData.slice(1));
    }
  }, [chartData]);

  useEffect(() => {
    if (chartData.length >= 100) {
      setChartData(prevData => prevData.slice(1));
    }
  }, [chartData]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (jsonData) {
        const jsonnewstring = jsonData;

        const getCurrentTime = () => {
          const currentTime = new Date();
          const hours = currentTime.getHours().toString().padStart(2, '0');
          const minutes = currentTime.getMinutes().toString().padStart(2, '0');
          const seconds = currentTime.getSeconds().toString().padStart(2, '0');
          return `${hours}:${minutes}:${seconds}`;
        };

        const formattedTime = getCurrentTime();
        const newDataPoint = { name: formattedTime };

        keysToPlot.forEach(key => {
          newDataPoint[key] = jsonnewstring[key];
        });

        setChartData(prevData => [...prevData, newDataPoint]);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [jsonData, keysToPlot]);

  useEffect(() => {
    const seriesData = keysToPlot.map((key, index) => ({
      name: key,
      data: chartData.map(dataPoint => [dataPoint.name, dataPoint[key]]),
      type: 'line',
      connectNulls: false,
      color: ['red', 'green', 'blue', 'yellow', 'pink', 'orange'][index],
      marker: {
        enabled: true,
        radius: 4,
      },
      visible: true, // You can set initial visibility here if needed
    }));

    setChartOptions(prevOptions => ({
      ...prevOptions,
      series: seriesData,
    }));
  }, [chartData, keysToPlot]);

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
        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      </Paper>
    </React.Fragment>
  );
}

export default ChartSNR;


///Charts JS

import React, { useState, useEffect, useRef } from 'react';
import { Paper } from '@mui/material';
import Chart from 'chart.js/auto';

function ChartSNR() {
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState([]);
  const keysToPlot = [
    'GSNR',
    'L1BSNR',
    'L1DSNR',
    'P0SNR',
    'P1SNR',
    'P2SNR',
    'P3SNR',
  ];
  const [legendState, setLegendState] = useState(() => {
    const initialLegendState = {};
    keysToPlot.forEach((key, index) => {
      initialLegendState[key] = index === 0;
    });
    return initialLegendState;
  });

  useEffect(() => {
    // Initialize the chart
    const ctx = chartRef.current.getContext('2d');
    const datasets = keysToPlot.map((key, index) => ({
      label: key,
      data: [],
      borderColor: ['red', 'green', 'blue', 'yellow', 'pink', 'orange'][index],
      backgroundColor: 'rgba(0, 0, 0, 0)',
      fill: false,
      pointRadius: 4,
      hidden: !legendState[key],
    }));

    const chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [],
        datasets,
      },
      options: {
        scales: {
          x: {
            type: 'linear', // You may need to adjust this based on your actual data
            position: 'bottom',
          },
          y: {
            min: -10,
            max: 42,
            ticks: {
              values: [-10, -6, 0, 6, 10, 15, 20, 25, 30, 35, 40, 44],
              callback: value => value.toFixed(2),
            },
          },
        },
        plugins: {
          legend: {
            onClick: (e, legendItem) => {
              handleLegendClick(legendItem.text);
            },
            labels: {
              font: {
                size: 10,
              },
            },
          },
        },
      },
    });

    // Store the chart instance in the ref for later use
    chartRef.current = chart;

    return () => {
      // Destroy the chart instance when the component is unmounted
      if (chartRef.current) {
        chartRef.current.destroy();
        chartRef.current = null;
      }
    };
  }, [legendState]);

  useEffect(() => {
    // Update the chart data
    if (chartRef.current) {
      const chart = chartRef.current;
      chart.data.labels = chartData.map(entry => entry.time);
      keysToPlot.forEach(key => {
        chart.data.datasets.find(dataset => dataset.label === key).data =
          chartData.map(entry => entry[key]);
      });
      chart.update();
    }
  }, [chartData, legendState]);

  const handleLegendClick = key => {
    setLegendState(prevState => ({
      ...prevState,
      [key]: !prevState[key],
    }));
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
        <canvas ref={chartRef} />
      </Paper>
    </React.Fragment>
  );
}

export default ChartSNR;

*/
