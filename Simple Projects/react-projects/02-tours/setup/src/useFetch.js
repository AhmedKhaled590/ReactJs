import React, { useState, useEffect } from 'react'
const useFetch = (url) => {
    const [tours, setTours] = useState(null);
    const [isPending, setIsPending] = useState(true);
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setTours(data)
                setIsPending(false);
                console.log(data);
            });
    }, [])
    return { tours, isPending, setTours };
}
export default useFetch;