import React from "react";
import "./Loader.styles.css";
import {getRandomQuote} from "../../../MetaData/Quotes.data";

type Props = {};

const Loader = (props: Props) => {

    const quote = getRandomQuote();

    return (
        <main className="loader-container">
            <h1 className="jt --debug">
                <span className="jt__row">
                    <span className="jt__text">{quote}</span>
                </span>
                <span className="jt__row jt__row--sibling" aria-hidden="true">
                    <span className="jt__text">{quote}</span>
                </span>
                <span className="jt__row jt__row--sibling" aria-hidden="true">
                    <span className="jt__text">{quote}</span>
                </span>
                <span className="jt__row jt__row--sibling" aria-hidden="true">
                    <span className="jt__text">{quote}</span>
                </span>
            </h1>
        </main>
    );
};

export default Loader;
