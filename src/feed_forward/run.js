var sigmoid = require('../../utils/sigmoid');

module.exports = function run(input) {
	const previousOutput = this.previous.outputLayer;
	const nextInput = this.next.inputLayer;
	const weights = this.weights;
	const base = previousOutput.length;

	this.previous.run(this.inputFormat(input));
	
	for (var j = 0, nextInputLength = nextInput.length; j < nextInputLength; j++) {
		nextInput[j] = weights[base][j];
		for (var i = 0; i < base; i++) {
			nextInput[j] += previousOutput[i] * weights[i][j];
		}
		nextInput[j] = sigmoid(nextInput[j]);
	}

	return this.outputFormat(this.next.run());
};
