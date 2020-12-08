import React from "react";

function PhotosDisplay(props) {
  return props.data_photos != null ? (
    props.data_photos.map((pictures) => {
      return (
        <div
          key={pictures.id}
          data-test="loaded_photo"
          style={{
            outline: "1px solid black",
            padding: "2px",
            width: "33%",
            float: "left",
          }}
        >
          <a href={pictures.url}>
            <img className="photoLink" src={pictures.thumbnailUrl} alt="pic" />
          </a>
          <p>{pictures.title} </p>
        </div>
      );
    })
  ) : (
    <div>
      <h2>Sorry, currently not working</h2>
    </div>
  );
}

export default PhotosDisplay;
