var format = function (content2, count) {
    return content2 + ' ' +
        count;
};
function wordFrequency(content) {
    let result = '';
    if (content !== '') {
        let words = content.split(' ');
        result = words.map((w) => format(w, 1)).join("\r\n")

    }
    return result
}

module.exports = wordFrequency;
