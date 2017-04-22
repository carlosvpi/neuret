var id = require('../util/id');

module.exports = function NeuralNetwork(options, prototype) {
	const neuralNetwork = {
		inputLayer: options.inputLayer,
		outputLayer: options.outputLayer,
		inputFormat: options.inputFormat || id,
		outputFormat: options.outputFormat || id,
		previous: options.previous,
		next: options.next,
		weights: options.weights
	}

	neuralNetwork.__proto__ = prototype;

	return neuralNetwork;
}