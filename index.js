// Code your solutions in this file

function writeCards(arrayOfNames, event) {
    let cards = []
    for (let i = 0; i < arrayOfNames.length; i++) {
        let name = arrayOfNames[i]
        cards.push(`Thank you, ${name}, for the wonderful ${event} gift!`)
    }
    return cards
}

function countDown(num) {
    while (num >= 0) {
        console.log(num)
        num--
    } 
}
