const squareError = require('../../util/square_error');
const functionConstructor = Function.constructor;

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
			output = this.run(samples[i].input);
			errorPair = squareError(output, samples[i].target);
			totalError += errorPair.totalError;
			this.backpropagation(errorPair.errorArray, alpha, callback);
		}

		if (callback && callback.constructor === functionConstructor) {
			callback.call(this, totalError, startTime, ++iterations, threshold)
		}
	} while(totalError > threshold);
	return totalError;
};
