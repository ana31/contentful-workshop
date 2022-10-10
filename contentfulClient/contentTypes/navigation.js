module.exports = function(migration) {

  const navigationLink = migration.createContentType('navigationLink')
  navigationLink
    .name('Navigation Link')
    .description('Navigation links for website')
    .displayField('entryTitle')

  navigationLink
    .createField('entryTitle')
    .name('Entry Title')
    .type('Symbol')
    .required(true)
  
  navigationLink
    .createField('linkText')
    .name('Link text')
    .type('Symbol')
    .required(true)
  
  navigationLink
    .createField('linkUrl')
    .name('Link url')
    .type('Symbol')
    .validations([{ unique: true }])
    .required(true)

  const navigation = migration.createContentType('navigation')
  navigation
    .name('Navigation')
    .description('Navigation for website')
    .displayField('entryTitle')

  navigation
    .createField('entryTitle')
    .name('Entry Title')
    .type('Symbol')
    .required(true)

  navigation
    .createField("navigationLinks")
		.name("Navigation Links")
		.type("Array")
		.items({
			type: "Link",
			validations: [
				{
					linkContentType: ["navigationLink"]
				}
			],
			linkType: "Entry"
		})
		.required(true);
}