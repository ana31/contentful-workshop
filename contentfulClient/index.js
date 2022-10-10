import { createClient } from 'contentful'

export const getMarketingPage = async (pageUrl) => {
  const client = createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.PROD_CONTENTFUL_DELIVERY_KEY,
  });

  try {

    const entries = await client.getEntries({
      content_type: 'marketingPage',
      'fields.pageUrl': pageUrl,
      include: 10,
    })
    return entries
  } catch (error) {
    console.error(error)
  }
}