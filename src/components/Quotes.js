import React, { useState, useEffect } from "react";
import twitterIcon from "../twitter.svg";
import tumblrIcon from "../tumblr.svg";

function Quotes() {
  const [quote, setQuote] = useState("title");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = () => {
    let url =
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        let dataQuotes = data.quotes;
        let randomNum = Math.floor(Math.random() * dataQuotes.length);
        let randomQuote = dataQuotes[randomNum];
        console.log(randomQuote);
      });
  };

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
              <img src={twitterIcon} alt="" />{" "}
            </span>
          </a>
          <a href="#" id="tumblr-quote">
            <span>
              <img src={tumblrIcon} alt="" />{" "}
            </span>
          </a>
        </div>
        <button id="new-quote">New Quote</button>
      </div>
    </div>
  );
}

export default Quotes;
