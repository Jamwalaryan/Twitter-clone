import React, { useState, useEffect } from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import "./CSS/Feed.css";
import { db } from "../firebase";
import FlipMove from "react-flip-move";
import data from "../data/tweet.json";
import users from "../data/users.json";
// console.log(data);
// console.log(users);
function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);



  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <TweetBox />

      <FlipMove>
     {data.map((post)=>{
        return <Post {...post}/>;
     })}
      </FlipMove>
    </div>
  );
}

export default Feed;
