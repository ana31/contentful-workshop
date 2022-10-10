module.exports = function (migration) {
	const marketingPage = migration
		.editContentType('marketingPage')

	marketingPage.createField("navigationContent")
		.name("Navigation content")
    .type('Link')
		.linkType('Entry')
		.validations([{ linkContentType: ['navigation']}])

	marketingPage.moveField('navigationContent').beforeField('marketingContent')
}