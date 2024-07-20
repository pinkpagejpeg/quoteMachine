export interface IQuote {
    content: string | null,
    author: string | null,
}

export interface IQuoteState {
    loading: boolean,
    error: string | null,
    quote: IQuote
}

export enum QuoteActionTypes {
    FETCH_QUOTE = "FETCH_QUOTE",
    FETCH_QUOTE_SUCCESS = "FETCH_QUOTE_SUCCESS",
    FETCH_QUOTE_ERROR = "FETCH_QUOTE_ERROR",
}

interface IFetchQuoteAction {
    type: QuoteActionTypes.FETCH_QUOTE
}

interface IFetchQuoteSuccessAction {
    type: QuoteActionTypes.FETCH_QUOTE_SUCCESS,
    payload: any
}

interface IFetchQuoteErrorAction {
    type: QuoteActionTypes.FETCH_QUOTE_ERROR
    payload: string
}

export type QuoteAction = IFetchQuoteAction | IFetchQuoteSuccessAction | IFetchQuoteErrorAction
