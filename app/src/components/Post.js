import React, { forwardRef } from "react";
import "./CSS/Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

const Post = (props) => {
 console.log(props)
  const {id,content, createdAt, image,tweetedBy,likeCount,commentCount,reTweetsCount,isLiked}=props;
  return (
    <div className="post">
        <div className="user-div">
            <img src="https://pbs.twimg.com/profile_images/1410279947361566721/eWFUEkSG_400x400.jpg" alt="" />
            <h6>{tweetedBy.name}</h6>
        </div>
        <p>{content}</p>
        <img id="tweet-img" src={image} alt="" />
        <p><span>{createdAt}</span><span>{tweetedBy.name}</span></p>
    </div>
  );
};

export default Post;
