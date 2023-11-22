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

function ChartCBR() {
  const jsonData = useData();
  const [chartData, setChartData] = useState([]);
  const [legendState, setLegendState] = useState({});
  const keysToPlot = ['P0CBR', 'P1CBR', 'P2CBR', 'P3CBR'];

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

        // Remove the first data point if there are more than 20 data points
        if (chartData.length >= 20) {
          setChartData(prevData => prevData.slice(1));
        }
      };

      // Update the data every 10 milliseconds
      const intervalId = setInterval(addDataPoint, 1000);

      // Clean up the interval when the component unmounts
      return () => clearInterval(intervalId);
    }
  }, [jsonData, chartData]); // Include chartData as a dependency

  // To manage legend visibility
  // Function to toggle the visibility of a line
  const handleLegendClick = e => {
    const dataKey = e.dataKey;
    setLegendState(prevState => ({
      ...prevState,
      [dataKey]: !prevState[dataKey], // Toggle visibility
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
        <Title align="center">CBR</Title>
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
              domain={[0, 48]}
              tick={{
                values: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48],
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

export default ChartCBR;

// import React, { useState, useEffect } from 'react';
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
//   Legend,
// } from 'recharts';
// import { useData } from './DataContext';
// import Title from './Title';
// import { Paper } from '@mui/material';

// function ChartCBR() {
//   const jsonData = useData();
//   const [chartData, setChartData] = useState([]);
//   const [legendState, setLegendState] = useState({});
//   const [minY, setMinY] = useState(null);
//   const [maxY, setMaxY] = useState(null);
//   const keysToPlot = ['P0CBR', 'P1CBR', 'P2CBR', 'P3CBR'];

//   useEffect(() => {
//     if (jsonData) {
//       const getCurrentTime = () => {
//         const currentTime = new Date();
//         const hours = currentTime.getHours().toString().padStart(2, '0');
//         const minutes = currentTime.getMinutes().toString().padStart(2, '0');
//         const seconds = currentTime.getSeconds().toString().padStart(2, '0');
//         return `${hours}:${minutes}:${seconds}`;
//       };

//       const addDataPoint = () => {
//         const formattedTime = getCurrentTime();
//         const newDataPoint = { time: formattedTime };

//         keysToPlot.forEach(key => {
//           const value = parseFloat(jsonData[key]);
//           newDataPoint[key] = value;

//           // Update minY and maxY based on the incoming data
//           if (minY === null || value < minY) {
//             setMinY(value);
//           }
//           if (maxY === null || value > maxY) {
//             setMaxY(value);
//           }
//         });

//         setChartData(prevData => [...prevData, newDataPoint]);

//         if (chartData.length >= 5) {
//           setChartData(prevData => prevData.slice(1));
//         }
//       };

//       const intervalId = setInterval(addDataPoint, 1000);

//       return () => clearInterval(intervalId);
//     }
//   }, [jsonData, chartData]);

//   const handleLegendClick = e => {
//     const dataKey = e.dataKey;
//     setLegendState(prevState => ({
//       ...prevState,
//       [dataKey]: !prevState[dataKey],
//     }));
//   };

//   const formatXAxisTick = tickItem => {
//     const [hours, minutes, seconds] = tickItem.split(':');
//     return `${hours}:${minutes}:${seconds}`;
//   };

//   return (
//     <React.Fragment>
//       <Paper
//         sx={{
//           p: 2,
//           display: 'flex',
//           flexDirection: 'column',
//           height: '100%',
//           width: '100%',
//         }}
//       >
//         <Title align="center">CBR</Title>
//         <ResponsiveContainer>
//           <LineChart
//             data={chartData}
//             margin={{
//               top: 2,
//               right: 2,
//               bottom: 2,
//               left: 2,
//             }}
//           >
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis
//               dataKey="time"
//               tick={{ fontSize: 12 }}
//               interval={'preserveStartEnd'}
//               tickFormatter={formatXAxisTick}
//             />
//             <YAxis tick={{ fontSize: 12 }} domain={[minY, maxY]} />
//             <Tooltip contentStyle={{ fontSize: '10px' }} />
//             {keysToPlot.map((key, index) => (
//               <Line
//                 key={key}
//                 type="basis"
//                 dataKey={key}
//                 name={key}
//                 activeDot={{ r: 4 }}
//                 stroke={['red', 'green', 'blue', 'yellow'][index]}
//                 hide={!legendState[key]}
//               />
//             ))}
//             <Legend
//               onClick={handleLegendClick}
//               wrapperStyle={{ fontSize: '10px' }}
//             />
//           </LineChart>
//         </ResponsiveContainer>
//       </Paper>
//     </React.Fragment>
//   );
// }

// export default ChartCBR;

/* HighCharts */
// import React, { useState, useEffect, useRef } from 'react';
// import Highcharts from 'highcharts';
// import HighchartsReact from 'highcharts-react-official';
// import { useData } from './DataContext';
// import Title from './Title';
// import { Paper } from '@mui/material';

// function ChartCBR() {
//   const jsonData = useData();
//   const chartRef = useRef(null);
//   const keysToPlot = ['P0CBR', 'P1CBR', 'P2CBR', 'P3CBR'];

//   const [chartOptions, setChartOptions] = useState({
//     title: {
//       text: 'CBR',
//     },
//     chart: {
//       type: 'line',
//     },
//     xAxis: {
//       categories: [],
//       labels: {
//         formatter: function () {
//           return Highcharts.dateFormat('%H:%M:%S', new Date(this.value));
//         },
//       },
//     },
//     yAxis: {
//       title: {
//         text: 'Value',
//       },
//     },
//     tooltip: {
//       pointFormat: '{series.name}: <b>{point.y}</b>',
//     },
//     legend: {
//       enabled: true,
//     },
//     series: keysToPlot.map(key => ({
//       name: key,
//       data: [],
//       showInLegend: true,
//     })),
//   });

//   useEffect(() => {
//     if (jsonData) {
//       const intervalId = setInterval(() => {
//         const formattedTime = new Date().getTime();
//         const newDataPoint = {
//           x: formattedTime,
//           y: keysToPlot.map(key => jsonData[key]),
//         };

//         setChartOptions(prevOptions => {
//           const newCategories = [
//             ...prevOptions.xAxis.categories,
//             formattedTime,
//           ];
//           const newSeriesData = keysToPlot.map((key, index) => [
//             ...prevOptions.series[index].data,
//             newDataPoint.y[index],
//           ]);

//           return {
//             ...prevOptions,
//             xAxis: {
//               ...prevOptions.xAxis,
//               categories: newCategories,
//             },
//             series: keysToPlot.map((key, index) => ({
//               ...prevOptions.series[index],
//               data: newSeriesData[index],
//             })),
//           };
//         });

//         if (chartRef.current) {
//           chartRef.current.chart.redraw();
//         }

//         if (chartOptions.xAxis.categories.length >= 5) {
//           setChartOptions(prevOptions => {
//             const newCategories = prevOptions.xAxis.categories.slice(1);
//             const newSeriesData = keysToPlot.map((key, index) =>
//               prevOptions.series[index].data.slice(1)
//             );

//             return {
//               ...prevOptions,
//               xAxis: {
//                 ...prevOptions.xAxis,
//                 categories: newCategories,
//               },
//               series: keysToPlot.map((key, index) => ({
//                 ...prevOptions.series[index],
//                 data: newSeriesData[index],
//               })),
//             };
//           });
//         }
//       }, 1000);

//       return () => clearInterval(intervalId);
//     }
//   }, [jsonData, chartOptions, chartRef]);

//   return (
//     <React.Fragment>
//       <Paper
//         sx={{
//           p: 2,
//           display: 'flex',
//           flexDirection: 'column',
//           height: '100%',
//           width: '100%',
//         }}
//       >
//         <Title align="center">CBR</Title>
//         <HighchartsReact
//           highcharts={Highcharts}
//           options={chartOptions}
//           ref={chartRef}
//         />
//       </Paper>
//     </React.Fragment>
//   );
// }

// export default ChartCBR;
