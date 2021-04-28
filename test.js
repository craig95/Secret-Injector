const fs = require('fs');

const niceRead = fileName => {
	const fileString = fs.readFileSync(fileName)
	try {
		return JSON.parse(fileString)
	} catch (err) {
		throw new Error(`${err.message} while attempting to read & parse ${fileName} = ${fileString}`);
	}
}

const niceParse = key => {
	keyString = process.env[key];
	try {
		return JSON.parse(keyString);
	} catch (err) {
		throw new Error(`${err.message} while parsing ${key} = ${keyString}`);
	}	
}

const secrets = niceParse('secrets');
const env = niceParse('env');

const testFile = niceRead('testFile.json');

if (testFile["The secret cake is a"] !== secrets["cake"]) 
	throw new Error(`The secret cake does not match the secret! Expected: "${testFile["The secret cake is a"]}", Got: "${secrets["cake"]}"`)

if (testFile["The environmentally friendly cake is a"] !== env["cake"]) 
	throw new Error(`The environmentally friendly cake does not match the enviroment! Expected: "${testFile["The environmentally friendly cake is a"]}", Got: "${env["cake"]}"`)

if (testFile["The enviroment cube is"] !== env["cube"]) 
	throw new Error(`The enviroment cube is not sentient! Expected: "${testFile["The enviroment cube is"]}", Got: "${env["cube"]}"`)

console.log("All checks passed!")