var format = function (content2, count) {
    return content2 + ' ' +
        count;
};
var statistics = function (words) {
    let wordList = words.map(w => ({word: w, count: 1}))
    let groupWordList = []
    wordList.forEach(w => {
        let wordObj = groupWordList.find(
            word => (word.word == w.word));
        if (wordObj) {
            wordObj.count++
        } else {
            groupWordList.push(w)
        }
    })
    return groupWordList;
};
var formatString = function (wordList) {
    return wordList.map((w) =>
        format(w.word, w.count)).join("\r\n");
};
function wordFrequency(content) {
    let result = '';
    if (content !== '') {
        let words = content.split(/\s+/);
        var wordList = statistics(words);
        wordList.sort((a, b) => b.count - a.count)
        result = formatString(wordList)
    }
    return result
}

module.exports = wordFrequency;
