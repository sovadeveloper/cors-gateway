import React, {useState} from "react";
import axios from "axios";

const PostComponent = () => {
    const [postData, setPostData] = useState({});
    const [responseData, setResponseData] = useState(null);
    const [error, setError] = useState(null);

    const handlePostRequest = async () => {
        try {
            const response = await axios.post('http://localhost:8080/testservice/api/test', postData);
            setResponseData(response.data);
            setError(null)
        } catch (error) {
            console.error(error);
            setResponseData(null);
            setError(error);
        }
    };

    return (
        <div>
            <h2>POST METHOD</h2>
            <form action="POST">
                <input
                    type="text"
                    placeholder="Name"
                    value={postData.name}
                    onChange={(e) => setPostData({name: e.target.value})}
                />
                <input
                    type="number"
                    placeholder="Count"
                    value={postData.count}
                    onChange={(e) => setPostData({count: e.target.value})}
                />
                <button type="button" onClick={handlePostRequest}>
                    SEND
                </button>
            </form>

            {responseData && (
                <div>
                    <h3>Response: </h3>
                    <pre>{JSON.stringify(responseData, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}

export default PostComponent;