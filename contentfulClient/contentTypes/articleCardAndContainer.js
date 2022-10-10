module.exports = function (migration) {
  const articleCard = migration.createContentType('articleCard')
  articleCard
    .name('Article Card')
    .description('Article Card with image')
    .displayField('entryTitle')

  articleCard
    .createField('entryTitle')
    .name('Entry Title')
    .type('Symbol')
    .required(true)

  articleCard
    .createField('heading')
    .name('Heading')
    .type('Symbol')
    .required(true)
    .validations([
      {
        size: { min: 1, max: 125 },
        message: 'Heading text must be between 1 and 125 characters in length'
      }
    ])
  
  articleCard
    .createField('bodyText')
    .name('Body text')
    .type('Text')
    .required(true)
  
  articleCard
    .createField('buttonText')
    .name('Button text')
    .type('Symbol')

  articleCard
    .createField('buttonLink')
    .name('Button link')
    .type('Symbol')

  articleCard
    .createField('image')
    .name('Image')
    .type('Link')
    .linkType('Asset')


  const articleCardContainer = migration.createContentType('articleCardContainer')

  articleCardContainer
    .name('Article Card Container')
    .description('Article Card Container')
    .displayField('entryTitle')

  articleCardContainer
    .createField('entryTitle')
    .name('Entry Title')
    .type('Symbol')
    .required(true)

  articleCardContainer
    .createField('heading')
    .name('Heading')
    .type('Symbol')
    .required(true)
    .validations([
      {
        size: { min: 1, max: 125 },
        message: 'Heading text must be between 1 and 125 characters in length'
      }
    ])
  
  articleCardContainer
    .createField('paragraph')
    .name('Paragraph')
    .type('Text')
  
  articleCardContainer
		.createField("articleCards")
		.name("Article Cards")
		.type("Array")
		.items({
			type: "Link",
			validations: [
				{
					linkContentType: ["articleCard"]
				}
			],
			linkType: "Entry"
		})
		.required(true);
}