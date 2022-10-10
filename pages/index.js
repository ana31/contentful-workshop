import Head from 'next/head'
import DynamicMarketingPage from './[pageUrl]'

const Home = () => {
  return (
    <>
      <Head>
        <title>Workshop</title>
        <link rel="icon" href="contentful.ico" />
      </Head>

      <main>
        <DynamicMarketingPage />
      </main>
    </>
  )
}

export default Home
