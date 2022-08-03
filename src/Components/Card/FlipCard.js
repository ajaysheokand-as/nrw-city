import React from "react";
import img1 from "./img/pr.jpeg";
import "./FlipCard.css";

export const FlipCard = (props) => {
  console.log(props);
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={img1}
            alt="Image"
            style={{ width: "100%", height: 200, borderRadius: "10px" }}
          />
        </div>
        <div className="flip-card-back">
          <h4>{props.business_title} </h4>
          <p>{props.tag_line}</p>

          <input type="button" value="Know more" />
        </div>
      </div>
    </div>
  );
};
