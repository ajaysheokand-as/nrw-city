import React from "react";
import img1 from "./img/pr.jpeg";
import "./FlipCard.css";

export const FlipCard = () => {
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
          <h4>Business Title </h4>
          <p>Tag Line</p>

          <input type="button" value="Know more" />
        </div>
      </div>
    </div>
  );
};
