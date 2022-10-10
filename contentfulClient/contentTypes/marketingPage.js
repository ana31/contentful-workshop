module.exports = function (migration) {
	const marketingPage = migration.createContentType('marketingPage')
	marketingPage
		.name('Marketing Page')
		.description('Page used for marketing purpose')
		.displayField('entryTitle')

	marketingPage
		.createField('entryTitle')
		.name('Entry Title')
		.type('Symbol')
		.required(true)

	marketingPage
		.createField("pageUrl")
		.name("Page Url")
		.type("Symbol")
		.required(true)

	marketingPage
		.createField("heading")
		.name("Heading")
		.type("Symbol")
		.required(false)

	marketingPage
		.createField("headingColor")
    .name("Heading color")
    .type("Symbol")
    .required(false);

	marketingPage
		.createField("marketingContent")
		.name("Marketing Content")
		.type("Array")
		.items({
			type: "Link",
			validations: [
				{
					linkContentType: ["fiftyFiftyBanner"]
				}
			],
			linkType: "Entry"
		})
		.required(true);
	
}