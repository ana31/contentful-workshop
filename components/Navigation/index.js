import Link from 'next/link'
import styles from './Navigation.module.css'


export const Navigation = (props) => {
  const { fields: { navigationLinks } } = props

  return (
    <div className={styles.navBarContainer}>
      <div className={styles.navBar}>
        {
          navigationLinks.length && navigationLinks.map(({ fields }, idx) => {
            return (
              <Link key={idx} href={fields.linkUrl} passHref>
                <h3>{fields.linkText}
                </h3>
              </Link>
            )
          })
        }
      </div>
    </div>
  )
}