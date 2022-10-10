import styles from './ArticleCard.module.css'


export const ArticleCard = ({fields}) => {
	return (
		<div className={styles.articleCard}
		>
			<div className={styles.articleCardImage}>
				{
					// eslint-disable-next-line @next/next/no-img-element
					<img src={"https:" + fields.image?.fields.file.url} alt={fields.image?.fields.title} />
				}
			</div>
			<div className={styles.articleCardContent} >
				<h2>{fields.heading}</h2>
				<p className={styles.articleCardContentText}>{fields.bodyText}</p>
				{
					fields.buttonText &&
					<a href={fields.buttonLink} className={styles.button} target="_blank" rel="noreferrer">
						{fields.buttonText}
					</a>
				}
			</div>
		</div>
	)
}