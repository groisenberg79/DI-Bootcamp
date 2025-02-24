let sentence = `This dinner is bad !`;

let wordNot = sentence.indexOf('not')

let wordBad = sentence.indexOf('bad')

if (wordNot < wordBad && wordNot != -1) {
    notBad = sentence.slice(wordNot, wordBad + 3)
    let newSentence = sentence.replace(notBad, 'good')
    console.log(newSentence)
} else {
    console.log(sentence)
}