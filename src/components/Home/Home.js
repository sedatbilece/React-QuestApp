import React from "react";
import Post from '../Post/Post';
import PostForm from "../Post/PostForm";
function Home() {
    return (
        <div className="container">
        <PostForm  userId={1} userName="dd" title="title" text="text" />

        <Post />
        
        </div>
    );
    }
export default Home;