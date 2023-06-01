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
            <img width="100px" src="https://pbs.twimg.com/profile_images/1410279947361566721/eWFUEkSG_400x400.jpg" alt="" />
            <h3>{tweetedBy.name}</h3>
        </div>
        <p>{content}</p>
        <img src={image} alt="" />
        <p><span>{createdAt}</span><span>{tweetedBy.name}</span></p>
    </div>
  );
};

export default Post;
// {
//     "id": "6e7314d7-f08f-4ce0-ac9a-6e7b05990189",
//     "content": "Quos dicta esse asperiores voluptate voluptatem nulla adipisci corporis. A temporibus doloremque non quas facilis dicta provident. Quod quibusdam aut quasi aspernatur nobis delectus. Doloremque illo voluptate vitae dignissimos.",
//     "createdAt": "2022-06-27T21:45:25.612Z",
//     "image": "https://picsum.photos/1000/500?q=0",
//     "tweetedBy": {
//       "id": "eead1d48-1586-44d7-8bf8-ff076d6ee35e",
//       "name": "Caroline Gleichner"
//     },
//     "likeCount": 576,
//     "commentCount": 577,
//     "reTweetsCount": 174,
//     "isLiked": true
//   },