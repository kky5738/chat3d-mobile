import { useState, useEffect } from "react";
import axios from 'axios'

const useFetch = (endpoint, method, query) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const options = {
        method: `${method}`,
        url: `http://100.64.159.131:8375/${endpoint}`,
        params: {...query}
    }

    const fetchData = async () => {
        setIsLoading(true)

        try {
            const response = await axios.request(options)

            setData(response.data)
        } catch(error) {
            setError(error)
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }
}