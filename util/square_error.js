module.exports = function squareError(output, target) {
	const length = target.length;
	var error = 0;
	var totalError = 0;
	var errorArray = Array(length);
	var diff;

	for (var i = 0; i < length; i++) {
		diff = output[i] - target[i];
		error = diff * diff / 2;
		totalError += error;
		errorArray[i] = diff;
	}
	
	return { errorArray, totalError };
};
