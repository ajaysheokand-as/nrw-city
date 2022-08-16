import React from "react";
// import "./CustomCard.css";
export const CustomCard = () => {
  return (
    <div class="container">
      <div class="card-wrapper">
        <div class="card">
          <div class="card-front">
            <div class="card-title">Title of Business</div>
            <img src="#" alt="Please Upload " />
            <div class="card-analytics">
              <span class="analytics-items material-symbols-outlined">
                visibility
              </span>
              <span class="analytics-items material-symbols-outlined">
                thumb_up
              </span>
              <span class="analytics-items material-symbols-outlined">
                Comment
              </span>
            </div>
          </div>
          <div class="card-back">
            <div class="card-title">Title of Business</div>
            <p class="tag-line">A short Description of Business</p>
            <p class="tags">Some Keywords to describe Business</p>
            <p class="adrs">Short Address</p>
            <p class="contact">
              <i class="fa fa-phone"></i>One or Two Contact Numbers
            </p>
            <p class="social-media-icons">
              <a href="#" class="fa fa-facebook" title="FaceBook"></a>
              <a href="#" class="fa fa-whatsapp" title="WhatsApp"></a>
              <a href="#" class="fa fa-envelope" title="Gmail"></a>
              <a href="#" class="fa fa-youtube" title="YouTube"></a>
            </p>
            <p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6938.895903627713!2d76.11996037344159!3d29.5906617077551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3911f28b8cbacd15%3A0x5ed86eb0f447ff52!2sHanuman%20Nagar%2C%20Narwana%2C%20Haryana%20126116!5e0!3m2!1sen!2sin!4v1630837180622!5m2!1sen!2sin"
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
