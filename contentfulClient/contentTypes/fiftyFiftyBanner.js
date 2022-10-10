module.exports = function (migration) {
  const fiftyFiftyBanner = migration.createContentType('fiftyFiftyBanner')
  fiftyFiftyBanner
    .name('Fifty Fifty Banner')
    .description('A Fifty fifty banner is a banner that is split in half with a body and an image. The body contains a heading along with optional text and buttons.')
    .displayField('entryTitle')

  fiftyFiftyBanner
    .createField('entryTitle')
    .name('Entry Title')
    .type('Symbol')
    .required(true)

  fiftyFiftyBanner
    .createField('heading')
    .name('Heading')
    .type('Symbol')
    .required(true)
    .localized(false)
    .validations([
      {
        size: { min: 1, max: 125 },
        message: 'Heading text must be between 1 and 125 characters in length'
      }
    ])
    .defaultValue({
      'en-US': 'My beautiful banner'
    })


  fiftyFiftyBanner
    .createField('buttonText')
    .name('Button text')
    .type('Symbol')

  fiftyFiftyBanner
    .createField('buttonLink')
    .name('Button link')
    .type('Symbol')

  fiftyFiftyBanner
    .createField('bodyText')
    .name('Body text')
    .type('Text')

  fiftyFiftyBanner
    .createField('bodyPosition')
    .name('Body Position')
    .type('Symbol')
    .required(true)
    .validations([
      {
        in: ['left', 'right'],
      }
    ])
    .defaultValue({
      'en-US': 'left'
    })

  fiftyFiftyBanner.changeFieldControl("bodyPosition", "builtin", "dropdown");

  fiftyFiftyBanner
    .createField('image')
    .name('Image')
    .type('Link')
    .linkType('Asset')
}