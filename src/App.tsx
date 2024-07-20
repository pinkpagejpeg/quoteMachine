import { FC, useEffect } from "react"
import Quote from "./components/quote/Quote"
import classes from "./styles/main.module.scss"
import { useTypedSelector } from "./hooks/useTypedSelector"
import { useActions } from "./hooks/useActions"


const App: FC = () => {
  const {loading, error} = useTypedSelector(state => state.quote)

  const {fetchQuote} = useActions()

  useEffect(() => {
      fetchQuote()
  }, [])

  if(loading) {
      return <h1>Loading...</h1>
  }

  if(error) {
    return <h1>{error}</h1>
}
  return ( 
    <div id="container" className={classes.container}>
      <h1 id="title" className={classes.title}>Random quote machine</h1>
        <Quote />
    </div>
   );
}
 
export default App;