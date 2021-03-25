import React, { useState } from "react";
import { FaShare, FaFacebook, FaTwitter } from "react-icons/fa";
import "./App.scss";

function ArticleComponent({ title_pic, title, article, image, name, date }) {
  const [show, setShow] = useState(false);
  const toggleShow = () => {
    setShow(!show);
  };
  return (
    <div className="main-wrapper">
      <div className="card">
        <div className="title-picture">
          <img src={title_pic} />
        </div>
        <div className="title-part">
          <h3 className="title">{title}</h3>
          <br />
          <p className="article">{article}</p>
          <div className="user">
            <img className="user-image" src={image} />
            <div className="share-options">
              <div
                className="share-hiden"
                style={{ visibility: show ? "visible " : "hidden" }}
              >
                <small>SHARE</small>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  title="Facebook"
                >
                  <FaFacebook onClick={toggleShow} />
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  title="Twitter"
                >
                  <FaTwitter onClick={toggleShow} />
                </a>
              </div>
              <FaShare
                className="share-icon"
                title="Share..."
                onClick={toggleShow}
              />
            </div>
            <h4 className="user-name">{name}</h4>
            <small className="date">{date}</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleComponent;
