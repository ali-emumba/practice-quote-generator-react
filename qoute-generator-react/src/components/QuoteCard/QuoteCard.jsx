import styles from './QuoteCard.module.css'

function QuoteCard({author, content, tags}) {

  // console.log(tags)
  const renderedTags = tags.map(tag => {
    return(
      <span key={tag} className={styles.tag}>
        {tag}
      </span>
    )
  })

  return (
    <div className={styles.card}>
        <div className={styles.card_wrapper}>
        <p className={styles.author}>{author}</p>
        <p className={styles.quote}>" {content} "</p>
        <p className={styles.tags}>{renderedTags}</p>
        </div>
    </div>
  )
}

export default QuoteCard
