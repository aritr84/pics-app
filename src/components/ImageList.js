import "./ImageList.css";
import React from "react";
import ImageCard from "./ImageCard";

const ImageList = function (props) {
  const imageMapFunction = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });

  return <div className="image-list">{imageMapFunction}</div>;
};

export default ImageList;
