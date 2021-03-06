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
	const previousOutputLength = previousOutput.length;
	const nextInput = this.next.inputLayer;
	const nextInputLength = nextInput.length;
	const nextOutput = this.next.outputLayer;
	const nextOutputLength = nextOutput.length;
	const weights = this.weights;
	const base = previousOutputLength + nextOutputLength;

	this.previous.run(this.inputFormat(input));
	for (var j = 0; j < nextInputLength; j++) {
		nextInput[j] = weights[base][j];
		for (var i = 0; i < previousOutputLength; i++) {
			nextInput[j] += previousOutput[i] * weights[i][j];
		}
		for (var k = 0; k < nextOutputLength; i++, k++) {
			nextInput[j] += nextOutput[k] * weights[i][j];
		}
		nextInput[j] = sigmoid(nextInput[j]);
	}
	
	return this.outputFormat(this.next.run());
};
