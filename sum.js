const sum = (...numbers) => {
    return numbers.reduce((pr, cr) => pr + cr , 0)
}
module.exports = sum