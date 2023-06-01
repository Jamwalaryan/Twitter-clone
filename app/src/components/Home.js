import React from "react";
import Feed from "./Feed";
import Sidebar from "./Sidebar";
import Widgets from "./Widgets";

const Home = () => {
 
  return (
    <>
      <div className="home-container">
        <Sidebar />
        <Feed />
        <Widgets/>
      </div>
    </>
  );
};

export default Home;
