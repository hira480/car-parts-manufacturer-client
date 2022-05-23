import { useEffect, useState } from "react"

const useParts = partId => {
    const [part, setPart] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/part/${partId}`

        fetch(url)
            .then(res => res.json())
            .then(data => setPart(data));
    }, [partId]);
    return [part];
}

export default useParts;