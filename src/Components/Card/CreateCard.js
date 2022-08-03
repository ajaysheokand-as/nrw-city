import React from "react";
import Footer from "../Footer/Footer";
import { useRef } from "react";
import "./CreateCard.css";

export const CreateCard = (props) => {
  const business_titleRef = useRef();
  const tag_lineRef = useRef();
  const addressRef = useRef();
  const tagesRef = useRef();
  const google_linkRef = useRef();
  const contact_numberRef = useRef();
  const whatsapp_noRef = useRef();
  const facebook_urlRef = useRef();
  const other_social_mediaRef = useRef();
  const imageRef = useRef();
  const descriptionRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://narwana-city.herokuapp.com/", {
      method: "POST",
      body: JSON.stringify({
        id: Math.random().toString(36).slice(2),
        business_title: business_titleRef.current.value,
        tag_line: tag_lineRef.current.value,
        address: addressRef.current.value,
        tages: tagesRef.current.value,
        google_link: google_linkRef.current.value,
        contact_number: contact_numberRef.current.value,
        whatsapp_no: whatsapp_noRef.current.value,
        facebook_url: facebook_urlRef.current.value,
        other_social_media: other_social_mediaRef.current.value,
        image: imageRef.current.value,
        description: descriptionRef.current.value,
      }),
      headers: {
        "Content-type": "application/json;",
      },
    })
      .then((response) => console.log(response.json()))
      .catch((err) => {
        console.log(err.message);
      });
    // console.log(business_titleRef.current.value);
  };
  return (
    <div>
      <div>
        <div className="form_wrapper">
          <div className="form_container">
            <div className="title_container">
              <h2>Create Your Business Card{props.data}</h2>
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
                      ref={business_titleRef}
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
                      ref={tag_lineRef}
                      placeholder="Tag Line*"
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
                      name="address"
                      ref={addressRef}
                      placeholder="Address"
                    />
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
                          name="tags"
                          ref={tagesRef}
                          placeholder="Tags*"
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
                          name="google_link"
                          placeholder="Google Link"
                          ref={google_linkRef}
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
                          ref={contact_numberRef}
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
                          ref={whatsapp_noRef}
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
                          ref={facebook_urlRef}
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
                          ref={other_social_mediaRef}
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
                          name="image"
                          ref={imageRef}
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
                      ref={descriptionRef}
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
                    onClick={handleSubmit}
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
