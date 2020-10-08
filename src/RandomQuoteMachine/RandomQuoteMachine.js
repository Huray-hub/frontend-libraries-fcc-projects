import React, { Fragment, useEffect, useState } from "react";
import { useFreeCodeCampTests } from "../util";
import "./RandomQuoteMachine.scss";

const quotes = [
    {
        text:
            "Success is a lousy teacher. It seduces smart people into thinking they can't lose",
        author: "Bill Gates",
    },
    {
        text:
            "Try not to become a man of success, but rather try to become a man of value",
        author: "Albert Einstein",
    },
    {
        text:
            "The greatest glory in living lies not in never falling, but in rising every time we fall",
        author: "Nelson Mandela",
    },
    {
        text:
            "My favorite things in life don't cost any money. It's really clear that the most precious resource we all have is time",
        author: "Steve Jobs",
    },
];

const RandomQuoteMachine = () => {
    const [quote, setQuote] = useState({});

    useFreeCodeCampTests();

    useEffect(() => {
        changeQuote();
    }, []);

    const changeQuote = () => {
        var i = Math.floor(Math.random() * quotes.length);

        setQuote({ text: quotes[i].text, author: quotes[i].author });
    };

    return (
        <div className="random-quote-machine container">
            <h1>Random Quote Machine</h1>
            <div id="wrapper">
                <div id="quote-box">
                    <div id="text">{quote.text}</div>

                    <div id="quote-author">
                        <span id="author">-{quote.author}</span>
                    </div>

                    <div>
                        <a href="twitter.com/intent/tweet" id="tweet-quote"></a>
                        <button id="new-quote" onClick={changeQuote}>
                            New quote
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RandomQuoteMachine;
