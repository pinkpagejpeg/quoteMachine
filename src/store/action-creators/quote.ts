import { Dispatch } from "redux"
import { QuoteAction, QuoteActionTypes } from "../../types/quote"
import axios from "axios"

export const fetchQuote = (): any => {
    return async (dispatch: Dispatch<QuoteAction>) => {
        try {  
            dispatch({
                type: QuoteActionTypes.FETCH_QUOTE
            })

            const response = await axios.get('https://api.quotable.io/random')
            dispatch({
                type: QuoteActionTypes.FETCH_QUOTE_SUCCESS, 
                payload: response.data
            })

        } catch(e) {
            dispatch({
                type: QuoteActionTypes.FETCH_QUOTE_ERROR,
                payload: 'Error'
            })
        }
    }
}