module.exports = function reverse (n) {
    let str;
    str = Math.abs(n);
    return Number(String(str).split("").reverse().join(""));
}
