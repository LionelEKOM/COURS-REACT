import React, { useState, useEffect } from 'react'

export default function useAPICall() {
    const [data, setData] = useState();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://api.thecatapi.com/v1/images/search")
        .then(response => {
            if(!response.ok) {
                throw new Error()
            }
            return response.json()
        })
        // .then(data => setData(data))
        .then(response => {
            console.log(response);
            setData(response);
            setLoading(false)
        })
        .catch(() => setError(true))
    }, [])
  return {data, error, loading}
}
