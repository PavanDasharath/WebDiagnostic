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

function ChartBER() {
  const jsonData = useData();
  const [chartData, setChartData] = useState([]);
  const [legendState, setLegendState] = useState({}); // To manage legend visibility
  const keysToPlot = ['P0BER', 'P1BER', 'P2BER', 'P3BER', 'L1BBER', 'L1DBER'];

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

        // Remove the first data point if there are more than 10 data points
        if (chartData.length >= 10) {
          setChartData(prevData => prevData.slice(1));
        }
      };

      // Update the data every 1000 milli seconds
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
        <Title align="center">BER</Title>
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

export default ChartBER;

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

// function ChartBER() {
//   const jsonData = useData();
//   const [chartData, setChartData] = useState([]);
//   const [legendState, setLegendState] = useState({});
//   const keysToPlot = ['P0BER', 'P1BER', 'P2BER', 'P3BER', 'L1BBER', 'L1DBER'];

//   useEffect(() => {
//     // ... (same as your existing code)
//     if (jsonData) {
//       //const jsonStr = jsonData;
//       //const validJsonStr = jsonStr.replace(/'/g, '"');
//       const jsonnewstring = jsonData; //JSON.parse(validJsonStr);

//       // Function to get the current time in the desired format
//       const getCurrentTime = () => {
//         const currentTime = new Date();
//         const hours = currentTime.getHours().toString().padStart(2, '0');
//         const minutes = currentTime.getMinutes().toString().padStart(2, '0');
//         const seconds = currentTime.getSeconds().toString().padStart(2, '0');
//         return `${hours}:${minutes}:${seconds}`;
//       };

//       // Create a function to add new data points
//       const addDataPoint = () => {
//         const formattedTime = getCurrentTime();
//         const newDataPoint = { time: formattedTime };

//         keysToPlot.forEach(key => {
//           newDataPoint[key] = jsonnewstring[key];
//         });

//         // Update the chartData state with the new data point
//         setChartData(prevData => [...prevData, newDataPoint]);

//         // Remove the first data point if there are more than 10 data points
//         if (chartData.length >= 10) {
//           setChartData(prevData => prevData.slice(1));
//         }
//       };

//       // Update the data every 1000 milli seconds
//       const intervalId = setInterval(addDataPoint, 1000);

//       // Clean up the interval when the component unmounts
//       return () => clearInterval(intervalId);
//     }
//   }, [jsonData, chartData]);

//   // Function to toggle the visibility of a line
//   const handleLegendClick = e => {
//     const dataKey = e.dataKey;
//     setLegendState(prevState => ({
//       ...prevState,
//       [dataKey]: !prevState[dataKey], // Toggle visibility
//     }));
//   };

//   const formatXAxisTick = tickItem => {
//     // Assuming tickItem is in the format "hh:mm:ss"
//     const [hours, minutes, seconds] = tickItem.split(':');
//     return `${hours}:${minutes}:${seconds}`;
//   };

//   // Calculate the domain for the y-axis based on the data
//   const yDomain = keysToPlot.reduce((acc, key) => {
//     const values = chartData.map(item => item[key]);
//     const min = Math.min(...values);
//     const max = Math.max(...values);
//     return { ...acc, [key]: [min, max] };
//   }, {});

//   // Calculate the domain for the x-axis based on the data
//   const xDomain = chartData.length > 0 ? ['dataMin', 'dataMax'] : [];

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
//         <Title align="center">BER</Title>
//         <ResponsiveContainer width="100%" height="100%">
//           <LineChart
//             data={chartData}
//             margin={{
//               top: 10,
//               right: 10,
//               bottom: 20,
//               left: 10,
//             }}
//           >
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis
//               dataKey="time"
//               tick={{ fontSize: 12 }}
//               interval={'preserveStartEnd'}
//               tickFormatter={formatXAxisTick}
//               domain={xDomain}
//             />
//             <YAxis tick={{ fontSize: 12 }} domain={['dataMin', 'dataMax']} />
//             <Tooltip contentStyle={{ fontSize: '10px' }} />
//             {keysToPlot.map((key, index) => (
//               <Line
//                 key={key}
//                 type="basis"
//                 dataKey={key}
//                 name={key}
//                 activeDot={{ r: 4 }}
//                 stroke={
//                   ['red', 'green', 'blue', 'yellow', 'pink', 'orange'][index]
//                 }
//                 hide={!legendState[key]}
//                 yAxisId={key} // Assign a unique yAxisId for each line
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

// export default ChartBER;
