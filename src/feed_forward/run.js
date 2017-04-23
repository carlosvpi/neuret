var sigmoid = require('../../util/sigmoid');
var copyArray = require('../../util/copy_array');

module.exports = function run(input) {
	if (!this.previous) {
		if (input === undefined) {
			input = this.inputLayer;
		}
		copyArray(this.inputFormat(input), this.outputLayer);
		return this.outputFormat(this.outputLayer);
	}
	
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
