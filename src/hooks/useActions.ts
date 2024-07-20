import { bindActionCreators } from "redux"
import { useAppDispatch } from "./useAppDispatch"
import * as QuoteActionCreators from "../store/action-creators/quote"

export const useActions = () => {
    const dispatch = useAppDispatch()
    return bindActionCreators(QuoteActionCreators, dispatch)
}