import ReactPlayer from "react-player";
import React, { useRef } from "react";
import Layout from "../../Layout/Layout";
import "./Training.css";

const VIDEO_PATH = "https://www.aparat.com/v/4TxvX";
function Training() {
  const playerRef = useRef(null);
  return (
    <Layout>
      <div className="Container">
        <h1>در حال توسعه میباشد</h1>
      </div>
    </Layout>
  );
}
export default Training;
