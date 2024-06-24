import axios from 'axios'
import styles from './LandingPage.module.css'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const LandingPage = () => {

    const [mainQuote, setMainQuote] = useState('');
    const [author, setAuthor] = useState('');

    useEffect(() => {
        handleGetRandomQuote();
    }, [])


    const handleGetRandomQuote = async() => {
        console.log('butto click')
        axios.get("https://api.quotable.io/quotes/random")
        .then(response => {
            console.log(response.data[0])
            setMainQuote(response.data[0].content)
            setAuthor(response.data[0].author)
        })
        .catch(err => {
            setMainQuote('I am not bothered by the fact that I am unknown. I am bothered when I do not know others.');
            setAuthor('Confucius');
            console.log(err);
        })
    }


  return (
    <section className={styles.wrapper}>
        <span className= {styles.main_quote}>
            {mainQuote}
        </span>
        <span className={styles.author}>
            - {author}
        </span>

        <div className={styles.flex}>
            <button className={styles.primary_btn} onClick={handleGetRandomQuote}>Get A Random Quote</button>
            <Link to={'/search-for-quote'}>
                <button className={styles.secondary_btn}>Search For A Quote</button>
            </Link>
        </div>
        
    </section>
  )
}

export default LandingPage
