const core = require('@actions/core');

try {
	const secrets = core.getInput('secrets');
	console.log(JSON.stringify(secrets));
	const env = core.getInput('env');
	console.log(JSON.stringify(env));
} catch (error) {
  	core.setFailed(error.message);
}