##  <p style="color: red">  Getting Started with Contentful webapp and CLI </p>

- Rename `.env.local.example` file to `.env.local`
- Open terminal and navigate to `contentfulClient/contentTypes` folder in this project

- Visit [https://app.contentful.com/](https://app.contentful.com/)
- Login into your free account
- Go to Main Space -> Settings -> API keys
- You need:
   -  a management key - to run migration scrips - to create content models -> then run in the terminal   - `export  MANAGEMENT_TOKEN=< your-cms-management-token-from-web-app >`
   - a delivery key - to use for retrieving content to show on your website - add it in your .env.local
- Export SPACE_ID in your terminal ( same as the MANAGEMENT_TOKEN) - `export  SPACE_ID=< your-space-id >` (found in the browser url after spaces/<space-id>)
- Run `npx contentful-cli login`and follow the instructions
- Copy the token you see on your screen and add it in your terminal (it will ask for it)
- Check the content models code in `contentfulClient/contentTypes/fiftyFiftyBanner.js` and `contentfulClient/contentTypes/marketingPage.js`
- Run migration scripts:
(Make sure you are in  `contentfulClient/contentTypes`)
  - `npx contentful-migration --space-id $SPACE_ID --accessToken $MANAGEMENT_TOKEN fiftyFiftyBanner.js`
  - `npx contentful-migration --space-id $SPACE_ID --accessToken $MANAGEMENT_TOKEN marketingPage.js`

Now that the content types have been created, go to Contentful web app and create entries for your content.

## <p style="color: red"> Let's start with the website </p>

### Install dependencies:
```bash
 npm i
 # or
 yarn
```
- Run the development server:
```bash
npm run dev
# or
yarn dev
```

- Open [http://localhost:3000](http://localhost:3000) on your browser to see the result.
- You can see the page is blank for now
### Use the contentful data`

- Let's check the ui-components available in `components` folder
- Uncomment the code in `pages/[pageUrl].js` file
- Restart your app ( close the npm/yarn dev process and re-run)

##  <p style="color: red">  Adding new content type on your marketing page </p>


To add a new content type you can run migration script to create the new content and then run migration edit content to add it as a link to your marketing page

### Adding navigation to your website
- Let's add a navigation content type:
  - content model for navigation can be found in `contentfulClient/contentTypes/navigation.js`
  - run migration script for this in terminal:
 `npx contentful-migration --space-id $SPACE_ID --accessToken $MANAGEMENT_TOKEN navigation.js`
  - then run the migration script to add navigation to marketing page: `npx contentful-migration --space-id $SPACE_ID --accessToken $MANAGEMENT_TOKEN marketingPageAddNavigation.js`

- Go to Contentful webapp and add the Navigation content to Marketing Page
- uncomment `pages/[pageUrl].js` Navigation code - `line 41`
- Check your browser
### Adding article card to your website

- Let's add a new marketing content - article card:
  - content model for article card can be found in `contentfulClient/contentTypes/articleCardAndContainer.js`
  - run migration script for this in terminal:
 `npx contentful-migration --space-id $SPACE_ID --accessToken $MANAGEMENT_TOKEN articleCardAndContainer.js`
  - then run the migration script to add navigation to marketing page: `npx contentful-migration --space-id $SPACE_ID --accessToken $MANAGEMENT_TOKEN marketingPageAddArticleCard.js`
- Go to Contentful webapp and add the Article Card Container with Article cards to one of Marketing Pages
- In `helpers/mappers.js` uncomment the case for article card
- Check your browser


##  <p style="color: red">  Util links </p>
- [Data types fields in Contentful](https://www.contentful.com/developers/docs/concepts/data-model/)
- [Migration script tool](https://github.com/contentful/contentful-migration)
- [Contentful with JavaScript](https://www.contentful.com/developers/docs/javascript/tutorials/)
- [More about Vodafone system design and contentful usage](https://portal.gitnation.org/contents/react-at-scale-with-vodafone)
