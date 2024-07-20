import { FC } from "react"
import classes from "../../styles/main.module.scss"
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";

const Quote: FC = () => {
    const { quote } = useTypedSelector(state => state.quote)
    const { fetchQuote } = useActions()

    return (
        <div id="quote-box" className={classes.quote__box}>
            <p id="text" className={classes.quote__text}>{quote.content}</p>
            <p id="author" className={classes.quote__author}>{quote.author}</p>
            <div className={classes.quote__buttons}>
                <a id="tweet-quote" href={`https://twitter.com/intent/tweet?text=${quote.content} - ${quote.author}`} className={classes.quote__tweet}>Tweet</a>
                <button id="new-quote" className={classes.quote__new} onClick={() => fetchQuote()}>New quote</button>
            </div>
        </div>
    );
}

export default Quote;