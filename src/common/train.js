var squareError = require('../../util/square_error');

module.exports = function train(samples, threshold, alpha, callback) {
	var output;
	var errorPair;
	var lastDelta;
	var startTime = Date.now();
	var totalError;
	var iterations = 0;

	threshold = threshold || 0.05;
	alpha = alpha || 0.05;

	do {
		totalError = 0;

		for (var i = 0, li = samples.length; i < li; i++) {
			output = this(samples[i].input);
			errorPair = squareError(output, samples[i].target);
			totalError += errorPair.totalError;
			this.backpropagation(errorPair.errorArray, alpha, callback);
		}

		if (++iterations % 100000 === 0) {
			console.log((Date.now() - startTime) / 1000, totalError - threshold);
		}
	} while(totalError > threshold);
	return totalError;
};
