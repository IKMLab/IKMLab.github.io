const pug = require('pug')
const file = 'src/'
const compiledFunction = pug.compileFile

console.log(compiledFunction({
    id: 'beef'
}))
