const fs = require('fs');

const secrets = JSON.parse(fs.readFileSync('.secrets.json'))
const env = JSON.parse(fs.readFileSync('.env.json'))

const testFile = JSON.parse(fs.readFileSync('.testFile.json'))

if (testFile["The secret cake is a"] !== secrets["cake"]) throw new Error("The secret cake does not match the secret!")
if (testFile["The environmentally friendly cake is a"] !== env["cake"]) throw new Error("The environmentally friendly cake does not match the enviroment!")
if (testFile["The enviroment cube is"] !== env["cube"]) throw new Error("The enviroment cube is not sentient!")

console.log("All checks passed!")