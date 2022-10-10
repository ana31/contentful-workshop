import classnames from 'classnames';
import styles from './FiftyFiftyBanner.module.css'


export const FiftyFiftyBanner = (props) => {
	return (
		<div className={classnames(styles.banner, {
			[styles.bannerContentLeft]: props.bodyPosition === 'left',
			[styles.bannerContentRight]: props.bodyPosition === 'right',
		})}
		>
			<div className={styles.bannerContent} >
				<h2>{props.heading}</h2>
				{
					props.bodyText &&
					<p className={styles.bannerContentText}>{props.bodyText}</p>
				}
				{
					props.buttonText &&
					<a href={props.buttonLink} className={styles.button} target="_blank" rel="noreferrer">
						{props.buttonText}
					</a>
				}
			</div>
			<div className={styles.bannerImage}>
				{
					// eslint-disable-next-line @next/next/no-img-element
					<img src={"https:" + props.image?.fields.file.url} alt={props.image?.fields.title} />
				}
			</div>
		</div>
	)
}