const core = require('@actions/core');
const fs = require('fs');

const niceRead = fileString => {
	const fileString = fs.readFileSync(fileName)
	try {
		return JSON.parse(fileString)
	} catch (err) {
		throw new Error(`${err.message} while attempting to read & parse ${fileName} = ${fileString}`);
	}
}

const niceParse = key => {
	keyString = core.getInput(key);
	try {
		return JSON.parse(keyString);
	} catch (err) {
		throw new Error(`${err.message} while parsing ${key} = ${keyString}`);
	}	
}

const secrets = niceParse('secrets');
const env = niceParse('env');

const testFile = niceRead('testFile.json');

if (testFile["The secret cake is a"] !== secrets["cake"]) throw new Error("The secret cake does not match the secret!")
if (testFile["The environmentally friendly cake is a"] !== env["cake"]) throw new Error("The environmentally friendly cake does not match the enviroment!")
if (testFile["The enviroment cube is"] !== env["cube"]) throw new Error("The enviroment cube is not sentient!")

console.log("All checks passed!")