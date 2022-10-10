import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { getMarketingPage } from '../contentfulClient/index'
import { Navigation } from '../components/Navigation'
import { contentMapper } from '../helpers/mappers' 
import styles from '../styles/Page.module.css'

const DynamicMarketingPage = () => {
	// const router = useRouter();
	// const [page, setPage] = useState({});
	// const [fields, setPageFields] = useState()

	// useEffect(() => {
	// 	(async () => {
	// 		if(router.isReady) {
	// 			const content = await getMarketingPage("/".concat(router.query.pageUrl || ''))
	// 			setPage(content)
	// 		}
	// 	})()
	// }, [router.isReady, router.query]);

	// useEffect(() => {
	// 	if(page.items?.length) {
	// 		setPageFields(page?.items[0].fields)
	// 	}
	// }, [page?.items])


	// if (!fields || !Object.keys(fields).length) {
	// 	return (<div>Loading...</div>);
	// }

	return (
		<>
			<Head>
				<title>Workshop</title>
				<link rel="icon" href="contentful.ico" />
			</Head>
			<main>
				{/*<Navigation {...fields?.navigationContent}/> */}
				{/* <h1 className={styles.header} style={{color: fields?.headingColor}}>{fields?.heading}</h1>
				{contentMapper(fields?.marketingContent)} */}
			</main>
		</>
	);
}

export default DynamicMarketingPage