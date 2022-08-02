const { readFile, writeFile } = require('fs')

readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) {
        console.log('====================')
        console.log(err)
        console.log('====================')
        return
    }
    console.log(result)
    writeFile('./content/result-async.txt', `Writing in result-async ${result}`, (err) => {
        if (err) {
            console.log(err);
        }
    })
})