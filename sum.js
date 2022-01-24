const sum = (num ,num2 ,num3) => {
    return num == null ? 0 : num2 == null ? num : num3 == null ? num + num2 : num + num2 + num3
}
module.exports = sum