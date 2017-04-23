module.exports = function(totalError, startTime, iterations, threshold) {
	if (iterations % 100000 === 0) {
		console.log('dTime: ' + ((Date.now() - startTime) / 1000) + '\tError: ' + (totalError - threshold));
	}
}