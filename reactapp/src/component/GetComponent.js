import React, {useEffect, useState} from "react";
import axios from "axios";

const GetComponent = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/testservice/api/test');
                setData(response.data);
            } catch (error) {
                console.error('error', error);
            }
        }
        fetchData();
    }, []);

    return (
        <div>
            <h2>GET METHOD</h2>
            {data && (<pre>{JSON.stringify(data, null, 2)}</pre>)}
        </div>
    );
}

export default GetComponent;