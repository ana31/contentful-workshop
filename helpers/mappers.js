import { FiftyFiftyBanner } from "../components/FiftyFiftyBanner";
import { ArticleCardContainer } from '../components/ArticleCardContainer';
export const contentMapper = (marketingFields) => {
  return marketingFields.map((content, idx) => 
    {
      switch(content.sys.contentType.sys.id) {
        case 'fiftyFiftyBanner':
          return <FiftyFiftyBanner key={idx} {...content.fields} />
        // case 'articleCardContainer':
        //   return <ArticleCardContainer {...content.fields} />
      }
    })
}