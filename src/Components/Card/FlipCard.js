import React from "react";
import img1 from "./img/pr.jpeg";
import "./FlipCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icon } from "react-icons-kit";
import { comments } from "react-icons-kit/fa/comments";
import { thumbsOUp } from "react-icons-kit/fa/thumbsOUp";
import { facebookSquare } from "react-icons-kit/fa/facebookSquare";
import { whatsapp } from "react-icons-kit/fa/whatsapp";
import { shareAlt } from "react-icons-kit/fa/shareAlt";

export const FlipCard = (props) => {
  console.log(props);
  return (
    <div class="shadow p-3 mb-5 bg-light rounded">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="title p-2"> BUSINESS TITLE</div>
            <div className="p-1">
              <img
                src={img1}
                alt="Image"
                style={{ width: "100%", height: 300, borderRadius: "10px" }}
              />
            </div>
            <div className="d-flex flex-wrap align-content-center">
              <div className="m-2 p-2 border border-1 rounded-2">
                <Icon icon={thumbsOUp} />
              </div>
              <div className="m-2 p-2 border border-1 rounded-2">
                <Icon icon={comments} />
              </div>
            </div>
          </div>
          <div className="flip-card-back">
            <div className="title p-2"> BUSINESS TITLE </div>
            <span>{props.business_title} </span>
            <br />
            <span>{props.tag_line}</span>
            <br />
            <span className="font-weight-bold">Contact: </span>
            <span>0987654321</span>
            <br />
            <div className=" align-center">
              <Icon
                className="m-2 p-2 border border-1 rounded-2"
                icon={facebookSquare}
                size={25}
              />

              <Icon
                className="m-2 p-2 border border-1 rounded-2"
                icon={whatsapp}
                size={25}
              />

              <Icon
                className="m-2 p-2 border border-1 rounded-2"
                icon={shareAlt}
                size={25}
              />
            </div>
            <iframe
              className="border border-1 rounded-2"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6938.895903627713!2d76.11996037344159!3d29.5906617077551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3911f28b8cbacd15%3A0x5ed86eb0f447ff52!2sHanuman%20Nagar%2C%20Narwana%2C%20Haryana%20126116!5e0!3m2!1sen!2sin!4v1630837180622!5m2!1sen!2sin"
              allowfullscreen=""
              loading="lazy"
              height={232}
              width="100%"
            />
            {/* <input type="button" value="Know more" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};
