import { useEffect, useState } from "react";

const useParts = productId => {
    const [part, setPart] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/part/${productId}`

        fetch(url)
            .then(res => res.json())
            .then(data => setPart(data));
    }, [productId]);
    return [part];
}

export default useParts;