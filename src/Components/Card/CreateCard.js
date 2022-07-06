import React from "react";
import Footer from "../Footer/Footer";
import "./CreateCard.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   solid,
//   regular,
//   brands,
// } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used

import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const CreateCard = () => {
  const element = <FontAwesomeIcon icon={faEnvelope} />;

  return (
    <div>
      <div>
        <div className="form_wrapper">
          <div className="form_container">
            <div className="title_container">
              <h2>Create Your Business Card</h2>
            </div>
            <div className="row clearfix">
              <div className>
                <form>
                  <div className="input_field">
                    {/* {" "}
                    <span>
                      <i aria-hidden="true"> {element} </i>
                    </span> */}
                    <input
                      type="text"
                      name="business_title"
                      placeholder="Business Title*"
                      required
                    />
                  </div>
                  <div className="input_field">
                    {/* {" "}
                    <span>
                      <i aria-hidden="true" className="fa fa-lock" />
                    </span> */}
                    <input
                      type="text"
                      name="tag_line"
                      placeholder="Tag Line*"
                      required
                    />
                  </div>
                  <div className="input_field">
                    {/* {" "}
                    <span>
                      <i aria-hidden="true" className="fa fa-lock" />
                    </span> */}
                    <input type="text" name="address" placeholder="Address" />
                  </div>
                  <div className="row clearfix">
                    <div className="col_half">
                      <div className="input_field">
                        {/* {" "}
                        <span>
                          <i aria-hidden="true" className="fa fa-user" />
                        </span> */}
                        <input type="text" name="tags" placeholder="Tags*" />
                      </div>
                    </div>
                    <div className="col_half">
                      <div className="input_field">
                        {/* {" "}
                        <span>
                          <i aria-hidden="true" className="fa fa-user" />
                        </span> */}
                        <input
                          type="text"
                          name="google_link"
                          placeholder="Google Link"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row clearfix">
                    <div className="col_half">
                      <div className="input_field">
                        {/* {" "}
                        <span>
                          <i aria-hidden="true" className="fa fa-user" />
                        </span> */}
                        <input
                          type="text"
                          name="contact_number"
                          placeholder="Contact Number*"
                        />
                      </div>
                    </div>
                    <div className="col_half">
                      <div className="input_field">
                        {/* {" "}
                        <span>
                          <i aria-hidden="true" className="fa fa-user" />
                        </span> */}
                        <input
                          type="text"
                          name="whatsapp_number"
                          placeholder="Whatsapp Number*"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row clearfix">
                    <div className="col_half">
                      <div className="input_field">
                        {/* {" "}
                        <span>
                          <i aria-hidden="true" className="fa fa-user" />
                        </span> */}
                        <input
                          type="text"
                          name="facebook_url"
                          placeholder="Facebook URL"
                        />
                      </div>
                    </div>
                    <div className="col_half">
                      <div className="input_field">
                        {/* {" "}
                        <span>
                          <i aria-hidden="true" className="fa fa-user" />
                        </span> */}
                        <input
                          type="text"
                          name="other_social_media_link"
                          placeholder="Other Social Media Linnk"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row clearfix">
                    <div className="col_half">
                      <div className="input_field">
                        {/* {" "}
                        <span>
                          <i aria-hidden="true" className="fa fa-user" />
                        </span> */}
                        <label style={{ fontSize: "16px", color: "#7b7b7b" }}>
                          {" "}
                          Upload Image
                        </label>
                      </div>
                    </div>
                    <div className="col_half">
                      <div className="input_field">
                        {/* {" "}
                        <span>
                          <i aria-hidden="true" className="fa fa-user" />
                        </span> */}
                        <input
                          type="file"
                          id="file-input"
                          name="ImageStyle"
                          placeholder="Upload Image"
                        />
                      </div>
                    </div>
                  </div>

                  {/* For Radio Option and Select Option  */}
                  {/* <div className="radio_option input_field">
                    <input type="radio" name="radiogroup1" id="rd1" />
                    <label htmlFor="rd1">Male</label>
                    <input type="radio" name="radiogroup1" id="rd2" />
                    <label htmlFor="rd2">Female</label>
                  </div> */}
                  {/* <div className="input_field select_option">
                    <select>
                      <option>Select a country</option>
                      <option>Option 1</option>
                      <option>Option 2</option>
                    </select>
                    <div className="select_arrow" />
                  </div> */}
                  <div className="input_field">
                    {/* {" "}
                    <span>
                      <i aria-hidden="true" className="fa fa-lock" />
                    </span> */}
                    <input
                      type="text"
                      name="description"
                      placeholder="Description"
                    />
                  </div>
                  <div className="input_field checkbox_option">
                    <input type="checkbox" id="cb1" />
                    <label htmlFor="cb1">
                      I agree with terms and conditions
                    </label>
                  </div>
                  {/* <div className="input_field checkbox_option">
                    <input type="checkbox" id="cb2" />
                    <label htmlFor="cb2">
                      I want to receive the newsletter
                    </label>
                  </div> */}
                  <input
                    className="button"
                    type="submit"
                    defaultValue="Register"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
