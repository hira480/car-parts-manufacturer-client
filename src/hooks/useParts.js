import { useEffect, useState } from "react";

const useParts = productId => {
    const [part, setPart] = useState({});

    useEffect(() => {
        const url = `https://whispering-mountain-34563.herokuapp.com/part/${productId}`

        fetch(url)
            .then(res => res.json())
            .then(data => setPart(data));
    }, [productId]);
    return [part];
}

export default useParts;