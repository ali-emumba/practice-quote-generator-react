import { Link } from 'react-router-dom'
import styles from './NoPageFound.module.css'

function NoPageFound() {
  return (
    <div className={styles.wrapper}>
      <h1>Are You Lost Dear?</h1>
      <Link to={'/'}>
        <button className={styles.go_back}>Go Back Home &nbsp;&nbsp; : &#41;</button>
      </Link>
    </div>
  )
}

export default NoPageFound
