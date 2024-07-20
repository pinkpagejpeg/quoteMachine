import { IQuoteState, QuoteAction, QuoteActionTypes } from "../../types/quote"

const initialState: IQuoteState = {
    loading: false,
    error: null,
    quote: {
        content: null,
        author: null
    }
}

export const quoteReducer = (state = initialState, action: QuoteAction) => {
    switch (action.type) {
        case QuoteActionTypes.FETCH_QUOTE:
            return {
                loading: true,
                error: null,
                quote: {
                    content: null,
                    author: null
                }
            }
        case QuoteActionTypes.FETCH_QUOTE_SUCCESS:
            return {
                loading: false,
                error: null,
                quote: action.payload
            }
        case QuoteActionTypes.FETCH_QUOTE_ERROR:
            return {
                loading: false,
                error: action.payload,
                quote: {
                    content: null,
                    author: null
                }
            }
        default:
            return state
    }
}