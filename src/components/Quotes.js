import React from "react";

function Quotes() {
  return (
    <div id="quote-box">
      <div id="text">
        <p>lorem30</p>
      </div>
      <div id="author">
        <p>John Doe</p>
      </div>
      <div id="buttons">
        <div className="social-media">
          <a href="#" id="tweet-quote">
            <span>
              <img src="" alt="" />{" "}
            </span>
          </a>
          <a href="#" id="tumblr-quote">
            <span>
              <img src="" alt="" />{" "}
            </span>
          </a>
        </div>
        <button id="new-quote">New Quote</button>
      </div>
    </div>
  );
}

export default Quotes;
