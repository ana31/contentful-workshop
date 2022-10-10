module.exports = function (migration) {
	const marketingPage = migration
		.editContentType('marketingPage')

	marketingPage
		.editField("marketingContent")
		.type("Array")
		.items({
			type: "Link",
			validations: [
				{
					linkContentType: ["fiftyFiftyBanner", "articleCardContainer"]
				}
			],
			linkType: "Entry"
		})
}