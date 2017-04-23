var NeuralNetwork = require('./neural_network');
var prototype = require('./feed_forward/prototype');
var copyArray = require('../util/copy_array');
var generateArray = require('../util/generate_array');

function zero() {
	return 0;
}

module.exports = function Layer(size, inputFormat, outputFormat) {
	const layer = generateArray(size, zero);

	return NeuralNetwork({
		inputLayer: layer,
		outputLayer: layer,
		inputFormat: inputFormat,
		outputFormat: outputFormat,
		previous: null,
		next: null,
		weights: null
	}, prototype);
};
