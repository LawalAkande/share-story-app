import womanShoppingBag from "../images/woman-shoppingbag-card1.svg";
import shareYour__img from "../images/shareYour.svg";

import { useState } from "react";

const Body2 = ({ onAddStory }) => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [title, setTitle] = useState("");
  // const [imageUrl, setImageUrl] = useState('')
  const [imageUrl, setImageUrl] = useState("");
  const [story, setStory] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      alert("Kindly add your name to proceed");
    }

    onAddStory({ name, city, title, story });
    setName("");
    setCity("");
    setTitle("");
    setImageUrl("");
    setStory("");
  };
  return (
    <div>
      <div className="container">
        <div className="row womanShopping__bg">
          <div className="col" style={{ margin: "50px" }}>
            <div>
              <h4>Josiah's Experience</h4>
              <button className="badge vendor my-3">Colleague</button>
              <address style={{ textAlign: "justify" }}>
                I had the best experience shopping with vasiti. Usability of the
                website was great, very good customer service, an all round
                great experience. I would definately be coming back! I had the
                best experience shopping with vasiti. Usability of the website
                was great, very good customer service, an all round great
                experience. I would definately be coming back!
              </address>
              <br />
              <br />
            </div>
            <span title="share your story here">
              {/* modal btn */}
              <span
                style={{ cursor: "pointer" }}
                data-toggle="modal"
                data-target="#exampleModalScrollable"
              >
                <img src={shareYour__img} alt="group 47" />
              </span>

              {/* ShareStory Modal */}
              <div
                className="modal fade"
                id="exampleModalScrollable"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalScrollableTitle"
                aria-hidden="true"
              >
                <div
                  className="modal-dialog modal-dialog-scrollable"
                  role="document"
                >
                  <div className="modal-content">
                    <div className="class__header">
                      <button
                        type="button"
                        className="close text-danger"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>

                      <form className="form" onSubmit={onSubmit}>
                        <h3 className="my-2" style={{ textAlign: "center" }}>
                          Share your amazing story!
                        </h3>
                        <div className="forme-control">
                          <label
                            htmlFor="image"
                            className="htmlFor mb-3"
                            placeholder="choose Image"
                          >
                            Your Full Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            src=""
                            alt="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                        <div className="names">
                          <div className="forme-control">
                            <label htmlFor="firstName" className="htmlFor my-3">
                              City
                            </label>
                            <input
                              type="text"
                              className="form-contro"
                              size="25"
                              value={city}
                              onChange={(e) => setCity(e.target.value)}
                            />
                          </div>
                          <div className="forme-control">
                            <label htmlFor="lasttName" className="htmlFor my-3">
                              Title
                            </label>
                            <input
                              type="text"
                              className="form-contro"
                              size="25"
                              value={title}
                              onChange={(e) => setTitle(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="forme-control">
                          <label htmlFor="lasttName" className="htmlFor my-3">
                            Image
                          </label>
                          <br />
                          <input
                            type="file"
                            className="upload-btn"
                            value={imageUrl}
                            onChange={(e) => setImageUrl(e.target.value)}
                            alt=""
                          />
                        </div>
                        <div className="forme-control my-3">
                          <label htmlFor="shareYourStory">
                            share Your Story
                          </label>
                          <textarea
                            name="story"
                            id="story"
                            cols="30"
                            rows="7"
                            className="form-control"
                            value={story}
                            onChange={(e) => setStory(e.target.value)}
                          ></textarea>
                        </div>
                        <input
                          type="submit"
                          value="Share your story!"
                          className="submitBtn"
                        />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </span>
          </div>
          <div className="col">
            <div className="body__bgimg">
              <img
                src={womanShoppingBag}
                className="body__img"
                alt="womanshopping"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body2;
