var NeuralNetwork = require('../neural_network');
var getOrElse = require('../../util/get_or_else');
var generateArray = require('../../util/generate_array');

module.exports = function concat(nextNeuralNetwork, weights) {
	return NeuralNetwork({
		inputLayer: this.inputLayer,
		outputLayer: nextNeuralNetwork.outputLayer,
		inputFormat: this.inputFormat,
		outputFormat: nextNeuralNetwork.outputFormat,
		previous: this,
		next: nextNeuralNetwork,
		weights: generateArray(this.outputLayer.length + nextNeuralNetwork.outputLayer.length + 1, function(d, i) {
			return generateArray(nextNeuralNetwork.inputLayer.length, function(e, j) {
				return getOrElse([i, j], weights, Math.random() * 2 - 1);
			});
		})
	}, require('../recurrent/prototype'));
};
