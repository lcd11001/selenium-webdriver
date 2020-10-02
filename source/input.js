const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

const input = (question, callbackAnswer, callbackClose)  => {
    callbackClose && readline.on('close', callbackClose)
    
    readline.question(question, (answer) => {
        callbackAnswer && callbackAnswer(answer)
        readline.close()
    })
    
}

module.exports = input
