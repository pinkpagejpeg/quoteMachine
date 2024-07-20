import { combineReducers } from "redux"
import { quoteReducer } from "./quoteReducer"

export const rootReducer = combineReducers({
    quote: quoteReducer
})

export type RootState = ReturnType<typeof rootReducer>