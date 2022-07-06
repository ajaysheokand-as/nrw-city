import React from "react";
import "./FlipCard2.css";
export const FlipCard2 = () => {
  return (
    <div>
      {/*Bootstrap CDN*/}
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css"
        type="text/css"
      />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
        integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
        crossOrigin="anonymous"
      />
      {/*CDN End Here*/}
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-3">
            <div className="profile-card">
              <div className="profile-img">
                <img
                  src="https://i.postimg.cc/VNs6dtw4/profile2.jpg"
                  alt="Team Image"
                />
              </div>
              <div className="profile-content">
                <h2 className="title">
                  Brayden
                  <span>Designer &amp; Developer</span>
                </h2>
                <ul className="social-link">
                  <li>
                    <a href="#" className="fa fa-facebook" />
                  </li>
                  <li>
                    <a href="#" className="fa fa-google" />
                  </li>
                  <li>
                    <a href="#" className="fa fa-twitter" />
                  </li>
                  <li>
                    <a href="#" className="fa fa-youtube" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="profile-card">
              <div className="profile-img">
                <img
                  src="https://i.postimg.cc/XYkqj8Rp/profile3.jpg"
                  alt="Team Image"
                />
              </div>
              <div className="profile-content">
                <h2 className="title">
                  Jasephine
                  <span>Designer &amp; Developer</span>
                </h2>
                <ul className="social-link">
                  <li>
                    <a href="#" className="fa fa-facebook" />
                  </li>
                  <li>
                    <a href="#" className="fa fa-google" />
                  </li>
                  <li>
                    <a href="#" className="fa fa-twitter" />
                  </li>
                  <li>
                    <a href="#" className="fa fa-youtube" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="profile-card">
              <div className="profile-img">
                <img
                  src="https://i.postimg.cc/g0M0R0kp/profile1.jpg"
                  alt="Team Image"
                />
              </div>
              <div className="profile-content">
                <h2 className="title">
                  Marco
                  <span>Designer &amp; Developer</span>
                </h2>
                <ul className="social-link">
                  <li>
                    <a href="#" className="fa fa-facebook" />
                  </li>
                  <li>
                    <a href="#" className="fa fa-google" />
                  </li>
                  <li>
                    <a href="#" className="fa fa-twitter" />
                  </li>
                  <li>
                    <a href="#" className="fa fa-youtube" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="profile-card">
              <div className="profile-img">
                <img
                  src="https://i.postimg.cc/SsJxGpJM/profile4.jpg"
                  alt="Team Image"
                />
              </div>
              <div className="profile-content">
                <h2 className="title">
                  Amaira
                  <span>Designer &amp; Developer</span>
                </h2>
                <ul className="social-link">
                  <li>
                    <a href="#" className="fa fa-facebook" />
                  </li>
                  <li>
                    <a href="#" className="fa fa-google" />
                  </li>
                  <li>
                    <a href="#" className="fa fa-twitter" />
                  </li>
                  <li>
                    <a href="#" className="fa fa-youtube" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
