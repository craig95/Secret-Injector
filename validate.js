const fs = require('fs');

const niceParse = fileName => {
	const fileString = fs.readFileSync(fileName)
	try {
		return JSON.parse(fileString)
	} catch (err) {
		throw new Error(`${err.message} while attempting to read ${fileName} = ${fileString}`);
	}
}

const secrets = niceParse('.secrets.json');
const env = niceParse('.env.json');

const testFile = niceParse('testFile.json');

if (testFile["The secret cake is a"] !== secrets["cake"]) throw new Error("The secret cake does not match the secret!")
if (testFile["The environmentally friendly cake is a"] !== env["cake"]) throw new Error("The environmentally friendly cake does not match the enviroment!")
if (testFile["The enviroment cube is"] !== env["cube"]) throw new Error("The enviroment cube is not sentient!")

console.log("All checks passed!")