import React from "react";
import ReactPlayer from "react-player";

function VideosCards(props) {
  const { video } = props;

  return (
    <div>
      <div>
        <ReactPlayer className="bg-video" url={video} />
      </div>
    </div>
  );
}

export default VideosCards;
