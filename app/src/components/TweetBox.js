import React, { useState , useRef} from "react";
import "./CSS/TweetBox.css";
import { Avatar, Button } from "@material-ui/core";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const [ msg , setmsg] = useState("")
  const hsRef = useRef(msg)


  const sendTweet = () => {
   setmsg(hsRef.current+" " +tweetMessage)
   setTweetMessage("")
    
  };

  return (
    <>
    <div className="tweetBox">
      <form onSubmit={sendTweet}>
        <div className="tweetBox__input">
          <Avatar src="https://pbs.twimg.com/profile_images/1621811810885312513/UctA5r8v_400x400.jpg" />
          <input
            onChange={(e) => {
              setTweetMessage(e.target.value)
              
            
            }}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="file"
        />
        
        <Button
         onClick={sendTweet}
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>

      
    </div>
    <div style={{width:"30vw" , height:"10vh" ,border:"3px solid white"}}>{msg} </div></>
  );
}

export default TweetBox;
