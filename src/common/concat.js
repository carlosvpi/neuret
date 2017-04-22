var NeuralNetwork = require('../neural_network');
var prototype = require('../feed_forward/prototype');
var getOrElse = require('../util/get_or_else');

module.exports = function concat(nextNeuralNetwork, weights) {
	return NeuralNetwork({
		inputLayer: this.inputLayer,
		outputLayer: nextNeuralNetwork.outputLayer,
		inputFormat: this.inputFormat,
		outputFormat: nextNeuralNetwork.outputFormat,
		previous: this,
		next: nextNeuralNetwork,
		weights: map(Array(this.outputLayer.length + 1), function(d, i) {
			return map(Array(nextNeuralNetwork.inputLayer.length), function(e, j) {
				return getOrElse([i, j], weights, Math.random() * 2 - 1);
			});
		});
	}, prototype);
};
