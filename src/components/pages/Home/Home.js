import React from "react";
import Actions from "../Actions/Actions";
import "./Home.css";
import ChartPart from "../../ChartPart";
import Details from "../Details/Details";

//Home page is calling components

const Home = () => {
  return (
    <div className="row main">
      <div className="col-3"></div>
      <div className="col-7">
        <ChartPart />
        <Details />
      </div>
      <div className="col-2 actions">
        <Actions />
      </div>
    </div>
  );
};

export default Home;
