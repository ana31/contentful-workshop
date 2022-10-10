import { ArticleCard } from '../ArticleCard'
import styles from './ArticleCardContainer.module.css'

export const ArticleCardContainer = ({ articleCards, heading, paragraph }) => {

  return (
    <div className={styles.articleCardContainer}>
      <h2>{heading}</h2>
      { paragraph ? <p>{paragraph}</p> : null }
      <div className={styles.articlesContainer}>
        {articleCards.map((article, idx) => <ArticleCard key={idx}  {...article} />)}
      </div>
    </div>
  )
}