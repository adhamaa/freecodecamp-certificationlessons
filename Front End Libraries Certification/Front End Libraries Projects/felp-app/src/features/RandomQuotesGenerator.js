import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";

import styles from "./RandomQuotesGenerator.module.css";

export default function RandomQuotesGenerator() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  async function randomQuote() {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    setQuote(data.content);
    setAuthor(data.author);
  }

  useEffect(() => {
    randomQuote();
  }, []);

  return (
    <>
      <h1>Random Quotes Generator</h1>
      <span>🔸🔸🔸</span>
      <div className={styles.quote_box} id="quote-box">
        <h2 className={styles.quote_text}>
          <FontAwesomeIcon icon={faQuoteLeft} size="3x" />
          <span className={styles.text} id="text">
            {quote}
          </span>
        </h2>
        <h3 className={styles.quote_author}>
          <span className={styles.author} id="author">
            {author}
          </span>
        </h3>
        <button
          className={styles.newQuote_button}
          id="new-quote"
          onClick={() => randomQuote()}
        >
          <FontAwesomeIcon icon={faSyncAlt} size="lg" />
          <span>New Quote</span>
        </button>
        <a
          className={styles.tweet_quote}
          id="tweet-quote"
          target="_blank"
          href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${quote}" - ${author}`}
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faTwitterSquare} size="2x" />
        </a>
      </div>
    </>
  );
}
