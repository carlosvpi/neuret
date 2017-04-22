module.exports = function sigmoid(x) {
	return 1 / (1 + Math.pow(Math.E, -x));
};
