import { useState, useEffect } from "react";
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    const abortCont = new AbortController();
    useEffect(() => {

        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
                .then(blog => {
                    if (!blog.ok) {
                        throw Error("Couldn't fetch data from server");
                    }
                    return blog.json()
                })
                .then(data => {
                    setData(data)
                    setIsPending(false);
                    setError(false);
                }
                )
                .catch(err => {
                    if (err.name === 'AbortError') {
                        console.log("fetch aborted");
                    }
                    else {
                        setIsPending(false);
                        setError(err.message);
                    }
                })
        }, 1000)
        return () => abortCont.abort();
    }, [])
    return { data, isPending, error };
}
export default useFetch;