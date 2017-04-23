module.exports = function generateArray(length, generator) {
	const result = Array(length);

	for (var i = 0; i < length; i++) {
		result[i] = generator(i);
	}

	return result;
};
