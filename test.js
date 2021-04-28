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

const lowerCaseKeys = obj => {
	for (const key in obj) {
		obj[key.toLowerCase()] = obj[key];
		delete obj[key];
	}
	return obj;
}

const testVar = (received, expected, errorMsg) => {
	if (received !== expected) throw new Error(`${errorMsg} Expected: "${expected}", Got: "${received}"`)
}

const secrets = lowerCaseKeys(niceParse('secrets'));
const env = lowerCaseKeys(niceParse('env'));

console.log(`Using secrets: ${JSON.stringify(secrets)}`)
console.log(`Using env: ${JSON.stringify(env)}`)

const testFile = niceRead('testFile.json');

testVar(testFile["The secret cake is a"], 					secrets["cake"], 	"The secret cake does not match the secret!")
testVar(testFile["The environmentally friendly cake is a"], env["cake"], 		"The environmentally friendly cake does not match the enviroment!")
testVar(testFile["The enviroment cube is"], 				env["cube"], 		"The enviroment cube is not sentient!")

console.log("All checks passed!")