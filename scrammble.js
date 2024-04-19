// const scrammble = "./entered_Passwords.txt"
// let shuffled = lines.sort(function(){return 0.5-Math.random()}).join('');
// const data2 = fs.writeFileSync(outputFile,scrammble, shuffled, "Hello*123", "utf-8")

// console.log(data2)

function scrammble(word) {
    const beginning = word.substring(0,2)
    const middle = word.substring(2, word.length-2)
    const end = word.substring(word.length-2, word.length)
    return [beginning, middle, end]
}

console.log(scrammble("word")) //this will 