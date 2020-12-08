import React, { useState, useEffect } from "react";
import PhotosDisplay from "./PhotosDisplay";
function Photos(props) {
  const [data_photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch(
      "https://jsonplaceholder.typicode.com/albums/" +
        props.match.params.topic +
        "/photos"
    )
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        setPhotos(myJson);
      });
  });

  return <PhotosDisplay data_photos={data_photos} />;
}

export default Photos;
