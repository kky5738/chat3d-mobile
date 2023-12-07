import { useState, useEffect } from "react";
import axios from 'axios';

/**
 * Custom React Hook for making HTTP requests using Axios.
 *
 * @param {string} endpoint - The API endpoint to make the request to.
 * @param {string} method - The HTTP method for the request (e.g., "GET", "POST").
 * @param {object} query - The request payload or query parameters.
 * @returns {object} - An object containing the fetched data, loading state, error, and a refetch function.
 */
const useFetch = (endpoint, method, query) => {
    const [data, setData] = useState([]);   // Fetched data
    const [isLoading, setIsLoading] = useState(false);  // Loading state
    const [error, setError] = useState(null);  // Error state

    const options = {
        method: `${method}`,
        url: `http://100.64.159.131:8375/${endpoint}`,
        data: { ...query }
    };

    // const options = {
    //     method: `${method}`,
    //     url: `locallhost:8375/${endpoint}`,
    //     data: { ...query }
    // };

    const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await axios.request(options);

            setData(response.data);
            setIsLoading(false);
        } catch (error) {
            setError(error);
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);  // Run on component mount

    /**
     * Function to manually trigger a refetch of the data.
     */
    const refetch = () => {
        setIsLoading(true);
        fetchData();
    };

    return { data, isLoading, error, refetch };
};

export default useFetch;
