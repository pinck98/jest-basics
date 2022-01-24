/*
    theSum function
    [1] return 0 if no number was inputed
    [2] return the num if one number given
    [3] return num 1 + num 2 if 2 numbers given
    [3] return num 1 + num 2 + num3 if 3 numbers given
    [4] return the sum if any numbers given
*/

const sum = (...numbers) => {
    return numbers.reduce((pr, cr) => pr + cr , 0)
}
module.exports = sum