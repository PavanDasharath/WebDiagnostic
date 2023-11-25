import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [jsonData, setJsonData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const endpointUrl = 'http://127.0.0.1:5000/data';
        const response = await axios.get(endpointUrl);
        setJsonData(response.data);
        console.log(response.data);
        setError(null);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error);
      }
    };

    fetchData(); // Fetch data when the DataProvider mounts

    const intervalId = setInterval(fetchData, 1000); // Fetch data every 1000ms

    return () => {
      clearInterval(intervalId); // Cleanup the interval on unmount
    };
  }, []);

  const postData = async () => {
    try {
      const postEndpointUrl = 'http://127.0.0.1:5000/post-data';
      // Assuming you have some data to send in the POST request body
      const postData = {
        /* Your data here */
      };
      const response = await axios.post(postEndpointUrl, postData);
      // Handle the response if needed
      console.log(response.data);
    } catch (error) {
      console.error('Error sending POST request:', error);
    }
  };

  return (
    <DataContext.Provider value={jsonData}>{children}</DataContext.Provider>
  );
};

export const useData = () => {
  return useContext(DataContext);
};
