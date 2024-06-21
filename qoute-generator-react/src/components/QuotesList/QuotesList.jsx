import { useSelector } from 'react-redux'
import styles from './QuotesList.module.css'
import QuoteCard from '../QuoteCard/QuoteCard'


function QuotesList() {

    const quotesData = useSelector(state => state.quotes.quotes)
    // console.log(quotesData)
    const renderedQuoteCards = quotesData.map(quote => {
        // console.log(quote.content);
        return(
        <QuoteCard  />
        )
    })

    console.log(renderedQuoteCards)

  return (
    <div className={styles.quote_list_wrapper}>
        {renderedQuoteCards}
    </div>
  )
}

export default QuotesList
