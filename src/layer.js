var NeuralNetwork = require('./neural_network');
var prototype = require('./feed_forward/prototype');
var copyArray = require('../util/copy_array');

function run(input) {
	if (input) {
		copyArray(input, this.outputLayer);
	}
	return this.outputLayer;
}

module.exports = function Layer(size, inputFormat, outputFormat) {
	const layer = Array(size);

	return NeuralNetwork({
		inputLayer: layer,
		outputLayer: layer,
		inputFormat: inputFormat,
		outputFormat: outputFormat,
		previous: null,
		next: null,
		weights: null
	}, prototype);

	NeuralNetwork.__proto__.run = run.bind(NeuralNetwork);

	return NeuralNetwork;
};
