module.exports = function backpropagation(delta, alpha, callback) {
	if (!this.previous) {
		return delta;
	}
	const nextDelta = this.next.backpropagation(delta, alpha, callback);
	const weights = this.weights;
	const previous = this.previous.outputLayer;
	const next = this.next.inputLayer;
	const last = this.next.outputLayer;
	const previousLength = previous.length;
	const nextLength = next.length;
	const base = previousLength + last.length;
	const auxDeltaArray = Array(nextLength);
	const previousDelta = Array(previous.length);
	var auxDelta;
	alpha = alpha || 0.05;

	for (var j = 0; j < nextLength; j++) {
		auxDelta = nextDelta[j] * next[j] * (1 - next[j]);
		auxDeltaArray[j] = auxDelta;
		weights[base][j] -= alpha * auxDelta;
	}

	for (var i = 0; i < previousLength; i++) {
		previousDelta[i] = 0;
		for (var j = 0; j < nextLength; j++) {
			auxDelta = auxDeltaArray[j];
			previousDelta[i] += auxDelta * weights[i][j];
			weights[i][j] -= alpha * auxDelta * previous[i];
			if (callback) {
				callback.bind(this)(i, j, auxDelta);
			}
		}
	}
	for (var i = previousLength, k = 0; i < base; i++, k++) {
		for (var j = 0; j < nextLength; j++) {
			auxDelta = auxDeltaArray[j];
			weights[i][j] -= alpha * auxDelta * last[k];
			if (callback) {
				callback.bind(this)(i, j, auxDelta);
			}
		}
	}
	return previousDelta;
}