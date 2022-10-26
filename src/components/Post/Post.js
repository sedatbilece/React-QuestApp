import {useState, useEffect} from "react";
import "./post.scss";
import PostElement from "./PostElement";

function Post() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const[postList, setPostList] = useState([]);


    useEffect(() => {
        fetch("http://localhost:8080/posts",{method: "GET", headers: {"Content-Type": "text/plain"}})
        .then(res => {
            console.log(res)
            return res.json()
        })
        .then(
            (result) => {
                setIsLoaded(true);
                setPostList(result);

            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            })

    },[]); 


    if (error) {
        return <div>Error: {error.message}</div>;
    }
    else if (!isLoaded) {
        return <div>Loading...</div>;
    }
    else {
        return (//page div
            <ul>
                {postList.map(post => (
                    <li key={post.id} className="li-post">
                        
                        <PostElement title={post.title} text={post.text}/>
                        
                    </li>
                ))}
            </ul>
        );
    }

}

export default Post;
