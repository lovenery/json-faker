const faker = require('faker')

function makeExamples () {
    let examples = []
    for (var i = 0; i < 99; i++) {
        let color = faker.commerce.color()
        let price = faker.commerce.price()
        let product = faker.commerce.product()
        examples.push({
            id: i,
            color,
            price,
            product
        })
    }
    return examples
}
function makeProfile () {
    var profile = { name: "linda" }
    return profile
}

function combine () {
    return {
        profile: makeProfile(),
        example: makeExamples()
    }
}

module.exports = combine